import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envio do formulário
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', service: '' });
    }, 3000);
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 text-neutral-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10"></div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-accent-green"></div>
              <span className="text-sm font-semibold text-accent-green uppercase tracking-wider">Entre em contato</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
              Vamos criar algo incrível juntos?
            </h2>

            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Preencha o formulário ao lado e nossa equipe entrará em contato em até 24 horas para discutir sua ideia e apresentar as melhores soluções.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent-green/10">
                  <Mail className="text-accent-green" size={24} />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-neutral-900">Email</p>
                  <p className="text-neutral-700">contato@idealweb.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent-green/10">
                  <Phone className="text-accent-green" size={24} />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-neutral-900">Telefone</p>
                  <p className="text-neutral-700">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent-green/10">
                  <MapPin className="text-accent-green" size={24} />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-neutral-900">Localização</p>
                  <p className="text-neutral-700">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-full bg-accent-green/20 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">Mensagem Enviada!</h3>
                <p className="text-neutral-600">Obrigado por entrar em contato. Nossa equipe responderá em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    Serviço de Interesse *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="landing-page">Landing Page</option>
                    <option value="institutional-site">Site Institucional</option>
                    <option value="both">Ambos</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent-green hover:bg-accent-green-light text-white font-semibold py-3 rounded-lg transition-all"
                >
                  Enviar Mensagem
                </Button>

                <p className="text-xs text-neutral-500 text-center">
                  Respeitamos sua privacidade. Seus dados serão usados apenas para entrar em contato.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
