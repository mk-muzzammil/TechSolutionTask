import Image from 'next/image';

export default function WhyChooseSection() {
  const skills = [
    { name: 'Services', percentage: 88 },
    { name: 'Staff Master', percentage: 86 },
    { name: 'Design', percentage: 92 },
    { name: 'Foodcourt', percentage: 95 },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Images */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] order-2 lg:order-1">
            {/* Main Beach Image */}
            <div className="absolute top-0 left-0 w-[65%] h-[70%] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800"
                alt="Beach Resort"
                fill
                className="object-cover"
              />
            </div>

            {/* Top Right Small Image */}
            <div className="absolute top-[15%] right-0 w-[45%] h-[40%] rounded-lg overflow-hidden shadow-lg z-10">
              <Image
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800"
                alt="Hotel View"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Right Image */}
            <div className="absolute bottom-0 right-[10%] w-[50%] h-[45%] rounded-lg overflow-hidden shadow-lg z-10">
              <Image
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800"
                alt="Hotel Lounge"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-2">
              <p className="text-[#208F6A] text-sm md:text-base font-semibold uppercase tracking-wide">
                Our Skills
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight">
                Why Choose for us?
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed">
              There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in
              some form by injected humour or randomised words which don't look even believable.
            </p>

            {/* Progress Bars */}
            <div className="space-y-6 pt-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-[#1a1a1a]">{skill.name}</span>
                    <span className="font-semibold text-[#208F6A]">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#208F6A] h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

