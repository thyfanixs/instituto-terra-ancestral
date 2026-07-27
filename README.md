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

- `app/page.tsx`: página inicial;
- `app/quem-somos`: apresentação institucional;
- `app/acoes`: cursos e demais ações do portfólio;
- `app/impacto`: indicadores e territórios;
- `app/apoie`: PIX, parcerias, incentivo fiscal e Bazar ITA;
- `app/contato`: contatos e redes sociais;
- `app/globals.css`: identidade visual, animações e responsividade;
- `public/images/official`: marca e fotografias oficiais utilizadas no site.
