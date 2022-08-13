import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getAllUsers } from "../features/users/usersSlice"
import { Loader, Navbar, PostContainer, UserSuggestion } from "../components"
import { getlatestPosts, getTrendingPosts } from "../utilities/post-filter"
import { getAllPosts } from "../features/posts/postSlice"
import { isFollowing } from "../utilities/isFollowing"
import { LatestIcon, TrendingIcon } from "../components/SVG/svg"

export const Explore = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((store) => store.auth)
    const { allUsers, usersLoading } = useSelector((store) => store.users)
    const { allPosts } = useSelector((store) => store.posts)

    const [activeTab, setActiveTab] = useState({
        latest: false,
        trending: false
    })
    const loggedInUser = allUsers.find((userData) => userData?.username === user?.username)
    const postsForExplore = allPosts?.filter((postData) => (postData.username !== user?.username) && !isFollowing(loggedInUser?.following, postData.username))
    const [data, setData] = useState([])
    const latestPosts = getlatestPosts(postsForExplore)
    const trendingPosts = getTrendingPosts(postsForExplore)
    const suggestedUsers = allUsers?.filter((currUser) => (currUser._id !== user?._id) && !isFollowing(currUser?.followers, user?.username))
    useEffect(() => {
        dispatch(getAllPosts())
    }, [activeTab.latest, activeTab.trending]);
    useEffect(() => {
        dispatch(getAllUsers());
    }, [])

    return (
        <>
            <Navbar />
            <div className="flex gap-6 items-start max-w-4xl mx-auto ">
                <div className="flex-grow lg:mt-20 md:mt-20 ">
                    {(activeTab.latest || activeTab.trending) ?
                        data.map((post) => <PostContainer key={post._id} {...post} />) :
                        postsForExplore.map((post) => (<PostContainer key={post.id} {...post} />))}
                </div>
                <div className="lg:block md:block hidden lg:mt-20 md:mt-20">
                    <div className="flex mb-4 justify-center items-center gap-6 py-2 bg-white border-2 border-gray-800 rounded-lg">
                        <div className={`profile-options ${activeTab.trending ? 'bg-light font-medium' : 'hover:bg-light hover:font-medium'}`}
                            onClick={() => {
                                setActiveTab({ trending: true, latest: false })
                                setData(trendingPosts)
                            }}>
                            <TrendingIcon size={18} />
                            <span>Trending</span>
                        </div>
                        <div className={`profile-options ${activeTab.latest ? 'bg-light font-medium' : 'hover:bg-light hover:font-medium'}`}
                            onClick={() => {
                                setActiveTab({ latest: true, trending: false })
                                setData(latestPosts)
                            }}>
                            <LatestIcon size={18} />
                            <span>Latest</span>
                        </div>
                    </div>
                    <div className="lg:block md:block hidden bg-white border-2 basis-auto  w-72 border-gray-800 rounded-lg">
                        <p className="p-2 border-b-2 border-b-gray-800">Suggestion for you</p>
                        {usersLoading ? <div className="py-1"><Loader /></div> :
                            <ul className="pt-2 list-none">

                                {suggestedUsers.length !== 0 ? suggestedUsers?.map((user) => (<UserSuggestion key={user._id} suggestedUser={user} />)) :
                                    <p className="p-2 text-gray-600 border-b-2 border-b-gray-800">No user suggestions</p>}

                            </ul>}
                    </div>
                </div>

            </div>
        </>


    )
}

