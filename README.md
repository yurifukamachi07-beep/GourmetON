# GourmetOn

Landing page premium para o app de delivery GourmetOn sabor que chega até você.

## Sobre o projeto

O GourmetOn é uma landing page desenvolvida como projeto acadêmico para a disciplina de Desenvolvimento Frontend da FIAP. O objetivo é apresentar um aplicativo fictício de delivery gourmet de forma chamativa e profissional, utilizando tecnologias modernas do ecossistema React.

## Tecnologias utilizadas

**React 18** — biblioteca principal para construção da UI
**Vite** — bundler e servidor de desenvolvimento ultrarrápido
**Tailwind CSS** — estilização utilitária com tema customizado
**Font Awesome** — ícones via CDN
**Google Fonts** — tipografia (Playfair Display + DM Sans)
**TheMealDB API** — API pública gratuita para buscar receitas e pratos

## Funcionalidades

**Hero Section** — apresentação com imagem de fundo, CTA e estatísticas
**Benefícios** — cards interativos com hover animado
**Cardápio** — busca assíncrona via `fetch` na TheMealDB API com skeleton loading
**Funcionalidades** — grid com as principais features do app
**Depoimentos** — avaliações de clientes
**Formulário de Contato** — coleta de e-mail com validação e estado de sucesso
**Rodapé** — links, redes sociais e informações legais
**Navbar fixa** — com opacidade ajustada ao rolar a página

## Como executar

```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Acesse em http://localhost:5173
```

## Estrutura de pastas

```
gourmet-on/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Benefits.jsx
│   │   ├── MenuSection.jsx
│   │   ├── Features.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## API utilizada

**TheMealDB** — https://www.themealdb.com/api.php

API pública e gratuita, sem necessidade de chave de API. Utilizada para buscar pratos aleatórios por categoria e exibir na seção "Cardápio em destaque".

```js
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
```

## Alunos

Projeto desenvolvido para a disciplina de Desenvolvimento Frontend — 2º Semestre de Engenharia de Software — FIAP.
