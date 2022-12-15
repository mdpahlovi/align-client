import axios from "axios";

export const setTask = async (user) => {
    const res = await axios.put(`https://align-server.vercel.app/task/${user?.user_email}`, user);
    return res.data;
};

export const getAllTask = async () => {
    const res = await axios.get(`https://align-server.vercel.app/tasks`);
    return res.data;
};

export const deleteTask = async (email) => {
    const res = await axios.delete(`https://align-server.vercel.app/task/${email}`);
    return res.data;
};

export const getTaskByEmail = async (email) => {
    const res = await axios.get(`https://align-server.vercel.app/task/${email}`);
    return res.data;
};
