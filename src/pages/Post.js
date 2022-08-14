import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { CommentContainer, Loader, Modal, Navbar, PostContainer, PostModal, } from "../components"
import { EditCommentModal } from "../components/Modal/EditCommentModal"
import { addComment, getAllPosts, getPostById } from "../features/posts/postSlice"
export const Post = () => {
    const { postID } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userComment, setUserComment] = useState("")
    const { token } = useSelector((store) => store.auth)
    const { post, allPosts, postLoading } = useSelector((store) => store.posts)
    const { modalState, openPostModal } = useSelector((store) => store.utilities)
    useEffect(() => {
        dispatch(getPostById({ postID }))
    }, [postID])
    useEffect(() => {
        dispatch(getPostById({ postID }))
    }, [allPosts])
    return (
        <>
            <Navbar />
            {postLoading ? <div className="lg:mt-20 md:mt-20"> <Loader /> </div> : <div className="flex gap-6 items-start max-w-3xl mx-auto ">
                {post && Object.keys(post).length > 0 ? <div className="flex-grow lg:mt-20 md:mt-20 ">
                    {post && <PostContainer {...post} />}

                    <div className="bg-white border-x-2 border-b-2 rounded-b-md pt-1 mb-4 border-gray-800">
                        {post?.comments?.map((comment) => <CommentContainer key={comment._id} {...comment} />)}

                        <div className="flex align-baseline">
                            <input name="" id="" className="w-full h-auto resize-none p-2 focus:outline-none border-t-2
                     border-gray-800" placeholder="Add comment here" value={userComment} onChange={(e) =>
                                    setUserComment(e.target.value)}></input>
                            <button onClick={() => {
                                dispatch(addComment(
                                    {
                                        postID: post._id,
                                        commentData: { text: userComment, postID: post._id },
                                        token
                                    }))
                                setUserComment("")
                                dispatch(getAllPosts())
                                toast.success("Comment added successfully")
                            }} className="bg-black text-white px-10 disabled:btn-disabled" disabled={userComment === ""}>Post</button>
                        </div>
                    </div>
                </div> : null}
            </div>}
            <Modal state={modalState} children={openPostModal ? <PostModal /> : < EditCommentModal />} />
        </>
    )
}
