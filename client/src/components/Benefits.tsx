import { Smartphone, Zap, TrendingUp, Lock, Headphones, Palette } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Smartphone,
      title: 'Responsivo',
      description: 'Funciona perfeitamente em todos os dispositivos: desktop, tablet e mobile.'
    },
    {
      icon: Zap,
      title: 'Rápido',
      description: 'Carregamento ultrarrápido para melhor experiência do usuário e SEO.'
    },
    {
      icon: TrendingUp,
      title: 'Otimizado para Conversão',
      description: 'Design e estrutura focados em aumentar vendas e gerar leads.'
    },
    {
      icon: Lock,
      title: 'Seguro',
      description: 'SSL, backup automático e proteção contra ataques cibernéticos.'
    },
    {
      icon: Headphones,
      title: 'Suporte Dedicado',
      description: 'Equipe pronta para ajudar com dúvidas e manutenção técnica.'
    },
    {
      icon: Palette,
      title: 'Design Personalizado',
      description: 'Cada site é criado especificamente para sua marca e necessidades.'
    }
  ];

  return (
    <section id="beneficios" className="py-20 md:py-28 bg-gradient-to-br from-neutral-50 to-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-accent-green"></div>
            <span className="text-sm font-semibold text-accent-green uppercase tracking-wider">Por que escolher</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Diferenciais da IdealWeb
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Oferecemos muito mais que um site. Oferecemos uma solução completa para o sucesso digital do seu negócio.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={idx}
                className="group p-8 rounded-xl border border-neutral-200 bg-white hover:border-accent-green hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-accent-green/10 group-hover:bg-accent-green/20 transition-colors">
                  <Icon className="text-accent-green" size={28} />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{benefit.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-8 md:p-10 rounded-2xl bg-gradient-to-r from-primary-blue to-primary-blue/80 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Pronto para transformar seu negócio?</h3>
          <p className="text-base md:text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Não perca mais tempo. Comece hoje mesmo e veja os resultados em poucas semanas.
          </p>
        </div>
      </div>
    </section>
  );
}
