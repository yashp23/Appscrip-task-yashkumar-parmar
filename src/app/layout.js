import Header from '@/components/Header';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'E-commerce Website',
  description: 'A sample e-commerce website built with Next.js 14',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
