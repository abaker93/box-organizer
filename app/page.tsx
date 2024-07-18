import Header from "@/app/ui/header"
import SVForm from "./ui/forms/sv-form"
import Count from "./ui/count"
import Box from "./ui/box"
import getPokedex from "@/app/api/pokedex"

const lang = "en"

export default async function Page() {
	const pokedex = await getPokedex("paldea")

	const filterPokedex = (gender:boolean, forms:boolean, caps:boolean) => {
		const docs = pokedex.documents
		let pokedexList:any = []

		if (!gender) {
			if (!forms) {
				if (!caps) {
					pokedexList = []

					docs.map((spec:any) => (
						spec.variations
							.filter((f:any) => f.default === true || f.type !== "gender" && f.type !== "form" && f.type !== "cap")
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
				}
			} else {
				if (!caps) {
					pokedexList = []

					docs.map((spec:any) => (
						spec.variations
							.filter((f:any) => f.default === true || f.type !== "gender" && f.type !== "cap")
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
					pokedexList = []

					docs.map((spec:any) => (
						spec.variations
							.filter((f:any) => f.default === true || f.type !== "gender")
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
		} else {
			if (!forms) {
				if (!caps) {
					pokedexList = []

					docs.map((spec:any) => (
						spec.variations
							.filter((f:any) => f.default === true || f.type !== "form" && f.type !== "cap")
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
					pokedexList = []

					docs.map((spec:any) => (
						spec.variations
							.filter((f:any) => f.default === true || f.type !== "form")
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
			} else {
				if (!caps) {
					pokedexList = []

					docs.map((spec:any) => (
						spec.variations
							.filter((f:any) => f.default === true || f.type !== "cap")
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
	}

	const createBoxes = (gender:boolean, forms:boolean, caps:boolean) => {
		const pokemon = filterPokedex(gender, forms, caps).sort((a:any,b:any) => a.order - b.order || a.variation_order - b.variation_order)
		const boxCount = Math.ceil(pokemon.length / 30)
		const boxes = []

		for (let i = 1; i <= boxCount; i++) {
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
					<div className="grid grid-cols-2 gap-10">
						{createBoxes(true, true, false)
							.filter((f:any) => f.pokemon.length > 0)
							.map((box:any) => (
								<Box key={box.box} box={box.box} pokemon={box.pokemon} />
							))
						}
					</div>
				</div>
			</main>
		</>
	)
}