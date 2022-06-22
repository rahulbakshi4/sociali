import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { follow, getAllUsers } from "../features/users/usersSlice"
import { Navbar, PostContainer, UserSuggestion } from "../components"
import { useNavigate } from "react-router-dom"
import { getAllPosts, newPost } from "../features/posts/postSlice"
import { isFollowing } from "../utilities/isFollowing"

export const Explore = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [post, setPost] = useState("")
    const [dropdown, setDropdown] = useState("hidden")
    const { user, token } = useSelector((store) => store.auth)
    const { allUsers } = useSelector((store) => store.users)
    const { allPosts } = useSelector((store) => store.posts)
    const postsForExplore = allPosts?.filter((postData) => postData.username !== user?.username)
    const suggestedUsers = allUsers?.filter((currUser) => (currUser._id !== user?._id) && !isFollowing(currUser?.followers, user?.username))
    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(getAllPosts())
    }, []);
    return (
        <>
            <Navbar />
            <div className="flex gap-6 items-start max-w-4xl mx-auto ">

                <div className="flex-grow lg:mt-20 md:mt-20 ">
                    {postsForExplore.map((post) => (<PostContainer key={post.id} {...post} />))}
                </div>
                <div className="lg:block md:block hidden bg-white border-2 basis-auto lg:mt-20 md:mt-20 w-72 border-gray-800 rounded-lg">
                    <p className="p-2 border-b-2 border-b-gray-800">Suggestion for you</p>
                    <ul className="pt-2 list-none">

                        {suggestedUsers.length !== 0 ? suggestedUsers?.map((user) => (<UserSuggestion key={user._id} suggestedUser={user} />)) :
                            <p className="p-2 text-gray-600 border-b-2 border-b-gray-800">No user suggestions</p>}

                    </ul>
                </div>
            </div>
        </>


    )
}

