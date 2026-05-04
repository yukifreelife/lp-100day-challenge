import { useState } from "react";
import { Button, NeonPanel } from "../components/UI";

const fieldClass =
  "min-h-12 w-full border border-slate-700 bg-black/50 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/30";
const labelClass = "text-sm font-bold text-slate-300";

const supportPages = {
  "support-chat": {
    eyebrow: "チャット相談",
    title: "短時間で確認したい内容を送る",
    lead: "使用アイテム、注文前の迷い、ジム利用前の確認などを、チャット向けに短く整理して相談できます。",
    response: "受付時間 10:00〜18:00",
    formTitle: "チャット相談フォーム",
    cta: "チャット相談を開始する",
    doneMessage: "チャット相談の受付画面を準備しました。",
    fields: [
      { id: "nickname", label: "お名前またはニックネーム", placeholder: "例: 山田" },
      {
        id: "topic",
        label: "相談カテゴリ",
        type: "select",
        options: ["商品選び", "使い方", "配送について", "返品・交換", "その他"],
      },
      { id: "message", label: "相談内容", type: "textarea", placeholder: "今知りたいことを短く入力してください。" },
    ],
    notes: ["短い質問に向いています。", "注文番号がある場合は本文に記載できます。", "受付時間外はメール相談をご利用ください。"],
  },
  "support-email": {
    eyebrow: "メール相談",
    title: "写真や詳細を添えて相談する",
    lead: "購入前の比較、使用後の困りごと、配送や返品条件など、文章で詳しく残したい内容を送れます。",
    response: "24時間受付",
    formTitle: "メール相談フォーム",
    cta: "メール相談を送信する",
    doneMessage: "メール相談の受付内容を確認しました。",
    fields: [
      { id: "name", label: "お名前", placeholder: "例: 山田 太郎" },
      { id: "email", label: "返信先メールアドレス", type: "email", placeholder: "example@example.com" },
      { id: "subject", label: "件名", placeholder: "例: 初めてのギア選びについて" },
      { id: "body", label: "相談内容", type: "textarea", placeholder: "相談したい内容を詳しく入力してください。" },
    ],
    notes: ["受付後の返信目安は1〜2営業日です。", "画像添付が必要な場合は返信メールで案内します。", "急ぎの確認はチャット相談が便利です。"],
  },
  "support-contact": {
    eyebrow: "お問い合わせフォーム",
    title: "注文・配送・返品について問い合わせる",
    lead: "注文前後の確認、配送状況、返品・交換の相談など、必要事項をまとめて送れるフォームです。",
    response: "3営業日以内に返信",
    formTitle: "お問い合わせフォーム",
    cta: "問い合わせ内容を送信する",
    doneMessage: "お問い合わせ内容の受付準備が完了しました。",
    fields: [
      { id: "name", label: "お名前", placeholder: "例: 山田 太郎" },
      { id: "email", label: "返信先メールアドレス", type: "email", placeholder: "example@example.com" },
      {
        id: "category",
        label: "お問い合わせ種別",
        type: "select",
        options: ["注文について", "配送について", "返品・交換", "商品について", "その他"],
      },
      { id: "detail", label: "お問い合わせ内容", type: "textarea", placeholder: "確認したい内容を入力してください。" },
    ],
    notes: ["注文後の相談では注文内容を分かる範囲で記載してください。", "返品・交換は未使用・未開封の商品が対象です。", "法務ページで配送・返品条件も確認できます。"],
  },
};

function SupportField({ field }) {
  if (field.type === "textarea") {
    return (
      <textarea
        id={field.id}
        name={field.id}
        className={`${fieldClass} min-h-36 resize-y leading-7`}
        placeholder={field.placeholder}
        required
      />
    );
  }

  if (field.type === "select") {
    return (
      <select id={field.id} name={field.id} className={fieldClass} defaultValue="" required>
        <option value="" disabled>
          選択してください
        </option>
        {field.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
      id={field.id}
      name={field.id}
      className={fieldClass}
      type={field.type || "text"}
      placeholder={field.placeholder}
      required
    />
  );
}

export default function Support({ activeRoute = "support-contact" }) {
  const config = supportPages[activeRoute] || supportPages["support-contact"];
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus(config.doneMessage);
  };

  return (
    <div className="pb-24">
      <section className="section-container py-12">
        <p className="text-sm font-bold text-slate-400">ホーム ＞ よくある質問 ＞ {config.eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">{config.title}</h1>
        <p className="mt-5 max-w-3xl leading-8 text-slate-300">{config.lead}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="#faq-list" variant="secondary" tracking="cta_click" trackingPosition="support_back_faq">
            よくある質問へ戻る
          </Button>
          <Button href="#products" variant="secondary" tracking="cta_click" trackingPosition="support_products">
            商品ラインナップを見る
          </Button>
        </div>
      </section>

      <section className="section-container grid gap-6 pb-16 lg:grid-cols-[minmax(0,1fr)_340px]">
        <NeonPanel accent="cyan" className="space-y-6">
          <div>
            <p className="eyebrow">{config.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-black text-white">{config.formTitle}</h2>
            <p className="mt-3 text-sm font-bold text-lime-200">{config.response}</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {config.fields.map((field) => (
              <div key={field.id} className="space-y-2">
                <label className={labelClass} htmlFor={field.id}>
                  {field.label}
                </label>
                <SupportField field={field} />
              </div>
            ))}

            <Button className="w-full" type="submit" tracking="support_form_submit" trackingPosition={activeRoute}>
              {config.cta}
            </Button>
            <p className="min-h-6 text-sm font-bold text-lime-200" role="status" aria-live="polite">
              {status}
            </p>
          </form>
        </NeonPanel>

        <aside className="space-y-5">
          <NeonPanel accent="magenta">
            <h2 className="text-xl font-black text-white">入力前に確認</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              {config.notes.map((note) => (
                <li key={note} className="border-l-2 border-fuchsia-400 pl-3">
                  {note}
                </li>
              ))}
            </ul>
          </NeonPanel>

          <NeonPanel accent="orange">
            <h2 className="text-xl font-black text-white">迷ったら</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">最初の一式で迷っている場合は、スターターセットの内容から確認できます。</p>
            <Button href="#starter-kit" className="mt-5 w-full" tracking="cta_click" trackingPosition="support_starter">
              スターターセットを見る
            </Button>
          </NeonPanel>
        </aside>
      </section>
    </div>
  );
}
