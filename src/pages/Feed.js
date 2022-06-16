import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getAllUsers } from "../features/users/usersSlice"
import { Navbar, PostContainer } from "../components"
import { useNavigate } from "react-router-dom"
import { getAllPosts, newPost } from "../features/posts/postSlice"


export const Feed = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [post, setPost] = useState("")
    const { user, token } = useSelector((store) => store.auth)
    const { allUsers } = useSelector((store) => store.users)
    const { allPosts } = useSelector((store) => store.posts)
    const postsForFeed = allPosts?.filter((postData) => postData.username === user?.username).reverse()
    const suggestedUsers = allUsers?.filter((currUser) => currUser._id !== user?._id)
    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(getAllPosts())
    }, []);
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
                        {postsForFeed.map((post) => (<PostContainer key={post._id} {...post} />))}
                    </div>

                </div>
                <div className="lg:block md:block hidden bg-white border-2 basis-auto lg:mt-20 md:mt-20 w-72 border-gray-800 rounded-lg">
                    <p className="p-2 border-b-2 border-b-gray-800">Suggestion for you</p>
                    <ul className="pt-2 list-none">

                        {suggestedUsers?.map(({ _id, username, name, avatarUrl }) => (<li key={_id}
                            className="border-b-2 last:border-none border-b-gray-800 flex items-center gap-5 py-2 px-4 w-72 cursor-pointer ">
                            <img onClick={() => navigate(`/profile/${username}`, { replace: true, state: { _id } })} src={avatarUrl} className="rounded-full w-10 h-10 object-cover" alt="user avatar" />
                            <div className="list-content">
                                <p className="text-sm font-semibold">{name}</p>
                                <p className="text-sm">@{username}</p>
                            </div>
                            <button className="btn btn-dark ml-auto">
                                Follow

                            </button>
                        </li>))}

                    </ul>
                </div>
            </div>
        </>


    )
}

