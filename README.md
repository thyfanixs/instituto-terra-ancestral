# Instituto Terra Ancestral

Site institucional do Instituto Terra Ancestral (ITA), organização social de
Pedro Leopoldo (MG) que atua com cultura, educação, saberes ancestrais, cuidado
integral e fortalecimento de territórios.

Esta primeira versão foi construída a partir do portfólio institucional
2025–2026 do ITA. O conteúdo apresenta:

- missão, valores e áreas de atuação;
- cursos, vivências, feiras e ações culturais;
- iniciativas de saúde e bem viver;
- territórios e redes de parceria;
- indicadores de impacto;
- informações de contato.

## Desenvolvimento

Requisitos:

- Node.js 22.13 ou superior;
- npm.

```bash
npm install
npm run dev
```

O site ficará disponível em `http://localhost:3000`.

## Validação

```bash
npm run build
npm test
```

## Estrutura principal

- `app/page.tsx`: conteúdo e estrutura da página inicial;
- `app/globals.css`: identidade visual e responsividade;
- `app/layout.tsx`: metadados e configurações gerais;
- `public/images/portfolio`: imagens extraídas do portfólio fornecido pelo ITA.

## Próximas evoluções

- substituir e ampliar a galeria com as fotos oficiais;
- incluir agenda, notícias e páginas detalhadas dos projetos;
- definir os canais oficiais de redes sociais e apoio;
- revisar os textos finais com a equipe do Instituto.
