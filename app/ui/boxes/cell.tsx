import Image from "next/image";
import { formatPokeNum, getPokeName } from "@/app/lib/utils";
import clsx from 'clsx';

const Cell = (props:any) => {
	return (
		props.pokemon ? (
			<div onClick={props.onChangeCheck}>
				<figure className={clsx(
					'aspect-square rounded-full p-2',
					{
						'bg-gradient-radial from-teal-300/60 via-teal-300/30 to-60%': !props.data?.check,
						'bg-orange-500': props.data && props.data.check
					}
				)}>
					<Image
						className={clsx({
							'drop-shadow-outline-white': props.data && props.data.check
						})}
						width="100"
						height="100"
						src={props.shiny ? props.pokemon.sprites.shiny : props.pokemon.sprites.default}
						alt={props.pokemon.name}
						priority={props.priority}
					/>
				</figure>
				<figcaption>
					{props.num ? <p className="text-center text-xs leading-none">#{formatPokeNum(props.pokemon.order, 3)}</p> : null}
					{props.name ? (
						<p className="text-center text-xs leading-none">
							<span className="font-bold">{getPokeName(props.pokemon.names, "en")}</span>
							<span className="block uppercase text-slate-500 text-[0.8em]">{props.pokemon.variation_name}</span>
						</p>
					) : null}
				</figcaption>
			</div>
		) : (
			<div className="aspect-square bg-gradient-radial from-teal-300/60 via-teal-300/30 to-60%"></div>
		)
	)
}

export default Cell;