const Box = (props:any) => {
	const cellStyle = "bg-slate-900/5 rounded-md aspect-square p-2"

	return (
		<div>
			<div className="">
				<h3>Box {props.box}</h3>
			</div>
			<div className="grid grid-cols-6 gap-2">
				{props.pokemon.map((m:any) => (
					<div key={m._id} className={cellStyle}>
						<img src={m.sprites.default} alt={m.name} />
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