import React, { useContext } from "react";
import { Task } from "./Task";

import { GlobalContext } from "../context/GlobalState";

export const Tasks = () => {
	const { taskList } = useContext(GlobalContext);

	return (
		<>
			<h2 className="border-b-2 border-dark">Tasks</h2>
			<ul className=" list-none ">
				{taskList
					.filter((task) => task.status === true)
					.map((task) => (
						<Task key={task.id} task={task} />
					))}
			</ul>
		</>
	);
};
