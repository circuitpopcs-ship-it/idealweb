import { ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfService() {
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
          <h1 className="text-4xl md:text-5xl font-bold">Termos de Serviço</h1>
          <p className="text-white/80 mt-4">Última atualização: Fevereiro de 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-16">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-neutral-700 leading-relaxed">
              Ao acessar e usar este site, você aceita estar vinculado por estes Termos de Serviço. Se você não concorda com qualquer parte destes termos, por favor, não use nosso site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">2. Descrição do Serviço</h2>
            <p className="text-neutral-700 leading-relaxed">
              A IdealWeb fornece serviços de design e desenvolvimento web, incluindo Landing Pages e Sites Institucionais. Nossos serviços são fornecidos "como estão" e "conforme disponível".
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">3. Direitos de Propriedade Intelectual</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Todo o conteúdo em nosso site, incluindo textos, gráficos, logos, imagens e software, é propriedade da IdealWeb ou de seus fornecedores de conteúdo e está protegido por leis de direitos autorais internacionais.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              Você não pode reproduzir, distribuir, transmitir ou usar qualquer conteúdo sem nossa permissão expressa por escrito.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">4. Uso Aceitável</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Você concorda em não usar nosso site para:
            </p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2">
              <li>Atividades ilegais ou não autorizadas</li>
              <li>Assédio, abuso ou discriminação</li>
              <li>Transmissão de malware ou código prejudicial</li>
              <li>Spam ou comunicações indesejadas</li>
              <li>Violação de direitos de terceiros</li>
              <li>Acesso não autorizado a sistemas ou dados</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">5. Limitação de Responsabilidade</h2>
            <p className="text-neutral-700 leading-relaxed">
              A IdealWeb não será responsável por danos diretos, indiretos, incidentais, especiais ou consequentes resultantes do uso ou incapacidade de usar nosso site ou serviços, mesmo que tenhamos sido informados da possibilidade de tais danos.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">6. Isenção de Garantias</h2>
            <p className="text-neutral-700 leading-relaxed">
              Nosso site e serviços são fornecidos "como estão" sem garantias de qualquer tipo, expressas ou implícitas. Não garantimos que nosso site será ininterrupto, seguro ou livre de erros.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">7. Indenização</h2>
            <p className="text-neutral-700 leading-relaxed">
              Você concorda em indenizar e manter a IdealWeb, seus funcionários e agentes inofesos de qualquer reclamação, dano, perda ou despesa resultante de seu uso do site ou violação destes Termos.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">8. Modificação dos Termos</h2>
            <p className="text-neutral-700 leading-relaxed">
              Reservamos o direito de modificar estes Termos de Serviço a qualquer momento. Mudanças significativas serão comunicadas por email ou através de um aviso em nosso site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">9. Rescisão</h2>
            <p className="text-neutral-700 leading-relaxed">
              Podemos rescindir ou suspender seu acesso ao nosso site imediatamente, sem aviso prévio, se você violar qualquer disposição destes Termos.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">10. Lei Aplicável</h2>
            <p className="text-neutral-700 leading-relaxed">
              Estes Termos de Serviço são regidos e interpretados de acordo com as leis do Brasil, e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais neste local.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">11. Contato</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Se você tiver dúvidas sobre estes Termos de Serviço, entre em contato conosco:
            </p>
            <div className="space-y-2 text-neutral-700">
              <p><strong>Email:</strong> contato@idealweb.com.br</p>
              <p><strong>Telefone:</strong> (11) 99999-9999</p>
              <p><strong>Endereço:</strong> São Paulo, SP - Brasil</p>
            </div>
          </section>

          <section className="p-8 bg-accent-green/10 rounded-lg border border-accent-green/20">
            <p className="text-neutral-700 leading-relaxed">
              <strong>Nota:</strong> Estes Termos de Serviço foram criados para proteger tanto a IdealWeb quanto nossos clientes. Ao usar nosso site, você reconhece ter lido, compreendido e concorda em estar vinculado por estes termos.
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
