import Image from "next/image";
import React from "react";

const Greeting = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="font-bold text-6xl font-caveat text-center text-[#fbc920]">
				Happy Birthday Seseorang! <span className="text-4xl">🎉✨</span>
			</h1>
			{/* <div className="w-60 h-80 bg-yellow-500 mt-8">Gambar</div> */}
			<div className="relative w-full md:w-2/5 h-[400px] mt-6">
				<Image
					src={"./visi bounty.png"}
					fill
					sizes="500px"
					className="object-scale-down"
					alt="foto"
				/>
			</div>
			{/* Text section */}
		</div>
	);
};

export default Greeting;
