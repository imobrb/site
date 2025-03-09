//https://o2u4kwbklg.map.azionedge.net/info-inicial

const json = {
	tipoDeOperacao: [
		{
			id: 2,
			nome: 'LOCA\u00c7\u00c3O'
		},
		{
			id: 1,
			nome: 'VENDA'
		}
	],
	tipoDeImovel: [
		{
			id: 3,
			nome: 'APARTAMENTO'
		},
		{
			id: 5,
			nome: 'BARRAC\u00c3O \/ SAL\u00c3O COMERCIAL'
		},
		{
			id: 1,
			nome: 'CASA'
		},
		{
			id: 12,
			nome: 'CASA CONDOM\u00cdNIO'
		},
		{
			id: 16,
			nome: 'CH\u00c1CARA'
		},
		{
			id: 4,
			nome: 'COMERCIAL'
		},
		{
			id: 17,
			nome: 'FAZENDA'
		},
		{
			id: 6,
			nome: 'GARAGEM'
		},
		{
			id: 15,
			nome: 'KITNET'
		},
		{
			id: 11,
			nome: 'SALA COMERCIAL'
		},
		{
			id: 10,
			nome: 'SAL\u00c3O'
		},
		{
			id: 2,
			nome: 'SOBRADO'
		},
		{
			id: 8,
			nome: 'S\u00cdTIO'
		},
		{
			id: 7,
			nome: 'TERRENO'
		},
		{
			id: 14,
			nome: 'TERRENO CONDOM\u00cdNIO'
		},
		{
			id: 9,
			nome: '\u00c1REA'
		}
	],
	finalidadesDoImovel: [
		{
			id: 'C',
			nome: 'COMERCIAL'
		},
		{
			id: 'R',
			nome: 'RESIDENCIAL'
		},
		{
			id: 'A',
			nome: 'RESIDENCIAL\/COMERCIAL'
		}
	],
	comodos: [
		{
			id: 16,
			nome: 'BANHEIRO'
		},
		{
			id: 18,
			nome: 'CLOSET'
		},
		{
			id: 9,
			nome: 'COPA'
		},
		{
			id: 10,
			nome: 'COZINHA'
		},
		{
			id: 32,
			nome: 'COZINHA PLANEJADA'
		},
		{
			id: 12,
			nome: 'DEPEND\u00caNCIA EMPREGADA'
		},
		{
			id: 11,
			nome: 'DESPENSA'
		},
		{
			id: 1,
			nome: 'DORMIT\u00d3RIO(S)'
		},
		{
			id: 15,
			nome: 'ED\u00cdCULA'
		},
		{
			id: 8,
			nome: 'ESCRIT\u00d3RIO'
		},
		{
			id: 17,
			nome: 'GARAGEM'
		},
		{
			id: 25,
			nome: 'HALL'
		},
		{
			id: 6,
			nome: 'LAVABO'
		},
		{
			id: 14,
			nome: 'LAVANDERIA'
		},
		{
			id: 21,
			nome: 'P\u00c1TIO'
		},
		{
			id: 27,
			nome: 'QUARTO DE HOSPEDES'
		},
		{
			id: 29,
			nome: 'RECEP\u00c7\u00c3O'
		},
		{
			id: 19,
			nome: 'SACADA'
		},
		{
			id: 30,
			nome: 'SACADA COM CHURRASQUEIRA'
		},
		{
			id: 5,
			nome: 'SALA'
		},
		{
			id: 28,
			nome: 'SALA DE ESPERA'
		},
		{
			id: 23,
			nome: 'SALA DE JANTAR'
		},
		{
			id: 24,
			nome: 'SALA DE VISITA'
		},
		{
			id: 31,
			nome: 'SALA TV'
		},
		{
			id: 3,
			nome: 'SALA \u00cdNTIMA'
		},
		{
			id: 20,
			nome: 'SAL\u00c3O COMERCIAL'
		},
		{
			id: 22,
			nome: 'SOBRELOJA'
		},
		{
			id: 2,
			nome: 'SU\u00cdTE'
		},
		{
			id: 13,
			nome: 'WC EMPREGADA'
		},
		{
			id: 26,
			nome: '\u00c1REA DE SERVI\u00c7O'
		}
	],
	areasDeLazer: [
		{
			id: 10,
			nome: 'ACADEMIA'
		},
		{
			id: 23,
			nome: 'AREA'
		},
		{
			id: 26,
			nome: 'AREA FRENTE'
		},
		{
			id: 27,
			nome: 'AREA FUNDO'
		},
		{
			id: 29,
			nome: 'BALC\u00c3O'
		},
		{
			id: 38,
			nome: 'BANHEIRO EXTERNO'
		},
		{
			id: 22,
			nome: 'CAMPO DE FUTEBOL'
		},
		{
			id: 33,
			nome: 'CASCATA'
		},
		{
			id: 1,
			nome: 'CHURRASQUEIRA'
		},
		{
			id: 2,
			nome: 'CHURRASQUEIRA ALVENARIA'
		},
		{
			id: 21,
			nome: 'COMPLETA'
		},
		{
			id: 34,
			nome: 'DUCHA'
		},
		{
			id: 36,
			nome: 'ESPA\u00c7O GOURMET'
		},
		{
			id: 32,
			nome: 'FOG\u00c3O A LENHA'
		},
		{
			id: 31,
			nome: 'FORNO A LENHA'
		},
		{
			id: 28,
			nome: 'FORNO DE PIZZA'
		},
		{
			id: 39,
			nome: 'FORNO ELETRICO'
		},
		{
			id: 35,
			nome: 'JACUZZI'
		},
		{
			id: 17,
			nome: 'JARDIM'
		},
		{
			id: 30,
			nome: 'PIA'
		},
		{
			id: 6,
			nome: 'PISCINA'
		},
		{
			id: 8,
			nome: 'PLAYGROUND'
		},
		{
			id: 11,
			nome: 'QUADRA'
		},
		{
			id: 12,
			nome: 'QUADRA DE T\u00caNIS'
		},
		{
			id: 18,
			nome: 'QUINTAL'
		},
		{
			id: 24,
			nome: 'QUIOSQUE'
		},
		{
			id: 13,
			nome: 'SACADA CHURRASQUEIRA'
		},
		{
			id: 25,
			nome: 'SALA DE GIN\u00c1STICA'
		},
		{
			id: 20,
			nome: 'SALA DE JOGOS'
		},
		{
			id: 19,
			nome: 'SAL\u00c3O'
		},
		{
			id: 9,
			nome: 'SAL\u00c3O FESTAS'
		},
		{
			id: 5,
			nome: 'SAUNA'
		},
		{
			id: 40,
			nome: 'SPA'
		},
		{
			id: 15,
			nome: 'VARANDA'
		},
		{
			id: 16,
			nome: 'VARAND\u00c3O'
		},
		{
			id: 37,
			nome: 'VESTI\u00c1RIO'
		}
	],
	benfeitorias: [
		{
			id: 48,
			nome: 'ADEGA'
		},
		{
			id: 19,
			nome: 'ALARME'
		},
		{
			id: 93,
			nome: 'ANTENA'
		},
		{
			id: 69,
			nome: 'APARELHO DE RAIO X'
		},
		{
			id: 90,
			nome: 'AQUECEDOR A G\u00c1S'
		},
		{
			id: 16,
			nome: 'AQUECEDOR SOLAR'
		},
		{
			id: 46,
			nome: 'AR CONDICIONADO'
		},
		{
			id: 1,
			nome: 'ARM\u00c1RIO'
		},
		{
			id: 2,
			nome: 'ARM\u00c1RIO EMBUTIDO'
		},
		{
			id: 12,
			nome: 'ARM\u00c1RIO ESCRIT\u00d3RIO'
		},
		{
			id: 110,
			nome: 'ASFALTO'
		},
		{
			id: 97,
			nome: 'ASSOALHO'
		},
		{
			id: 111,
			nome: 'ATERRADO COM MURO DE ARRIMO'
		},
		{
			id: 67,
			nome: 'AUTO-CLAVE'
		},
		{
			id: 30,
			nome: 'BALC\u00c3O'
		},
		{
			id: 32,
			nome: 'BALC\u00c3O DE M\u00c1RMORE'
		},
		{
			id: 31,
			nome: 'BALC\u00c3O REFRIGERADO'
		},
		{
			id: 70,
			nome: 'BANCOS'
		},
		{
			id: 43,
			nome: 'BARRAC\u00c3O'
		},
		{
			id: 65,
			nome: 'BEBEDOURO'
		},
		{
			id: 86,
			nome: 'BLINDEX'
		},
		{
			id: 81,
			nome: 'BOX BANHEIRO'
		},
		{
			id: 7,
			nome: 'BOX DE ACR\u00cdLICO'
		},
		{
			id: 3,
			nome: 'BOX DE BLINDEX'
		},
		{
			id: 40,
			nome: 'BOX PVC'
		},
		{
			id: 57,
			nome: 'CABEAMENTO PARA INFORM\u00c1TICA'
		},
		{
			id: 60,
			nome: 'CABO DE TV'
		},
		{
			id: 71,
			nome: 'CADEIRA'
		},
		{
			id: 66,
			nome: 'CADEIRA DENTISTA'
		},
		{
			id: 75,
			nome: 'CAIXA DE ENERGIA PARA BANCO'
		},
		{
			id: 73,
			nome: 'CAIXA DE SOM'
		},
		{
			id: 106,
			nome: 'CAL\u00c7AMENTO'
		},
		{
			id: 14,
			nome: 'CAMA'
		},
		{
			id: 18,
			nome: 'CAMERA'
		},
		{
			id: 26,
			nome: 'CAMPAINHA'
		},
		{
			id: 61,
			nome: 'CANIL'
		},
		{
			id: 101,
			nome: 'CARTEIRA DE CLIENTE'
		},
		{
			id: 17,
			nome: 'CERCA EL\u00c9TRICA'
		},
		{
			id: 119,
			nome: 'COIFA'
		},
		{
			id: 113,
			nome: 'COZINHA PLANEJADA'
		},
		{
			id: 85,
			nome: 'ELEVADOR'
		},
		{
			id: 56,
			nome: 'ENERGIA'
		},
		{
			id: 107,
			nome: 'ENERGIA EL\u00c9TRICA'
		},
		{
			id: 125,
			nome: 'ENERGIA FOTOVOLTAICA'
		},
		{
			id: 120,
			nome: 'ENERGIA SOLAR'
		},
		{
			id: 96,
			nome: 'ESCADA'
		},
		{
			id: 100,
			nome: 'ESTOQUE DE MERCADORIA'
		},
		{
			id: 53,
			nome: 'FACHADA DE BLINDEX'
		},
		{
			id: 112,
			nome: 'FACHADA DE VIDRO'
		},
		{
			id: 83,
			nome: 'FOG\u00c3O'
		},
		{
			id: 115,
			nome: 'FOG\u00c3O A LENHA'
		},
		{
			id: 84,
			nome: 'FOG\u00c3O COOKTOP'
		},
		{
			id: 114,
			nome: 'FOG\u00c3O EL\u00c9TRICO'
		},
		{
			id: 29,
			nome: 'FORNO'
		},
		{
			id: 117,
			nome: 'FORNO A LENHA'
		},
		{
			id: 116,
			nome: 'FORNO EL\u00c9TRICO'
		},
		{
			id: 10,
			nome: 'GABINETE'
		},
		{
			id: 79,
			nome: 'GADO'
		},
		{
			id: 122,
			nome: 'GELADEIRA'
		},
		{
			id: 49,
			nome: 'GERADOR DE ENERGIA'
		},
		{
			id: 87,
			nome: 'GRADE DE PROTE\u00c7\u00c3O'
		},
		{
			id: 62,
			nome: 'GUARITA'
		},
		{
			id: 109,
			nome: 'GUIAS\/SARJETA'
		},
		{
			id: 6,
			nome: 'HACK EMBUTIDO'
		},
		{
			id: 28,
			nome: 'HIDROMASSAGEM'
		},
		{
			id: 13,
			nome: 'HOME THEATER'
		},
		{
			id: 25,
			nome: 'INTERFONE'
		},
		{
			id: 95,
			nome: 'JANELA'
		},
		{
			id: 47,
			nome: 'JANELA BLINDEX'
		},
		{
			id: 4,
			nome: 'JANELA ESQUADRIA ALUM\u00cdNIO'
		},
		{
			id: 5,
			nome: 'JANELA ESQUADRIA FERRO'
		},
		{
			id: 8,
			nome: 'JANELA MADEIRA'
		},
		{
			id: 27,
			nome: 'JARDIM DE INVERNO'
		},
		{
			id: 88,
			nome: 'LAREIRA'
		},
		{
			id: 74,
			nome: 'LUMIN\u00c1RIA'
		},
		{
			id: 68,
			nome: 'MESA'
		},
		{
			id: 55,
			nome: 'MEZANINO'
		},
		{
			id: 121,
			nome: 'MICROONDAS'
		},
		{
			id: 77,
			nome: 'MINA DE \u00c1GUA'
		},
		{
			id: 72,
			nome: 'MOBILIADO'
		},
		{
			id: 44,
			nome: 'MONITORAMENTO'
		},
		{
			id: 82,
			nome: 'MOVEIS'
		},
		{
			id: 108,
			nome: 'MURO'
		},
		{
			id: 124,
			nome: 'M\u00c1QUINA DE LAVAR'
		},
		{
			id: 89,
			nome: 'NICHO NA PAREDE'
		},
		{
			id: 118,
			nome: 'PAINEL'
		},
		{
			id: 91,
			nome: 'PERSIANA'
		},
		{
			id: 33,
			nome: 'PIA DE M\u00c1RMORE'
		},
		{
			id: 34,
			nome: 'PIA GRANITO'
		},
		{
			id: 36,
			nome: 'PIA LOU\u00c7A'
		},
		{
			id: 35,
			nome: 'PIA TRAVERTINO'
		},
		{
			id: 50,
			nome: 'PISO T\u00c9RMICO'
		},
		{
			id: 9,
			nome: 'PORTA BALC\u00c3O'
		},
		{
			id: 58,
			nome: 'PORTA CORRER'
		},
		{
			id: 104,
			nome: 'PORTA DE FERRO'
		},
		{
			id: 41,
			nome: 'PORTA DE MADEIRA'
		},
		{
			id: 102,
			nome: 'PORTA ELETRONICA'
		},
		{
			id: 52,
			nome: 'PORTA EM BLINDEX'
		},
		{
			id: 59,
			nome: 'PORTA ENROLAR'
		},
		{
			id: 99,
			nome: 'PORTA PARA ENTRADA DE CAMINH\u00c3O'
		},
		{
			id: 38,
			nome: 'PORTARIA 24 HORAS'
		},
		{
			id: 98,
			nome: 'PORTEIRO ELETR\u00d4NICO'
		},
		{
			id: 63,
			nome: 'PORT\u00c3O'
		},
		{
			id: 103,
			nome: 'PORT\u00c3O AUTOM\u00c1TICO'
		},
		{
			id: 20,
			nome: 'PORT\u00c3O BASCULANTE'
		},
		{
			id: 21,
			nome: 'PORT\u00c3O BASCULANTE ELETR\u00d4NICO'
		},
		{
			id: 22,
			nome: 'PORT\u00c3O DESLIZANTE'
		},
		{
			id: 23,
			nome: 'PORT\u00c3O DESLIZANTE ELETR\u00d4NICO'
		},
		{
			id: 37,
			nome: 'PORT\u00c3O ELETR\u00d4NICO'
		},
		{
			id: 24,
			nome: 'PORT\u00c3O SOCIAL ELETR\u00d4NICO'
		},
		{
			id: 78,
			nome: 'PO\u00c7O ARTESIANO'
		},
		{
			id: 51,
			nome: 'P\u00c9 DIREITO'
		},
		{
			id: 11,
			nome: 'ROUPEIRO'
		},
		{
			id: 76,
			nome: 'SISTEMA TELEFONICO'
		},
		{
			id: 45,
			nome: 'SISTEMA TV INTERNO'
		},
		{
			id: 64,
			nome: 'SOF\u00c1'
		},
		{
			id: 94,
			nome: 'SOM AMBIENTE'
		},
		{
			id: 123,
			nome: 'TELEVIS\u00c2O'
		},
		{
			id: 92,
			nome: 'TERRENO'
		},
		{
			id: 80,
			nome: 'VARAL DE ALUMINIO'
		},
		{
			id: 15,
			nome: 'VENTILADOR TETO'
		},
		{
			id: 39,
			nome: 'VESTI\u00c1RIO'
		},
		{
			id: 54,
			nome: 'VITRINE'
		},
		{
			id: 105,
			nome: '\u00c1GUA\/ESGOTO'
		}
	],
	cidades: [
		{
			id: 11522,
			nome: 'ALFREDO MARCONDES'
		},
		{
			id: 11540,
			nome: 'ALVARES MACHADO'
		},
		{
			id: 11539,
			nome: 'AMELIOPOLIS'
		},
		{
			id: 10898,
			nome: 'BALNEARIO CAMBORIU'
		},
		{
			id: 6064,
			nome: 'BATAGUASSU'
		},
		{
			id: 11710,
			nome: 'CAIUA'
		},
		{
			id: 11648,
			nome: 'CAMPINAS'
		},
		{
			id: 11721,
			nome: 'DRACENA'
		},
		{
			id: 11736,
			nome: 'EMILIANOPOLIS'
		},
		{
			id: 11818,
			nome: 'INDIANA'
		},
		{
			id: 11959,
			nome: 'MARTINOPOLIS'
		},
		{
			id: 11960,
			nome: 'MIRANTE DO PARANAPANEMA'
		},
		{
			id: 11933,
			nome: 'MONGAGUA'
		},
		{
			id: 11956,
			nome: 'MONTALVAO'
		},
		{
			id: 12462,
			nome: 'PALMAS'
		},
		{
			id: 12059,
			nome: 'PANORAMA'
		},
		{
			id: 12095,
			nome: 'PAULICEIA'
		},
		{
			id: 6138,
			nome: 'PEDRO GOMES'
		},
		{
			id: 12072,
			nome: 'PIRAPOZINHO'
		},
		{
			id: 12082,
			nome: 'PRESIDENTE BERNARDES'
		},
		{
			id: 12083,
			nome: 'PRESIDENTE EPITACIO'
		},
		{
			id: 12067,
			nome: 'PRESIDENTE PRUDENTE'
		},
		{
			id: 12098,
			nome: 'PRESIDENTE VENCESLAU'
		},
		{
			id: 12107,
			nome: 'RANCHARIA'
		},
		{
			id: 12115,
			nome: 'REGENTE FEIJO'
		},
		{
			id: 6422,
			nome: 'RONDONOPOLIS'
		},
		{
			id: 12239,
			nome: 'SANDOVALINA'
		},
		{
			id: 12151,
			nome: 'SANTO ANASTACIO'
		},
		{
			id: 9183,
			nome: 'SANTO INACIO'
		},
		{
			id: 12210,
			nome: 'SAO PAULO'
		},
		{
			id: 12263,
			nome: 'TACIBA'
		},
		{
			id: 12257,
			nome: 'TARABAI'
		},
		{
			id: 12301,
			nome: 'UBATUBA'
		}
	],
	bairros: [
		{
			nome: 'AEROPORTO'
		},
		{
			nome: 'AGUA DA CASCATA'
		},
		{
			nome: 'ALDEIA DO LAGO'
		},
		{
			nome: 'ALVARES MACHADO'
		},
		{
			nome: 'ANA JACINTA'
		},
		{
			nome: 'AREA RURAL'
		},
		{
			nome: 'ARILENA I'
		},
		{
			nome: 'BAIRRO CASCATA'
		},
		{
			nome: 'BAIRRO DO CEDRO'
		},
		{
			nome: 'BAIRRO GREENVILLE I'
		},
		{
			nome: 'BAIRRO MIRASSOL'
		},
		{
			nome: 'BALNEARIO CAMBORIU\/BAIRRO MU'
		},
		{
			nome: 'BOSQUE'
		},
		{
			nome: 'BOSQUE DA SAUDE'
		},
		{
			nome: 'BOSQUE DOS TAMBURIS'
		},
		{
			nome: 'BOSQUE ITAJU'
		},
		{
			nome: 'BOSQUE ITAJU\/PARQUE HIGIENOPOLIS'
		},
		{
			nome: 'BRASIL NOVO'
		},
		{
			nome: 'CAMPINAL'
		},
		{
			nome: 'CARAND\u00c1'
		},
		{
			nome: 'CECAP'
		},
		{
			nome: 'CEL GOULART'
		},
		{
			nome: 'CENTRAL PARK II'
		},
		{
			nome: 'CENTRAL PARK RESIDENCE'
		},
		{
			nome: 'CENTRO'
		},
		{
			nome: 'CEN\u00c1RIO PARQUE DO POVO'
		},
		{
			nome: 'CERQUEIRA CESAR'
		},
		{
			nome: 'CHACARA AGUIAR'
		},
		{
			nome: 'CHACARA ARTUR BOIGUES'
		},
		{
			nome: 'CHACARA DAS PAINEIRAS'
		},
		{
			nome: 'CHACARA FILAD\u00c9LFIA'
		},
		{
			nome: 'CHACARA JARDIM DO EDEN'
		},
		{
			nome: 'CHACARA MANTA'
		},
		{
			nome: 'CHACARAS AGUIAR'
		},
		{
			nome: 'CHACARAS ARILENE'
		},
		{
			nome: 'CHACARAS ARTHUR BOIGUES'
		},
		{
			nome: 'CHACARAS AZALEIA I'
		},
		{
			nome: 'CHACARAS AZALEIAS'
		},
		{
			nome: 'CHACARAS PRIMAVERA'
		},
		{
			nome: 'CHACARAS REAL'
		},
		{
			nome: 'CH\u00c1CARA DO MACUCO'
		},
		{
			nome: 'CH\u00c1CARAS AZAL\u00c9IAS'
		},
		{
			nome: 'CH\u00c1CARAS FILAD\u00c9LFIA'
		},
		{
			nome: 'CIDADE DA CRIAN\u00c7A'
		},
		{
			nome: 'CIDADE JARDIM'
		},
		{
			nome: 'CIDADE UNIVERSITARIA'
		},
		{
			nome: 'CIDADE UNIVERSIT\u00c1RIA'
		},
		{
			nome: 'COHAB'
		},
		{
			nome: 'COLINA DO SOL'
		},
		{
			nome: 'COND BOSQUE TAMBURIS'
		},
		{
			nome: 'COND CLUBE RES MONT BLANC'
		},
		{
			nome: 'COND JATOB\u00c1'
		},
		{
			nome: 'COND OASIS DO PARANAPANEMA'
		},
		{
			nome: 'COND PORTAL DO LAGO'
		},
		{
			nome: 'COND PORTO SEGURO'
		},
		{
			nome: 'COND RES SAINT MORITZ'
		},
		{
			nome: 'COND RESIDENCIAL ANAHY'
		},
		{
			nome: 'COND VALENCIA II'
		},
		{
			nome: 'COND. JARDIM IMPERIAL'
		},
		{
			nome: 'COND. RES. BELA VISTA'
		},
		{
			nome: 'COND. RES. PORTINARI II'
		},
		{
			nome: 'COND. RESIDENCIAL BELA VISTA'
		},
		{
			nome: 'COND. VILLAGE DAMH'
		},
		{
			nome: 'CONDOMINIO DAMHA II'
		},
		{
			nome: 'CONDOMINIO ECO PALACE'
		},
		{
			nome: 'CONDOMINIO GRAMADO'
		},
		{
			nome: 'CONDOMINIO JATOBA'
		},
		{
			nome: 'CONDOMINIO JATOB\u00c1'
		},
		{
			nome: 'CONDOMINIO PORTINARI'
		},
		{
			nome: 'CONDOMINIO PORTO BELO RESIDENCE'
		},
		{
			nome: 'CONDOMINIO PORTO MADERO'
		},
		{
			nome: 'CONDOMINIO PQ PRINCIPE DA BELGICA'
		},
		{
			nome: 'CONDOMINIO RES. SAINT PAUL II'
		},
		{
			nome: 'CONDOMINIO RESIDENCIAL MART VILLE'
		},
		{
			nome: 'CONDOMINIO RESIDENCIAL VALENCIA I'
		},
		{
			nome: 'CONDOMINIO RESIDENCIAL VALENCIA II'
		},
		{
			nome: 'CONDOMINIO SAINT MORITZ'
		},
		{
			nome: 'CONDOMINIO VALE DO CAFE'
		},
		{
			nome: 'CONDOMINIO VALE DOS REIS'
		},
		{
			nome: 'CONDOMINIO VILLAGE DAMHA'
		},
		{
			nome: 'CONDOMINIO VIVENDA'
		},
		{
			nome: 'CONDOM\u00cdNIO DAMHA BELVEDERE'
		},
		{
			nome: 'CONDOM\u00cdNIO PORTAL DAS PALMEIRAS'
		},
		{
			nome: 'CONDOM\u00cdNIO RESIDENCIAL JARDINS DE ANAHY'
		},
		{
			nome: 'CONDOM\u00cdNIO RESIDENCIAL SOLARES'
		},
		{
			nome: 'CONJ JOSE ROTA'
		},
		{
			nome: 'CONJ SITIO SAO PEDRO'
		},
		{
			nome: 'CONJUNTO HABITACIONAL ALCIDES'
		},
		{
			nome: 'CONJUNTO HABITACIONAL ALCIDES PEREZ VIDEIRA'
		},
		{
			nome: 'CONJUNTO HABITACIONAL ANA JACINTA'
		},
		{
			nome: 'CONJUNTO HABITACIONAL EME ANTONIO PIOCH FONTOLAN'
		},
		{
			nome: 'CONJUNTO HABITACIONAL JARDIM HUMBERTO SALVADOR'
		},
		{
			nome: 'CONJUNTO HABITACIONAL MARIO'
		},
		{
			nome: 'CONJUNTO HABITACIONAL M\u00c1RIO AMATO'
		},
		{
			nome: 'CONJUNTO SITIO SAO PEDRO'
		},
		{
			nome: 'CONJUNTO S\u00cdTIO S\u00c3O PEDRO'
		},
		{
			nome: 'CONS ISABEL MIZOBE'
		},
		{
			nome: 'CONSOLA\u00c7\u00c3O'
		},
		{
			nome: 'CORREGO DO MACACO'
		},
		{
			nome: 'DAMHA BEATRIZ'
		},
		{
			nome: 'DAMHA I'
		},
		{
			nome: 'DAMHA II'
		},
		{
			nome: 'DAMHA IV'
		},
		{
			nome: 'DISTRITO INDUSTRIAL'
		},
		{
			nome: 'ECO PALACE'
		},
		{
			nome: 'ECO PALACE III'
		},
		{
			nome: 'EDIFICIO PORTINARI'
		},
		{
			nome: 'EDIF\u00cdCIO PA\u00c7O REAL'
		},
		{
			nome: 'EDIF\u00cdCIO RESIDENCIAL EMBAIXADOR'
		},
		{
			nome: 'ESPIGAO'
		},
		{
			nome: 'ESQUEMA'
		},
		{
			nome: 'ESTRADA DA ALEGRIA'
		},
		{
			nome: 'FAZENDA BELA VISTA'
		},
		{
			nome: 'GLEBA III'
		},
		{
			nome: 'GRAMADO'
		},
		{
			nome: 'GRAMADO PARK RESIDENCIAL'
		},
		{
			nome: 'GRAMADO PARQUE RESIDENCIAL'
		},
		{
			nome: 'GRUPO EDUCACIONAL ESQUEMA'
		},
		{
			nome: 'HUMBERTO SALVADOR'
		},
		{
			nome: 'INOCOOP'
		},
		{
			nome: 'IZABEL MIZOBE'
		},
		{
			nome: 'JARDIM ALTO DA BOA VISTA'
		},
		{
			nome: 'JARDIM ALVORADA'
		},
		{
			nome: 'JARDIM AMERICA'
		},
		{
			nome: 'JARDIM ANTU\u00c9RPIA'
		},
		{
			nome: 'JARDIM AQUINOPOLIS'
		},
		{
			nome: 'JARDIM AQUIN\u00d3POLIS'
		},
		{
			nome: 'JARDIM AVIACAO'
		},
		{
			nome: 'JARDIM AVIA\u00c7\u00c3O'
		},
		{
			nome: 'JARDIM BALNEARIO'
		},
		{
			nome: 'JARDIM BARCELONA'
		},
		{
			nome: 'JARDIM BELA DARIA'
		},
		{
			nome: 'JARDIM BELA VISTA'
		},
		{
			nome: 'JARDIM BELO HORIZONTE'
		},
		{
			nome: 'JARDIM BONFIM'
		},
		{
			nome: 'JARDIM BONGIOVANI'
		},
		{
			nome: 'JARDIM BONGIOVANNI'
		},
		{
			nome: 'JARDIM BRASILIA'
		},
		{
			nome: 'JARDIM CAICARA'
		},
		{
			nome: 'JARDIM CAI\u00c7ARA'
		},
		{
			nome: 'JARDIM CALIFORNIA'
		},
		{
			nome: 'JARDIM CAMBUCI'
		},
		{
			nome: 'JARDIM CAMBUY'
		},
		{
			nome: 'JARDIM CAMPO BELO'
		},
		{
			nome: 'JARDIM CINQUENTENARIO'
		},
		{
			nome: 'JARDIM COBRAL'
		},
		{
			nome: 'JARDIM COLINA'
		},
		{
			nome: 'JARDIM COLINA DO SOL'
		},
		{
			nome: 'JARDIM DA HORT\u00caNSIAS'
		},
		{
			nome: 'JARDIM DANFER'
		},
		{
			nome: 'JARDIM DAS ROSAS'
		},
		{
			nome: 'JARDIM DOS IPES'
		},
		{
			nome: 'JARDIM DOS PIONEIROS'
		},
		{
			nome: 'JARDIM DUQUE DE CAXIAS'
		},
		{
			nome: 'JARDIM ELDORADO'
		},
		{
			nome: 'JARDIM ESPLANADA'
		},
		{
			nome: 'JARDIM ESTORIL'
		},
		{
			nome: 'JARDIM EVEREST'
		},
		{
			nome: 'JARDIM GUANABARA'
		},
		{
			nome: 'JARDIM HORIZONTE'
		},
		{
			nome: 'JARDIM HUMBERTO SALVADOR'
		},
		{
			nome: 'JARDIM ICARAY'
		},
		{
			nome: 'JARDIM IGUACU'
		},
		{
			nome: 'JARDIM IGUA\u00c7U'
		},
		{
			nome: 'JARDIM IGUA\u00c7\u00da'
		},
		{
			nome: 'JARDIM IMPERIAL'
		},
		{
			nome: 'JARDIM INOCOOP'
		},
		{
			nome: 'JARDIM ITACAR\u00c9'
		},
		{
			nome: 'JARDIM ITAIPU'
		},
		{
			nome: 'JARDIM ITAPURA'
		},
		{
			nome: 'JARDIM ITAPURA I'
		},
		{
			nome: 'JARDIM ITAPURA II'
		},
		{
			nome: 'JARDIM ITATIAIA'
		},
		{
			nome: 'JARDIM JEQUITIBA'
		},
		{
			nome: 'JARDIM JEQUITIBAS'
		},
		{
			nome: 'JARDIM JEQUITIBAS II'
		},
		{
			nome: 'JARDIM JOAO PAULO II'
		},
		{
			nome: 'JARDIM JO\u00c3O PAULO II'
		},
		{
			nome: 'JARDIM LEONOR'
		},
		{
			nome: 'JARDIM MARACANA'
		},
		{
			nome: 'JARDIM MARACAN\u00c3'
		},
		{
			nome: 'JARDIM MARUPIARA'
		},
		{
			nome: 'JARDIM MONTE ALTO'
		},
		{
			nome: 'JARDIM MORADA DO SOL'
		},
		{
			nome: 'JARDIM MORISHITA'
		},
		{
			nome: 'JARDIM MORUMBI'
		},
		{
			nome: 'JARDIM NOVA PLANALTINA'
		},
		{
			nome: 'JARDIM NOVO BONGIOVANI'
		},
		{
			nome: 'JARDIM NOVO PRUDENTINO'
		},
		{
			nome: 'JARDIM OURO VERDE'
		},
		{
			nome: 'JARDIM PANORAMA'
		},
		{
			nome: 'JARDIM PARAISO'
		},
		{
			nome: 'JARDIM PARA\u00cdSO'
		},
		{
			nome: 'JARDIM PARIS'
		},
		{
			nome: 'JARDIM PAULISTA'
		},
		{
			nome: 'JARDIM PAULISTANO'
		},
		{
			nome: 'JARDIM PETROPOLIS'
		},
		{
			nome: 'JARDIM PETR\u00d3POLIS'
		},
		{
			nome: 'JARDIM PLANALTINA'
		},
		{
			nome: 'JARDIM PLANALTO'
		},
		{
			nome: 'JARDIM PRIMAVERA'
		},
		{
			nome: 'JARDIM PRIMAVERE'
		},
		{
			nome: 'JARDIM PRUDENTINO'
		},
		{
			nome: 'JARDIM REGINA'
		},
		{
			nome: 'JARDIM RIO 400'
		},
		{
			nome: 'JARDIM SABARA'
		},
		{
			nome: 'JARDIM SABAR\u00c1'
		},
		{
			nome: 'JARDIM SANTA CLARA'
		},
		{
			nome: 'JARDIM SANTA ELISABETE'
		},
		{
			nome: 'JARDIM SANTA ELIZA'
		},
		{
			nome: 'JARDIM SANTA FE'
		},
		{
			nome: 'JARDIM SANTA FILOMENA'
		},
		{
			nome: 'JARDIM SANTA F\u00c9'
		},
		{
			nome: 'JARDIM SANTA MONICA'
		},
		{
			nome: 'JARDIM SANTA OLGA'
		},
		{
			nome: 'JARDIM SANTA PAULA'
		},
		{
			nome: 'JARDIM SANTA TEREZA'
		},
		{
			nome: 'JARDIM SANTANA'
		},
		{
			nome: 'JARDIM SAO BENTO'
		},
		{
			nome: 'JARDIM SAO FRANCISCO'
		},
		{
			nome: 'JARDIM SAO GABRIEL'
		},
		{
			nome: 'JARDIM SAO GERALDO'
		},
		{
			nome: 'JARDIM SAO LUIS'
		},
		{
			nome: 'JARDIM SAO PAULO'
		},
		{
			nome: 'JARDIM SAO SEBASTIAO'
		},
		{
			nome: 'JARDIM SATELITE'
		},
		{
			nome: 'JARDIM SUMARE'
		},
		{
			nome: 'JARDIM S\u00c3O LUIS'
		},
		{
			nome: 'JARDIM S\u00c3O PEDRO'
		},
		{
			nome: 'JARDIM S\u00c3O SEBASTI\u00c3O'
		},
		{
			nome: 'JARDIM S\u00c3O SEBASTI\u00c3O II'
		},
		{
			nome: 'JARDIM TROPICAL'
		},
		{
			nome: 'JARDIM VALE DO SOL'
		},
		{
			nome: 'JARDIM VALE VERDE'
		},
		{
			nome: 'JARDIM VILA REAL'
		},
		{
			nome: 'JARDIM VISTA BONITA'
		},
		{
			nome: 'JARDIM VITORIA RE\u0090GIA'
		},
		{
			nome: 'JD AM\u00c9RICA'
		},
		{
			nome: 'JD BELA VISTA'
		},
		{
			nome: 'JD. AVIACAO'
		},
		{
			nome: 'JD. BONGIOVANI'
		},
		{
			nome: 'JD. ESPLANADA'
		},
		{
			nome: 'JD. PAULISTA'
		},
		{
			nome: 'JOAO PAULO II'
		},
		{
			nome: 'KM 18'
		},
		{
			nome: 'LAGOA BONITA'
		},
		{
			nome: 'LARANJA DOCE'
		},
		{
			nome: 'MARIO AMATO'
		},
		{
			nome: 'MARISTELA'
		},
		{
			nome: 'MONTALV\u00c3O'
		},
		{
			nome: 'MONTE CARLO'
		},
		{
			nome: 'NOVA PORTO XV'
		},
		{
			nome: 'NOVO HORIZONTE'
		},
		{
			nome: 'NOVO PRUDENTINO'
		},
		{
			nome: 'NUCLEO BARTHOLOMEU BUENO DE MI'
		},
		{
			nome: 'PANORAMA'
		},
		{
			nome: 'PARAIA DO SAPE MARANDUBA'
		},
		{
			nome: 'PARQUE ALEXANDRINA'
		},
		{
			nome: 'PARQUE ALTO BELA VISTA'
		},
		{
			nome: 'PARQUE ALTO DA BELA VISTA'
		},
		{
			nome: 'PARQUE ALVORADA'
		},
		{
			nome: 'PARQUE BANDEIRANTES'
		},
		{
			nome: 'PARQUE CASTELO BRANCO'
		},
		{
			nome: 'PARQUE CEDRAL'
		},
		{
			nome: 'PARQUE DAS CEREJEIRAS'
		},
		{
			nome: 'PARQUE DO POVO'
		},
		{
			nome: 'PARQUE DOS GIRASSOIS'
		},
		{
			nome: 'PARQUE DOS PINHEIRO'
		},
		{
			nome: 'PARQUE DOS PINHEIROS'
		},
		{
			nome: 'PARQUE DOS RESEDAS'
		},
		{
			nome: 'PARQUE DOS RESED\u00c1S'
		},
		{
			nome: 'PARQUE FIGUEIRAL'
		},
		{
			nome: 'PARQUE FURQUIM'
		},
		{
			nome: 'PARQUE HIGIENOPOLIS'
		},
		{
			nome: 'PARQUE HIGIEN\u00d3POLIS'
		},
		{
			nome: 'PARQUE IMPERIAL'
		},
		{
			nome: 'PARQUE JABAQUARA'
		},
		{
			nome: 'PARQUE JOSE ROTTA'
		},
		{
			nome: 'PARQUE PINHEIROS II'
		},
		{
			nome: 'PARQUE PRIMAVERA'
		},
		{
			nome: 'PARQUE PRINCIPE DA PERSIA'
		},
		{
			nome: 'PARQUE PRINCIPE IMPERIAL'
		},
		{
			nome: 'PARQUE RES BEATRIZ'
		},
		{
			nome: 'PARQUE RES DAMHA I'
		},
		{
			nome: 'PARQUE RES DAMHA II'
		},
		{
			nome: 'PARQUE RES DAMHA III'
		},
		{
			nome: 'PARQUE RES FRANCISCO BELO GALINDO'
		},
		{
			nome: 'PARQUE RES MARTIN VILLE'
		},
		{
			nome: 'PARQUE RES SERVANTES I'
		},
		{
			nome: 'PARQUE RES SERVANTES II'
		},
		{
			nome: 'PARQUE RESID DAMHA'
		},
		{
			nome: 'PARQUE RESID DAMHA II'
		},
		{
			nome: 'PARQUE RESID SERVANTES'
		},
		{
			nome: 'PARQUE RESID SERVANTES II'
		},
		{
			nome: 'PARQUE RESIDENCIA DAMHA II'
		},
		{
			nome: 'PARQUE RESIDENCIAL ARAKI'
		},
		{
			nome: 'PARQUE RESIDENCIAL CANA\u00c3'
		},
		{
			nome: 'PARQUE RESIDENCIAL CARAND\u00c1'
		},
		{
			nome: 'PARQUE RESIDENCIAL DAMHA'
		},
		{
			nome: 'PARQUE RESIDENCIAL DAMHA I'
		},
		{
			nome: 'PARQUE RESIDENCIAL DAMHA II'
		},
		{
			nome: 'PARQUE RESIDENCIAL DAMHA III'
		},
		{
			nome: 'PARQUE RESIDENCIAL DAMHA IV'
		},
		{
			nome: 'PARQUE RESIDENCIAL FUNADA'
		},
		{
			nome: 'PARQUE RESIDENCIAL JARDINS'
		},
		{
			nome: 'PARQUE RESIDENCIAL JARINA'
		},
		{
			nome: 'PARQUE RESIDENCIAL MARIO AMATO'
		},
		{
			nome: 'PARQUE RESIDENCIAL MART VILLE'
		},
		{
			nome: 'PARQUE RESIDENCIAL MEDITERR\u00c2NEO'
		},
		{
			nome: 'PARQUE RESIDENCIAL NOSAKI'
		},
		{
			nome: 'PARQUE RESIDENCIAL SAO LUCAS'
		},
		{
			nome: 'PARQUE RESIDENCIAL SERVANTES II'
		},
		{
			nome: 'PARQUE RESIDENCIAL S\u00c3O LUCAS'
		},
		{
			nome: 'PARQUE RESIDENCIAL UNI\u00c3O'
		},
		{
			nome: 'PARQUE RESIDENCIAL VITORIA REGIA'
		},
		{
			nome: 'PARQUE SAO JUDAS TADEU'
		},
		{
			nome: 'PARQUE SAO MATHEUS'
		},
		{
			nome: 'PARQUE SHIRAIWA'
		},
		{
			nome: 'PARQUE S\u00c3O JUDAS TADEU'
		},
		{
			nome: 'PARQUE S\u00c3O MATHEUS'
		},
		{
			nome: 'PARQUE WATAL ISHIBASHI'
		},
		{
			nome: 'PAULICEIA'
		},
		{
			nome: 'PERDIZES'
		},
		{
			nome: 'PETRONA GARDEN'
		},
		{
			nome: 'PIRARETA'
		},
		{
			nome: 'PLANO DIRETOR SUL'
		},
		{
			nome: 'PORTO BELLO RESIDENCE'
		},
		{
			nome: 'PORTO MADERO RESIDENCE'
		},
		{
			nome: 'PORTO SEGURO RESIDENCE'
		},
		{
			nome: 'POUSADA PARANAPANEMA'
		},
		{
			nome: 'PQ RESIDENCIAL JARDINS'
		},
		{
			nome: 'PQ S\u00c3O JUDAS TADEU'
		},
		{
			nome: 'PQ. SAO JUDAS TADEU'
		},
		{
			nome: 'PR\u00cdNCIPE DE VIANA'
		},
		{
			nome: 'QUINTA DAS FLORES'
		},
		{
			nome: 'RECANTO DAS ARARAS'
		},
		{
			nome: 'REDENCIAL VALENCIA I'
		},
		{
			nome: 'REPRESA'
		},
		{
			nome: 'REPRESA DE MARTINOPOLIS'
		},
		{
			nome: 'RES DAMHA BELVEDERE'
		},
		{
			nome: 'RES GREEN VILLE'
		},
		{
			nome: 'RES VALENCIA I'
		},
		{
			nome: 'RES VALENCIA II'
		},
		{
			nome: 'RES. ALDEIA DO LAGO I'
		},
		{
			nome: 'RES. ALDEIA DO LAGO III'
		},
		{
			nome: 'RES. ALTA VISTA 1'
		},
		{
			nome: 'RES. ANITA TIEZZI'
		},
		{
			nome: 'RES. BRISAS DO MONTE'
		},
		{
			nome: 'RES. DAMHA BELVEDERE'
		},
		{
			nome: 'RES. NOVO HORIZONTE'
		},
		{
			nome: 'RES. PARQUE DOS GIRASSOIS'
		},
		{
			nome: 'RES. ROYAL PARK'
		},
		{
			nome: 'RESICDENCIAL VALENCIA II'
		},
		{
			nome: 'RESIDENCE GARDEN VILLE'
		},
		{
			nome: 'RESIDENCIAL'
		},
		{
			nome: 'RESIDENCIAL ALTA VISTA I'
		},
		{
			nome: 'RESIDENCIAL ALTO DA COLINA'
		},
		{
			nome: 'RESIDENCIAL ALTOS DE PRUDENTE'
		},
		{
			nome: 'RESIDENCIAL ANITA TIEZZI'
		},
		{
			nome: 'RESIDENCIAL ANNITA BONGIOVANI'
		},
		{
			nome: 'RESIDENCIAL ARTHUR BOIGUES'
		},
		{
			nome: 'RESIDENCIAL BONGIOVANI'
		},
		{
			nome: 'RESIDENCIAL BOURBON PARC'
		},
		{
			nome: 'RESIDENCIAL BURITI GARDEN'
		},
		{
			nome: 'RESIDENCIAL DAIANE'
		},
		{
			nome: 'RESIDENCIAL DAMHA BELVEDERE'
		},
		{
			nome: 'RESIDENCIAL FLORENZA'
		},
		{
			nome: 'RESIDENCIAL FUNADA'
		},
		{
			nome: 'RESIDENCIAL GOLDEN VILLAGE'
		},
		{
			nome: 'RESIDENCIAL GRAMADO'
		},
		{
			nome: 'RESIDENCIAL GREEN VILLE'
		},
		{
			nome: 'RESIDENCIAL III MILENIO'
		},
		{
			nome: 'RESIDENCIAL III MILENIUM'
		},
		{
			nome: 'RESIDENCIAL ITAPUA'
		},
		{
			nome: 'RESIDENCIAL ITAPU\u00c3'
		},
		{
			nome: 'RESIDENCIAL JATOBA'
		},
		{
			nome: 'RESIDENCIAL JATOB\u00c1'
		},
		{
			nome: 'RESIDENCIAL MARE MANSA'
		},
		{
			nome: 'RESIDENCIAL MARIA DE LOURDES'
		},
		{
			nome: 'RESIDENCIAL MART VILLE'
		},
		{
			nome: 'RESIDENCIAL MAR\u00c9 MANSA'
		},
		{
			nome: 'RESIDENCIAL MINERVA 1'
		},
		{
			nome: 'RESIDENCIAL MOACYR TRENTIN'
		},
		{
			nome: 'RESIDENCIAL MONTE AZUL'
		},
		{
			nome: 'RESIDENCIAL MONTE CARLO'
		},
		{
			nome: 'RESIDENCIAL NOVO HORIZONTE'
		},
		{
			nome: 'RESIDENCIAL PACAEMBU'
		},
		{
			nome: 'RESIDENCIAL PARQUE DAS CORES I'
		},
		{
			nome: 'RESIDENCIAL PARQUE DOS BURITIS'
		},
		{
			nome: 'RESIDENCIAL PARQUE DOS GIRASSOIS'
		},
		{
			nome: 'RESIDENCIAL PARQUE DOS GIRASS\u00d3IS'
		},
		{
			nome: 'RESIDENCIAL PORTAL DO LAGO'
		},
		{
			nome: 'RESIDENCIAL PORTAL NORTE'
		},
		{
			nome: 'RESIDENCIAL PORTINARI'
		},
		{
			nome: 'RESIDENCIAL PORTO BELO'
		},
		{
			nome: 'RESIDENCIAL PORTO SEGURO'
		},
		{
			nome: 'RESIDENCIAL PRIMAVERA'
		},
		{
			nome: 'RESIDENCIAL P\u00c9ROLA'
		},
		{
			nome: 'RESIDENCIAL QUINTA DAS FLORES'
		},
		{
			nome: 'RESIDENCIAL RESEDAS'
		},
		{
			nome: 'RESIDENCIAL SAN SEBASTIAN'
		},
		{
			nome: 'RESIDENCIAL SAO MARCOS'
		},
		{
			nome: 'RESIDENCIAL SAO PAULO'
		},
		{
			nome: 'RESIDENCIAL SERVANTES II'
		},
		{
			nome: 'RESIDENCIAL SOLARES'
		},
		{
			nome: 'RESIDENCIAL S\u00c3O MARCOS'
		},
		{
			nome: 'RESIDENCIAL S\u00c3O PAULO'
		},
		{
			nome: 'RESIDENCIAL S\u00c3O SEBASTI\u00c3O'
		},
		{
			nome: 'RESIDENCIAL TERRA NOVA'
		},
		{
			nome: 'RESIDENCIAL UNIVERSITARIO'
		},
		{
			nome: 'RESIDENCIAL UNIVERSIT\u00c1RIO'
		},
		{
			nome: 'RESIDENCIAL VALENCIA I'
		},
		{
			nome: 'RESIDENCIAL VENEZA'
		},
		{
			nome: 'RESIDENCIAL VISTA DO VALE'
		},
		{
			nome: 'RESIDENCIAL VIVENDA'
		},
		{
			nome: 'RODOVIA'
		},
		{
			nome: 'ROTA DO SOL'
		},
		{
			nome: 'ROTTA DO SOL'
		},
		{
			nome: 'ROYAL PARK'
		},
		{
			nome: 'RURAL'
		},
		{
			nome: 'SANTA CECILIA'
		},
		{
			nome: 'SANTA HELENA'
		},
		{
			nome: 'SANTO ANDRE'
		},
		{
			nome: 'SAO JUDAS TADEU'
		},
		{
			nome: 'SEM DENOMINA\u00c7\u00c3O'
		},
		{
			nome: 'SOLARES RESIDENCIAL'
		},
		{
			nome: 'S\u00c3O JUDAS'
		},
		{
			nome: 'TACIBA'
		},
		{
			nome: 'TAMBORE PRUDENTE'
		},
		{
			nome: 'TAMBOR\u00c9 PRUDENTE'
		},
		{
			nome: 'TERRAS DE IMOPLAN'
		},
		{
			nome: 'TOCANTINS'
		},
		{
			nome: 'UNI\u00c3O'
		},
		{
			nome: 'VALE DO SOL'
		},
		{
			nome: 'VALE DOS REIS'
		},
		{
			nome: 'VALE VERDE'
		},
		{
			nome: 'VALENCIA 1'
		},
		{
			nome: 'VALENCIA I'
		},
		{
			nome: 'VALENCIA II'
		},
		{
			nome: 'VALENCIA III'
		},
		{
			nome: 'VAL\u00caNCIA 1'
		},
		{
			nome: 'VILA ANGELICA'
		},
		{
			nome: 'VILA ANHANGUERA'
		},
		{
			nome: 'VILA AUREA'
		},
		{
			nome: 'VILA AURELIO'
		},
		{
			nome: 'VILA BARBEIRO'
		},
		{
			nome: 'VILA BOA VISTA'
		},
		{
			nome: 'VILA BOSCOLI'
		},
		{
			nome: 'VILA BRASIL'
		},
		{
			nome: 'VILA CENTENARIO'
		},
		{
			nome: 'VILA CENTEN\u00c1RIO'
		},
		{
			nome: 'VILA CHARLOTE'
		},
		{
			nome: 'VILA CLAUDIA GLORIA'
		},
		{
			nome: 'VILA CLAUDIA GL\u00d3RIA'
		},
		{
			nome: 'VILA COMERCIAL'
		},
		{
			nome: 'VILA CORONEL GOULART'
		},
		{
			nome: 'VILA CRISTINA'
		},
		{
			nome: 'VILA DO ESTADIO'
		},
		{
			nome: 'VILA DO EST\u00c1DIO'
		},
		{
			nome: 'VILA DUBUS'
		},
		{
			nome: 'VILA ESPERANCA'
		},
		{
			nome: 'VILA ESTADIO'
		},
		{
			nome: 'VILA EUCLIDES'
		},
		{
			nome: 'VILA FERNANDES'
		},
		{
			nome: 'VILA FLORES'
		},
		{
			nome: 'VILA FORMOSA'
		},
		{
			nome: 'VILA FURQUIM'
		},
		{
			nome: 'VILA GENI'
		},
		{
			nome: 'VILA GINASIO'
		},
		{
			nome: 'VILA GIN\u00c1SIO'
		},
		{
			nome: 'VILA GIRASSOIS'
		},
		{
			nome: 'VILA GLORIA'
		},
		{
			nome: 'VILA GUAIRA'
		},
		{
			nome: 'VILA GUA\u00cdRA'
		},
		{
			nome: 'VILA INDUSTRIAL'
		},
		{
			nome: 'VILA IOLANDA'
		},
		{
			nome: 'VILA ITI'
		},
		{
			nome: 'VILA JESUS'
		},
		{
			nome: 'VILA LESSA'
		},
		{
			nome: 'VILA LIBERDADE'
		},
		{
			nome: 'VILA LIDER'
		},
		{
			nome: 'VILA LUSO'
		},
		{
			nome: 'VILA MACHADINHO'
		},
		{
			nome: 'VILA MALAMAN'
		},
		{
			nome: 'VILA MARCONDES'
		},
		{
			nome: 'VILA MARINA'
		},
		{
			nome: 'VILA MARISTELA'
		},
		{
			nome: 'VILA MATHILDE VIEIRA'
		},
		{
			nome: 'VILA MENDES'
		},
		{
			nome: 'VILA MIRIAN'
		},
		{
			nome: 'VILA MONTALV\u00c3O'
		},
		{
			nome: 'VILA NOSSA SENHORA DE ASSUMP'
		},
		{
			nome: 'VILA NOVA'
		},
		{
			nome: 'VILA NOVA PRUDENTE'
		},
		{
			nome: 'VILA OCIDENTAL'
		},
		{
			nome: 'VILA OPERARIA'
		},
		{
			nome: 'VILA ORIENTAL'
		},
		{
			nome: 'VILA PARAISO'
		},
		{
			nome: 'VILA PARA\u00cdSO'
		},
		{
			nome: 'VILA PAULO ROBERTO'
		},
		{
			nome: 'VILA PINHEIRO'
		},
		{
			nome: 'VILA RAINHO'
		},
		{
			nome: 'VILA RAMOS DE FREITAS'
		},
		{
			nome: 'VILA REAL'
		},
		{
			nome: 'VILA ROBERTO'
		},
		{
			nome: 'VILA ROSA'
		},
		{
			nome: 'VILA SANTA HELENA'
		},
		{
			nome: 'VILA SANTA IZABEL'
		},
		{
			nome: 'VILA SANTA TEREZA'
		},
		{
			nome: 'VILA SANTO JORGE'
		},
		{
			nome: 'VILA SAO JORGE'
		},
		{
			nome: 'VILA S\u00c3O JORGE'
		},
		{
			nome: 'VILA TABAJARA'
		},
		{
			nome: 'VILA TAZITSU'
		},
		{
			nome: 'VILA VERINHA'
		},
		{
			nome: 'VILA YOLANDA'
		},
		{
			nome: 'VILA \u00c1UREA'
		},
		{
			nome: 'VILLA PARK'
		},
		{
			nome: 'VILLAGE DAMHA'
		},
		{
			nome: 'VILLAGE DAMHA PRESIDENTE PRUDENTE'
		},
		{
			nome: 'VILLAGE LAGOINHA'
		},
		{
			nome: 'VILLAGE PORTO BELLO'
		},
		{
			nome: 'VISTA BONITA'
		},
		{
			nome: 'ZONA RURAL'
		}
	],
	condominioResidencialEdificio: [
		{
			id: 234,
			nome: 'BOSQUE DOS TAMBURIS'
		},
		{
			id: 263,
			nome: 'CASA'
		},
		{
			id: 296,
			nome: 'CENTRO MEDICO ODONTOLOGICO'
		},
		{
			id: 228,
			nome: 'COND AV MANOEL GOULART 428'
		},
		{
			id: 269,
			nome: 'COND ED ANITA FERREIRA BRAGA'
		},
		{
			id: 278,
			nome: 'COND ED FRANCISCO NAVARRO DIAS'
		},
		{
			id: 289,
			nome: 'COND ED MANOEL ALVES CLEMENTE "NEQUINHA"'
		},
		{
			id: 280,
			nome: 'COND EDIFICIO DROGASIL'
		},
		{
			id: 320,
			nome: 'COND PRINC\u00cdPE DE MALTA'
		},
		{
			id: 227,
			nome: 'COND R JOAQUIM NABUCO 867 KITS'
		},
		{
			id: 229,
			nome: 'COND R LAGUNA 269'
		},
		{
			id: 312,
			nome: 'COND RES. VILLE FELICITA'
		},
		{
			id: 282,
			nome: 'COND. ED. FRANCISCO AKINAGA'
		},
		{
			id: 319,
			nome: 'COND. PRINCIPE DE VAL\u00caNCIA'
		},
		{
			id: 268,
			nome: 'COND. RES. ED. COLUMBIA'
		},
		{
			id: 303,
			nome: 'COND. RES. PORTINARI II'
		},
		{
			id: 305,
			nome: 'COND. RESIDENCIAL FIRENZE'
		},
		{
			id: 231,
			nome: 'COND. SEBASTIAN PRATS'
		},
		{
			id: 274,
			nome: 'CONDOMINIO EDIFICIO MARIA JULIA'
		},
		{
			id: 318,
			nome: 'CONDOMINIO EDIFICIO PACO REAL'
		},
		{
			id: 315,
			nome: 'CONDOMINIO EDIFICIO RESIDENCIAL E COM. ANDRADE'
		},
		{
			id: 157,
			nome: 'CONDOMINIO JOAO PAULO II'
		},
		{
			id: 293,
			nome: 'CONDOMINIO MART VILLE'
		},
		{
			id: 284,
			nome: 'CONDOMINIO RESERVA SANTA CLARA'
		},
		{
			id: 233,
			nome: 'CONDOMINIO RESIDENCIAL ANAHY'
		},
		{
			id: 292,
			nome: 'CONDOMINIO RESIDENCIAL GRAMADO'
		},
		{
			id: 281,
			nome: 'CONDOMINIO RESIDENCIAL MARIZA'
		},
		{
			id: 295,
			nome: 'CONDOMINIO RESIDENCIAL SAFIRA 1'
		},
		{
			id: 313,
			nome: 'CONDOMINIO RESIDENCIAL VALENCIA I'
		},
		{
			id: 322,
			nome: 'CONDOMINIO RESIDENCIAL VILLA EUROPA'
		},
		{
			id: 321,
			nome: 'CONDOMINIO RESIDENCIAL VILLA GIRASSOIS'
		},
		{
			id: 316,
			nome: 'CONDOMINIO RESIDENCIAL VISTA DO PARQUE'
		},
		{
			id: 277,
			nome: 'CONDOMINIO SHALON'
		},
		{
			id: 310,
			nome: 'CONDOMINO MARES DO SUL \/ TORRE TIMOR'
		},
		{
			id: 308,
			nome: 'CONDOM\u00cdNIO RES. VILLE FELICITT\u00c1'
		},
		{
			id: 301,
			nome: 'CONDOM\u00cdNIO RESIDENCIAL GRANDI'
		},
		{
			id: 267,
			nome: 'CONDOM\u00cdNIO RESIDENCIAL MONT BLANC CLUB'
		},
		{
			id: 257,
			nome: 'ED. ANTONINHA MARIA'
		},
		{
			id: 255,
			nome: 'ED. FRANCISCO AKINAGA'
		},
		{
			id: 273,
			nome: 'EDICIO SAN GERMAN'
		},
		{
			id: 279,
			nome: 'EDIFICIL ELVIRA DE JESUS SANCHES'
		},
		{
			id: 302,
			nome: 'EDIFICIL JULIO CELESTE FRASSON PERUQUE'
		},
		{
			id: 297,
			nome: 'EDIFICIL MONTE CARLO'
		},
		{
			id: 262,
			nome: 'EDIFICIO ANDORINHA'
		},
		{
			id: 259,
			nome: 'EDIFICIO BEM TI VI'
		},
		{
			id: 271,
			nome: 'EDIFICIO DI COLLA'
		},
		{
			id: 290,
			nome: 'EDIFICIO FLORINDO GALANTE'
		},
		{
			id: 287,
			nome: 'EDIFICIO JOS\u00c9 MARIA MARTINS'
		},
		{
			id: 252,
			nome: 'EDIFICIO MACHADO RUIZ'
		},
		{
			id: 285,
			nome: 'EDIFICIO PEREIRA TEOTONIO'
		},
		{
			id: 314,
			nome: 'EDIFICIO PORTAL DO BOSQUE'
		},
		{
			id: 317,
			nome: 'EDIFICIO RAVENNA'
		},
		{
			id: 283,
			nome: 'EDIFICIO SEVILHA'
		},
		{
			id: 291,
			nome: 'EDIFICIO VILA MARINA'
		},
		{
			id: 275,
			nome: 'EDIFICIO VILLE DE FRANCE'
		},
		{
			id: 276,
			nome: 'EDIFICIO VILLE FLORENCE'
		},
		{
			id: 256,
			nome: 'EDIFICO CENARIO'
		},
		{
			id: 309,
			nome: 'EDIF\u00cdCIO AUGUSTUS'
		},
		{
			id: 253,
			nome: 'EDIF\u00cdCIO CENTRO DE MEDICINA'
		},
		{
			id: 286,
			nome: 'EDIF\u00cdCIO JOS\u00c9 MARIA MARTINS'
		},
		{
			id: 299,
			nome: 'EDIF\u00cdCIO PA\u00c7O REAL'
		},
		{
			id: 298,
			nome: 'EDIF\u00cdCIO PEDRO BERNARDES'
		},
		{
			id: 306,
			nome: 'EDIF\u00cdCIO RESIDENCIAL EMBAIXADOR'
		},
		{
			id: 272,
			nome: 'EDIF\u00cdCIO TRIANON'
		},
		{
			id: 258,
			nome: 'PARQUE PRINCIPE DA PERSIA'
		},
		{
			id: 226,
			nome: 'PARQUE PRINCIPE IMPERIAL'
		},
		{
			id: 311,
			nome: 'PR\u00cdNCIPE DE VIANA'
		},
		{
			id: 300,
			nome: 'REPRESA LARANJA DOCE'
		},
		{
			id: 230,
			nome: 'RES VILLA GIRASS\u00d3IS'
		},
		{
			id: 232,
			nome: 'RESERVA SANTA CLARA'
		},
		{
			id: 265,
			nome: 'RESIDENCE GARDEN VILLE'
		},
		{
			id: 264,
			nome: 'RESIDENCIAL ALTOS DE PRUDENTE'
		},
		{
			id: 304,
			nome: 'RESIDENCIAL AV. DA SAUDADE'
		},
		{
			id: 261,
			nome: 'RESIDENCIAL BOURBON'
		},
		{
			id: 251,
			nome: 'RESIDENCIAL FIRENZE'
		},
		{
			id: 270,
			nome: 'RESIDENCIAL MIRANTE DO PARQUE'
		},
		{
			id: 288,
			nome: 'RESIDENCIAL PARQUE DAS CORES I'
		},
		{
			id: 235,
			nome: 'RESIDENCIAL ROYAL PARK'
		},
		{
			id: 260,
			nome: 'RESIDENCIAL SAN SEBASTIAN'
		},
		{
			id: 266,
			nome: 'RESIDENCIAL VENEZA'
		},
		{
			id: 254,
			nome: 'TAMBORE PRUDENTE'
		},
		{
			id: 307,
			nome: 'VILLAGE BONGIOVANI'
		}
	]
}

export default json
