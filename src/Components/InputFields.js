import React from "react";
import { MdOutlineAddPhotoAlternate, MdAlternateEmail, MdOutlineDateRange } from "react-icons/md";
import { RiUserAddLine } from "react-icons/ri";

const InputFields = () => {
    return (
        <form className="space-y-4">
            <div className="flex flex-col">
                <div className="flex items-center space-x-4">
                    <img
                        className="object-cover w-14 h-14 rounded-full"
                        src="https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143__340.png"
                        alt=""
                    />
                    <input
                        type="file"
                        className="block w-full text-sm text-base-content/50 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-base-content file:text-base-100"
                    />
                </div>
                <div className="divider divider-vertical">OR</div>
                <div className="relative flex items-center text-xl">
                    <MdOutlineAddPhotoAlternate className="absolute w-max h-max left-4 flex  items-center border-r border-base-content/50 pr-3 cursor-pointer" />
                    <input type="search" placeholder="Photo Url" className="outline-none input-field pl-14 pr-4 focus:border-primary" />
                </div>
            </div>
            <div className="relative flex items-center text-xl">
                <RiUserAddLine className="absolute w-max h-max left-4 flex  items-center border-r border-base-content/50 pr-3 cursor-pointer" />
                <input type="search" placeholder="User Name" className="outline-none input-field pl-14 pr-4 focus:border-primary" />
            </div>
            <div className="relative flex items-center text-xl">
                <MdAlternateEmail className="absolute w-max h-max left-4 flex  items-center border-r border-base-content/50 pr-3 cursor-pointer" />
                <input type="search" placeholder="User Email" className="outline-none input-field pl-14 pr-4 focus:border-primary" />
            </div>
            <div className="flex flex-col xs:flex-row gap-4">
                <div className="relative flex items-center text-xl">
                    <MdOutlineDateRange className="absolute w-max h-max left-4 flex  items-center border-r border-base-content/50 pr-3 cursor-pointer" />
                    <input type="text" name="task_details" placeholder="Task Details" className="outline-none input-field pl-14 pr-4 focus:border-primary" />
                </div>
                <div className="relative flex items-center text-xl">
                    <MdOutlineDateRange className="absolute w-max h-max left-4 flex  items-center border-r border-base-content/50 pr-3 cursor-pointer" />
                    <input
                        type="text"
                        name="submission_date"
                        placeholder="Submission Date"
                        className="outline-none input-field pl-14 pr-4 focus:border-primary"
                        onFocus={(e) => (e.target.type = "date")}
                        onChange={(e) => (e.target.value ? (e.target.type = "date") : (e.target.type = "text"))}
                    />
                </div>
            </div>
            <input type="submit" className="button active-button w-full py-2" value="Add Task" />
        </form>
    );
};

export default InputFields;
