import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { deleteTask, getAllTask, getTaskByEmail, setTask } from "../Apis/tasks";
import InputFields from "../Components/InputFields";
import TaskCard from "../Components/TaskCard";

const TodoApp = () => {
    const [img, setImg] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);
    const [defaultValue, setDefaultValue] = useState({});

    useEffect(() => {
        getAllTask()
            .then((data) => {
                setTasks(data);
                setLoading(false);
            })
            .catch((error) => toast.error(error.message));
    }, [refresh]);

    const handelAddTask = (img, event) => {
        event.preventDefault();
        const user_img = img ? img : event.target.img_url.value;
        const user_name = event.target.user_name.value;
        const user_email = event.target.user_email.value;
        const task_details_url = event.target.task_details_url.value;
        const submission_date = event.target.submission_date.value;
        const user = { user_img, user_name, user_email, task_details_url, submission_date };
        setTask(user)
            .then((message) => {
                toast.success(message);
                setRefresh(!refresh);
                setImg("");
                setDefaultValue({});
                event.target.reset();
            })
            .catch((error) => toast.error(error.message));
    };

    const handelDeleteTask = (email) => {
        deleteTask(email)
            .then((message) => {
                toast.success(message);
                setRefresh(!refresh);
            })
            .catch((error) => toast.error(error.message));
    };

    const handelEditTask = (email) => {
        getTaskByEmail(email)
            .then((data) => setDefaultValue(data))
            .catch((error) => console.log(error));
    };

    return (
        <div className="md:-mt-10 min-h-screen flex justify-center items-center">
            <div className="max-w-md md:max-w-3xl mx-auto p-6 flex flex-col md:flex-row justify-center gap-6">
                <InputFields handelAddTask={handelAddTask} img={img} setImg={setImg} defaultValue={defaultValue} />
                <div className={`md:w-1/2 h-[374px] overflow-auto space-y-4 ${loading ? "animate-pulse" : ""}`}>
                    {loading
                        ? [...Array(3)].map((name, index) => <div key={index} className="w-[348px] h-[88px] bg-neutral border border-accent rounded-xl"></div>)
                        : tasks.map((task, index) => <TaskCard key={index} task={task} handelDeleteTask={handelDeleteTask} handelEditTask={handelEditTask} />)}
                </div>
            </div>
        </div>
    );
};

export default TodoApp;
