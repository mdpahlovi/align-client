import React from "react";
import { MdOutlineAddPhotoAlternate, MdAlternateEmail, MdOutlineDateRange } from "react-icons/md";
import { RiUserAddLine } from "react-icons/ri";
import { getImgUrl } from "../Apis/getImgUrl";

const InputFields = ({ handelAddTask, img, setImg, defaultValue }) => {
    const { user_img, user_name, user_email, submission_date } = defaultValue;

    const getUrl = (event) => {
        const img_file = event.target.files[0];
        getImgUrl(img_file)
            .then(({ data }) => setImg(data.display_url))
            .catch((error) => console.log(error));
    };

    return (
        <form onSubmit={(event) => handelAddTask(img, event)} className="md:w-1/2 xs:min-w-[348px] space-y-4">
            <div className="flex flex-col">
                <div className="flex items-center space-x-4">
                    <img
                        className="object-cover w-14 h-14 rounded-full"
                        src={img ? img : "https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143__340.png"}
                        alt=""
                    />
                    <input
                        type="file"
                        accept="image/*"
                        name="img"
                        onChange={getUrl}
                        className="block w-full text-sm text-accent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-base-content file:text-base-100"
                    />
                </div>
                <div className="divider divider-vertical">OR</div>
                <div className="relative flex items-center text-xl">
                    <MdOutlineAddPhotoAlternate className="absolute w-max h-max left-4 flex  items-center border-r border-accent pr-3 cursor-pointer" />
                    <input
                        type="search"
                        name="img_url"
                        defaultValue={user_img}
                        placeholder="Photo Url"
                        className="outline-none input-field pl-14 pr-4 focus:border-primary"
                    />
                </div>
            </div>
            <div className="relative flex items-center text-xl">
                <RiUserAddLine className="absolute w-max h-max left-4 flex items-center border-r border-accent pr-3 cursor-pointer" />
                <input
                    type="text"
                    name="user_name"
                    defaultValue={user_name}
                    placeholder="User Name"
                    className="outline-none input-field pl-14 pr-4 focus:border-primary"
                />
            </div>
            <div className="relative flex items-center text-xl">
                <MdAlternateEmail className="absolute w-max h-max left-4 flex  items-center border-r border-accent pr-3 cursor-pointer" />
                <input
                    type="text"
                    name="user_email"
                    defaultValue={user_email}
                    placeholder="User Email"
                    className="outline-none input-field pl-14 pr-4 focus:border-primary"
                />
            </div>
            <div className="flex flex-col xs:flex-row gap-4">
                <div className="relative flex items-center text-xl">
                    <MdOutlineDateRange className="absolute w-max h-max left-4 flex  items-center border-r border-accent pr-3 cursor-pointer" />
                    <input
                        type="text"
                        name="task_details_url"
                        placeholder="Task Details"
                        className="outline-none input-field pl-14 pr-4 focus:border-primary"
                    />
                </div>
                <div className="relative flex items-center text-xl">
                    <MdOutlineDateRange className="absolute w-max h-max left-4 flex  items-center border-r border-accent pr-3 cursor-pointer" />
                    <input
                        type="text"
                        name="submission_date"
                        placeholder="Submission Date"
                        defaultValue={submission_date}
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
