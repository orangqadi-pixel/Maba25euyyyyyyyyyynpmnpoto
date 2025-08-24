import React from "react";
import LettersCard from "./LettersCard";

const Letters = () => {
	return (
		<div className="w-full py-16">
			<div className="flex flex-col gap-4">
				{/* <h1 className="text-2xl">Hallo Happy Birthday yang ke-18!!</h1> */}
				<h1 className="text-2xl">
					Hallo Seseorang Happy Birthday yang ke-18!!
				</h1>
				<div className="mb-4">
					<h2 className="text-xl font-bold">
						How are you? hope that you're fine
					</h2>
					<p className="text-lg">
						Soo,here i made this simple website for you, so sorry if my creation
						is bad and messy. But I hope this simple website will makes you
						smile, hehehe..
					</p>
					<h2 className="text-xl mt-4 font-medium">
						{`and here I have a letter for you, soo please read the message carefully
						:)`}
					</h2>
				</div>
				{/* <div className="mb-2">
					<h1 className="font-bold mb-3 text-2xl">The Letter</h1>
					<p className="text-xl font-normal mb-1">
						Halo Siapapun itu, sekarang kamu udah 18 tahun, selamat yaa,.
						Mungkin disini aku menyampaikan pesannya pake indo aja ya karena
						males nyari kosa kata yang tepatnya.
					</p>
					<p className="text-xl font-normal">
						Gimana sekarang kabar kamu? semoga baik-baik saja ya, diulang tahun
						ke 18 ini kira-kira apa aja nihh harapan kamu yang udah kecapai? Aku
						harap doa-doa kamu banyak yang terkabulkan dan banyak cita-cita yang
						bisa kamu tercapai.
					</p>
					<p className="text-xl font-normal">Oke sekarang ke sesi curhat</p>
				</div> */}
				<div className="mb-2 text-sky-700">
					<LettersCard />
				</div>
				{/* <div className="text-lg">
					<h2 className="text-xl font-semibold">And lastly</h2>
					<h1 className="text-2xl font-bold text-cyan-900">
						Hope I can have a day with You
					</h1>
				</div> */}
			</div>
		</div>
	);
};

export default Letters;
