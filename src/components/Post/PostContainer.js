import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, useLocation } from 'react-router-dom'
import { addBookmark, deletePost, dislikePost, getAllBookmarks, getAllPosts, likePost, removeBookmark } from "../../features/posts/postSlice"
import { openModal, setPostData, setPostModalState } from "../../features/utilities/utilitySlice"
import { BookmarkIcon, CloseIcon, CommentIcon, EditIcon, HeartIcon, OptionsIcon, TrashIcon, PostModal } from "../index"
export const PostContainer = (post) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const [dropdown, setDropdown] = useState("hidden")
    const { token, user } = useSelector((store) => store.auth)
    const { bookmarkedPosts } = useSelector((store) => store.posts)
    const liked = post?.likes?.likedBy?.some((likeby) => likeby.username === user.username)
    const bookmarked = bookmarkedPosts?.some((postData) => postData._id === post._id)
    const deleteHandler = () => {
        dispatch(deletePost({ token, postID: post._id }))
        dispatch(removeBookmark({ token, postID: post._id }))
        if (location.pathname === `/post/${post._id}`) {
            navigate('/feed')
        }
        toast.success(`Post deleted!`, { duration: 1500 })
    }
    const viewProfile = () => {
        navigate(`/profile/${post.username}`, { replace: true, state: { _id: post.userID } })
    }
    useEffect(() => {
        dispatch(getAllBookmarks({ token }))
        dispatch(getAllPosts())
    }, [dispatch, token])
    return (
        <div>
            <div className={`relative bg-white border-gray-800 border-t-2
         ${(location?.pathname === `/feed` || location?.pathname === `/explore`) && 'feed-post'}
          ${location?.pathname === `/profile/${post.username}` && 'profile-post'}
            ${location?.pathname === `/post/${post._id}` && 'individual-post'} `}>
                <div className="flex items-start w-full h-max resize-none p-4 focus:outline-none border-b-2
                     border-b-gray-800">
                    <img onClick={() => viewProfile()} src={post.avatarUrl} className="rounded-full w-10 h-10 object-cover cursor-pointer" alt="user avatar" />
                    <div className="flex-grow px-6">
                        <p onClick={() => viewProfile()} className="text-md cursor-pointer font-semibold">{post.name} <span className="font-normal text-gray-600">@{post.username}</span></p>
                        <p className="cursor-pointer" onClick={() => navigate(`/post/${post._id}`)}>{post.content}</p>
                    </div>
                </div>
                <ul className="px-4 py-1 flex gap-3 list-none">
                    {/* Likes */}
                    {!liked && <li onClick={() => {
                        dispatch(likePost({ token, postID: post._id }))
                        toast.success(`Post liked!`, { duration: 1500 })
                    }} className="py-1 px-2 flex items-center rounded-full gap-2 hover:bg-light hover:font-medium cursor-pointer">
                        <HeartIcon size={18} />{post?.likes?.likeCount}
                    </li>}

                    {liked && <li onClick={() => {
                        dispatch(dislikePost({ token, postID: post._id }))
                        toast.success(`Post disliked!`, { duration: 1500 })
                    }} className="py-1 px-2 flex items-center rounded-full gap-2 hover:bg-light hover:font-medium cursor-pointer">
                        <HeartIcon size={18} fill={"black"} />{post?.likes?.likeCount}
                    </li>}

                    <li onClick={() => navigate(`/post/${post._id}`)}
                        className="py-1 px-2 flex items-center rounded-full gap-2 hover:bg-light hover:font-medium cursor-pointer">
                        <CommentIcon size={18} />{post?.comments?.length}
                    </li>

                    {/* //bookmarks */}
                    {!bookmarked && <li onClick={() => {
                        dispatch(addBookmark({ token, postID: post._id }))
                        toast.success(`Added to bookmarks`, { duration: 1500 })
                    }} className="p-2  cursor-pointer rounded-full hover:bg-light"><BookmarkIcon size={18} /></li>}
                    {bookmarked && <li onClick={() => {
                        dispatch(removeBookmark({ token, postID: post._id }))
                        toast.success(`Removed from bookmarks`, { duration: 1500 })
                    }} className="p-2 cursor-pointer rounded-full hover:bg-light"><BookmarkIcon size={18} fill={"black"} /></li>}

                    {user.username === post.username &&
                        <li className="p-2 cursor-pointer rounded-full ml-auto hover:bg-light"
                            onClick={() => setDropdown("block")}><OptionsIcon size={18} />
                        </li>}
                </ul>
                <ul className={`z-10 right-4 -bottom-16 border-2 bg-white border-gray-800 absolute rounded-md w-32 pl-0 list-none ${dropdown}`}>
                    <li className="border-b-2 border-gray-800 p-1">
                        <div className="p-1 rounded-full hover:bg-light w-max ml-auto" onClick={() => setDropdown("hidden")} ><CloseIcon size={18} /></div></li>
                    <li onClick={() => {
                        dispatch(setPostData({ postData: post }))
                        dispatch(setPostModalState(true))
                        dispatch(openModal())
                        setDropdown('hidden')

                    }} className="py-1 cursor-pointer flex px-2 items-center gap-4 border-b-2 border-gray-800 hover:bg-light hover:font-medium">
                        <EditIcon size={18} />
                        <span>Edit</span>
                    </li>
                    <li className="py-1 px-2 flex items-center gap-4 hover:bg-light hover:font-medium cursor-pointer"
                        onClick={() => deleteHandler()}>
                        <TrashIcon size={18} />
                        <span>Delete</span></li>
                </ul>
            </div>
        </div >
    )
}
