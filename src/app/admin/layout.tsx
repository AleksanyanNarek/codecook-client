import type { ReactNode } from 'react';

export const metadata = {
  title: 'Code Cook Admin panel',
  description: 'A simple Next.js app',
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      {children}
    </main>
  );
}
