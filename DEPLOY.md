# Guia de Deploy - IdealWeb

Este é um site estático React + Tailwind CSS pronto para ser hospedado no GitHub Pages, Netlify ou qualquer outro serviço de hosting estático.

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Git instalado
- Conta no GitHub (para repositório)
- Conta no Netlify (para deploy)

## 🚀 Deploy no Netlify (Recomendado)

### Opção 1: Via GitHub (Mais Fácil)

1. **Faça push do código para o GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - IdealWeb"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/idealweb.git
   git push -u origin main
   ```

2. **Conecte ao Netlify:**
   - Acesse https://app.netlify.com
   - Clique em "Add new site" → "Import an existing project"
   - Selecione GitHub e autorize
   - Escolha o repositório `idealweb`
   - Configure:
     - Build command: `pnpm build`
     - Publish directory: `dist/public`
   - Clique em "Deploy site"

### Opção 2: Deploy Manual via Netlify CLI

1. **Instale o Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Faça o build:**
   ```bash
   pnpm build
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod --dir=dist/public
   ```

## 📦 Deploy no GitHub Pages

1. **Atualize o vite.config.ts:**
   ```typescript
   export default defineConfig({
     base: '/idealweb/', // Se usar https://seu-usuario.github.io/idealweb
     // ou deixe como '/' se usar https://seu-dominio.com
   })
   ```

2. **Faça push para GitHub:**
   ```bash
   git push origin main
   ```

3. **Ative GitHub Pages:**
   - Vá para Settings → Pages
   - Source: Deploy from a branch
   - Branch: main, folder: /(root)
   - Salve

## 🔧 Estrutura do Projeto

```
idealweb/
├── client/
│   ├── public/          # Arquivos estáticos (logo, etc)
│   ├── src/
│   │   ├── components/  # Componentes React
│   │   ├── pages/       # Páginas
│   │   ├── App.tsx      # Componente principal
│   │   └── index.css    # Estilos globais
│   └── index.html       # HTML principal
├── dist/                # Build de produção (gerado)
├── package.json         # Dependências
└── vite.config.ts       # Configuração Vite
```

## 🎨 Personalizações

### Alterar Cores
Edite `client/src/index.css` e procure por:
```css
:root {
  --color-primary-blue: #1e40af;
  --color-accent-green: #10b981;
}
```

### Alterar Conteúdo
- **Header/Footer**: `client/src/components/Header.tsx` e `Footer.tsx`
- **Produtos**: `client/src/components/Products.tsx`
- **Depoimentos**: `client/src/components/Testimonials.tsx`

### Adicionar Páginas Novas
1. Crie um novo arquivo em `client/src/pages/NovaPagina.tsx`
2. Importe em `client/src/App.tsx`
3. Adicione a rota usando Wouter

## 📱 Responsividade

O site é totalmente responsivo e testado em:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## ⚡ Performance

- Imagens otimizadas em WebP
- CSS minificado
- JavaScript bundle otimizado
- Carregamento rápido em todos os dispositivos

## 🔐 Segurança

- Sem dependências de backend
- Sem dados sensíveis no código
- HTTPS automático no Netlify

## 📞 Suporte

Para dúvidas sobre deploy, consulte:
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Docs](https://pages.github.com)
- [Vite Docs](https://vitejs.dev)

---

**Desenvolvido com ❤️ para a IdealWeb**
