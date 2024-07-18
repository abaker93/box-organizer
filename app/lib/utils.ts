export const formatPokeNum = (num:number, len:number) => {
	return num.toString().padStart(len, '0')
}

export const getPokeName = (names:any, lang:string) => {
	return names.filter((f:any) => f.language === lang).map((m:any) => m.name)[0]
}