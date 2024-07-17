export default async function getPokedex(dex:string) {
	const res = await fetch('https://us-east-2.aws.data.mongodb-api.com/app/data-goxxqig/endpoint/data/v1/action/find', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.API_KEY!,
    },
    body: JSON.stringify({
			"collection": dex,
			"database": "pokedexes",
			"dataSource": "pokemon-box-organizer"
		}),
  })

	return res.json()
}