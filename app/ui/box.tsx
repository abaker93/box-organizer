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
					<div key={`${m.order}-${m.variation_order}`} className={cellStyle}>
						<Image
							className="rounded-full p-2 overflow-visible bg-gradient-radial from-teal-300/60 via-teal-300/30 to-60%"
							width="100"
							height="100"
							src={props.shiny ? m.sprites.shiny : m.sprites.default}
							alt={m.name}
						/>
						{props.showNumber ? <p className="text-center text-xs leading-none">#{formatPokeNum(m.order, 3)}</p> : null}
						{props.showName ? (
								<p className="text-center text-xs leading-none">
									<span className="font-bold">{getPokeName(m.names, "en")}</span>
									<span className="block uppercase text-slate-500 text-[0.8em]">{m.variation_name}</span>
								</p>
						) : null}
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