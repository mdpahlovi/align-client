import React from "react";
import InputFields from "../Components/InputFields";
import TaskCard from "../Components/TaskCard";

const TodoApp = () => {
    return (
        <div className="md:-mt-10 min-h-screen flex justify-center items-center">
            <div className="max-w-3xl mx-auto p-6 grid md:grid-cols-2 gap-6">
                <InputFields />
                <div className="h-[374px] overflow-auto space-y-4">
                    {[...Array(10)].map((task, index) => (
                        <TaskCard key={index} task={task} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodoApp;
