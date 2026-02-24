import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/logo.svg" alt="IdealWeb" className="h-12 md:h-14 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('produtos')}
            className="text-neutral-700 hover:text-primary-blue font-medium transition-colors"
          >
            Produtos
          </button>
          <button 
            onClick={() => scrollToSection('beneficios')}
            className="text-neutral-700 hover:text-primary-blue font-medium transition-colors"
          >
            Benefícios
          </button>
          <button 
            onClick={() => scrollToSection('depoimentos')}
            className="text-neutral-700 hover:text-primary-blue font-medium transition-colors"
          >
            Depoimentos
          </button>
          <Button 
            onClick={() => scrollToSection('contato')}
            className="bg-accent-green hover:bg-accent-green-light text-white font-semibold"
          >
            Começar Agora
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-neutral-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-neutral-200 bg-white">
          <div className="container py-4 flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('produtos')}
              className="text-left text-neutral-700 hover:text-primary-blue font-medium py-2"
            >
              Produtos
            </button>
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="text-left text-neutral-700 hover:text-primary-blue font-medium py-2"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-left text-neutral-700 hover:text-primary-blue font-medium py-2"
            >
              Depoimentos
            </button>
            <Button 
              onClick={() => scrollToSection('contato')}
              className="w-full bg-accent-green hover:bg-accent-green-light text-white font-semibold"
            >
              Começar Agora
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
