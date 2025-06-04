import { API_URL } from '@/consts'
import formatReal from '@utils/formatReal'

export default (data) => {
	const code = data.dadosBasicos.codigo
	const title = `${data.dadosBasicos.tipoimovel} ${data.dadosBasicos.condominioresidencialedificio ? `- ` + data.dadosBasicos.condominioresidencialedificio : ''}`
	const subtitle = `${data.dadosBasicos.cidade} - ${data.dadosBasicos.bairro} ${data.valorLocacao ? ` - ` + data.dadosBasicos.endereco : ''}`
	const imageSrc = typeof data.fotos === 'string' ? data.fotos : data.fotos[parseInt(Math.random() * data.fotos.length)]?.caminho
	const transactionType = typeof data.valorLocacao === 'string' || data.valorLocacao?.valordoaluguelmaximo ? 'Aluguel' : 'Venda'
	const price = Number(typeof data.valorLocacao === 'string' ? data.valorLocacao : data.valorLocacao?.valordoaluguelmaximo ? data.valorLocacao?.valordoaluguelmaximo : typeof data.valorVenda === 'string' ? data.valorVenda : data.valorVenda.valordevendamaximo ? data.valorVenda.valordevendamaximo : '')
	const parsedPrice = formatReal(price)

	return {
		code: code,
		title: title,
		subtitle: subtitle,
		price: parsedPrice,
		transactionType: transactionType,
		image: {
			alt: title,
			src: `${API_URL}/img?id=${code}&tamanho=347x196&imagem=${imageSrc}`
		},
		link: {
			label: 'Ver imóvel',
			href: `/imoveis/?imovel=${code}`
		},
		rooms: data.comodos || []
	}
}
