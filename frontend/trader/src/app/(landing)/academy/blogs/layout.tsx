import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trustx Academy — Trading Blog & Market Insights',
  description: 'Market insights, strategy breakdowns, and platform tips from the Trustx trading desk. Updated weekly.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
