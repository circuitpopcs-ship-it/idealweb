# IdealWeb - Site Institucional

Um site institucional moderno e responsivo para venda de Landing Pages e Sites Institucionais, desenvolvido com React 19 e Tailwind CSS 4.

## 🎯 Sobre o Projeto

A **IdealWeb** é uma agência especializada em criar Landing Pages otimizadas para conversão e Sites Institucionais profissionais para prestadores de serviço e comércios.

Este site apresenta:
- Design minimalista corporativo
- Paleta de cores profissional (azul e verde)
- Otimizado para conversão de leads
- Totalmente responsivo
- Pronto para produção

## ✨ Características

### Seções Principais

1. **Header** - Navegação responsiva com logo e menu
2. **Hero** - Seção principal com chamada à ação e imagem profissional
3. **Produtos** - Dois cards destacando Landing Pages e Sites Institucionais
4. **Benefícios** - Seis diferenciais principais da agência
5. **Depoimentos** - Avaliações de clientes satisfeitos
6. **CTA** - Formulário de contato com informações
7. **Footer** - Links de navegação e redes sociais

### Design

- **Paleta de Cores:**
  - Azul Profundo: #1e40af
  - Verde Vibrante: #10b981
  - Neutros: Branco, cinza claro e escuro

- **Tipografia:**
  - Display: Poppins Bold (títulos)
  - Body: Inter Regular (textos)

- **Responsividade:**
  - Mobile: 320px - 767px
  - Tablet: 768px - 1024px
  - Desktop: 1025px+

## 🚀 Como Usar

### Instalação Local

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/idealweb.git
   cd idealweb
   ```

2. **Instale as dependências:**
   ```bash
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   pnpm dev
   ```

4. **Abra no navegador:**
   ```
   http://localhost:3000
   ```

### Build para Produção

```bash
pnpm build
```

Os arquivos otimizados estarão em `dist/public/`

## 📁 Estrutura do Projeto

```
idealweb/
├── client/
│   ├── public/
│   │   └── logo.svg              # Logo da IdealWeb
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx        # Cabeçalho com navegação
│   │   │   ├── Hero.tsx          # Seção principal
│   │   │   ├── Products.tsx      # Produtos/Serviços
│   │   │   ├── Benefits.tsx      # Diferenciais
│   │   │   ├── Testimonials.tsx  # Depoimentos
│   │   │   ├── CTA.tsx           # Formulário de contato
│   │   │   ├── Footer.tsx        # Rodapé
│   │   │   └── ui/               # Componentes shadcn/ui
│   │   ├── pages/
│   │   │   └── Home.tsx          # Página principal
│   │   ├── App.tsx               # Componente raiz
│   │   ├── main.tsx              # Entry point
│   │   └── index.css             # Estilos globais
│   └── index.html                # HTML principal
├── dist/                         # Build de produção
├── package.json                  # Dependências
├── vite.config.ts                # Configuração Vite
├── tsconfig.json                 # Configuração TypeScript
├── tailwind.config.ts            # Configuração Tailwind
└── DEPLOY.md                     # Guia de deploy
```

## 🔧 Personalizações

### Alterar Informações de Contato

Edite `client/src/components/CTA.tsx`:
```tsx
<p className="text-neutral-700">contato@idealweb.com.br</p>
<p className="text-neutral-700">(11) 99999-9999</p>
```

### Alterar Preços dos Produtos

Edite `client/src/components/Products.tsx`:
```tsx
price: 'A partir de R$ 1.500',
```

### Alterar Depoimentos

Edite `client/src/components/Testimonials.tsx`:
```tsx
{
  name: 'Nome do Cliente',
  role: 'Cargo - Empresa',
  content: 'Seu depoimento aqui',
  rating: 5,
  image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nome&mood=happy'
}
```

### Alterar Cores

Edite `client/src/index.css`:
```css
:root {
  --color-primary-blue: #1e40af;
  --color-accent-green: #10b981;
}
```

## 🚀 Deploy

Veja o arquivo `DEPLOY.md` para instruções detalhadas sobre como hospedar no:
- **Netlify** (Recomendado)
- **GitHub Pages**
- **Vercel**
- **Outros serviços estáticos**

## 📦 Dependências Principais

- **React 19** - Framework UI
- **Tailwind CSS 4** - Estilização
- **Vite** - Build tool
- **Wouter** - Roteamento
- **Lucide React** - Ícones
- **shadcn/ui** - Componentes UI

## 📱 Navegadores Suportados

- Chrome (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)
- Edge (últimas 2 versões)

## 🔐 Segurança

- Sem backend necessário
- Sem dados sensíveis no código
- HTTPS automático em produção
- Sem dependências externas perigosas

## 📊 Performance

- Lighthouse Score: 90+
- Tempo de carregamento: < 2s
- Otimizado para SEO
- Mobile-first approach

## 🤝 Contribuições

Para sugerir melhorias ou reportar bugs, abra uma issue no GitHub.

## 📄 Licença

Este projeto é de propriedade da IdealWeb. Todos os direitos reservados.

## 📞 Contato

- Email: contato@idealweb.com.br
- Telefone: (11) 99999-9999
- Localização: São Paulo, SP - Brasil

---

**Desenvolvido com ❤️ pela IdealWeb**

Última atualização: Fevereiro de 2026
