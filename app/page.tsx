'use client'

import { useEffect, useState } from "react"
import Header from "@/app/ui/header"
import Form from "./ui/forms/form"
import Count from "./ui/count"
import Box from "./ui/box"
import getPokedex from "@/app/api/pokedex"

const useLocalStorage = (key:any, fbState:any) => {
	const [value, setValue] = useState(
		JSON.parse(localStorage.getItem(key) ?? "") ?? fbState
	)

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [value, key])

	return [value, setValue]
}

export default function Page() {
	const [lang, setLang] = useState('en')
	const [dex, setDex] = useLocalStorage('dex', 'paldea')

	const [loading, setLoading] = useState(true)
	const [pokedex, setPokedex] = useState()
	const [pokemon, setPokemon] = useState([])
	const [displayCount, setDisplayCount] = useState(0)

	const [shinyOption, setShinyOption] = useLocalStorage('shinyOption', false)
	const [genderOption, setGenderOption] = useLocalStorage('genderOption', false)
	const [formOption, setFormOption] = useLocalStorage('formOption', false)
	const [capOption, setCapOption] = useLocalStorage('capOption', false)

	const [showName, setShowName] = useLocalStorage('showName', false)
	const [showNumber, setShowNumber] = useLocalStorage('showNumber', false)
	const [showState, setShowState] = useLocalStorage('showState', false)

	useEffect(() => {
		getPokedex(dex)
			.then(data =>	setPokedex(data.documents))
			.then(() => setLoading(false))
	}, [dex])

	useEffect(() => {
		filterPokedex(genderOption, formOption, capOption)
	}, [pokedex, genderOption, formOption, capOption])

	useEffect(() => {
		setDisplayCount(pokemon.length)
	}, [pokemon])

	const filterPokedex = (gender:boolean, forms:boolean, caps:boolean) => {
		const docs = pokedex ?? []
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

					setPokemon(pokedexList)
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

					setPokemon(pokedexList)
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

					setPokemon(pokedexList)
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

					setPokemon(pokedexList)
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

					setPokemon(pokedexList)
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

					setPokemon(pokedexList)
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

					setPokemon(pokedexList)
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

					setPokemon(pokedexList)
				}
			}
		}
	}

	const createBoxes = () => {
		const pokemonData = pokemon.sort((a:any,b:any) => a.order - b.order || a.variation_order - b.variation_order)
		const boxCount = Math.ceil(pokemonData.length / 30)
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

			{loading ? (
				<p>Loading...</p>
			) : (
				<main className="p-8 bg-fixed bg-gradient-to-b from-lime-100 to-teal-100">
					<div className="max-w-7xl mx-auto pt-4">
						<Form
							{...{dex, shinyOption, genderOption, formOption, capOption, showName, showNumber, showState}}
							onChangeDex={(e:any) => setDex((e.target.value).toLowerCase())}
							onChangeShiny={(e:any) => setShinyOption(e.target.checked)}
							onChangeGender={(e:any) => setGenderOption(e.target.checked)}
							onChangeForm={(e:any) => setFormOption(e.target.checked)}
							onChangeCap={(e:any) => setCapOption(e.target.checked)}
							onChangeShowName={(e:any) => setShowName(e.target.checked)}
							onChangeShowNumber={(e:any) => setShowNumber(e.target.checked)}
							onChangeShowState={(e:any) => setShowState(e.target.checked)}
						/>
						<Count total={displayCount} />
					</div>

					<div className="max-w-7xl mx-auto pt-4">
						<div className="grid grid-cols-2 gap-10">
							{pokedex && createBoxes()
								.filter((f:any) => f.pokemon.length > 0)
								.map((box:any) => (
									<Box key={box.box} box={box.box} pokemon={box.pokemon} shiny={shinyOption} {...{showName, showNumber, showState}} />
								))
							}
						</div>
					</div>
				</main>
			)}
		</>
	)
}