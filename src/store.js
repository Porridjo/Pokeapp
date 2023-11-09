import { writable } from 'svelte/store'

export const store = writable([])
export const isLoading = writable(true)