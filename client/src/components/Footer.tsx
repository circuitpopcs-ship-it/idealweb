import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Footer() {
  const [location, navigate] = useLocation();
  const currentYear = new Date().getFullYear();
  
  // Funcao para navegar para ancora na Home
  const navigateToAnchor = (anchor: string) => {
    if (location === '/') {
      // Se ja esta na Home, apenas scroll para a ancora
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Se nao esta na Home, navega para Home e depois faz scroll
      navigate('/');
      // Aguarda um pouco para a pagina carregar e depois faz o scroll
      setTimeout(() => {
        const element = document.querySelector(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  return (
    <footer className="bg-neutral-900 text-white py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <button
              onClick={() => navigate('/')}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img src="/logo.svg" alt="IdealWeb" className="h-12 mb-4 brightness-0 invert" />
            </button>
            <p className="text-neutral-400 leading-relaxed">
              Transformando negócios através de soluções digitais criativas e eficientes.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-neutral-400 hover:text-accent-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-accent-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-accent-green transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-accent-green transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Produtos */}
          <div>
            <h4 className="font-bold text-lg mb-6">Produtos</h4>
            <ul className="space-y-3">
              <li><button onClick={() => navigateToAnchor('#produtos')} className="text-neutral-400 hover:text-accent-green transition-colors cursor-pointer text-left">Landing Pages</button></li>
              <li><button onClick={() => navigateToAnchor('#produtos')} className="text-neutral-400 hover:text-accent-green transition-colors cursor-pointer text-left">Sites Institucionais</button></li>
              <li><button onClick={() => navigateToAnchor('#beneficios')} className="text-neutral-400 hover:text-accent-green transition-colors cursor-pointer text-left">Nossos Diferenciais</button></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-bold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3">
              <li><button onClick={() => navigateToAnchor('#depoimentos')} className="text-neutral-400 hover:text-accent-green transition-colors cursor-pointer text-left">Depoimentos</button></li>
              <li><a href="/about-us" className="text-neutral-400 hover:text-accent-green transition-colors">Sobre Nós</a></li>
              <li><button onClick={() => navigateToAnchor('#contato')} className="text-neutral-400 hover:text-accent-green transition-colors cursor-pointer text-left">Contato</button></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="/privacy-policy" className="text-neutral-400 hover:text-accent-green transition-colors">Política de Privacidade</a></li>
              <li><a href="/terms-of-service" className="text-neutral-400 hover:text-accent-green transition-colors">Termos de Serviço</a></li>
              <li><a href="/cookies" className="text-neutral-400 hover:text-accent-green transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm">
              © {currentYear} IdealWeb. Todos os direitos reservados.
            </p>
            <p className="text-neutral-400 text-sm">
              Desenvolvido com ❤️ para transformar negócios
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
