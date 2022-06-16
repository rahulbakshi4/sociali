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
