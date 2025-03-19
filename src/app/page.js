import Cta from "@/components/cta";
import Greeting from "@/components/Greeting";
import Image from "next/image";

export default function Home() {
	return (
		<main className="py-16 bg-slate-200 min-h-screen overflow-x-hidden">
			<Greeting />
			<Cta />
		</main>
	);
}
