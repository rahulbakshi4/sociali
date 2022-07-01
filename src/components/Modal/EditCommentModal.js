import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editComment, editPost } from "../../features/posts/postSlice"
import { clearPostData, closeModal } from "../../features/utilities/utilitySlice"
import { CloseIcon } from "../SVG/svg"

export const EditCommentModal = () => {
    const dispatch = useDispatch()
    const { token } = useSelector((store) => store.auth)
    const { post } = useSelector((store) => store.posts)
    const { commentData } = useSelector((store) => store.utilities)
    const [commentEdited, setCommentEdited] = useState({ ...commentData })

    useEffect(() => {
        setCommentEdited({ ...commentData })
    }, [commentData])
    return (
        <div className="bg-white border-2 mx-auto lg:mt-40 md:mt-20 max-w-2xl border-gray-800 rounded-lg">
            <div className='px-2 flex justify-between border-b-2 border-b-gray-800 items-center'>
                <p className="p-2 ">Edit Comment</p>
                <span onClick={() => dispatch(closeModal())} className='p-1 hover:bg-light cursor-pointer rounded-full'><CloseIcon size={18} /></span>
            </div>
            <div className="">
                <textarea name="" id="" className="w-full h-[12vh] resize-none p-4 focus:outline-none border-b-2
                     border-b-gray-800" value={commentEdited?.text}
                    onChange={(e) => setCommentEdited((prev) => ({ ...prev, text: e.target.value }))}></textarea>
                <div className="px-6 py-1 mb-2 flex justify-between ml-auto">
                    <button onClick={() => dispatch(closeModal())} className="btn px-10">Discard</button>
                    <button onClick={() => {
                        dispatch(editComment(
                            { postID: post?._id, commentID: commentEdited._id, commentData: commentEdited, token }))
                        dispatch(closeModal())
                        setCommentEdited(null)
                        toast.success("Comment edited successfully")
                    }}
                        className="btn btn-dark px-10 ">Save</button>
                </div>
            </div>

        </div>
    )
}
