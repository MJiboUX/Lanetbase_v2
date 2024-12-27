export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">About LanetBase</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
            <p className="text-foreground">
              LanetBase is dedicated to empowering individuals and businesses through innovative digital solutions. 
              We provide a comprehensive platform that combines professional networking, skill development, 
              and business opportunities in one integrated ecosystem.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">What We Offer</h2>
            <div className="grid gap-4">
              <div className="p-4 bg-card rounded-lg">
                <h3 className="font-semibold mb-2">Business Hub</h3>
                <p>A collaborative workspace for professionals and businesses to connect, share resources, and grow together.</p>
              </div>
              <div className="p-4 bg-card rounded-lg">
                <h3 className="font-semibold mb-2">Digital Marketplace</h3>
                <p>A platform for buying and selling products, services, and digital solutions.</p>
              </div>
              <div className="p-4 bg-card rounded-lg">
                <h3 className="font-semibold mb-2">Virtual Internship Program</h3>
                <p>Gain practical experience and skills through our structured virtual internship programs.</p>
              </div>
              <div className="p-4 bg-card rounded-lg">
                <h3 className="font-semibold mb-2">Smart School Competition</h3>
                <p>Educational challenges and competitions to promote learning and innovation.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Values</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Innovation in everything we do</li>
              <li>Community-driven growth and support</li>
              <li>Quality education and skill development</li>
              <li>Inclusive business opportunities</li>
              <li>Sustainable digital solutions</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}