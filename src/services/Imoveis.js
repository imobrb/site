import { API_URL } from '@/consts'

class Imovel {
	constructor() {
		this.url = API_URL
		this.urlPhoto = API_URL
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
		// https://o2u4kwbklg.map.azionedge.net/imoveis-id/6251
		return await this.request('GET', this.buildUrl(`/imoveis-id/${id}`))
	}

	async getPropertyByCode(id) {
		// https://o2u4kwbklg.map.azionedge.net/imoveis-id/6251

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
		// https://o2u4kwbklg.map.azionedge.net/info-inicial
		return await this.request('GET', this.buildUrl('/info-inicial'))
	}

	getParamsSchema() {
		return {
			///////////////////////////
			// data size management //
			/////////////////////////
			pagina: null,
			ordenacao: null,
			qtdPagina: null,
			/////////////////
			// imovel data //
			/////////////////
			codigo_imovel: null,
			tipo_operacao: null,
			finalidade: null,
			tipo_imovel: null,
			cidade: null,
			bairro: null,
			qte_quartos: null,
			qte_suite: null,
			qte_vagas_garagem: null,
			qte_banheiros: null,
			area_util: null,
			cond_res_ed: null,
			valor_max: null,
			valor_min: null,
			permuta: null,
			lancamento: null,
			video: null,
			exclusivo: null
		}
	}

	async searchProperties(searchParams) {
		// https://o2u4kwbklg.map.azionedge.net/filtro?tipo_operacao=1&finalidade=null&tipo_imovel=null&cidade=null&bairro=null&qte_quartos=null&qte_suite=null&qte_vagas_garagem=null&qte_banheiros=null&area_util=null&cond_res_ed=null&valor_max=99999999999&valor_min=0.00&codigo_imovel=null&permuta=null&lancamento=null&video=N&pagina=1&qtdPagina=10&ordenacao=2&exclusivo=null

		const mergeParams = Object.assign(this.getParamsSchema(), searchParams)
		const urlsearchparams = new URLSearchParams(mergeParams)
		const url = this.buildUrl(`/filtro?${urlsearchparams.toString()}`)

		const request = await this.request('GET', url)
		const data = {
			total: 0,
			items: []
		}

		if (request.length) {
			data.total = request[0].totalimoveis
			data.items = request.slice(1)
		}

		// if (this.exclusives === 'S' && request) {
		// 	const total = request[0]
		// 	const properties = request.slice(1)
		// 	const updatedProperties = this.setExclusiveSingle(properties)

		// 	updatedProperties.unshift(total)
		// 	return updatedProperties
		// }

		return data
	}

	setExclusiveSingle(data) {
		if (!Array.isArray(data)) return []

		data.forEach((exclusiveItem) => {
			exclusiveItem.exclusive = true
		})

		return data
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

	// async favoriteProperties(properties = []) {
	// 	return properties.length ? await this.featured(properties) : []
	// }

	// async featured(properties) {
	// 	const propertyList = []

	// 	for (let property of properties) {
	// 		if (property) {
	// 			const propertyDetails = await this.getProperty(property)
	// 			propertyList.push(propertyDetails)
	// 		}
	// 	}

	// 	return propertyList
	// }

	// propertyValue(value) {
	// 	return typeof value === 'object' ? Object.values(value)[0] : value
	// }

	async exclusiveRentedProperties(limit, sortOrder) {
		const properties = await this.exclusiveProperties(limit, sortOrder)
		const result = this.setExclusiveSingle(properties.locacao)

		return result
	}

	async exclusiveSaleProperties(limit, sortOrder) {
		const properties = await this.exclusiveProperties(limit, sortOrder)
		const result = this.setExclusiveSingle(properties.venda)

		return result
	}

	async rentedFeaturedProperties(limit, sortOrder) {
		const properties = await this.featuredProperties(limit, sortOrder)
		return properties.locacao
	}

	async featuredSaleProperties(limit, sortOrder) {
		const properties = await this.featuredProperties(limit, sortOrder)
		return properties.venda
	}

	async exclusiveRentedByType(type, pageQuantity, page, sortOrder) {
		const url = this.buildUrl(
			`/filtro?tipo_operacao=2&finalidade=null&tipo_imovel=${type}&cidade=null&bairro=null&qte_quartos=null&qte_suite=null&qte_vagas_garagem=null&qte_banheiros=null&area_util=null&cond_res_ed=null&valor_max=99999999999&valor_min=null&codigo_imovel=null&permuta=null&lancamento=null&video=null&exclusivo=S&pagina=${page}&qtdPagina=${pageQuantity}&ordenacao=${sortOrder}`
		)
		return await this.request('GET', url)
	}

	async exclusiveSaleByType(type, pageQuantity, page, sortOrder) {
		const url = this.buildUrl(
			`/filtro?tipo_operacao=1&finalidade=null&tipo_imovel=${type}&cidade=null&bairro=null&qte_quartos=null&qte_suite=null&qte_vagas_garagem=null&qte_banheiros=null&area_util=null&cond_res_ed=null&valor_max=99999999999&valor_min=null&codigo_imovel=null&permuta=null&lancamento=null&video=null&exclusivo=S&pagina=${page}&qtdPagina=${pageQuantity}&ordenacao=${sortOrder}`
		)
		return await this.request('GET', url)
	}

	async rentedByType(type, pageQuantity, page, sortOrder) {
		const url = this.buildUrl(
			`/filtro?tipo_operacao=2&finalidade=null&tipo_imovel=${type}&cidade=null&bairro=null&qte_quartos=null&qte_suite=null&qte_vagas_garagem=null&qte_banheiros=null&area_util=null&cond_res_ed=null&valor_max=99999999999&valor_min=null&codigo_imovel=null&permuta=null&lancamento=null&video=null&exclusivo=null&pagina=${page}&qtdPagina=${pageQuantity}&ordenacao=${sortOrder}`
		)
		return await this.request('GET', url)
	}

	async saleByType(type, pageQuantity, page, sortOrder) {
		const url = this.buildUrl(
			`/filtro?tipo_operacao=1&finalidade=null&tipo_imovel=${type}&cidade=null&bairro=null&qte_quartos=null&qte_suite=null&qte_vagas_garagem=null&qte_banheiros=null&area_util=null&cond_res_ed=null&valor_max=99999999999&valor_min=null&codigo_imovel=null&permuta=null&lancamento=null&video=null&exclusivo=null&pagina=${page}&qtdPagina=${pageQuantity}&ordenacao=${sortOrder}`
		)
		return await this.request('GET', url)
	}
}

export default Imovel
