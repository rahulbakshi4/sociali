import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getAllUsers } from "../features/users/usersSlice"
import { Modal, Navbar, PostContainer, PostModal, UserSuggestion } from "../components"
import { useNavigate } from "react-router-dom"
import { getAllPosts, newPost } from "../features/posts/postSlice"
import { isFollowing } from "../utilities/isFollowing"


export const Feed = () => {
    const dispatch = useDispatch()
    const [post, setPost] = useState("")
    const { user, token } = useSelector((store) => store.auth)
    const { allUsers } = useSelector((store) => store.users)
    const loggedInUser = allUsers.find((userData) => userData?.username === user?.username)
    const { allPosts } = useSelector((store) => store.posts)
    const { modalState } = useSelector((store) => store.utilities)
    const postsForFeed = allPosts?.filter((postData) => (postData?.username === user?.username) || isFollowing(loggedInUser?.following, postData.username))
    const suggestedUsers = allUsers?.filter((currUser) => (currUser._id !== user?._id) && !isFollowing(currUser?.followers, user?.username))
    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(getAllPosts())
    }, [dispatch]);
    return (
        <>
            <Navbar />
            <div className="flex gap-6 items-start max-w-4xl mx-auto ">
                <div className="flex-grow lg:mt-20 md:mt-20 ">
                    <div className="bg-white border-2 border-gray-800  rounded-lg">
                        <textarea name="" id="" className="w-full h-[24vh] resize-none p-4 focus:outline-none border-b-2
                     border-b-gray-800" placeholder="Whats happening?" value={post} onChange={(e) =>
                                setPost(e.target.value)
                            }></textarea>
                        <div className="px-6 py-1 mb-2">
                            <button onClick={() => {
                                dispatch(newPost({ token, post: { content: post } }));
                                setPost("")
                            }} className="btn btn-dark px-10 flex ml-auto disabled:btn-disabled" disabled={post === ""}>Post</button>
                        </div>
                    </div>
                    <div className="flex-grow lg:mt-16 md:mt-16 ">
                        {postsForFeed?.reverse().map((post) => (<PostContainer key={post._id} {...post} />))}
                    </div>

                </div>
                <div className="lg:block md:block hidden bg-white border-2 basis-auto lg:mt-20 md:mt-20 w-72 border-gray-800 rounded-lg">
                    <p className="p-2 border-b-2 border-b-gray-800">Suggestion for you</p>
                    <ul className="pt-2 list-none">

                        {suggestedUsers?.length !== 0 ? suggestedUsers?.map((user) => (<UserSuggestion key={user._id} suggestedUser={user} />)) :
                            <p className="p-2 text-gray-600 border-b-2 border-b-gray-800">No user suggestions</p>}

                    </ul>
                </div>
            </div>
            <Modal state={modalState} children={<PostModal />} />
        </>


    )
}

