const FAVORITES_KEY = 'favorites'

export function storageGetFavorites() {
	const data = localStorage.getItem(FAVORITES_KEY)

	try {
		return data ? JSON.parse(data) : []
	} catch {
		return []
	}
}

function storageSetFavorites(favorites) {
	localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
}

export function storageAddFavorite(id) {
	const favorites = storageGetFavorites()

	if (!favorites.includes(id)) {
		storageSetFavorites([...favorites, id])
	}
}

export function storageRemoveFavorite(code) {
	let favorites = storageGetFavorites()
	favorites = favorites.filter((item) => item !== code)

	storageSetFavorites(favorites)
}

export function storageToggleFavorite(id) {
	const favorites = storageGetFavorites()

	if (!favorites.includes(id)) {
		storageSetFavorites([...favorites, id])
	} else {
		storageRemoveFavorite(id)
	}
}

export function storageClearFavorites() {
	storageSetFavorites([])
}

export function storageIsFavorite(code) {
	const favorites = storageGetFavorites()
	return favorites.includes(code)
}
