import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTask = () => {
	const [text, setText] = useState(" ");
	const [hour, setHour] = useState(" ");
	const [min, setMin] = useState(" ");
	const [day, setDay] = useState(" ");

	const { addTask } = useContext(GlobalContext);
	const { taskList } = useContext(GlobalContext);

	const onSubmit = (e) => {
		e.preventDefault();

		const newTask = {
			id: taskList.length + 1,
			text,
			hour,
			min,
			day,
			status: true,
		};

		setText(" ");
		setHour(" ");
		setMin(" ");
		setDay(" ");

		addTask(newTask);
	};

	return (
		<>
			<h2 className="border-b-2 border-dark mb-5">Add Task</h2>
			<form
				className="grid grid-cols-2 font-Karla justify-center"
				onSubmit={onSubmit}
			>
				<div>
					<label htmlFor="text">Task</label>
					<input
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
						className="rounded-md p-1 appearance-none focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div>
					<label htmlFor="hour">Due Time - Hour</label>
					<input
						type="number"
						value={hour}
						onChange={(e) => setHour(e.target.value)}
						className="rounded-md p-1 appearance-none focus:outline-none focus:shadow-outline"
						placeholder="Two Digit Format"
						max={24}
						min={1}
					/>
				</div>
				<div>
					<label htmlFor="min">Due Time - Minute</label>
					<input
						type="number"
						value={min}
						onChange={(e) => setMin(e.target.value)}
						className="rounded-md p-1 appearance-none focus:outline-none focus:shadow-outline"
						placeholder="Two Digit Format"
						max={59}
						min={0}
					/>
				</div>
				<div>
					<label htmlFor="day">Due Time - Day</label>
					<input
						type="text"
						value={day}
						onChange={(e) => setDay(e.target.value)}
						className="rounded-md p-1 appearance-none focus:outline-none focus:shadow-outline"
					/>
				</div>
				<button className="bg-lightMaroon w-[8rem] h-[3rem] text-white rounded-sm col-span-2 place-self-end mx-16 mt-5">
					Add Task
				</button>
			</form>
		</>
	);
};
