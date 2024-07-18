import { formatPokeNum, getPokeName } from "@/app/lib/utils";

const Box = (props:any) => {
	const cellStyle = " aspect-square"
	const BoxNums = {
		low: formatPokeNum(props.pokemon[0].order, 3),
		high: formatPokeNum(props.pokemon[props.pokemon.length - 1].order, 3)
	}

	return (
		<div className="rounded-3xl bg-white border-[6px] border-teal-500">
			<div className="flex flex-row bg-teal-500 text-white font-bold text-center px-4 py-2">
				<p>#{BoxNums.low}</p>
				<h3 className="grow">Box {props.box}</h3>
				<p>#{BoxNums.high}</p>
			</div>
			<div className="grid grid-cols-6 gap-2 p-4">
				{props.pokemon.map((m:any) => (
					<div key={`${m.order}-${m.variation_order}`} className={cellStyle}>
						<img className="rounded-full p-2 overflow-visible bg-gradient-radial from-teal-300/30 to-60%" src={m.sprites.default} alt={m.name} />
						{/* <p className="text-center text-xs">
							<span className="font-bold">{getPokeName(m.names, "en")}</span>
						</p> */}
					</div>
				))}
				{props.pokemon.length < 30 &&
					[...Array(30 - props.pokemon.length)].map((m, i) => (
						<div key={i} className={cellStyle}></div>
					))
				}
			</div>
		</div>
	)
}

export default Box;