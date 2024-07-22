// import Pokedex from 'pokedex-promise-v2';
// const P = new Pokedex();

// interface PokemonProperties {
// 	name: string,
// 	names: Names[]
// 	order: number,
// 	variations: Variation[]
// }

// interface Names {
// 	lang: string,
// 	name: string
// }

// interface Variation {
// 	default: boolean,
// 	order: number,
// 	sprites: Sprite
// }

// interface Sprite {
// 	default: string,
// 	shiny: string
// }

// export default function displayPokeAPI() {
	// const [pokemon, setPokemon] = useState<PokemonProperties[]>([])

	// const getPokemon = (entries:any) => {
	// 	entries.forEach((ent:any) => {
	// 		const entryNum = ent.entry_number

	// 		P.getResource(ent.pokemon_species.url)
	// 			.then(res => {
	// 				setPokemon(currentList => [...currentList, {
	// 					name: res.name,
	// 					names: res.names,
	// 					order: entryNum,
	// 					variations: [
	// 						{
	// 							default: true,
	// 							order: 0,
	// 							sprites: {
	// 								default: "https://img.pokemondb.net/sprites/home/normal/"+res.name+".png",
	// 								shiny: "https://img.pokemondb.net/sprites/home/shiny/"+res.name+".png"
	// 							}
	// 						}
	// 					]
	// 				}])
	// 			})
	// 	})
	// }

	// const getPokedex = (dex:string) => {
	// 	P.getPokedexByName(dex)
	// 		.then(res => {
	// 			getPokemon(res.pokemon_entries)
	// 		})
	// }

	// useEffect(() => {
	// 	getPokedex('paldea')
	// }, [])

	// return JSON.stringify(pokemon)
// }