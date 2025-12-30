import BookingHeroSection from '@/components/booking/BookingHeroSection';
import BookingForm from '@/components/booking/BookingForm';
import ContactCard from '@/components/booking/ContactCard';
import RoomsSection from '@/components/booking/RoomsSection';

export default function BookingPage() {
  return (
    <main>
      {/* Hero Section */}
      <BookingHeroSection />

      {/* Make An Appointment Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-[#208F6A] text-sm uppercase tracking-wider mb-2">
              STAY WITH US
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Make An Appointment
            </h2>
          </div>

          {/* Form and Contact Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Booking Form - Takes 2 columns */}
            <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <BookingForm />
            </div>

            {/* Contact Card - Takes 1 column */}
            <div className="lg:col-span-1">
              <ContactCard />
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Rooms Section */}
      <RoomsSection />
    </main>
  );
}
