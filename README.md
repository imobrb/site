# 🏡 Site: Imobiliaria Rio Branco

Este projeto é uma aplicação moderna construída com [Nuxt 3](https://nuxt.com/), [PrimeVue](https://primevue.org/), [Tailwind CSS](https://tailwindcss.com/) e [Sanity](https://www.sanity.io/). Ele oferece uma interface responsiva e personalizável para gestão de imóveis, com conteúdo dinâmico alimentado por um CMS Headless.

---

## ✨ Tecnologias Utilizadas

- **Nuxt 3**: Framework Vue 3 para criação de aplicações modernas e performáticas.
- **PrimeVue**: Componentes de interface ricos e fáceis de usar.
- **Tailwind CSS**: Estilização utilitária para criar designs modernos e responsivos rapidamente.
- **Sanity**: CMS Headless para gerenciamento flexível de conteúdo.

---

## 📂 Estrutura do Projeto

```plaintext
SITE-IMOB/
├── .nuxt/           # Arquivos internos do Nuxt (gerado automaticamente)
├── .output/         # Arquivos gerados para produção (build)
├── assets/          # Estilos, imagens e outros arquivos estáticos
├── components/      # Componentes Vue reutilizáveis
├── pages/           # Páginas do Nuxt
├── plugins/         # Plugins, como configuração do PrimeVue e Sanity
├── public/          # Arquivos estáticos acessíveis diretamente via URL
├── sanity/          # Configuração e esquemas do Sanity
├── server/          # Rotas e middlewares do lado do servidor (Nuxt)
├── .env             # Arquivo de variáveis de ambiente
├── nuxt.config.ts   # Configuração principal do Nuxt
├── tailwind.config.js # Configuração do Tailwind CSS
└── tsconfig.json    # Configuração do TypeScript
```

---

## 🛠️ Configuração do Ambiente de Desenvolvimento

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/imobrb/site.git
   cd site
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**:
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```
   SANITY_PROJECT_ID=seu_project_id
   SANITY_DATASET=production
   SANITY_API_VERSION=2023-10-01
   SANITY_USE_CDN=false
   SANITY_API_TOKEN=apitoken
   ```

4. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

   O projeto estará disponível em [http://localhost:3000](http://localhost:3000) e o projeto do sanity studio estará disponível em [http://localhost:3333](http://localhost:3333).

---

## 🌟 Funcionalidades Principais

### 1. **Gerenciamento de Conteúdo com Sanity**
- Configurado para consumir dados dinâmicos do Sanity CMS.
- Tipos de conteúdo definidos em `sanity/schema`.

### 2. **Interface Moderna com Tailwind CSS**
- Totalmente responsivo e estilizado com Tailwind.
- Fácil de personalizar via `tailwind.config.js`.

### 3. **Componentes Reutilizáveis com PrimeVue**
- Inclui tabelas, menus, modais e muito mais.
- Integração completa com o Nuxt.

---

## 📚 Documentação das Tecnologias

- [Nuxt Documentation](https://nuxt.com/docs)
- [PrimeVue Documentation](https://tailwind.primevue.org/nuxt/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Sanity Documentation](https://www.sanity.io/docs)

---

## 🐛 Debugging

### Problemas comuns:
1. **CORS Policy ao usar Sanity**:
   - Certifique-se de adicionar `http://localhost:3000` & `http://localhost:3333` às configurações de CORS no painel do Sanity.

2. **Erro ao carregar variáveis de ambiente**:
   - Verifique se o arquivo `.env` está configurado corretamente e reinicie o servidor.

---

## 👥 Créditos

- **Designer & Desenvolvedor Front-end:** [Seu Nome](https://github.com/https://github.com/cesaroeduardo/)
- **Desenvolvedor Full-Stack:** [Robson Junior](https://github.com/robsongajunior/)

---