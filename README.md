# Millennium Football Agency — Landing Page

Landing page da **Millennium Football Agency**, apresentando o showcase de atletas na Europa (Croácia) e o processo de qualificação para jogadores interessados em acesso ao futebol profissional europeu. Site bilíngue (PT/EN), construído em React + Vite.

## Stack

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — animações e transições
- [Lucide React](https://lucide.dev/) — ícones

## Como rodar

```bash
npm install
npm run dev
```

A aplicação sobe em `http://localhost:5173` (padrão do Vite).

## Scripts disponíveis

| Comando           | Descrição                                  |
|-------------------|---------------------------------------------|
| `npm run dev`     | Inicia o servidor de desenvolvimento         |
| `npm run build`   | Gera o build de produção em `dist/`          |
| `npm run preview` | Serve o build de produção localmente         |

## Estrutura do projeto

```
src/
├── components/          # Componentes reutilizáveis (Navbar, Preloader, Modal, etc.)
├── sections/             # Seções da landing page (Hero, FAQ, Filter, etc.)
├── App.jsx               # Composição das seções e estado global (idioma, modal, loading)
├── main.jsx               # Entry point da aplicação
└── index.css              # Estilos globais / diretivas do Tailwind

public/
└── assets/                # Imagens, vídeos e mídias usadas nas seções
```

### Principais seções (`src/sections`)

- **Hero** — vídeo de abertura (varia por idioma)
- **OqueEShowcase** / **ParaQuemE** / **OqueInclui** — apresentação do showcase e público-alvo
- **InsideShowcase** — bastidores do evento
- **AtletasContratados** — carrossel de atletas contratados
- **Estatisticas** — números e métricas de resultado
- **Proof** / **VitrineInternacional** — provas sociais e vitrine internacional
- **Filter** — cases filtráveis de atletas
- **FAQ** — perguntas frequentes
- **FinalCTA** — chamada final para ação
- **QualificationModal** — formulário/modal de qualificação de leads

## Idiomas

O idioma (`PT` / `EN`) é controlado por estado em [App.jsx](src/App.jsx) e propagado via prop `language` para as seções, que internamente resolvem o conteúdo textual e a mídia (ex.: vídeo do Hero) de acordo com o idioma selecionado.

## Deploy

O projeto gera arquivos estáticos via `npm run build` (saída em `dist/`), podendo ser hospedado em qualquer serviço de static hosting (Vercel, Netlify, etc.).
