import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Task = ({ task }) => {
	const { changeStatus } = useContext(GlobalContext);

	return (
		<li className="font-Karla">
			<div className="flex flex-row items-center">
				<div className="flex flex-row bg-white w-min my-2 mx-4 rounded-lg min-w-[12rem] py-2 pr-8 items-center ">
					<button onClick={() => changeStatus(task)}>
						<svg
							width="48"
							height="48"
							viewBox="0 0 48 48"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_5_2)">
								<path
									d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
									fill="#D9D9D9"
									className={
										task.status === true ? null : "invert"
									}
								/>
								<path
									d="M24 39C32.2843 39 39 32.2843 39 24C39 15.7157 32.2843 9 24 9C15.7157 9 9 15.7157 9 24C9 32.2843 15.7157 39 24 39Z"
									fill="#2E2E2E"
									className={
										task.status === true ? null : "invert"
									}
								/>
							</g>
							<defs>
								<clipPath id="clip0_5_2">
									<rect width="48" height="48" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</button>
					<span> {task.text}</span>
				</div>
				<div className="flex flex-col items-center justify-center bg-white w-min my-2 mx-4 rounded-lg min-w-[5rem]  min-h-[3.5rem] ml-auto px-2 text-center">
					<p>{task.time}</p>
					<p>{task.day}</p>
				</div>
			</div>
		</li>
	);
};
