import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Marina Silva',
      role: 'Proprietária - Salão de Beleza',
      content: 'A landing page que criaram para mim aumentou minhas vendas em 150% nos primeiros 3 meses. Excelente trabalho!',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marina&mood=happy'
    },
    {
      name: 'Carlos Mendes',
      role: 'Diretor - Consultoria Empresarial',
      content: 'O site institucional ficou perfeito. Transmite profissionalismo e credibilidade. Meus clientes ficaram impressionados!',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos&mood=happy'
    },
    {
      name: 'Juliana Costa',
      role: 'Gerente - E-commerce',
      content: 'Equipe muito atenciosa e responsiva. Fizeram exatamente o que pedimos e ainda sugeriram melhorias. Recomendo!',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Juliana&mood=happy'
    },
    {
      name: 'Roberto Alves',
      role: 'Proprietário - Clínica Odontológica',
      content: 'Investimento que realmente valeu a pena. Consegui agendar muito mais pacientes através do site.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto&mood=happy'
    },
    {
      name: 'Fernanda Oliveira',
      role: 'Sócia - Agência de Marketing',
      content: 'Profissionalismo do início ao fim. Entregaram antes do prazo e com qualidade excepcional.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fernanda&mood=happy'
    },
    {
      name: 'Paulo Santos',
      role: 'CEO - Startup Tech',
      content: 'Transformaram minha visão em realidade. O site ficou moderno, funcional e muito atrativo.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Paulo&mood=happy'
    }
  ];

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-accent-green"></div>
            <span className="text-sm font-semibold text-accent-green uppercase tracking-wider">O que nossos clientes dizem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Depoimentos de Sucesso
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Veja como a IdealWeb transformou o negócio de centenas de clientes satisfeitos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 hover:shadow-lg transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-accent-green text-accent-green" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-neutral-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-bold text-neutral-900">{testimonial.name}</p>
                  <p className="text-sm text-neutral-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-primary-blue/10 to-primary-blue/5">
            <div className="text-4xl font-bold text-primary-blue mb-2">500+</div>
            <p className="text-neutral-600">Clientes Satisfeitos</p>
          </div>
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-accent-green/10 to-accent-green/5">
            <div className="text-4xl font-bold text-accent-green mb-2">4.9/5</div>
            <p className="text-neutral-600">Avaliação Média</p>
          </div>
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-primary-blue/10 to-primary-blue/5">
            <div className="text-4xl font-bold text-primary-blue mb-2">98%</div>
            <p className="text-neutral-600">Taxa de Recomendação</p>
          </div>
        </div>
      </div>
    </section>
  );
}
