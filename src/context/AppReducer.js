const AppReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TASK":
			return {
				...state,
				taskList: [...state.taskList, action.payload],
			};
		case "CHANGE_STATUS":
			const newStatus = !action.payload.status;
			action.payload.status = newStatus;

			return {
				...state,
				taskList: [...state.taskList],
			};

		default:
			return state;
	}
};

export default AppReducer;
