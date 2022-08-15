import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getAllUsers } from "../features/users/usersSlice"
import { CloseIcon, ImgUploadIcon, Loader, Modal, Navbar, PostContainer, PostModal, UserSuggestion } from "../components"
import { getAllPosts, newPost } from "../features/posts/postSlice"
import { isFollowing } from "../utilities/isFollowing"
import toast from "react-hot-toast"


export const Feed = () => {
    const dispatch = useDispatch()
    const [post, setPost] = useState({
        content: "",
        image: "",
    })
    const { user, token } = useSelector((store) => store.auth)
    const { allUsers, usersLoading } = useSelector((store) => store.users)
    const loggedInUser = allUsers.find((userData) => userData?.username === user?.username)
    const { allPosts } = useSelector((store) => store.posts)
    const { modalState } = useSelector((store) => store.utilities)
    const postsForFeed = allPosts?.filter((postData) => (postData?.username === user?.username) || isFollowing(loggedInUser?.following, postData.username))
    const suggestedUsers = allUsers?.filter((currUser) => (currUser._id !== user?._id) && !isFollowing(currUser?.followers, user?.username))

    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(getAllPosts())

    }, []);
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
        setPost({ ...post, image: base64File });
    };
    return (
        <>
            <Navbar />
            <div className="relative flex gap-6 items-start max-w-4xl mx-auto ">
                <div className="flex-grow lg:mt-20 md:mt-20 ">
                    <div className="bg-white border-2 border-gray-800  rounded-lg">
                        <textarea name="" id="" className="w-full h-[18vh] resize-none p-4 focus:outline-none " placeholder="Whats happening?" value={post.content} onChange={(e) =>
                            setPost({ ...post, content: e.target.value })}></textarea>
                        {post.image !== "" ? <div className="p-4 relative">
                            <img className="w-2/3 max-h-96 object-contain rounded-md" src={post.image} alt={`image posted by ${post.name}`} />
                            <div onClick={() => setPost({ ...post, image: "" })} className="absolute top-4 right-1 cursor-pointer flex justify-center p-2 mr-2 bg-light hover:bg-white shadow-icon rounded-full" >
                                <CloseIcon size={16} />
                            </div>
                        </div> : null}
                        <div className="px-4 py-2 flex items-end border-t-2
                     border-t-gray-800">
                            <div className="flex gap-2 cursor-pointer items-end relative">
                                <div className="cursor-pointer"><ImgUploadIcon size={24} /></div>
                                <input
                                    className='absolute w-6 cursor-pointer opacity-0'
                                    accept='image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp'
                                    type='file'
                                    onChange={onFileChange}
                                />
                            </div>
                            <button onClick={() => {
                                dispatch(newPost({ token, post: { content: post.content, uploadImage: post.image } }));
                                setPost({ content: "", image: "" })
                                toast.success("Post created successfully", { duration: 1500 })
                            }} className="btn btn-dark px-10 flex ml-auto disabled:btn-disabled" disabled={post.content.trimEnd() === "" && post.image === ""}>Post</button>
                        </div>
                    </div>
                    <div className="flex-grow lg:mt-16 md:mt-16 last:mb-20 ">
                        {postsForFeed?.reverse().map((post) => (<PostContainer key={post.id} {...post} />))}
                    </div>

                </div>
                <div className="lg:block md:block hidden lg:mt-20 md:mt-20">
                    <div className="lg:block md:block hidden bg-white border-2 basis-auto w-72 border-gray-800 rounded-lg">
                        <p className="p-2 border-b-2 border-b-gray-800">Suggestion for you</p>
                        {usersLoading ? <div className="py-1"><Loader /></div> :
                            <ul className="pt-2 list-none">

                                {suggestedUsers.length !== 0 ? suggestedUsers?.map((user) => (<UserSuggestion key={user._id} suggestedUser={user} />)) :
                                    <p className="p-2 text-gray-600 border-b-2 border-b-gray-800">No user suggestions</p>}

                            </ul>}
                    </div>
                </div>
            </div>
            <Modal state={modalState} children={<PostModal />} />
        </>


    )
}

