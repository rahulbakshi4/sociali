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

export const getPostByIdService = async (postID) => {
    return await axios.get(`/api/posts/${postID}`);
}
export const editPostService = async (token, postID, postData) => {
    return await axios.post(
        `/api/posts/edit/${postID}`,
        { postData },
        { headers: { authorization: token } }
    );
};
export const deletePostService = async (token, postID) => {
    return await axios.delete(`/api/posts/${postID}`,
        { headers: { authorization: token } }
    )
}
export const getAllBookmarkService = async (token) => {
    return await axios.get(
        "/api/users/bookmark",

        { headers: { authorization: token } }
    );
};

export const addBookmarkService = async (token, postID) => {
    return await axios.post(
        `/api/users/bookmark/${postID}`,
        {},
        { headers: { authorization: token } }
    );
};

export const removeBookmarkService = async (token, postID) => {
    return await axios.post(
        `/api/users/remove-bookmark/${postID}`,
        {},
        { headers: { authorization: token } }
    );
};
export const likePostService = async (token, postID) => {
    return await axios.post(
        `/api/posts/like/${postID}`,
        {},
        { headers: { authorization: token } }
    );
};

export const dislikePostService = async (token, postID) => {
    return await axios.post(
        `/api/posts/dislike/${postID}`,
        {},
        { headers: { authorization: token } }
    );
};
export const getCommentService = async (postId) => {
    return await axios.get(`/api/comments/${postId}`);
};

export const addCommentService = async (postID, commentData, token) => {
    return await axios.post(
        `/api/comments/add/${postID}`,
        { commentData },
        { headers: { authorization: token } }
    );
};

export const deleteCommentService = async (postID, commentID, token) => {
    return await axios.post(
        `/api/comments/delete/${postID}/${commentID}`,
        {},
        { headers: { authorization: token } }
    );
}
export const editCommentService = async (postID, commentID, commentData, token) => {
    return await axios.post(
        `/api/comments/edit/${postID}/${commentID}`,
        { commentData },
        { headers: { authorization: token } }
    );
}
