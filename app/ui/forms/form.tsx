interface propTypes {
	dex: string,
	shinyOption: boolean,
	genderOption: boolean,
	formOption: boolean,
	capOption: boolean,
	showName: boolean,
	showNumber: boolean,
	showState: boolean,
	onChangeDex: any,
	onChangeShiny:any,
	onChangeGender:any,
	onChangeForm:any,
	onChangeCap:any
	onChangeShowName:any,
	onChangeShowNumber:any,
	onChangeShowState:any
}

const Form = ({
	dex,
	shinyOption, genderOption, formOption, capOption,
	showName, showNumber, showState,
	onChangeDex,
	onChangeShiny, onChangeGender, onChangeForm, onChangeCap,
	onChangeShowName, onChangeShowNumber, onChangeShowState
}:propTypes) => {
	const pokedex = [
		'National',
		'Paldea',
		'Kitakami',
		'Blueberry'
	]

	const checkboxGroupStyles = 'flex gap-x-2 items-start'
	const checkboxContainerStyles = 'flex h-6 items-center'
	const checkboxStyles = `h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600`

	return (
		<form className="spacing-y-6">
			<h2 className="text-base font-semibold text-slate-900">Options</h2>
			<p className="mt-1 text-sm text-slate-600">
				Choose which Pokémon to display.
			</p>

			<div className="flex gap-x-12 mt-6">
				<div className="grow">
					<label htmlFor="pokedex" className="text-slate-900">Pokédex</label>
					<div className="mt-2">
						<select
							id="pokedex"
							name="pokedex"
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
							onChange={onChangeDex}
							defaultValue={dex}
						>
							{pokedex.map((pokedex) => (
								<option value={pokedex.toLowerCase()} key={pokedex}>{pokedex}</option>
							))}
						</select>
					</div>
				</div>
				<div>
					<fieldset>
						<legend>Dex Options</legend>
						<div className="mt-2 flex gap-x-6 text-slate-600">
							<div className={checkboxGroupStyles}>
								<div className={checkboxContainerStyles}>
									<input type="checkbox" id="shiny" name="shiny" checked={shinyOption} className={checkboxStyles} onChange={onChangeShiny} />
								</div>
								<div>
									<label htmlFor="shiny">Shiny</label>
								</div>
							</div>
							<div className={checkboxGroupStyles}>
								<div className={checkboxContainerStyles}>
									<input type="checkbox" id="gender" name="gender" checked={genderOption} className={checkboxStyles} onChange={onChangeGender} />
								</div>
								<div>
									<label htmlFor="gender">Gender Differences</label>
								</div>
							</div>
							<div className={checkboxGroupStyles}>
								<div className={checkboxContainerStyles}>
									<input type="checkbox" id="forms" name="forms" checked={formOption} className={checkboxStyles} onChange={onChangeForm} />
								</div>
								<div>
									<label htmlFor="forms">Multiple Forms</label>
								</div>
							</div>
							<div className={checkboxGroupStyles}>
								<div className={checkboxContainerStyles}>
									<input type="checkbox" id="caps" name="caps" checked={capOption} className={checkboxStyles} onChange={onChangeCap} />
								</div>
								<div>
									<label htmlFor="caps">Pikachu Caps</label>
								</div>
							</div>
						</div>
					</fieldset>
				</div>
			</div>
			<div className="flex gap-x-12 mt-6">
				<div>
					<fieldset>
						<legend>Display Options</legend>
						<div className="mt-2 flex gap-x-6 text-slate-600">
							<div className={checkboxGroupStyles}>
								<div className={checkboxContainerStyles}>
									<input type="checkbox" id="names" name="names" checked={showName} className={checkboxStyles} onChange={onChangeShowName} />
								</div>
								<div>
									<label htmlFor="names">Show Names</label>
								</div>
							</div>
							<div className={checkboxGroupStyles}>
								<div className={checkboxContainerStyles}>
									<input type="checkbox" id="numbers" name="numbers" checked={showNumber} className={checkboxStyles} onChange={onChangeShowNumber} />
								</div>
								<div>
									<label htmlFor="numbers">Show Numbers</label>
								</div>
							</div>
							<div className={checkboxGroupStyles}>
								<div className={checkboxContainerStyles}>
									<input type="checkbox" id="buttons" name="buttons" checked={showState} className={checkboxStyles} onChange={onChangeShowState} />
								</div>
								<div>
									<label htmlFor="buttons">Show States</label>
								</div>
							</div>
						</div>
					</fieldset>
					<p className="text-xs">Right click on a pokemon sprite to show all display options</p>
				</div>
			</div>
		</form>
	)
}

export default Form;