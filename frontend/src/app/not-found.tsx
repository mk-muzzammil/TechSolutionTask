import HeroSection from '@/components/ui/HeroSection';
import ErrorContent from '@/components/error/ErrorContent';

export const metadata = {
  title: '404 - Page Not Found | Floyland Hotel & Resort',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <main>
      <HeroSection 
        title="404 Error" 
        breadcrumb="Error" 
        backgroundImage="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925"
      />
      <ErrorContent />
    </main>
  );
}
