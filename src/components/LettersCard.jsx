import Link from "next/link";

const LettersCard = () => {
	return (
		<div className="flex flex-col gap-12">
			<div className="flex p-4 bg-yellow-500 justify-between">
				<h1 className="font-bold">Surat Pertama</h1>
				<Link href={"/suratsatu"} className="text-xl font-bold text-blue-700">
					Lihat Surat
				</Link>
			</div>
			<div className="flex p-4 bg-yellow-500 justify-between">
				<h1 className="font-bold">Surat Kedua</h1>
				<Link href={"/suratdua"} className="text-xl font-bold text-blue-700">
					Lihat Surat
				</Link>
			</div>
		</div>
	);
};

export default LettersCard;
