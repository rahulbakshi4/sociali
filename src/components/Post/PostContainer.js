import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { deletePost } from "../../features/posts/postSlice"
import { BookmarkIcon, CloseIcon, CommentIcon, EditIcon, HeartIcon, OptionsIcon, TrashIcon } from "../index"
export const PostContainer = (post) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [dropdown, setDropdown] = useState("hidden")
    const { token, user } = useSelector((store) => store.auth)

    const deleteHandler = () => {
        dispatch(deletePost({ token, postID: post._id }))
    }
    return (
        <div>
            <div className={`relative bg-white ${location?.pathname === `/profile/${post.username}` ? 'profile-post' : 'feed-post'} `}>
                <div className="flex items-start w-full h-max resize-none p-4 focus:outline-none border-b-2
                     border-b-gray-800">
                    <img onClick={() => navigate(`/profile/${post.username}`, { replace: true, state: { _id: post?.userID } })} src={post.avatarUrl} className="rounded-full w-10 h-10 object-cover cursor-pointer" alt="user avatar" />
                    <div className="flex-grow px-6">
                        <p className="text-md font-semibold">{post.name} <span className="font-normal text-gray-600">@{post.username}</span></p>
                        <p>{post.content}</p>
                    </div>
                </div>
                <ul className="px-4 py-1 flex gap-3 list-none">
                    <li className="py-1 px-2 flex items-center  rounded-full  gap-2 hover:bg-light hover:font-medium"> <HeartIcon size={18} />{post.likes.likeCount}</li>
                    <li className="py-1 px-2 flex items-center rounded-full gap-2 hover:bg-light hover:font-medium"><CommentIcon size={18} />{post?.comments.length}</li>
                    <li className="p-2 rounded-full hover:bg-light"><BookmarkIcon size={18} /></li>
                    {user.username === post.username && <li className="p-2 rounded-full ml-auto hover:bg-light" onClick={() => setDropdown("block")}><OptionsIcon size={18} /></li>}
                </ul>
                <ul className={`z-10 right-4 -bottom-16 border-2 bg-white border-gray-800 absolute rounded-md w-32 pl-0 list-none ${dropdown}`}>
                    <li className="border-b-2 border-gray-800 p-1">
                        <div className="p-1 rounded-full hover:bg-light w-max ml-auto" onClick={() => setDropdown("hidden")} ><CloseIcon size={18} /></div></li>
                    <li className="py-1 flex px-2 items-center gap-4 border-b-2 border-gray-800 hover:bg-light hover:font-medium">
                        <EditIcon size={18} />
                        <span>Edit</span>
                    </li>
                    <li className="py-1 px-2 flex items-center gap-4 hover:bg-light hover:font-medium cursor-pointer"
                        onClick={() => deleteHandler()}>
                        <TrashIcon size={18} />
                        <span>Delete</span></li>
                </ul>
            </div>
        </div>
    )
}
