import HeroSection from '@/components/ui/HeroSection';
import AboutSection from '@/components/about/AboutSection';
import StatsSection from '@/components/about/StatsSection';
import WhyChooseSection from '@/components/about/WhyChooseSection';
import VideoSection from '@/components/about/VideoSection';
import StaffSection from '@/components/about/StaffSection';
import ClientsSection from '@/components/about/ClientsSection';

export const metadata = {
  title: 'About Us - Floyland Hotel & Resort',
  description: 'Learn more about our luxury hotel and resort',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <HeroSection title="About Us" breadcrumb="About Us" />
      <AboutSection />
      <StatsSection />
      <WhyChooseSection />
      <VideoSection />
      <StaffSection />
      <ClientsSection />
    </div>
  );
}
