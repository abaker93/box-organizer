export const getPokeName = (names:any, lang:string) => {
	return names.filter((f:any) => f.language === lang).map((m:any) => m.name)[0]
}