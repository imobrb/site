import { computed } from 'vue'

interface BreadcrumbItem {
	label: string
	url?: string
}

interface PropertyData {
	dadosBasicos?: {
		tiponegocio?: string
		tipoimovel?: string
		endereco?: string
	}
}

interface CurrentPage {
	label: string
	url?: string
}

export function useBreadcrumb(property?: PropertyData, currentPage?: CurrentPage) {
	const home = { label: 'Início', url: '/' }

	const breadcrumbItems = computed<BreadcrumbItem[]>(() => {
		const items: BreadcrumbItem[] = []

		if (property?.dadosBasicos) {
			const categoryLabel = property.dadosBasicos.tiponegocio === 'VENDA' ? 'Venda' : 'Locação'
			const categoryUrl =
				property.dadosBasicos.tiponegocio === 'VENDA' ? '/exclusivo-venda' : '/exclusivo-locacao'

			items.push(
				{ label: categoryLabel, url: categoryUrl },
				{ label: `${property.dadosBasicos.tipoimovel} - ${property.dadosBasicos.endereco}` }
			)
		}

		if (currentPage) {
			items.push(currentPage)
		}

		return items
	})

	return {
		home,
		breadcrumbItems
	}
}
