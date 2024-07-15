'use client'

import { useEffect } from "react";
import { fetchDex } from "@/app/lib/actions";
import Header from "@/app/ui/header";
import SVForm from "./ui/forms/sv-form";
import Count from "./ui/count";
import Box from "./ui/box";

const Page = () => {
	const SVdex = fetchDex('paldea')

	return (
		<>
			<Header />
			<main>
				<div className="max-w-7xl mx-auto pt-4">
					<SVForm />
					<Count />
				</div>

				<div className="max-w-7xl mx-auto pt-4">
					<div className="grid grid-cols-3">
						<Box />
					</div>
				</div>
			</main>
		</>
	);
}

export default Page;