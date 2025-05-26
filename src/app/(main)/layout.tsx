import type { ReactNode } from 'react';
import Header from '@/features/header/containers/Header'
import Footer from '@/features/footer/ui/Footer';


export const metadata = {
  title: 'Code Cook',
  description: 'A simple Next.js app',
};

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className='main_layout'>
      <Header />

      {children}

      <Footer />
    </main>
  );
}
