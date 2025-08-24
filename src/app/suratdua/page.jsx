import LettersCard from "@/components/LettersCard";
import Link from "next/link";
import React from "react";

const SuratDua = () => {
	return (
		<div className="py-16 bg-orange-200 min-h-screen overflow-x-hidden">
			<div className="px-12 flex flex-col gap-6">
				{/* <div className="">
					<h1 className="text-xl font-bold ">Surat kedua</h1>
					<p>Selamat Selamat Selamat</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
						repellendus deleniti doloribus quae corrupti, harum reiciendis velit
						tempore soluta placeat porro maiores vitae fugit quidem commodi
						saepe aliquid quaerat tenetur earum dicta fuga ea aut est.
						Blanditiis nihil ut tempora error eos hic expedita eveniet, illo aut
						amet ad voluptates doloribus possimus cum. Voluptate, quis ut!
					</p>
				</div> */}

				<div className="flex flex-col gap-6 items-center">
					<h1 className="text-2xl font-bold">Surat kedua</h1>
					<h2 className="text-xl font-bold">
						Disurat kedua ini aku mau nyampein tentang kamu dari perspektive aku
					</h2>
					<p className="text-lg">
						Jadi di awalll banget ini mah. Aku liat kamu pas kelas gabungan di
						GO. Aku menilai kamu sebagai orang yang cool, berkelas (emang ya
						kalo ini mah), elegant. Terus aku cari tau tentang kamu ke pa RX
						wkwkwk
					</p>
					<p className="text-lg">
						Lanjut, aku tau kamu jago gambar dan karena gambar kamu bagus bagus
						aku jadi sering gitu liat gambar di highligh ig kamu hehehe. Terus
						aku tau juga kalo kamu dapet skor TO 700an gitu dan itu kaya anjirr
						keren banget sumpah, terus aku jadi lebih termotivasi gitu buat
						belajar snbtnya. dan aku berhasil dapet 700an juga tapi cuma sekali
						doang karena makin deket utbk si skornya makin SUSAH.
					</p>
					<p className="text-lg">
						Sehabis itu aku tau kalo kamu udah ada pacar soo aku ga ambil action
						apapun dari sini kaya yaudah lah karena rasanya ditikung itu ga enak
						sama aku gamau nama kamu ternoda sama kata 'selingkuh'
					</p>
					<p className="text-lg">
						Tapi aku denger dari bu AI kali trio kamu tuh nanya-nanyain aku gitu
						wkwkwk. Aku gatau itu bener atau engga tapi itu lucu sih, dari sini
						aku sering dibecandain gitu lah sama bu AI dan pa RX. Oke kayanya
						udah ya curhatnya lanjut aja next ke kamu keterima di FF UNPAD
					</p>
					<div className="w-[350px] h-[200px] bg-sky-800 flex items-center justify-center">
						<h1 className="font-bold text-center">
							Foto keterima SNBT atau foto kamu di rektoratt
						</h1>
					</div>
					<p className="text-lg">
						YEAAAY 🎉✨, selamat yaa dapet Kuliah di Unpad! Ahhh kepanjangan
						nanti kamu males bacanya jadi langsung aja ya ke...
					</p>
					<div className="w-[350px] h-[200px] bg-sky-800 flex items-center justify-center">
						<h1 className="font-bold text-center">
							Anggap foto kamu di KSE hehehe
						</h1>
					</div>
					<p className="text-lg">
						CIEEE jadi awardee beasiswa KSE. keren banget kamu visii, aku
						penasaran deh sama keseruan yang kamu rasain disana 😆.
					</p>
					<p className="text-lg">
						Terus kaloo gasalah juga kamu itu jadi staff pengajar buat yang
						persiapan UTBK gitu ya? semoga adik adik yang kamu ajar itu jadi
						orang-orang yang sukses ya agar kamu sebagai gurunya bisa
						ngebanggain mereka.
					</p>
					<p className="text-lg">
						oke takut kepanjangan dan ngabisin waktu kamu. Aku harap semua yang
						kamu rencanakan dapat terlaksana dan tercapai 😆
					</p>
				</div>
				<div className="text-lg">
					<h2 className="text-xl font-semibold">And lastl</h2>
					<h1 className="text-2xl font-bold text-cyan-900">
						Hope I can have a day with You
					</h1>
				</div>
				<h1 className="text-2xl font-bold">
					Thank youuu for reading my letter.
				</h1>
				<div className="text-sky-700 font-semibold">
					<LettersCard />
					<div className="mt-6">
						<Link href={"/"} className="mt-24">
							Balik Ke halaman utama
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SuratDua;
