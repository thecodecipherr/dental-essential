import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Dental Essential | Top Dental Care in Panvel',
  description: 'Expert dental care with the latest technology. We provide comprehensive dental treatments including root canal, implants, braces, and more in Panvel.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="pb-32">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
