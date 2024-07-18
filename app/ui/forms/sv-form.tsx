const SVForm = () => {
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
						>
							{pokedex.map((pokedex) => (
								<option key={pokedex}>{pokedex}</option>
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
									<input type="checkbox" id="shiny" name="shiny" className={checkboxStyles} />
								</div>
								<div>
									<label htmlFor="shiny">Shiny</label>
								</div>
							</div>
							<div className={checkboxGroupStyles}>
								<div className={checkboxContainerStyles}>
									<input type="checkbox" id="gender" name="gender" className={checkboxStyles} />
								</div>
								<div>
									<label htmlFor="gender">Gender Differences</label>
								</div>
							</div>
							<div className={checkboxGroupStyles}>
								<div className={checkboxContainerStyles}>
									<input type="checkbox" id="forms" name="forms" className={checkboxStyles} />
								</div>
								<div>
									<label htmlFor="forms">Multiple Forms</label>
								</div>
							</div>
							<div className={checkboxGroupStyles}>
								<div className={checkboxContainerStyles}>
									<input type="checkbox" id="caps" name="caps" className={checkboxStyles} />
								</div>
								<div>
									<label htmlFor="caps">Pikachu Caps</label>
								</div>
							</div>
						</div>
					</fieldset>
				</div>
				<div>
					<fieldset>
						<legend>Display Options</legend>
						<div className="mt-2 flex gap-x-6 text-slate-600">
							<div className={checkboxGroupStyles}>
								<div className={checkboxContainerStyles}>
									<input type="checkbox" id="names" name="names" className={checkboxStyles} />
								</div>
								<div>
									<label htmlFor="names">Show Names</label>
								</div>
							</div>
							<div className={checkboxGroupStyles}>
								<div className={checkboxContainerStyles}>
									<input type="checkbox" id="numbers" name="numbers" className={checkboxStyles} />
								</div>
								<div>
									<label htmlFor="numbers">Show Numbers</label>
								</div>
							</div>
							<div className={checkboxGroupStyles}>
								<div className={checkboxContainerStyles}>
									<input type="checkbox" id="buttons" name="buttons" className={checkboxStyles} />
								</div>
								<div>
									<label htmlFor="buttons">
										Show Buttons
										<span className="block text-xs">Right click to open the state menu</span>
									</label>
								</div>
							</div>
						</div>
					</fieldset>
				</div>
			</div>
		</form>
	)
}

export default SVForm;