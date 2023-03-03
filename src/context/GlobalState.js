import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
	taskList: [
		{
			id: 1,
			text: "Revise for your test",
			hour: "12",
			min: "00",
			day: "Fri",
			status: true,
		},
		{
			id: 2,
			text: "Get Groceries",
			hour: "17",
			min: "00",
			day: "Fri",
			status: false,
		},
	],
};

// Create context (Globalize the taskList)
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Actions
	function changeStatus(task) {
		dispatch({
			type: "CHANGE_STATUS",
			payload: task,
		});
	}
	function addTask(task) {
		dispatch({
			type: "ADD_TASK",
			payload: task,
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				taskList: state.taskList,
				changeStatus,
				addTask,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
