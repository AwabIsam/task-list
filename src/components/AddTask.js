import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTask = () => {
	const [text, setText] = useState(" ");
	const [time, setTime] = useState(" ");
	const [day, setDay] = useState(" ");

	const { addTask } = useContext(GlobalContext);
	const { taskList } = useContext(GlobalContext);
	const { checkInput } = useContext(GlobalContext);

	const onSubmit = (e) => {
		e.preventDefault();

		const newTask = {
			id: taskList.length + 1,
			text,
			time,
			day,
			status: true,
		};

		addTask(newTask);

		e.target.reset();
	};

	return (
		<>
			<h2 className="border-b-2 border-dark mb-5">Add Task</h2>
			<form
				className="grid grid-cols-2 font-Karla justify-center"
				onSubmit={onSubmit}
			>
				<div className="flex flex-col m-4">
					<label htmlFor="text">Task</label>
					<input
						type="text"
						id="text"
						onChange={(e) => setText(e.target.value)}
						className="rounded-md p-1 appearance-none focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div className="flex flex-col m-4">
					<label htmlFor="time">Due Time</label>
					<input
						type="text"
						id="time"
						onChange={(e) => setTime(e.target.value)}
						className="rounded-md p-1 focus:outline-none focus:shadow-outline"
						placeholder="23:59"
						pattern="([01][0-9]|2[0-3]):[0-5][0-9]"
						required
					/>
				</div>
				<div className="flex flex-col m-4 items-center justify-center col-span-2">
					<label htmlFor="day">Due Time - Day</label>
					<input
						type="text"
						id="day"
						onChange={(e) => setDay(e.target.value)}
						className="rounded-md p-1 appearance-none focus:outline-none focus:shadow-outline"
						placeholder="Mon/Tue/Wed etc."
						pattern="(Mon|Tue|Wed|Thu|Fri|Sat|Sun)"
						required
					/>
				</div>
				<button className="bg-lightMaroon w-[8rem] h-[3rem] text-white rounded-sm col-span-2 place-self-end mx-8 mt-5">
					Add Task
				</button>
			</form>
		</>
	);
};
