import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import { Navbar } from "../components"
import { getUser } from "../features/users/usersSlice"
export const UserProfile = () => {
    const { user } = useSelector((store) => store.auth)
    const { userProfile } = useSelector((store) => store.users)
    const location = useLocation()
    const dispatch = useDispatch()
    const urlID = useParams()
    const userID = location?.state._id
    // const { name, username, bio, avatarUrl, followers, following, portfolio } = userProfile

    useEffect(() => {

        dispatch(getUser(userID))

    }, [urlID])

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
                                {userID === user._id ? <button className="btn ">Edit Profile</button> : <button className="btn btn-dark ">Follow</button>}
                            </div>
                            <ul className="pt-2 flex list-none justify-between">
                                <li> <span className="font-medium">0</span> Post</li>
                                <li><span className="font-medium">{userProfile?.followers.length}</span> Followers</li>
                                <li><span className="font-medium">{userProfile?.following.length}</span> Following</li>
                            </ul>
                            <div>
                                <p className="font-semibold">{name}</p>
                                <p className="text-sm">{userProfile?.bio}</p>
                            </div>
                            <div>
                                <a href={userProfile?.portfolio} className="hover:underline">{userProfile?.portfolio}</a>
                            </div>
                        </div>
                    </div>
                    <ul className="flex p-2 justify-center gap-10 border-t-2 border-gray-800 w-full">
                        <li className="flex items-center gap-4 cursor-pointer text-sm uppercase text-center w-32 py-2 px-2 rounded-md hover:bg-light hover:font-medium">
                            <span className="material-icons-outlined">
                                view_list
                            </span>
                            <span>Posts</span>
                        </li>
                        <li className="flex items-center gap-4 cursor-pointer text-sm uppercase text-center w-40 py-2 px-2 rounded-md hover:bg-light hover:font-medium ">
                            <span className="material-icons-outlined font-extralight">
                                bookmark_border
                            </span>
                            <span>Bookmarks</span>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}
