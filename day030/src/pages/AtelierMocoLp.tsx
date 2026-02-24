import { EmpathySection } from '../components/lp/EmpathySection';
import { FaqSection } from '../components/lp/FaqSection';
import { FeaturesSection } from '../components/lp/FeaturesSection';
import { FinalCtaSection } from '../components/lp/FinalCtaSection';
import { Footer } from '../components/lp/Footer';
import { Header } from '../components/lp/Header';
import { HeroSection } from '../components/lp/HeroSection';
import { ProcessSection } from '../components/lp/ProcessSection';
import { ReviewsSection } from '../components/lp/ReviewsSection';
import { SolutionSection } from '../components/lp/SolutionSection';

export function AtelierMocoLp() {
  return (
    <div className="min-h-screen bg-lp-bg text-lp-text">
      <Header />
      <main>
        <HeroSection />
        <EmpathySection />
        <SolutionSection />
        <FeaturesSection />
        <ReviewsSection />
        <ProcessSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
