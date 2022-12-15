import React, { useEffect, useState } from "react";
import { getAllTask, setTask } from "../Apis/tasks";
import InputFields from "../Components/InputFields";
import TaskCard from "../Components/TaskCard";

const TodoApp = () => {
    const [img, setImg] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        getAllTask()
            .then((data) => setTasks(data))
            .catch((error) => console.log(error));
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
                alert(message);
                setRefresh(!refresh);
                setImg("");
                event.target.reset();
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className="md:-mt-10 min-h-screen flex justify-center items-center">
            <div className="max-w-3xl mx-auto p-6 grid md:grid-cols-2 gap-6">
                <InputFields handelAddTask={handelAddTask} img={img} setImg={setImg} />
                <div className="h-[374px] overflow-auto space-y-4">
                    {tasks.map((task, index) => (
                        <TaskCard key={index} task={task} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodoApp;
