import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const TaskCard = () => {
    return (
        <div className="bg-base-content/10 rounded-xl p-4 flex gap-2.5">
            <img
                className="hidden xs:block object-cover w-12 h-12 rounded-full"
                src="https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143__340.png"
                alt=""
            />
            <div className="-my-1 w-full flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-bold">MD Pahlovi</h3>
                    <h3 className="-mt-1 max-w-[142px] overflow-hidden text-ellipsis text-sm opacity-50">mdpahlovi07@gmail.com</h3>
                    <div className="flex gap-4 text-sm opacity-50">
                        <h3>Not Done</h3>
                        <h3>April, 7 2022</h3>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="icon-button flex justify-center items-center">
                        <FaUserEdit />
                    </div>
                    <div className="icon-button flex justify-center items-center">
                        <RiDeleteBin5Fill />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
