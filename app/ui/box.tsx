import Image from "next/image";
import { formatPokeNum, getPokeName } from "@/app/lib/utils";

const Box = (props:any) => {
	const cellStyle = "aspect-square"
	const BoxNums = {
		low: formatPokeNum(props.pokemon[0].order, 3),
		high: formatPokeNum(props.pokemon[props.pokemon.length - 1].order, 3)
	}

	return (
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
						num={props.showNumber}
						name={props.showName}
						pokemon={m}
						priority={props.box < 3 ? true : false}
						shiny={props.shiny}
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
}

const Cell = (props:any) => {
	const imgStyle = "p-2 bg-gradient-radial from-teal-300/60 via-teal-300/30 to-60%"

	return (
		props.pokemon ? (
			<div className="aspect-square">
				<Image
					className={imgStyle}
					width="100"
					height="100"
					src={props.shiny ? props.pokemon.sprites.shiny : props.pokemon.sprites.default}
					alt={props.pokemon.name}
					priority={props.priority}
				/>
				{props.num ? <p className="text-center text-xs leading-none">#{formatPokeNum(props.pokemon.order, 3)}</p> : null}
				{props.name ? (
					<p className="text-center text-xs leading-none">
						<span className="font-bold">{getPokeName(props.pokemon.names, "en")}</span>
						<span className="block uppercase text-slate-500 text-[0.8em]">{props.pokemon.variation_name}</span>
					</p>
				) : null}
			</div>
		) : (
			<div className="aspect-square bg-gradient-radial from-teal-300/60 via-teal-300/30 to-60%"></div>
		)
	)
}

export default Box;