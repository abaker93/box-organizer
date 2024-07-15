export const getPokeName = (names:any, lang:string) => {
	return names.filter((f:any) => f.language.name === lang).map((m:any) => m.name)[0]
}