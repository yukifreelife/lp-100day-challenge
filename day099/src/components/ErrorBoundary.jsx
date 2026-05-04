import { Component } from "react";
import { Button, NeonPanel } from "./UI";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidUpdate(previousProps) {
    if (previousProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="section-container py-20">
          <NeonPanel accent="magenta" className="text-center">
            <h1 className="text-3xl font-black text-white">ページを読み込めませんでした</h1>
            <p className="mt-4 leading-7 text-slate-300">時間をおいて再読み込みするか、商品ラインナップから再度お試しください。</p>
            <Button href="#products" className="mt-6" tracking="cta_click" trackingPosition="error_boundary">
              商品ラインナップへ戻る
            </Button>
          </NeonPanel>
        </section>
      );
    }

    return this.props.children;
  }
}
