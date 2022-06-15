import axios from "axios";

export const getAllPostService = async () => {
    return await axios.get('/api/posts');
};

export const newPostService = async (token, postData) => {
    return await axios.post(
        "/api/posts",
        { postData },
        { headers: { authorization: token } }
    );
};

export const deletePostService = async (token, postID) => {
    return await axios.delete(`/api/posts/${postID}`,
        { headers: { authorization: token } }
    )
}
