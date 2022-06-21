import axios from "axios";

export const getAllUsersService = async () => {
    return await axios.get("/api/users");
};
export const getUserService = async (userID) => {
    return await axios.get(`/api/users/${userID}`);
};
export const getUserPostService = async (username) => {
    return await axios.get(`/api/posts/user/${username}`);
};
export const followUserService = async (userID, token) => {
    return await axios.post(
        `/api/users/follow/${userID}`,
        {},
        { headers: { authorization: token } });
};
export const unFollowUserService = async (userID, token) => {
    return await axios.post(
        `/api/users/unfollow/${userID}`,
        {},
        { headers: { authorization: token } });
};
