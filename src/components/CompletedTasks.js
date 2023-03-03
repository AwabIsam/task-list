import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { Task } from "./Task";

export const CompletedTasks = () => {
	const { taskList } = useContext(GlobalContext);
	return (
		<>
			<h2 className="border-b-2 border-white">Completed</h2>
			{taskList
				.filter((task) => task.status === false)
				.map((task) => (
					<Task key={task.id} task={task} />
				))}
		</>
	);
};
