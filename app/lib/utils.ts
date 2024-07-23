import { useState } from 'react'

export const formatPokeNum = (num:number, len:number) => {
	return num.toString().padStart(len, '0')
}

export const getPokeName = (names:any, lang:string) => {
	return names.filter((f:any) => f.language === lang).map((m:any) => m.name)[0]
}

export const useLocalStorage = (key:any, initialValue:any)=> {
	const [state, setState] = useState(() => {
		try {
			const value = window.localStorage.getItem(key)
			return value ? JSON.parse(value) : initialValue
		} catch (e) {
			console.log(e)
		}
	})

	const setValue = (value:any) => {
		try {
			const valueToStore = value instanceof Function ? value(state) : value
			window.localStorage.setItem(key, JSON.stringify(valueToStore))
			setState(value)
		} catch (e) {
			console.log(e)
		}
	}

	return [state, setValue]
}