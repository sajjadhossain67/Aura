import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Logo } from "./components/Logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aura | Premium Perfumes in Bangladesh",
  description:
    "Discover your signature scent at Aura - Bangladesh's premier perfume destination.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
          <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <Logo />
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Home
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Shop
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                About
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </nav>
        </header>
        {children}
        <footer className="bg-card mt-16 border-t">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <Logo />
                <p className="text-muted-foreground mt-4">
                  Discover luxury fragrances at Bangladesh's premier perfume
                  destination.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Shop
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Contact</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Bashundhara R/A </li>
                  <li>Dhaka, Bangladesh</li>
                  <li>Phone: +880 1779115387</li>
                  <li>Email: info@aura.com.bd</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
              <p>&copy; 2024 Aura. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
