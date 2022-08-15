import { useEffect } from "react"
import { useState } from "react"
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { editPost } from "../../features/posts/postSlice"
import { clearPostData, closeModal, setPostModalState } from "../../features/utilities/utilitySlice"
import { CloseIcon, ImgUploadIcon } from "../SVG/svg"

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
    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const toBase64 = (file) =>
            new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
            });

        let base64File = await toBase64(file);
        setPostEdited((prev) => ({ ...prev, uploadImage: base64File }));
    };
    useEffect(() => {
        setPostEdited({ ...postData })
    }, [postData])
    return (
        <div className="bg-white border-2 mx-auto lg:mt-30 md:mt-20 max-w-2xl border-gray-800 rounded-lg">
            <div className='px-2 flex justify-between border-b-2 border-b-gray-800 items-center'>
                <p className="p-2 ">Edit Post</p>
                <span onClick={() => {
                    dispatch(closeModal())
                    dispatch(setPostModalState(false))
                }} className='p-1 hover:bg-light cursor-pointer rounded-full'><CloseIcon size={18} /></span>
            </div>
            <div className="">
                <textarea name="" id="" className="w-full h-max resize-none p-4 focus:outline-none 
                     border-b-gray-800" value={postEdited?.content}
                    onChange={(e) => setPostEdited((prev) => ({ ...prev, content: e.target.value }))}></textarea>
                {postEdited?.uploadImage ?
                    <div className="mb-2 relative p-2">
                        <img className="w-2/4 max-h-96 object-contain rounded-md" src={postEdited?.uploadImage} alt={`image posted by ${postData?.name}`} />
                        <div onClick={() => setPostEdited((prev) => ({ ...prev, uploadImage: "" }))} className="absolute top-0 right-1 cursor-pointer flex shadow-icon
                        justify-center p-2 mr-2 bg-light hover:bg-white rounded-full" >
                            <CloseIcon size={16} />
                        </div>
                    </div> : null}
                <div className="px-6 py-2 mb-2 flex justify-between ml-auto border-t-2 border-t-gray-800">

                    <div className="flex gap-2 items-end relative">
                        <div className="cursor-pointer"><ImgUploadIcon size={24} /></div>
                        <input
                            className='absolute w-6 cursor-pointer opacity-0'
                            accept='image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp'
                            type='file'
                            onChange={onFileChange}
                        />
                    </div>
                    <div className="flex gap-4">
                        <button onClick={() => {
                            dispatch(closeModal())
                            dispatch(setPostModalState(false))
                        }} className="btn px-10">Discard</button>
                        <button onClick={() => saveHandler()}
                            className="btn btn-dark px-10 disabled:btn-disabled" disabled={postEdited?.content?.trimEnd() === "" && postEdited?.uploadImage === ""}>Save</button>
                    </div>

                </div>
            </div>

        </div>
    )
}
