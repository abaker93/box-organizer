import Header from "@/app/ui/header"
import SVForm from "./ui/forms/sv-form"
import Count from "./ui/count"
import Box from "./ui/box"
import getPokedex from "@/app/api/pokedex"

export default async function Page() {
	const pokedex = await getPokedex()
	
	return (
		<>
			<Header />

			<main>
				<div className="max-w-7xl mx-auto pt-4">
					{pokedex.documents.map((m:any) => (
						<p>{m.entry}</p>
					))}
				</div>

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
	)
}