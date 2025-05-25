import { API_URL } from '@/consts'
import formatReal from '@utils/formatReal'

export default (data) => {
	const code = data.dadosBasicos.codigo
	const title = `${data.dadosBasicos.tipoimovel} ${data.dadosBasicos.condominioresidencialedificio ? `- ` + data.dadosBasicos.condominioresidencialedificio : ''}`
	const subtitle = `${data.dadosBasicos.cidade} - ${data.dadosBasicos.bairro} ${data.valorLocacao ? ` - ` + data.dadosBasicos.endereco : ''}`
	const price = formatReal(Number(data.valorLocacao ? data.valorLocacao : data.valorVenda))
	const transactionType = data.valorLocacao ? 'Aluguel' : data.valorVenda ? 'Venda' : ''

	return {
		code: code,
		title: title,
		subtitle: subtitle,
		price: price,
		transactionType: transactionType,
		image: {
			alt: title,
			src: `${API_URL}/img?id=${code}&tamanho=347x196&imagem=${data.fotos}`
		},
		link: {
			label: 'Ver imóvel',
			href: `/imoveis/?imovel=${code}`
			// href: `/imoveis/${code}`
		},
		rooms: data.comodos || []
	}
}
