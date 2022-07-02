import { useEffect } from "react"
import { useState } from "react"
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { editPost } from "../../features/posts/postSlice"
import { clearPostData, closeModal, setPostModalState } from "../../features/utilities/utilitySlice"
import { CloseIcon } from "../SVG/svg"

export const PostModal = () => {
    const dispatch = useDispatch()
    const { token } = useSelector((store) => store.auth)
    const { postData } = useSelector((store) => store.utilities)
    const [postEdited, setPostEdited] = useState({ ...postData })
    const saveHandler = () => {
        dispatch(editPost(
            { postID: postEdited._id, postData: postEdited, token }))
        dispatch(closeModal())
        dispatch(clearPostData())
        setPostEdited(null)
        dispatch(setPostModalState(false))
        toast.success("Post edited successfully")
    }

    useEffect(() => {
        setPostEdited({ ...postData })
    }, [postData])
    return (
        <div className="bg-white border-2 mx-auto lg:mt-40 md:mt-20 max-w-3xl border-gray-800 rounded-lg">
            <div className='px-2 flex justify-between border-b-2 border-b-gray-800 items-center'>
                <p className="p-2 ">Edit Post</p>
                <span onClick={() => {
                    dispatch(closeModal())
                    dispatch(setPostModalState(false))
                }} className='p-1 hover:bg-light cursor-pointer rounded-full'><CloseIcon size={18} /></span>
            </div>
            <div className="">
                <textarea name="" id="" className="w-full h-[24vh] resize-none p-4 focus:outline-none border-b-2
                     border-b-gray-800" value={postEdited?.content}
                    onChange={(e) => setPostEdited((prev) => ({ ...prev, content: e.target.value }))}></textarea>
                <div className="px-6 py-1 mb-2 flex justify-between ml-auto">
                    <button onClick={() => {
                        dispatch(closeModal())
                        dispatch(setPostModalState(false))
                    }} className="btn px-10">Discard</button>
                    <button onClick={() => saveHandler()} className="btn btn-dark px-10 disabled:btn-disabled" disabled={postEdited?.content === ""}>Save</button>
                </div>
            </div>

        </div>
    )
}
