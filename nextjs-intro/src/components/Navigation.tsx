import Link from "next/link";

const Navigation = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <nav>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl">Elmer's students website</div>
            <div className="space-x-6">
              <Link href="/" className="hover:text-blue-200 transition-colors">
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-blue-200 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="hover:text-blue-200 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="hover:text-blue-200 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
