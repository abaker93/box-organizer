
import { useEffect, useState } from "react"
import Cell from "@/app/ui/boxes/cell"
import { formatPokeNum } from "@/app/lib/utils"

const Box = (props:any) => {
	const BoxNums = {
		low: formatPokeNum(props.pokemon[0].order, 3),
		high: formatPokeNum(props.pokemon[props.pokemon.length - 1].order, 3)
	}

	const [loading, setLoading] = useState(true)
	const [userData, setUserData] = useState({})

	useEffect(() => {
		let data = JSON.parse(localStorage.getItem('user-data'))

		data = data
			? data
			: {
				[props.options.dex]: {
					"1-0": {
						"_id": "1-0",
						"check": false,
						"shiny": false,
						"trade": false,
						"evolve": false
					}
				}
			}

		setUserData(data)
		setLoading(false)
	}, [])

	const onChangeCheck = (e:any, m:any) => {
		let item = userData[props.options.dex][m.order + "-" + m.variation_order]
		
		item = item ? item : {
			"_id": m.order + "-" + m.variation_order,
			"check": false,
			"shiny": false,
			"trade": false,
			"evolve": false
		}

		const data = {
			...userData,
			[props.options.dex]: {
				...userData[props.options.dex],
				[m.order + "-" + m.variation_order]: {
					...item,
					check: item.check ? false : true
				}
			}
		}

		setUserData(data)
		localStorage.setItem('user-data', JSON.stringify(data))
	}

	return (
		loading ? (
			<p>Loading...</p>
		) : (
			<div className="rounded-3xl bg-white/90 border-[6px] border-teal-500 shadow-lg">
				<div className="flex flex-row bg-teal-500 rounded-t text-white font-bold text-center px-4 py-2">
					<p>#{BoxNums.low}</p>
					<h3 className="grow">Box {props.box}</h3>
					<p>#{BoxNums.high}</p>
				</div>
				<div className="grid grid-cols-6 gap-2 p-4">
					{props.pokemon.map((m:any) => (
						<Cell
							key={`${m.order}-${m.variation_order}`}
							num={props.options.number}
							name={props.options.name}
							pokemon={m}
							priority={props.box < 3 ? true : false}
							shiny={props.options.shiny}
							data={userData[props.options.dex][m.order + "-" + m.variation_order]}
							onChangeCheck={(e:any) => { onChangeCheck(e, m) }}
						/>
					))}
					{props.pokemon.length < 30 &&
						[...Array(30 - props.pokemon.length)].map((m, i) => (
							<Cell key={i} />
						))
					}
				</div>
			</div>
		)
	)
}

export default Box;