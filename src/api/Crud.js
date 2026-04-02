import axios from "axios";

const BaseURL = "http://localhost:3000";

export const GetUser = async (checkPoint) => {
    try {
        const result = await axios.get(`${BaseURL}/${checkPoint}`);
        return result;
    } catch (e) {
        return e;
    }
};

export const PostUser = async (checkPoint, newData) => {
    try {
        const result = await axios.post(`${BaseURL}/${checkPoint}`, newData);
        return result;
    } catch (e) {
        return e;
    }
};

export const Delete = async (checkPoint, id) => {
    try {
        const result = await axios.delete(`${BaseURL}/${checkPoint}/${id}`);
        return result;
    } catch (e) {
        return e;
    }
};

export const PUT = async (checkPoint, id, newUser) => {
    try {
        const result = await axios.put(`${BaseURL}/${checkPoint}/${id}`, newUser);
        return result;
    } catch (e) {
        return e;
    }
};
