export default function StatsSection() {
  const stats = [
    { number: '305', label: 'Luxury Rooms', suffix: '+' },
    { number: '650', label: 'Regular Guests', suffix: '+' },
    { number: '80', label: 'Team Member', suffix: '+' },
    { number: '75', label: 'Beaches', suffix: '+' },
  ];

  return (
    <section className="bg-[#208F6A] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="flex items-center justify-center mb-2">
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  {stat.number}
                </span>
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold ml-1">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-white/90 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

