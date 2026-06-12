import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Referral Program | Trustx',
  description: 'Trustx referral program — share your link, earn rewards on every funded friend.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
