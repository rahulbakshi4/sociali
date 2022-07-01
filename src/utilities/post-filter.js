export const getlatestPosts = (posts) => {
    return [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
}
export const getTrendingPosts = (posts) => {
    return [...posts].sort((a, b) => b.likes.likeCount - a.likes.likeCount)
}
