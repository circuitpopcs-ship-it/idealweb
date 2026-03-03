import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white flex items-center pt-6 pb-12 md:min-h-screen md:py-0">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-accent-green"></div>
                <span className="text-sm font-semibold text-accent-green uppercase tracking-wider">Transforme seu negócio</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 leading-tight">
                Sites que <span className="text-primary-blue">vendem</span> e Landing Pages que <span className="text-accent-green">convertem</span>
              </h1>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Criamos soluções digitais profissionais para prestadores de serviço e comércios que desejam aumentar suas vendas e presença online.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <Button 
                onClick={() => scrollToSection('contato')}
                className="group bg-accent-green hover:bg-accent-green/90 text-white font-semibold text-base py-6 px-8 rounded-lg transition-all"
              >
                Começar Agora
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <button
                onClick={() => scrollToSection('produtos')}
                className="border-2 border-primary-blue text-primary-blue font-semibold text-base py-3 px-6 rounded-lg transition-all"
                style={{
                  backgroundColor: 'transparent',
                  color: '#1e40af'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1e40af';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#1e40af';
                }}
              >
                Ver Produtos
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-neutral-200 mt-4">
              <div>
                <p className="text-3xl font-bold text-primary-blue">500+</p>
                <p className="text-neutral-600 text-sm">Clientes satisfeitos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent-green">3x</p>
                <p className="text-neutral-600 text-sm">Aumento médio de vendas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-blue">98%</p>
                <p className="text-neutral-600 text-sm">Taxa de satisfação</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <img 
              src="https://private-us-east-1.manuscdn.com/sessionFile/fqoX5WJWo7xVeNvkdxSmKy/sandbox/37NxO3aHkMy9p8R35zh9yF-img-1_1771944784000_na1fn_aGVyby1sYW5kaW5nLXBhZ2Vz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZnFvWDVXSldvN3hWZU52a2R4U21LeS9zYW5kYm94LzM3TnhPM2FIa015OXA4UjM1emg5eUYtaW1nLTFfMTc3MTk0NDc4NDAwMF9uYTFmbl9hR1Z5Ynkxc1lXNWthVzVuTFhCaFoyVnoucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=a2cxOb0mlfBBkNUcno8EDjDd2Imwpe1IzRUCSA5LvWG9-IWYF26WfCl-28NChE2N9hXVEhHRZLd-ft0RW8fCmc6ryaXsZMcn-vWBXKh4xVoatUxmN9MDuTJodZRprj59UOO6TTXrUq8hashhYcnERYzPZYQxv2uqhx7Hogc8rJ6VLtZNWFlMEJHEP6Kx6sl1t8xWsrYzjF2uMGBQ98xYytbE9HKbAqM5m5YH7U~AjN5dyePcNf4QeW3SsKIspPC~ypp7HBgj-Ct3O3o7Jg9L7gRAYjulGmr-cIASxAo7PG4Hla85KdN7tQ890EpPSb49fqIOOj75esiYuNthJ2pCfA__"
              alt="Landing Pages"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
