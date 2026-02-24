import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src="/logo.svg" alt="IdealWeb" className="h-12 mb-4 brightness-0 invert" />
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
              <li><a href="#produtos" className="text-neutral-400 hover:text-accent-green transition-colors">Landing Pages</a></li>
              <li><a href="#produtos" className="text-neutral-400 hover:text-accent-green transition-colors">Sites Institucionais</a></li>
              <li><a href="#beneficios" className="text-neutral-400 hover:text-accent-green transition-colors">Nossos Diferenciais</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-bold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3">
              <li><a href="#depoimentos" className="text-neutral-400 hover:text-accent-green transition-colors">Depoimentos</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-accent-green transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="text-neutral-400 hover:text-accent-green transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-accent-green transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-accent-green transition-colors">Termos de Serviço</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-accent-green transition-colors">Cookies</a></li>
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
