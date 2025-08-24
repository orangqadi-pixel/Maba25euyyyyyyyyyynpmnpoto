import LettersCard from "@/components/LettersCard";
import Link from "next/link";
import React from "react";

const SuratSatu = () => {
	return (
		<div className="py-16 bg-orange-200 min-h-screen overflow-x-hidden">
			<div className="px-12 flex flex-col gap-6 ">
				{/* <div className="">
					<h1 className="text-xl font-bold ">Surat pertama</h1>
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
				<div className="mb-2 flex flex-col gap-4 items-center">
					<h1 className="text-xl font-bold ">Surat pertama</h1>
					<p className="text-xl font-normal mb-1">
						Halo seeseoranng, sekarang kamu udah 18 tahun, selamat yaa,. Mungkin
						disini aku nyampein pesannya pake indo aja ya
					</p>
					<p className="text-xl font-normal">
						Gimana sekarang kabar kamu? semoga baik-baik saja ya, Aku harap
						doa-doa kamu terkabul dan banyak cita-cita dapat kamu tercapai.
					</p>
					<p className="text-xl font-normal">
						ini sedikit buat kamu. Kira kira di umur kamu sebelumnya itu hal apa
						aja sih yang menurut kamu itu{" "}
						<span className="font-bold text-sky-700">what went well?</span> apa
						aja sih hal yang berjalan baik selama satu tahun kebelakang? dari
						aku banyak sih yang berjalan baik kaya ada hal-hal lebih yang aku
						dapat diluar ekspektasiku{" "}
						<span className="font-bold text-sky-700">what to improve?</span>{" "}
						kira-kira jika ada ga hal yang bisa ditingkatkan lagi? aku pribadi
						aku ingin ningkatin atensi aku saat kelas biar IPKnya naik sama time
						management{" "}
						<span className="font-bold text-sky-700">what to stop?</span> lalu
						hal apa yang ingin dihentikan? kalo aku, aku mau berhenti
						malas-malasan sama berhenti buat gengsi kalo mau bertanya.{" "}
						<span className="font-bold text-sky-700">what to start?</span> dari
						semua evaluasi tadi adakah yang ingin kamu mulai? aku pribadi ingin
						mulai ngebiasain raise hand pas di kelas sama belajar ngemanfaatin
						aplikasi kaya google spreadsheet, google docs dan lainnya.
					</p>
					<p className="text-xl font-normal">
						Tapi apapun itu yang ngebuat kamu cape. dari aku, kamu tetap
						semangat ya! karena katanya orang hebat itu bukan orang yang kuat
						tapi orang yang bisa bertahan sampai akhir!{" "}
					</p>
				</div>

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

export default SuratSatu;
