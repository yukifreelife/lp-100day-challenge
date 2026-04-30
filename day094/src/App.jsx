import { useEffect, useMemo, useState } from "react";
import { PageShell } from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import {
  BusinessPage,
  CasesPage,
  CheckoutPage,
  DashboardPage,
  DiagnosisPage,
  HowItWorksPage,
  KitPage,
  LegalPage,
  MagazinePage,
  PlansPage,
  QualityPage,
  SupportPage,
} from "./pages/DetailPages.jsx";

const pageComponents = {
  home: Home,
  diagnosis: DiagnosisPage,
  plans: PlansPage,
  kit: KitPage,
  how: HowItWorksPage,
  business: BusinessPage,
  quality: QualityPage,
  cases: CasesPage,
  magazine: MagazinePage,
  dashboard: DashboardPage,
  checkout: CheckoutPage,
  support: SupportPage,
  legal: LegalPage,
};

const pageMeta = {
  home: {
    title: "SONAE BOX | 防災備蓄を診断・配送・期限管理",
    description: "家族・ひとり暮らし・オフィスの防災備蓄を診断し、必要な備えを届けて期限管理まで支援します。",
  },
  diagnosis: {
    title: "3分でできる備蓄診断 | SONAE BOX",
    description: "家族構成や住まいに合わせて、必要な防災備蓄量とおすすめプランを確認できます。",
  },
  plans: {
    title: "プラン詳細 | SONAE BOX",
    description: "家族、ひとり暮らし、オフィス向けの防災備蓄プランを比較できます。",
  },
  kit: {
    title: "キット内容 | SONAE BOX",
    description: "水、保存食、ライト、衛生用品など、防災士監修の備蓄キット内容を紹介します。",
  },
  how: {
    title: "使い方 | SONAE BOX",
    description: "備蓄診断、定期配送、期限管理までの利用ステップを紹介します。",
  },
  business: {
    title: "法人・オフィス向け | SONAE BOX",
    description: "従業員数や拠点に合わせて、法人の防災備蓄を選定・納品・期限管理まで支援します。",
  },
  quality: {
    title: "監修・品質管理 | SONAE BOX",
    description: "防災士の知見と品質確認に基づく、安心して保管できる備蓄設計を紹介します。",
  },
  cases: {
    title: "導入事例・利用者の声 | SONAE BOX",
    description: "家庭、ひとり暮らし、店舗やクリニックでのSONAE BOX活用例を紹介します。",
  },
  magazine: {
    title: "防災マガジン | SONAE BOX",
    description: "備蓄量、期限管理、家族やペットの備えなど、今日から使える防災知識を紹介します。",
  },
  dashboard: {
    title: "マイページ | SONAE BOX",
    description: "備蓄リスト、期限リマインド、次回お届け予定を確認できる管理画面です。",
  },
  checkout: {
    title: "申込・決済 | SONAE BOX",
    description: "SONAE BOXの契約プラン、配送先、お届けサイクル、支払い方法を確認する申込画面です。",
  },
  support: {
    title: "FAQ・お問い合わせ | SONAE BOX",
    description: "料金、配送、期限管理、法人利用に関するよくある質問と問い合わせ方法を確認できます。",
  },
  legal: {
    title: "法務・ポリシー | SONAE BOX",
    description: "SONAE BOXの利用規約、プライバシーポリシー、キャンセルポリシーを掲載しています。",
  },
};

function getInitialPage() {
  const hash = window.location.hash.replace("#", "");
  return pageComponents[hash] ? hash : "home";
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const CurrentPage = useMemo(() => pageComponents[currentPage] ?? Home, [currentPage]);

  const navigate = (page) => {
    const nextPage = pageComponents[page] ? page : "home";
    setCurrentPage(nextPage);
    window.history.replaceState(null, "", `#${nextPage}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onHashChange = () => setCurrentPage(getInitialPage());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const meta = pageMeta[currentPage] ?? pageMeta.home;
    document.title = meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", meta.description);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", meta.title);

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute("content", meta.description);
  }, [currentPage]);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [currentPage]);

  return (
    <PageShell currentPage={currentPage} onNavigate={navigate}>
      <CurrentPage onNavigate={navigate} />
    </PageShell>
  );
}
