import { API_URL } from '@/consts'
import formatReal from '@utils/formatReal'

const parseRentPrice = (data) => {
	return typeof data.valorLocacao === 'string'
		? data.valorLocacao
		: data.valorLocacao?.valordoaluguelmaximo
			? data.valorLocacao?.valordoaluguelmaximo
			: null
}

const parseSalePrice = (data) => {
	return typeof data.valorVenda === 'string'
		? data.valorVenda
		: data.valorVenda.valordevendamaximo
			? data.valorVenda.valordevendamaximo
			: null
}

const parseTransactionType = (data) => {
	return typeof data.valorLocacao === 'string' || data.valorLocacao?.valordoaluguelmaximo
		? 'Aluguel'
		: 'Venda'
}

const parseImageSrc = (data) => {
	return typeof data.fotos === 'string'
		? data.fotos
		: data.fotos[parseInt(Math.random() * data.fotos.length)]?.caminho
}

const parseTitle = (data) => {
	return `${data.dadosBasicos.tipoimovel} ${data.dadosBasicos.condominioresidencialedificio ? `- ` + data.dadosBasicos.condominioresidencialedificio : ''}`
}

const parseSubTitle = (data) => {
	return `${data.dadosBasicos.cidade} - ${data.dadosBasicos.bairro} ${data.valorLocacao ? ` - ` + data.dadosBasicos.endereco : ''}`
}

export default (data) => {
	const code = data.dadosBasicos.codigo
	const title = parseTitle(data)

	return {
		code: code,
		title: title,
		subtitle: parseSubTitle(data),
		price: formatReal(Number(parseRentPrice(data) || parseSalePrice(data))),
		transactionType: parseTransactionType(data),
		image: {
			alt: title,
			src: `${API_URL}/img?id=${code}&tamanho=347x196&imagem=${parseImageSrc(data)}`
		},
		link: {
			label: 'Ver imóvel',
			href: `/imoveis/?imovel=${code}`
		},
		rooms: data.comodos || []
	}
}
