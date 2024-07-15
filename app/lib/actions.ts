import { useState } from 'react'
import Pokedex from 'pokedex-promise-v2'
import { getPokeName } from './utils'

const P = new Pokedex()

export async function fetchDex(dexName:string) {
	const [dex, setDex] = useState([])
	try {
		const getDex = await P.getPokedexByName(dexName)
		getDex.pokemon_entries.map(m => {
			let entry = m.entry_number
			let names = []

			P.getResource(m.pokemon_species.url)
				.then(s => {
					names = s.names
					
					let order = 0
					let sprite = ''
					let varieties = ''

					s.varieties.map(v => {
						order = order++
					})
				})
		})

		console.log(getDex.pokemon_entries)

		return dex
	} catch (e) {
		console.error('Database error: ', e)
		throw new Error('Database error')
	}
}