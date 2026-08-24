import './globals.css';
import type { Metadata } from 'next';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'The Trophies School | Sound minds. Kind hearts. Bright futures.',
  description: 'A warm, ambitious start to school life in Ibadan. Crèche, nursery and primary education at The Trophies School.',
  icons: '/trophies-logo-favicon.png'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
