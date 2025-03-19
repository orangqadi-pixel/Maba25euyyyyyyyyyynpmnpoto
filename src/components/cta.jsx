"use client";
import React, { useEffect, useState } from "react";
import Letters from "./Letters";

const Cta = () => {
	const [pass, setPass] = useState("no");
	const [input, setInput] = useState("");

	const inputHandle = (event) => {
		setInput(event.target.value);
	};
	const submitHandle = () => {
		setPass(input);
	};
	console.log(pass);
	return (
		<div className="mt-24 flex flex-col items-center px-8 lg:px-24">
			<h1 className="text-4xl font-lobster px-12 mb-6">My Letter</h1>
			<div className="">
				<h1 className="text-4xl font-caveat">Masukan password</h1>
				<div className="">
					<div className="flex gap-6 my-4 items-end justify-start">
						<div className="flex flex-col items-start justify-center gap-2">
							<span className="font-oswald text-lg">
								Nama tetangga kamu dan teman aku{" "}
								{`(2 huruf, dan kapital semua)`}
							</span>
							<input
								type="text"
								name="input"
								id=""
								onChange={inputHandle}
								autoComplete="off"
								className="rounded-full px-4 py-1 w-full text-xl h-14 shadow-xl"
							/>
						</div>
						<button
							className="px-4 py-3 text-xl bg-orange-500 rounded-md font-oswald font-bold flex items-start justify-start"
							onClick={submitHandle}>
							<div>SUBMIT</div>
						</button>
					</div>
				</div>
			</div>
			<div className="mt-12">
				{pass != "TB" ? (
					<h1>Tolong masukan password yang benar</h1>
				) : (
					<Letters />
				)}
			</div>
		</div>
	);
};

export default Cta;
