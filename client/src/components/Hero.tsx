import { ArrowRight, Zap, Smartphone, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-neutral-50 to-neutral-100 py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 w-fit">
              <div className="w-2 h-2 rounded-full bg-accent-green"></div>
              <span className="text-sm font-semibold text-accent-green uppercase tracking-wider">Transforme seu negócio</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
              Sites que <span className="text-primary-blue">vendem</span> e Landing Pages que <span className="text-accent-green">convertem</span>
            </h1>

            <p className="text-lg text-neutral-700 leading-relaxed max-w-lg">
              Criamos soluções digitais profissionais para prestadores de serviço e comércios que desejam aumentar suas vendas e presença online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => scrollToSection('contato')}
                className="bg-accent-green hover:bg-accent-green-light text-white font-semibold text-base py-6 px-8 rounded-lg flex items-center gap-2 group"
              >
                Começar Agora
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('produtos')}
                variant="outline"
                className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white font-semibold text-base py-6 px-8 rounded-lg transition-all"
              >
                Ver Produtos
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-neutral-200 mt-4">
              <div>
                <div className="text-2xl font-bold text-primary-blue">500+</div>
                <p className="text-sm text-neutral-600">Clientes satisfeitos</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-green">3x</div>
                <p className="text-sm text-neutral-600">Aumento médio de vendas</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-blue">98%</div>
                <p className="text-sm text-neutral-600">Taxa de satisfação</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden md:block">
            <div className="relative z-10">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/fqoX5WJWo7xVeNvkdxSmKy/sandbox/37NxO3aHkMy9p8R35zh9yF-img-1_1771944784000_na1fn_aGVyby1sYW5kaW5nLXBhZ2Vz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZnFvWDVXSldvN3hWZU52a2R4U21LeS9zYW5kYm94LzM3TnhPM2FIa015OXA4UjM1emg5eUYtaW1nLTFfMTc3MTk0NDc4NDAwMF9uYTFmbl9hR1Z5Ynkxc1lXNWthVzVuTFhCaFoyVnoucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=a2cxOb0mlfBBkNUcno8EDjDd2Imwpe1IzRUCSA5LvWG9-IWYF26WfCl-28NChE2N9hXVEhHRZLd-ft0RW8fCmc6ryaXsZMcn-vWBXKh4xVoatUxmN9MDuTJodZRprj59UOO6TTXrUq8hashhYcnERYzPZYQxv2uqhx7Hogc8rJ6VLtZNWFlMEJHEP6Kx6sl1t8xWsrYzjF2uMGBQ98xYytbE9HKbAqM5m5YH7U~AjN5dyePcNf4QeW3SsKIspPC~ypp7HBgj-Ct3O3o7Jg9L7gRAYjulGmr-cIASxAo7PG4Hla85KdN7tQ890EpPSb49fqIOOj75esiYuNthJ2pCfA__" 
                alt="Landing Pages" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent-green/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary-blue/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
