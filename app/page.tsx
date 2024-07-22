'use client';

import { useEffect, useState } from "react";
import Header from "@/app/ui/header";
import Form from "./ui/forms/form";
import Count from "./ui/count";
import Box from "./ui/box";
import getPokedex from "@/app/api/pokedex";

const useLocalStorage = (key:any, initialValue:any)=> {
	const [state, setState] = useState(() => {
		try {
			const value = window.localStorage.getItem(key)
			return value ? JSON.parse(value) : initialValue
		} catch (e) {
			console.log(e)
		}
	})

	const setValue = value => {
		try {
			const valueToStore = value instanceof Function ? value(state) : value
			window.localStorage.setItem(key, JSON.stringify(valueToStore))
			setState(value)
		} catch (e) {
			console.log(e)
		}
	}

	return [state, setValue]
}

export default function Page() {
	const [lang, setLang] = useState('en')
	const [dex, setDex] = useState('paldea')

	const [loading, setLoading] = useState(true)
	const [pokedex, setPokedex] = useState()
	const [pokemon, setPokemon] = useState([])
	const [displayCount, setDisplayCount] = useState(0)

	const [shinyStorage, setShinyStorage] = useLocalStorage('shinyOption', false)
	const [shinyOption, setShinyOption] = useState(shinyStorage)
	const [genderOption, setGenderOption] = useState(false)
	const [formOption, setFormOption] = useState(false)
	const [capOption, setCapOption] = useState(false)

	const [showName, setShowName] = useState(false)
	const [showNumber, setShowNumber] = useState(false)
	const [showState, setShowState] = useState(false)

	useEffect(() => {
		getPokedex(dex)
			.then(data =>	setPokedex(data.documents))
			.then(() => setLoading(false))
	}, [dex])

	useEffect(() => {
		const docs = pokedex ?? []
		let pokedexList:any = []

		if (!genderOption) {
			if (!formOption) {
				if (!capOption) {
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
				if (!capOption) {
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
			if (!formOption) {
				if (!capOption) {
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
				if (!capOption) {
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
	}, [pokedex, genderOption, formOption, capOption])

	useEffect(() => setDisplayCount(pokemon.length), [pokemon])

	const createBoxes = () => {
		const pokemonData = pokemon.sort((a:any,b:any) => a.order - b.order || a.variation_order - b.variation_order)
		const boxCount = Math.ceil(pokemonData.length / 30)
		const boxes = []

		for (let i = 1; i <= boxCount; i++) {
			boxes.push({
				box: i,
				pokemon: pokemonData.slice(30 * i - 30, 30 * i)
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
							onChangeShiny={(e:any) => {
								setShinyStorage(e.target.checked)
								setShinyOption(e.target.checked)
							}}
							onChangeGender={(e:any) => setGenderOption(e.target.checked)}
							onChangeForm={(e:any) => setFormOption(e.target.checked)}
							onChangeCap={(e:any) => setCapOption(e.target.checked)}
							onChangeShowName={(e:any) => setShowName(e.target.checked)}
							onChangeShowNumber={(e:any) => setShowNumber(e.target.checked)}
							onChangeShowState={(e:any) => setShowState(e.target.checked)}
						/>
						<p>Shiny: {shinyOption}</p>
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