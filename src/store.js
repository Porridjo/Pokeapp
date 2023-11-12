import { writable } from 'svelte/store'

export const pokemonStore = writable([])
export const isFirstLoadingStore = writable(true)
export const isLoadingStore = writable(true)
export const isLoadedStore = writable(false)
export const counterStore = writable(0)
export const currentPageNumberStore = writable(1)