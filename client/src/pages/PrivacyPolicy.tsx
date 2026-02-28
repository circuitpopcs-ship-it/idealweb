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
      <div className="bg-gradient-to-r from-primary-blue to-primary-blue/90 text-white py-12">
        <div className="container">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </button>
          <h1 className="text-4xl md:text-5xl font-bold">Política de Privacidade</h1>
          <p className="text-white/80 mt-4">Última atualização: Fevereiro de 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-16">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">1. Introdução</h2>
            <p className="text-neutral-700 leading-relaxed">
              A IdealWeb ("nós", "nosso" ou "nos") está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e salvaguardamos suas informações quando você visita nosso site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">2. Informações que Coletamos</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Podemos coletar informações sobre você de várias formas:
            </p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2">
              <li><strong>Informações que você nos fornece:</strong> Nome, email, telefone, empresa e mensagens através de formulários</li>
              <li><strong>Informações de navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas e tempo gasto no site</li>
              <li><strong>Cookies:</strong> Dados armazenados para melhorar sua experiência</li>
              <li><strong>Dados de análise:</strong> Informações sobre como você interage com nosso site</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">3. Como Usamos Suas Informações</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Usamos as informações coletadas para:
            </p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2">
              <li>Responder suas consultas e fornecer suporte ao cliente</li>
              <li>Enviar atualizações sobre nossos serviços e promoções</li>
              <li>Melhorar e otimizar nosso site e serviços</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Prevenir fraude e atividades ilícitas</li>
              <li>Analisar tendências de uso e melhorar a experiência do usuário</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">4. Compartilhamento de Informações</h2>
            <p className="text-neutral-700 leading-relaxed">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing. Podemos compartilhar informações apenas quando:
            </p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2 mt-4">
              <li>Exigido por lei ou processo legal</li>
              <li>Necessário para proteger nossos direitos e segurança</li>
              <li>Com prestadores de serviços que nos ajudam a operar nosso site (sob acordos de confidencialidade)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">5. Segurança de Dados</h2>
            <p className="text-neutral-700 leading-relaxed">
              Implementamos medidas de segurança técnicas, administrativas e físicas apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela Internet é 100% seguro.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">6. Retenção de Dados</h2>
            <p className="text-neutral-700 leading-relaxed">
              Retemos suas informações pessoais pelo tempo necessário para fornecer nossos serviços, cumprir obrigações legais ou resolver disputas. Você pode solicitar a exclusão de seus dados a qualquer momento.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">7. Seus Direitos</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Você tem o direito de:
            </p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir informações imprecisas</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Optar por não receber comunicações de marketing</li>
              <li>Portar seus dados para outro serviço</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">8. Cookies</h2>
            <p className="text-neutral-700 leading-relaxed">
              Nosso site usa cookies para melhorar sua experiência. Você pode controlar as configurações de cookies através do seu navegador. Para mais informações, consulte nossa Política de Cookies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">9. Links Externos</h2>
            <p className="text-neutral-700 leading-relaxed">
              Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelas práticas de privacidade desses sites. Recomendamos revisar suas políticas de privacidade.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">10. Alterações a Esta Política</h2>
            <p className="text-neutral-700 leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças significativas por email ou através de um aviso destacado em nosso site.
            </p>
          </section>

          <section className="mb-12 p-8 bg-primary-blue/10 rounded-lg border border-primary-blue/20">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">11. Contato</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Se você tiver dúvidas sobre esta Política de Privacidade ou nossas práticas de privacidade, entre em contato conosco:
            </p>
            <div className="space-y-2 text-neutral-700">
              <p><strong>Email:</strong> contato@idealweb.com.br</p>
              <p><strong>Telefone:</strong> (11) 99999-9999</p>
              <p><strong>Endereço:</strong> São Paulo, SP - Brasil</p>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
