import { API_URL } from '@/consts'

class Imovel {
	constructor() {
		this.url = API_URL
		this.urlPhoto = API_URL

		this.operationType = 2 // RENTAL
		this.propertyType = 1 // HOUSE

		this.maxValue = 99999999999
		this.minValue = 0.0
		this.page = 1
		this.purpose = null
		this.city = null
		this.neighborhood = null
		this.numBedrooms = null
		this.numSuites = null
		this.numGarageSpaces = null
		this.numBathrooms = null
		this.livableArea = null
		this.condoResidential = null
		this.propertyCode = null
		this.tradeIn = null
		this.launch = null
		this.video = null
		this.pageQuantity = null
		this.sortOrder = 1
		this.exclusives = null
	}

	getImage(property, image, size = '888x500') {
		return `${this.urlPhoto}?id=${property}&tamanho=${size}&imagem=${image}`
	}

	photo(property, nameImg, size) {
		if (Array.isArray(nameImg)) {
			for (let img of nameImg) {
				if (img.main.toUpperCase() === 'S') {
					nameImg = img.path
				}
			}
		}
		return this.getImage(property, nameImg, size)
	}

	baseUrl() {
		return `${this.url}`
	}

	buildUrl(endpoint) {
		endpoint = endpoint.replace(/ /g, '')
		return `${this.baseUrl()}${endpoint}`
	}

	async request(method = 'GET', url, data = null) {
		const options = {
			method,
			headers: {
				'Content-Type': 'application/json'
			}
		}

		if (method === 'POST' || method === 'PUT') {
			options.body = JSON.stringify(data)
		}

		try {
			const response = await fetch(url, options)
			const result = await response.json()
			return result
		} catch (error) {
			console.error('ERROR request:', error)
			return null
		}
	}

	async getProperty(id) {
		const url = this.buildUrl(`/imoveis-id/${id}`)
		return await this.request('GET', url)
	}

	async getPropertyByCode(id) {
		const url = this.buildUrl(`/imoveis-id/${id}`)
		const request = await this.request('GET', url)

		if (!request) {
			return {
				totalProperties: 0,
				data: null,
				error: 'Falha ao buscar imóvel'
			}
		}

		if (request.message) {
			return {
				totalProperties: 0,
				data: null,
				error: request.message
			}
		}

		return {
			totalProperties: 1,
			data: request
		}
	}

	async initialInfo() {
		const url = this.buildUrl('/info-inicial')
		return await this.request('GET', url)
	}

	async searchProperties() {
		const url = this.buildUrl(
			`/filtro?tipo_operacao=${this.operationType}&finalidade=${this.purpose}&tipo_imovel=${this.propertyType}&cidade=${this.city}&bairro=${this.neighborhood}&qte_quartos=${this.numBedrooms}&qte_suite=${this.numSuites}&qte_vagas_garagem=${this.numGarageSpaces}&qte_banheiros=${this.numBathrooms}&area_util=${this.livableArea}&cond_res_ed=${this.condoResidential}&valor_max=${this.maxValue}&valor_min=${this.minValue}&codigo_imovel=${this.propertyCode}&permuta=${this.tradeIn}&lancamento=${this.launch}&video=${this.video}&pagina=${this.page}&ordenacao=${this.sortOrder}&qtdPagina=${this.pageQuantity}&exclusivo=${this.exclusives}`
		)

		const request = await this.request('GET', url)

		if (this.exclusives === 'S' && request) {
			const total = request[0]
			const properties = request.slice(1)
			const updatedProperties = this.setExclusiveSingle(properties)
			updatedProperties.unshift(total)
			return updatedProperties
		}

		return request
	}

	setExclusiveSingle(data) {
		if (!Array.isArray(data)) return []
		data.forEach((exclusiveItem) => {
			exclusiveItem.exclusive = true
		})
		return data
	}

	setData(data) {
		this.operationType = data.operationType || 1
		this.purpose = data.purpose || null
		this.propertyType = data.propertyType || null
		this.city = data.city || null
		this.neighborhood = data.neighborhood ? data.neighborhood.replace(' ', '%').toUpperCase() : null
		this.numBedrooms = data.bedrooms || null
		this.numSuites = data.suites || null
		this.numGarageSpaces = data.garageSpaces || null
		this.numBathrooms = data.bathrooms || null
		this.livableArea = data.livableArea || null
		this.condoResidential = data.condoResidential || null
		this.maxValue = data.maxValue || 99999999999
		this.minValue = data.minValue || 0.0
		this.propertyCode = data.propertyCode || null
		this.tradeIn = data.tradeIn || null
		this.launch = data.launch || null
		this.video = data.video || null
		this.page = data.page || null
		this.pageQuantity = data.pageQuantity || 20
		this.sortOrder = data.sortOrder || 2
		this.exclusives = data.exclusives || null
		return this
	}

	async featuredProperties(limit = 1, sortOrder = 2) {
		const url = this.buildUrl(`/imoveis/destaques?limite=${limit}&ordenacao=${sortOrder}`)
		return await this.request('GET', url)
	}

	async exclusiveProperties(limit = 1, sortOrder = 2) {
		const url = this.buildUrl(`/imoveis/exclusivos?limite=${limit}&ordenacao=${sortOrder}`)
		const request = await this.request('GET', url)
		request.sale = this.setExclusiveSingle(request.sale)
		request.rental = this.setExclusiveSingle(request.rental)
		return request
	}

	async favoriteProperties(properties) {
		const propertiesArray = properties.split(',')
		return await this.featured(propertiesArray)
	}

	async featured(properties) {
		const propertyList = []
		for (let property of properties) {
			if (property) {
				const propertyDetails = await this.getProperty(property)
				propertyList.push(propertyDetails)
			}
		}
		return propertyList
	}

	propertyValue(value) {
		return typeof value === 'object' ? Object.values(value)[0] : value
	}
}

export default Imovel
