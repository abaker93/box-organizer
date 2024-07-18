const SVForm = () => {
	const pokedex = [
		'National',
		'Paldea',
		'Kitakami',
		'Blueberry'
	]

	const checkboxStyles = 'h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'

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
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						>
							{pokedex.map((pokedex) => (
								<option key={pokedex}>{pokedex}</option>
							))}
						</select>
					</div>
				</div>
				<div>
					<fieldset>
						<legend>Show</legend>
						<div className="mt-2 flex gap-x-6">
							<div className="flex gap-x-2 items-center">
								<div className="flex h-6 items-center">
									<input type="checkbox" id="shiny" name="shiny" className={checkboxStyles} />
								</div>
								<div className="text-slate-600">
									<label htmlFor="shiny">Shiny</label>
								</div>
							</div>
							<div className="flex gap-x-2 items-center">
								<div className="flex h-6 items-center">
									<input type="checkbox" id="gender" name="gender" className={checkboxStyles} />
								</div>
								<div className="text-slate-600">
									<label htmlFor="gender">Gender Differences</label>
								</div>
							</div>
							<div className="flex gap-x-2 items-center">
								<div className="flex h-6 items-center">
									<input type="checkbox" id="forms" name="forms" className={checkboxStyles} />
								</div>
								<div className="text-slate-600">
									<label htmlFor="forms">Multiple Forms</label>
								</div>
							</div>
							<div className="flex gap-x-2 items-center">
								<div className="flex h-6 items-center">
									<input type="checkbox" id="caps" name="caps" className={checkboxStyles} />
								</div>
								<div className="text-slate-600">
									<label htmlFor="caps">Pikachu Caps</label>
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