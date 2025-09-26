import { HeaderProvider } from '@/contexts/HeaderContext';
import Header from './_components/Header';
import Footer from './_components/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = async ({ children }: PageLayoutProps) => {
  return (
    <>
      <HeaderProvider>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </HeaderProvider>
    </>
  );
};

export default PageLayout;
