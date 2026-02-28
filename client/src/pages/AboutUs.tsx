import { ArrowLeft, Award, Users, Zap, Heart } from 'lucide-react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutUs() {
  const [, navigate] = useLocation();

  const values = [
    {
      icon: Heart,
      title: 'Paixão pelo Design',
      description: 'Cada projeto é feito com dedicação e atenção aos detalhes para criar experiências memoráveis.'
    },
    {
      icon: Users,
      title: 'Foco no Cliente',
      description: 'Seus objetivos são nossos objetivos. Trabalhamos em parceria para alcançar resultados extraordinários.'
    },
    {
      icon: Zap,
      title: 'Inovação Contínua',
      description: 'Mantemos-nos atualizados com as últimas tendências e tecnologias em web design.'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Não nos contentamos com o bom, buscamos sempre a excelência em tudo que fazemos.'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-blue to-primary-blue/90 text-white py-12">
        <div className="container">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </button>
          <h1 className="text-4xl md:text-5xl font-bold">Sobre a IdealWeb</h1>
          <p className="text-white/80 mt-4">Conheca a história por trás de nossas soluções digitais</p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-16">
        {/* Our Story */}
        <section className="mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-neutral-900 mb-6">Nossa História</h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-4">
            A IdealWeb foi fundada com uma missão simples: ajudar pequenos negócios e prestadores de serviço a crescer através de soluções digitais de qualidade.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed mb-4">
            Começamos observando um problema comum: muitos negócios tinham dificuldade em encontrar agências web que entendessem suas necessidades específicas e oferecessem preços justos. Decidimos mudar isso.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Hoje, somos orgulhosos em ter ajudado mais de 500 clientes a transformar seus negócios através de Landing Pages otimizadas e Sites Institucionais profissionais.
          </p>
        </section>

        {/* Our Mission */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Nossa Missão</h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              Transformar a presença digital de negócios através de design criativo, tecnologia moderna e estratégia focada em resultados.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Acreditamos que todo negócio merece um site que não apenas seja bonito, mas que realmente converta visitantes em clientes.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary-blue/10 to-accent-green/10 p-8 rounded-lg">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-primary-blue">500+</div>
                <div>
                  <p className="font-bold text-neutral-900">Clientes Satisfeitos</p>
                  <p className="text-sm text-neutral-600">Em todo o Brasil</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-accent-green">1000+</div>
                <div>
                  <p className="font-bold text-neutral-900">Projetos Entregues</p>
                  <p className="text-sm text-neutral-600">Com excelência</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-primary-blue">98%</div>
                <div>
                  <p className="font-bold text-neutral-900">Taxa de Satisfação</p>
                  <p className="text-sm text-neutral-600">Recomendação de clientes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-neutral-900 mb-12 text-center">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="p-8 rounded-lg border border-neutral-200 hover:shadow-lg transition-all">
                  <div className="inline-flex p-3 rounded-lg bg-accent-green/10 mb-4">
                    <Icon className="text-accent-green" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{value.title}</h3>
                  <p className="text-neutral-700 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-neutral-900 mb-6">Nosso Time</h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Somos uma equipe dedicada de designers, desenvolvedores e especialistas em marketing digital. Cada membro traz expertise única e paixão pelo que fazem.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Nosso time trabalha em conjunto para garantir que cada projeto receba atenção personalizada e seja entregue com a máxima qualidade.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Estamos sempre aprendendo, evoluindo e buscando novas formas de entregar ainda mais valor aos nossos clientes.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-neutral-900 mb-12 text-center">Por que Escolher a IdealWeb?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-blue mb-4">⚡</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Rápido</h3>
              <p className="text-neutral-700">Projetos entregues no prazo com qualidade garantida.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent-green mb-4">💡</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Criativo</h3>
              <p className="text-neutral-700">Soluções inovadoras e personalizadas para seu negócio.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-blue mb-4">📈</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Resultados</h3>
              <p className="text-neutral-700">Focamos em conversão e crescimento do seu negócio.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto text-center p-12 bg-gradient-to-r from-primary-blue to-primary-blue/90 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-4">Pronto para Transformar Seu Negócio?</h2>
          <p className="text-lg mb-8 opacity-90">
            Entre em contato conosco e descubra como a IdealWeb pode ajudar você a alcançar seus objetivos digitais.
          </p>
          <button
            onClick={() => navigate('/#contato')}
            className="inline-block px-8 py-3 bg-accent-green hover:bg-accent-green-light text-white font-semibold rounded-lg transition-all"
          >
            Começar Agora
          </button>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}
