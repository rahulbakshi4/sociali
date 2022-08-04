import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteComment, editComment } from '../../features/posts/postSlice'
import { openModal, setCommentData, } from '../../features/utilities/utilitySlice'
import { CloseIcon, EditIcon, OptionsIcon, TrashIcon } from '../SVG/svg'

export const CommentContainer = (comment) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [dropdown, setDropdown] = useState("hidden")
    const { user, token } = useSelector((store) => store.auth)
    const { post } = useSelector((store) => store.posts)

    const handleDelete = () => {
        dispatch(deleteComment({ postID: post._id, commentID: comment._id, token }))
        toast.success(`Comment deleted!`, { duration: 1500 })
    }
    const viewProfile = () => {
        navigate(`/profile/${comment.username}`, { replace: true, state: { _id: comment.userID } })
    }
    return (
        <>
            <div className="relative flex items-start w-full h-max resize-none p-4 focus:outline-none 
                     border-b-gray-800">
                <img onClick={() => viewProfile()} src={comment.avatarUrl} className="rounded-full w-10 h-10 object-cover cursor-pointer" alt="user avatar" />
                <div className="flex-grow px-6">
                    <p onClick={() => viewProfile()} className="text-md cursor-pointer font-semibold">{comment.name} <span className="font-normal text-gray-600">@{comment.username}</span></p>
                    <p>{comment.text}</p>
                </div>
                {((post?.username === user?.username) || (comment.username === user?.username)) &&
                    <div className="p-1 rounded-full ml-auto hover:bg-light"
                        onClick={() => setDropdown("block")}><OptionsIcon size={18} />
                    </div>}
                <ul className={`z-10 right-4 -bottom-16 border-2 bg-white border-gray-800 absolute rounded-md w-32 pl-0 list-none ${dropdown}`}>
                    <li className="border-b-2 border-gray-800 p-1">
                        <div className="p-1 rounded-full hover:bg-light w-max ml-auto" onClick={() => setDropdown("hidden")} >
                            <CloseIcon size={18} /></div></li>
                    {(comment.username === user?.username) && <li onClick={() => {
                        dispatch(openModal())
                        dispatch(editComment({ postID: post._id, commentID: comment._id, commentData: comment, token }))
                        dispatch(setCommentData({ commentData: comment }))
                        setDropdown("hidden")
                    }} className="py-1 flex px-2 cursor-pointer items-center gap-4 border-b-2 border-gray-800 hover:bg-light hover:font-medium">
                        <EditIcon size={18} />
                        <span>Edit</span>
                    </li>}
                    <li onClick={() => handleDelete()} className="py-1 px-2 flex items-center gap-4 hover:bg-light hover:font-medium cursor-pointer">
                        <TrashIcon size={18} />
                        <span>Delete</span></li>
                </ul>
            </div>

        </>
    )
}
