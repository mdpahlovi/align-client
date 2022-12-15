import axios from "axios";

export const setTask = async (user) => {
    const res = await axios.put(`http://localhost:5000/task/${user?.user_email}`, user);
    return res.data;
};

export const getAllTask = async () => {
    const res = await axios.get(`http://localhost:5000/tasks`);
    return res.data;
};

export const deleteTask = async (email) => {
    const res = await axios.delete(`http://localhost:5000/task/${email}`);
    return res.data;
};

export const getTaskByEmail = async (email) => {
    const res = await axios.get(`http://localhost:5000/task/${email}`);
    return res.data;
};
