'use client';

import { useEffect, useState } from "react";
import Header from "@/app/ui/header";
import Form from "./ui/forms/form";
import Count from "./ui/count";
import Box from "./ui/boxes/box";
import getPokedex from "@/app/api/pokedex";

export default function Page() {
	const [lang, setLang] = useState('en')
	const [loading, setLoading] = useState(true)

	const [pokedex, setPokedex] = useState()
	const [pokemon, setPokemon] = useState([])
	const [displayCount, setDisplayCount] = useState(0)

	const [options, setOptions] = useState({})

	useEffect(() => {
		const options = JSON.parse(localStorage.getItem('options'))
		const data = {
			dex: options?.dex || 'paldea',
			shiny: options?.shiny || false,
			gender: options?.gender || false,
			form: options?.form || false,
			cap: options?.cap || false,
			name: options?.name || false,
			number: options?.number || false,
			state: options?.state || false
		}
		setOptions(data)
		setLoading(false)
	}, [])

	useEffect(() => {
		getPokedex(options.dex)
			.then(data =>	setPokedex(data.documents))
	}, [options])

	useEffect(() => {
		const docs = pokedex ?? []
		let pokedexList:any = []

		if (!options.gender) {
			if (!options.form) {
				if (!options.cap) {
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
				if (!options.cap) {
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
			if (!options.form) {
				if (!options.cap) {
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
				if (!options.cap) {
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
	}, [pokedex, options.gender, options.form, options.cap])

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
		<main className="min-h-screen bg-fixed bg-gradient-to-b from-lime-100 to-teal-100">
			<Header />

			<div className="max-w-7xl mx-auto p-8">
				{loading ? (
					<p>Loading...</p>
				) : (
					<>
						<div className="pt-4">
							<Form
								options={options}
								onChangeDex={(e:any) => {
									setOptions({...options, dex: e.target.value})
									localStorage.setItem('options', JSON.stringify({...options, dex: e.target.value}))
								}}
								onChangeShiny={(e:any) => {
									setOptions({...options, shiny: e.target.checked})
									localStorage.setItem('options', JSON.stringify({...options, shiny: e.target.checked}))
								}}
								onChangeGender={(e:any) => {
									setOptions({...options, gender: e.target.checked})
									localStorage.setItem('options', JSON.stringify({...options, gender: e.target.checked}))
								}}
								onChangeForm={(e:any) => {
									setOptions({...options, form: e.target.checked})
									localStorage.setItem('options', JSON.stringify({...options, form: e.target.checked}))
								}}
								onChangeCap={(e:any) => {
									setOptions({...options, cap: e.target.checked})
									localStorage.setItem('options', JSON.stringify({...options, cap: e.target.checked}))
								}}
								onChangeShowName={(e:any) => {
									setOptions({...options, name: e.target.checked})
									localStorage.setItem('options', JSON.stringify({...options, name: e.target.checked}))
								}}
								onChangeShowNumber={(e:any) => {
									setOptions({...options, number: e.target.checked})
									localStorage.setItem('options', JSON.stringify({...options, number: e.target.checked}))
								}}
								onChangeShowState={(e:any) => {
									setOptions({...options, state: e.target.checked})
									localStorage.setItem('options', JSON.stringify({...options, state: e.target.checked}))
								}}
							/>
							<Count total={displayCount} />
						</div>
						<div className="pt-4">
							<div className="grid grid-cols-2 gap-10">
								{pokemon && createBoxes()
									.map((box:any) => (
										<Box
											key={box.box}
											box={box.box}
											pokemon={box.pokemon}
											options={options}
										/>
									))
								}
							</div>
						</div>
					</>
				)}
			</div>
		</main>
	)
}