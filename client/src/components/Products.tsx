import { Check, Zap, Globe, BarChart3, Smartphone, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Products() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const products = [
    {
      id: 'landing-pages',
      title: 'Landing Pages',
      description: 'Páginas otimizadas para conversão com design moderno e elementos persuasivos.',
      price: 'A partir de R$ 1.500',
      features: [
        'Design responsivo e moderno',
        'Otimizado para SEO',
        'Integração com ferramentas de email',
        'Análise de conversão',
        'Suporte técnico 30 dias',
        'Hospedagem incluída'
      ],
      icon: Zap,
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/fqoX5WJWo7xVeNvkdxSmKy/sandbox/37NxO3aHkMy9p8R35zh9yF-img-1_1771944784000_na1fn_aGVyby1sYW5kaW5nLXBhZ2Vz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZnFvWDVXSldvN3hWZU52a2R4U21LeS9zYW5kYm94LzM3TnhPM2FIa015OXA4UjM1emg5eUYtaW1nLTFfMTc3MTk0NDc4NDAwMF9uYTFmbl9hR1Z5Ynkxc1lXNWthVzVuTFhCaFoyVnoucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=a2cxOb0mlfBBkNUcno8EDjDd2Imwpe1IzRUCSA5LvWG9-IWYF26WfCl-28NChE2N9hXVEhHRZLd-ft0RW8fCmc6ryaXsZMcn-vWBXKh4xVoatUxmN9MDuTJodZRprj59UOO6TTXrUq8hashhYcnERYzPZYQxv2uqhx7Hogc8rJ6VLtZNWFlMEJHEP6Kx6sl1t8xWsrYzjF2uMGBQ98xYytbE9HKbAqM5m5YH7U~AjN5dyePcNf4QeW3SsKIspPC~ypp7HBgj-Ct3O3o7Jg9L7gRAYjulGmr-cIASxAo7PG4Hla85KdN7tQ890EpPSb49fqIOOj75esiYuNthJ2pCfA__',
      highlight: false
    },
    {
      id: 'institutional-sites',
      title: 'Sites Institucionais',
      description: 'Websites profissionais que representam sua marca e geram credibilidade.',
      price: 'A partir de R$ 3.500',
      features: [
        'Design personalizado e profissional',
        'Múltiplas páginas e seções',
        'Blog integrado',
        'Formulários de contato avançados',
        'Suporte técnico 90 dias',
        'Hospedagem e domínio inclusos'
      ],
      icon: Globe,
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/fqoX5WJWo7xVeNvkdxSmKy/sandbox/37NxO3aHkMy9p8R35zh9yF-img-2_1771944786000_na1fn_aW5zdGl0dXRpb25hbC1zaXRlcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZnFvWDVXSldvN3hWZU52a2R4U21LeS9zYW5kYm94LzM3TnhPM2FIa015OXA4UjM1emg5eUYtaW1nLTJfMTc3MTk0NDc4NjAwMF9uYTFmbl9hVzV6ZEdsMGRYUnBiMjVoYkMxemFYUmxjdy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=DeB8khqyfBxeXPaeaQODjma5JIp7hgvOrIk-hvdysL92s8gKqkW~pskYwT9sXCkz~86eOtyx5ADmDi0WZWqLvgMRkdifbHFO8sViCCKXzyCgith1qrDD4cEYlj0UboeHJGLmiDyWhubmmSgdgxMES9yVtJzCG~EIV7-Ov1OdVT80RncRoPH-9yIdLdTjnBREsxX7mArDI0WNE-uHp3HuLHbcXxUs95hHCIitQpPCOpn~nzInfSfcpkbZRH6wu4E~e0pIh7EifWlMRuvrtGCZaX5rbCRWQ~AY6I~qQEddLRkGuZ-9IPQ1DkSnTERzScgCRSA4rc5WcALtwcMBbd3gcA__',
      highlight: true
    }
  ];

  return (
    <section id="produtos" className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-accent-green"></div>
            <span className="text-sm font-semibold text-accent-green uppercase tracking-wider">Nossos Produtos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Soluções Digitais Completas
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Escolha a solução ideal para seu negócio e comece a gerar resultados imediatamente.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto md:items-stretch">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div 
                key={product.id}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col ${
                  product.highlight 
                    ? 'md:col-span-1 border-2 border-accent-green shadow-2xl' 
                    : 'border border-neutral-200 shadow-2xl'
                }`}
              >
                {/* Badge */}
                {product.highlight && (
                  <div className="absolute top-4 right-4 bg-accent-green text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-neutral-100">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8 bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg ${product.highlight ? 'bg-accent-green/10' : 'bg-primary-blue/10'}`}>
                      <Icon className={product.highlight ? 'text-accent-green' : 'text-primary-blue'} size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">{product.title}</h3>
                  </div>

                  <p className="text-neutral-600 mb-6">{product.description}</p>

                  <div className="mb-6">
                    <p className="text-3xl font-bold text-neutral-900">{product.price}</p>
                    <p className="text-sm text-neutral-500">Preço inicial</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="text-accent-green flex-shrink-0 mt-1" size={20} />
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={() => scrollToSection('contato')}
                    className={`w-full font-semibold py-3 px-6 rounded-lg transition-all text-base ${
                      product.highlight
                        ? 'bg-accent-green hover:bg-accent-green-light text-white'
                        : 'border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white'
                    }`}
                  >
                    Solicitar Orçamento
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
