import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams, useNavigate } from "react-router-dom"
import { BookmarkIcon, ProfileDetailsModal, ListIcon, LogoutIcon, Modal, Navbar, PostContainer, EditProfileModal, Loader, PostModal } from "../components"
import { logout } from "../features/auth/authSlice"
import { getAllBookmarks, getAllPosts } from "../features/posts/postSlice"
import { getUser, follow, unfollow } from "../features/users/usersSlice"
import { openModal } from "../features/utilities/utilitySlice"
import { isFollowing } from "../utilities/isFollowing"
export const UserProfile = () => {
    const { user, token } = useSelector((store) => store.auth)
    const { userProfile } = useSelector((store) => store.users)
    const { modalState, openPostModal } = useSelector((store) => store.utilities)
    const { allPosts, bookmarkedPosts } = useSelector((store) => store.posts)
    const userPosts = allPosts?.filter((post) => post.username === userProfile?.username)
    const bookmarks = allPosts?.filter((el) =>
        userProfile?.bookmarks.some((bookmark) => bookmark._id === el._id))
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const username = useParams()
    const userID = location?.state._id
    const [active, setActive] = useState({
        posts: true,
        bookmarks: false
    })
    const [children, setChildren] = useState(null)
    useEffect(() => {
        dispatch(getAllPosts())
    }, [])
    useEffect(() => {
        setActive({ posts: true, bookmarks: false })
    }, [userID])
    useEffect(() => {
        dispatch(getUser(userID))
    }, [userID, bookmarkedPosts])

    useEffect(() => {
        dispatch(getAllBookmarks())
    }, [userProfile?.bookmarks])

    const followHandler = () => {
        dispatch(follow({ token, userID: userProfile?._id }))
        toast.success(`You are now following @${userProfile?.username} `)
    }
    const unfollowHandler = () => {
        dispatch(unfollow({ token, userID: userProfile?._id }))
        toast.success(`You unfollowed @${userProfile?.username}`)
    }
    const logoutHandler = () => {
        dispatch(logout())
        localStorage.removeItem('userDetails')
        toast.success(`Logged out successfully`, { position: 'bottom-center' })
        navigate('/')
    }
    console.log(userProfile)
    return (
        <>
            <Navbar />
            <div className="">
                <div className="bg-white max-w-3xl lg:mt-20 md:mt-20 border-2 border-gray-800 mx-auto  rounded-lg">
                    <div className="flex p-4 flex-col sm:flex-row">
                        <div className="flex lg:px-6 md:px-6 px-4 lg:basis-5/12 justify-center">
                            <img className="rounded-full w-44 h-44 object-cover " src={userProfile?.avatarUrl} alt="user avatar" />
                        </div>

                        <div className="flex-grow flex flex-col gap-3 lg:gap-6 md:gap-6 p-2 lg:p-4 md:p-4">
                            <div className="flex justify-between gap-4">
                                <h2 className="text-3xl font-light">{userProfile?.username}</h2>
                                {userID === user?._id ? (<div className="flex gap-6 items-center">
                                    <button onClick={() => {
                                        dispatch(openModal())
                                        setChildren(<EditProfileModal />)

                                    }} className="btn ">Edit Profile</button>
                                    <span onClick={() => logoutHandler()} className="cursor-pointer hover:bg-light p-2 rounded-full"><LogoutIcon /></span></div>)
                                    : !isFollowing(userProfile?.followers, user?.username) ?
                                        (<button onClick={() => followHandler()} className="btn btn-dark ">Follow</button>)
                                        : (<button onClick={() => unfollowHandler()} className="btn btn-dark ">Unfollow</button>)}
                            </div>
                            <ul className="pt-2 flex list-none justify-between">
                                <li> <span className="font-medium">{userPosts?.length}</span> Post</li>
                                <li onClick={() => { userProfile?.followers.length !== 0 && dispatch(openModal()); setChildren(<ProfileDetailsModal data={userProfile?.followers} />) }} className="cursor-pointer">
                                    <span className="font-medium">{userProfile?.followers.length}</span>{" "}
                                    {userProfile?.followers.length === 1 ? 'Follower' : 'Followers'}
                                </li>
                                <li onClick={() => { userProfile?.following.length !== 0 && dispatch(openModal()); setChildren(<ProfileDetailsModal data={userProfile?.following} />) }} className="cursor-pointer">
                                    <span className="font-medium">{userProfile?.following.length}</span> Following
                                </li>
                            </ul>
                            <div>
                                <p className="font-semibold">{userProfile?.name}</p>
                                <p className="text-sm">{userProfile?.bio}</p>
                            </div>
                            <div>
                                <a href={userProfile?.portfolio} target="_blank" rel="noopener noreferrer" className="hover:underline">{userProfile?.portfolio}</a>
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
                        {active.posts && (userPosts?.length !== 0 ? (userPosts?.reverse().map((post) => <PostContainer key={post.id} {...post} />)) : (<p className="p-4 text-center text-xl">No posts found</p>))}
                        {active.bookmarks && (bookmarks?.length !== 0 ? (bookmarks?.map((post) => <PostContainer key={post.id} {...post} />)) : (<p className="p-4 text-center text-xl">No bookmarks found</p>))}
                    </div>
                    <Modal state={modalState} children={openPostModal ? <PostModal /> : children} />
                </div>
            </div>
        </>
    )
}
