import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import { BookmarkIcon, ListIcon, Navbar, PostContainer } from "../components"
import { getUser, getUserPost } from "../features/users/usersSlice"
export const UserProfile = () => {
    const { user } = useSelector((store) => store.auth)
    const { userProfile, userPosts } = useSelector((store) => store.users)
    const location = useLocation()
    const dispatch = useDispatch()
    const username = useParams()
    const userID = location?.state._id
    const [active, setActive] = useState({
        posts: true,
        bookmarks: false
    })
    useEffect(() => {

        dispatch(getUser(userID))
        dispatch(getUserPost(username))

    }, [username])
    return (
        <>
            <Navbar />
            <div className="">
                <div className="bg-white max-w-3xl lg:mt-20 md:mt-20 border-2 border-gray-800 mx-auto  rounded-lg">
                    <div className="flex p-4 items-center">
                        <div className="flex lg:px-6 md:px-6 px-4 lg:basis-5/12">
                            <img className="rounded-full w-44 h-44 object-cover" src={userProfile?.avatarUrl} alt="" />
                        </div>

                        <div className="flex-grow flex flex-col gap-6 p-4">
                            <div className="flex justify-between gap-4">
                                <h2 className="text-3xl font-light">{userProfile?.username}</h2>
                                {userID === user?._id ? <button className="btn ">Edit Profile</button> : <button className="btn btn-dark ">Follow</button>}
                            </div>
                            <ul className="pt-2 flex list-none justify-between">
                                <li> <span className="font-medium">{userPosts?.length}</span> Post</li>
                                <li><span className="font-medium">{userProfile?.followers.length}</span> Followers</li>
                                <li><span className="font-medium">{userProfile?.following.length}</span> Following</li>
                            </ul>
                            <div>
                                <p className="font-semibold">{userProfile?.name}</p>
                                <p className="text-sm">{userProfile?.bio}</p>
                            </div>
                            <div>
                                <a href={userProfile?.portfolio} className="hover:underline">{userProfile?.portfolio}</a>
                            </div>
                        </div>
                    </div>
                    {userID === user?._id && (<ul className="flex p-4 justify-around text-center gap-10 border-t-2 border-gray-800 w-full">
                        <li className={`profile-options w-32 ${active.posts ? 'bg-light font-medium' : 'hover:bg-light hover:font-medium'}`}
                            onClick={() => setActive({ posts: true, bookmarks: false })}>
                            <ListIcon />
                            <span>Posts</span>
                        </li>
                        <li className={`profile-options w-40 ${active.bookmarks ? 'bg-light font-medium' : 'hover:bg-light hover:font-medium'}`}
                            onClick={() => setActive({ posts: false, bookmarks: true })}>
                            <BookmarkIcon size={18} />
                            <span>Bookmarks</span>
                        </li>
                    </ul>)}
                    <div className="pt-1">
                        {userPosts.map((post) => <PostContainer key={post.id} {...post} />)}
                    </div>
                </div>
            </div>

        </>
    )
}
