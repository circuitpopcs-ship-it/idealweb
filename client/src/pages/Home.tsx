import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

/**
 * IdealWeb - Site Institucional
 * Design: Minimalismo Corporativo com Ênfase em Conversão
 * 
 * Paleta de Cores:
 * - Primária: Azul Profundo (#1e40af)
 * - Secundária: Verde Vibrante (#10b981)
 * - Neutros: Branco, Cinza claro e escuro
 * 
 * Tipografia:
 * - Display: Poppins Bold (títulos)
 * - Body: Inter Regular (textos)
 * 
 * Estrutura:
 * 1. Header com navegação responsiva
 * 2. Hero assimétrico com CTA
 * 3. Produtos (Landing Pages e Sites Institucionais)
 * 4. Benefícios/Diferenciais
 * 5. Depoimentos
 * 6. CTA Final com formulário
 * 7. Footer
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Products />
        <Benefits />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
