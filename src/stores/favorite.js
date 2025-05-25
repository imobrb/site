import { atom } from 'nanostores'

export const $favorites = atom([])

export function storeSetFavorites(ids) {
	return $favorites.set(Array.isArray(ids) ? [...new Set(ids)] : [])
}

export function storeAddFavorite(id) {
	if (!$favorites.get().includes(id)) {
		return $favorites.set([...$favorites.get(), id])
	}
}

export function storeToggleFavorite(id) {
	if (!$favorites.get().includes(id)) {
		return $favorites.set([...$favorites.get(), id])
	} else {
		return storeRemoveFavorite(id)
	}
}

export function storeGetAllFavorites() {
	return $favorites.get()
}

export function storeGetFavoriteById(id) {
	return $favorites.get().find((favId) => favId === id)
}

export function storeRemoveFavorite(id) {
	$favorites.set($favorites.get().filter((favId) => favId !== id))
}

export function storeIsFavorite(id) {
	return $favorites.get().includes(id)
}
