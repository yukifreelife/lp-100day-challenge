import { siteData } from "./data/siteData.js";
import SiteShell from "./components/SiteShell.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import SeoHead from "./components/SeoHead.jsx";

const pathToPageKey = {
  "/": "home",
  "/service": "service",
  "/pricing": "pricing",
  "/contact": "contact",
};

function getPageKey(pathname) {
  const normalizedPath = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
  return pathToPageKey[normalizedPath] ?? "home";
}

function App() {
  const pageKey = getPageKey(window.location.pathname);
  const page = siteData.pages[pageKey];
  const pages = {
    home: HomePage,
    service: ServicePage,
    pricing: PricingPage,
    contact: ContactPage,
  };
  const PageComponent = pages[pageKey] ?? HomePage;

  return (
    <SiteShell siteData={siteData} pageKey={pageKey}>
      <SeoHead siteData={siteData} page={page} pageKey={pageKey} />
      <PageComponent page={page} siteData={siteData} pageKey={pageKey} />
    </SiteShell>
  );
}

export default App;
