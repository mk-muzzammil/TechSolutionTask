import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#208F6A] to-[#1a7755] p-8 font-sans text-white">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold">
          Welcome to <span className="text-[#ededed]">Floyland</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90">
          Luxury Hotel & Resort
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/about">
            <Button className="bg-white text-[#208F6A] hover:bg-gray-100 px-8 py-6 text-lg">
              View About Page
            </Button>
          </Link>
          <Button className="bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] px-8 py-6 text-lg">
            Book Now
          </Button>
        </div>

        <div className="pt-8 text-sm text-white/80">
          <p>✅ Frontend setup complete with:</p>
          <p>Next.js 16 • TypeScript • Tailwind CSS • shadcn/ui • React Query • Zustand</p>
        </div>
      </div>
    </div>
  );
}
