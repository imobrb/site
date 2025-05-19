import { API_URL } from '@/consts'
import formatReal from '@utils/formatReal'

// function replaceRoomsName (name='')  {
// 	name = name.replace('ITÓRIO(S)', '.')
// 	name = name.replace('INHA', '.')
// 	name = name.replace('HEIRO', '.')
// 	name = name.replace('ENDÊNCIA', '.')
// 	name = name.replace('GARAGEM', 'VAGA(s)')

// 	return name.toLocaleLowerCase()
// }

export default (data) => {
	return {
		title: `${data.dadosBasicos.tipoimovel} ${data.dadosBasicos.condominioresidencialedificio ? `- ` + data.dadosBasicos.condominioresidencialedificio : ''}`,
		subtitle: `${data.dadosBasicos.cidade} - ${data.dadosBasicos.bairro} ${data.valorLocacao ? ` - ` + data.dadosBasicos.endereco : ''}`,
		price: formatReal(Number(data.valorLocacao ? data.valorLocacao : data.valorVenda)),
		transactionType: data.valorLocacao ? 'Aluguel' : (data.valorVenda ? 'Venda' : ''),
		image: {
			alt:`${data.dadosBasicos.tipoimovel} ${data.dadosBasicos.condominioresidencialedificio ? `- ` + data.dadosBasicos.condominioresidencialedificio : ''}`,
			src: `${API_URL}/img?id=${data.dadosBasicos.codigo}&tamanho=347x196&imagem=${data.fotos}`
		},
		link: {
			label: 'Ver imóvel',
			href: `/imoveis/${data.dadosBasicos.codigo}`
		},
		rooms: data.comodos || []
	}
}