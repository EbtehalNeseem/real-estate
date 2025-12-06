export default function About() {
  return (
    <div className="min-h-screen bg-[var(--beige)] text-[var(--primary)] px-6 md:px-20 py-16">
      <h1 className="text-4xl font-bold text-[var(--primary)] mb-6">
        About UrbanGate
      </h1>

      <p className="text-lg leading-8 max-w-3xl">
        UrbanGate is a modern real estate platform designed to help users find,
        list, and manage properties easily. Our mission is to simplify the real
        estate experience using technology — giving buyers, sellers, and agents
        powerful tools to manage real estate transactions with ease.
      </p>

      <div className="mt-12 grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-xl shadow-lg border">
          <h3 className="text-xl font-bold mb-2 text-[#036103]">Our Mission</h3>
          <p className="text-gray-700">Providing a seamless real estate experience for everyone.</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-lg border">
          <h3 className="text-xl font-bold mb-2 text-[#036103]">Our Vision</h3>
          <p className="text-gray-700">Becoming the #1 real estate platform in the region.</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-lg border">
          <h3 className="text-xl font-bold mb-2 text-[#036103]">Our Values</h3>
          <p className="text-gray-700">Trust, transparency, and innovation.</p>
        </div>
      </div>
    </div>
  );
}
