import "./App.css";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { CompletedTasks } from "./components/CompletedTasks";
import { AddTask } from "./components/AddTask";

import { GlobalProvider } from "./context/GlobalState";

function App() {
	return (
		<GlobalProvider>
			<div className="bg-offWhite mt-2 pt-12 pb-3 px-6 w-[20rem] text-left shadow-lightingLeft-S md:w-[30rem]">
				<Header />
				<Tasks />
				<CompletedTasks />
				<AddTask />
			</div>
		</GlobalProvider>
	);
}

export default App;
