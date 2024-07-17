import Header from "@/app/ui/header"
import SVForm from "./ui/forms/sv-form"
import Count from "./ui/count"
import Box from "./ui/box"
import getPokedex from "@/app/api/pokedex"
import { getPokeName } from "@/app/lib/utils"

const lang = "en"

export default async function Page() {
	const pokedex = await getPokedex("paldea")

	const filterPokedex = (gender:boolean, forms:boolean) => {
		const docs = pokedex.documents
		let pokedexList:any = []

		if (!gender) {
			if (!forms) {
				pokedexList = []

				docs.map((spec:any) => (
					spec.variations
						.filter((f:any) => f.default === true || f.type !== "gender" && f.type !== "form")
						.map((vari:any) => (
							pokedexList.push({
								"_id": spec._id,
								"default": vari.default,
								"name": spec.name,
								"names": spec.names,
								"order": spec.order,
								"sprites": vari.sprites,
								"type": vari.type || null,
								"variation_name": vari.name || null,
								"variation_order": vari.order
							})
					))
				))

				return pokedexList
			} else {
				docs.map((spec:any) => (
					spec.variations
						.filter((f:any) => f.default === true || f.type !== "gender")
						.map((vari:any) => ({
							"_id": spec._id,
							"default": vari.default,
							"name": spec.name,
							"names": spec.names,
							"order": spec.order,
							"sprites": vari.sprites,
							"type": vari.type || null,
							"variation_name": vari.name || null,
							"variation_order": vari.order
					}))
				))
			}
		} else {
			if (!forms) {
				return docs.map((spec:any) => (
					spec.variations
						.filter((f:any) => f.default === true || f.type !== "form")
						.map((vari:any) => ({
							"_id": spec._id,
							"default": vari.default,
							"name": spec.name,
							"names": spec.names,
							"order": spec.order,
							"sprites": vari.sprites,
							"type": vari.type || null,
							"variation_name": vari.name || null,
							"variation_order": vari.order
					}))
				))
			} else {
				pokedexList = []
				
				docs.map((spec:any) => (
					spec.variations
						.map((vari:any) => (
							pokedexList.push({
								"_id": spec._id,
								"default": vari.default,
								"name": spec.name,
								"names": spec.names,
								"order": spec.order,
								"sprites": vari.sprites,
								"type": vari.type || null,
								"variation_name": vari.name || null,
								"variation_order": vari.order
							})
					))
				))

				return pokedexList
			}
		}
	}

	const createBoxes = (gender:boolean, forms:boolean) => {
		const pokemon = filterPokedex(gender, forms).sort((a:any,b:any) => a.order - b.order || a.variation_order - b.variation_order)
		const boxCount = Math.ceil(pokemon.length / 30)
		const boxes = []

		for (let i = 0; i < boxCount; i++) {
			boxes.push({
				box: i,
				pokemon: pokemon.slice(30 * i - 30, 30 * i)
			})
		}

		return boxes
	}

	return (
		<>
			<Header />

			<main>
				<div className="max-w-7xl mx-auto pt-4">
					<SVForm />
					<Count />
				</div>

				<div className="max-w-7xl mx-auto pt-4">
					{createBoxes(true, true)
						.filter((f:any) => f.pokemon.length > 0)
						.map((box:any) => (
							<div key={box.box}>
								<h2>Box {box.box}</h2>
								<div>
									{box.pokemon.map((m:any) => (
										<p key={m.order}>{m.order} {m.variation_order} {getPokeName(m.names, lang)} {m.variation_name}</p>
									))}
								</div>
							</div>
						))
					}

					{/* {filterPokedex(true, true).sort((a:any,b:any) => a.order - b.order || a.variation_order - b.variation_order)
						.map((m:any) => (
							<p key={`${m.order}-${m.variation_order}`}>{m.order} {m.variation_order} {m.name} {m.variation_name}</p>
						))
					} */}
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