import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const TaskCard = ({ task, handelDeleteTask, handelEditTask }) => {
    const { user_img, user_name, user_email, status, submission_date } = task;

    return (
        <div className="bg-neutral rounded-xl border border-accent p-4 flex gap-2.5">
            <img className="hidden xs:block object-cover w-12 h-12 rounded-full" src={user_img} alt="" />
            <div className="-my-1 w-full flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-bold">{user_name}</h3>
                    <h3 className="-mt-1 max-w-[142px] overflow-hidden text-ellipsis text-sm text-accent">{user_email}</h3>
                    <div className="flex gap-4 text-sm text-accent">
                        <h3>{status ? "Done" : "Not Done"}</h3>
                        <h3>{submission_date}</h3>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div onClick={() => handelEditTask(user_email)} className="icon-button flex justify-center items-center">
                        <FaUserEdit />
                    </div>
                    <div onClick={() => handelDeleteTask(user_email)} className="icon-button flex justify-center items-center">
                        <RiDeleteBin5Fill />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
