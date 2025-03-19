import Link from "next/link";
import React from "react";

const Foooter = () => {
	return (
		<div className="flex">
			<div className=" p-8">
				<span className="text-lg">created by </span>
				{"  "}
				<Link href={"/"} className="text-lg text-blue-700 font-mono">
					Alfath Cikal
				</Link>
			</div>
		</div>
	);
};

export default Foooter;
