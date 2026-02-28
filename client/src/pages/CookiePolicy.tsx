import { ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CookiePolicy() {
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
          <h1 className="text-4xl md:text-5xl font-bold">Política de Cookies</h1>
          <p className="text-white/80 mt-4">Última atualização: Fevereiro de 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-16">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">1. O que são Cookies?</h2>
            <p className="text-neutral-700 leading-relaxed">
              Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita nosso site. Eles ajudam a melhorar sua experiência de navegação, lembrando suas preferências e atividades.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">2. Tipos de Cookies que Usamos</h2>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">Cookies Essenciais</h3>
              <p className="text-neutral-700 leading-relaxed">
                Estes cookies são necessários para o funcionamento básico do site. Incluem autenticação de usuário, segurança e conformidade com requisitos legais.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">Cookies de Desempenho</h3>
              <p className="text-neutral-700 leading-relaxed">
                Estes cookies coletam informações sobre como você usa nosso site, como páginas visitadas e tempo gasto. Ajudam-nos a melhorar o desempenho do site.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">Cookies de Funcionalidade</h3>
              <p className="text-neutral-700 leading-relaxed">
                Estes cookies lembram suas preferências, como idioma, tema e configurações personalizadas para melhorar sua experiência.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">Cookies de Marketing</h3>
              <p className="text-neutral-700 leading-relaxed">
                Estes cookies rastreiam seu comportamento de navegação para exibir anúncios relevantes. Você pode optar por não recebê-los.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">3. Cookies de Terceiros</h2>
            <p className="text-neutral-700 leading-relaxed">
              Usamos serviços de terceiros como Google Analytics para entender como os visitantes usam nosso site. Esses serviços podem colocar seus próprios cookies em seu dispositivo.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">4. Como Controlamos Cookies</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Você pode controlar e/ou deletar cookies conforme desejar. Você pode deletar todos os cookies já no seu computador e pode configurar a maioria dos navegadores para evitar que cookies sejam colocados.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              No entanto, se você deletar cookies, algumas funcionalidades do site podem não funcionar corretamente.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">5. Instruções por Navegador</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Google Chrome</h3>
                <p className="text-neutral-700">Configurações → Privacidade e segurança → Cookies e outros dados do site</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Mozilla Firefox</h3>
                <p className="text-neutral-700">Opções → Privacidade → Cookies e dados do site</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Safari</h3>
                <p className="text-neutral-700">Preferências → Privacidade → Gerenciar dados do site</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Microsoft Edge</h3>
                <p className="text-neutral-700">Configurações → Privacidade, pesquisa e serviços → Cookies e outros dados do site</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">6. Consentimento de Cookies</h2>
            <p className="text-neutral-700 leading-relaxed">
              Ao continuar usando nosso site, você concorda com o uso de cookies conforme descrito nesta política. Você pode revogar seu consentimento a qualquer momento alterando as configurações do seu navegador.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">7. Alterações a Esta Política</h2>
            <p className="text-neutral-700 leading-relaxed">
              Podemos atualizar esta Política de Cookies periodicamente. Recomendamos revisar esta página regularmente para estar informado sobre como usamos cookies.
            </p>
          </section>

          <section className="mb-12 p-8 bg-primary-blue/10 rounded-lg border border-primary-blue/20">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Contato</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato conosco:
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
