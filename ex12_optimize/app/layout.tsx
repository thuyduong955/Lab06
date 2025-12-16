// ex12_optimize/app/layout.tsx
// This layout imports a Google Font using next/font/google and applies it globally.
import './globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
