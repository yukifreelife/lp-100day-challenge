import { useEffect, useMemo, useState } from "react";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { ContactPage, DemoPage, DiagnosisPage, PricingPage } from "./pages/ConversionPages";
import { CasesPage, ChannelsPage, FeaturesPage, SecurityPage } from "./pages/ProductPages";
import { ColumnPage, FaqPage, HelpPage, LegalPage, NewsPage } from "./pages/ContentPages";

export default function App() {
  const [route, setRoute] = useState(getRoute());
  const page = useMemo(() => pages[route] ?? pages.home, [route]);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRoute());
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <Layout>
      {page.component}
    </Layout>
  );
}

function getRoute() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  return hash || "home";
}

const pages = {
  home: { component: <Home /> },
  diagnosis: { component: <DiagnosisPage /> },
  demo: { component: <DemoPage /> },
  pricing: { component: <PricingPage /> },
  contact: { component: <ContactPage /> },
  features: { component: <FeaturesPage /> },
  channels: { component: <ChannelsPage /> },
  cases: { component: <CasesPage /> },
  security: { component: <SecurityPage /> },
  help: { component: <HelpPage /> },
  faq: { component: <FaqPage /> },
  news: { component: <NewsPage /> },
  column: { component: <ColumnPage /> },
  legal: { component: <LegalPage /> }
};
