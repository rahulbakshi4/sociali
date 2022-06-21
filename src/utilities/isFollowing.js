export const isFollowing = (arr, username) => {
    return arr?.some((item) => item.username === username)
}
