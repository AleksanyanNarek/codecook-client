import type { ReactNode } from 'react';
import Header from '@/features/header/containers/Header'
import Footer from '@/features/footer/ui/Footer';


export const metadata = {
  title: 'My App',
  description: 'A simple Next.js app',
};

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
        <Header />
        <main className="flex-1">
            {children}
        </main>
        <Footer />
    </>
  );
}
