import { ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 py-12">
        <div className="container">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity text-neutral-900"
          >
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">Política de Privacidade</h1>
          <p className="text-neutral-600 mt-4">Última atualização: Fevereiro de 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-16 flex-grow">
        <div className="max-w-3xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">1. Introdução</h2>
            <p className="text-neutral-900 leading-relaxed">
              A IdealWeb ("nós", "nosso" ou "nos") está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e salvaguardamos suas informações quando você visita nosso site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">2. Informações que Coletamos</h2>
            <p className="text-neutral-900 leading-relaxed mb-4">
              Podemos coletar informações sobre você de várias formas:
            </p>
            <ul className="list-disc list-inside text-neutral-900 space-y-2">
              <li><strong>Informações que você nos fornece:</strong> Nome, email, telefone, empresa e mensagens através de formulários</li>
              <li><strong>Informações de navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas e tempo gasto no site</li>
              <li><strong>Cookies:</strong> Dados armazenados para melhorar sua experiência</li>
              <li><strong>Dados de análise:</strong> Informações sobre como você interage com nosso site</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">3. Como Usamos Suas Informações</h2>
            <p className="text-neutral-900 leading-relaxed mb-4">
              Usamos as informações coletadas para:
            </p>
            <ul className="list-disc list-inside text-neutral-900 space-y-2">
              <li>Fornecer, manter e melhorar nossos serviços</li>
              <li>Responder às suas dúvidas e solicitações</li>
              <li>Enviar comunicações de marketing (com seu consentimento)</li>
              <li>Analisar o uso do site para melhorar a experiência do usuário</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">4. Proteção de Dados</h2>
            <p className="text-neutral-900 leading-relaxed">
              Implementamos medidas de segurança técnicas, administrativas e físicas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">5. Seus Direitos</h2>
            <p className="text-neutral-900 leading-relaxed mb-4">
              Você tem o direito de:
            </p>
            <ul className="list-disc list-inside text-neutral-900 space-y-2">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir dados imprecisos</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Optar por não receber comunicações de marketing</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">6. Contato</h2>
            <p className="text-neutral-900 leading-relaxed">
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através do formulário de contato em nosso site ou envie um email para contato@idealweb.com.br.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
