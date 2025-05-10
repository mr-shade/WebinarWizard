import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - ${siteConfig.webinar.title}`,
    template: `%s - ${siteConfig.name}`,
  },
  description: `Join our exclusive webinar on ${siteConfig.webinar.title}. Learn from ${siteConfig.webinar.speaker.name}, ${siteConfig.webinar.speaker.title}. Register now for free!`,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased circuit-bg",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full py-16 relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10"></div>
              <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
              <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl opacity-30 animate-float-slow"></div>
              <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl opacity-30 animate-float"></div>

              <div className="container mx-auto max-w-7xl px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="col-span-1 md:col-span-2">
                    <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">WebinarWizard</h3>
                    <p className="text-white/80 mb-6 backdrop-blur-sm p-4 rounded-lg bg-white/5 border border-white/10">
                      High-converting webinar landing pages to maximize your registrations and attendance.
                    </p>
                    <div className="flex space-x-4">
                      <Link href={siteConfig.links.twitter} isExternal aria-label="Twitter" className="relative group">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-primary group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                          </svg>
                        </div>
                      </Link>
                      <Link href={siteConfig.links.facebook} isExternal aria-label="Facebook" className="relative group">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-primary group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24">
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                          </svg>
                        </div>
                      </Link>
                      <Link href={siteConfig.links.instagram} isExternal aria-label="Instagram" className="relative group">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-primary group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </div>
                      </Link>
                      <Link href={siteConfig.links.linkedin} isExternal aria-label="LinkedIn" className="relative group">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-primary group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="tech-card p-4 rounded-xl">
                    <h4 className="font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Quick Links</h4>
                    <ul className="space-y-3">
                      {siteConfig.navItems.map((item) => (
                        <li key={item.href} className="relative group">
                          <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                          <Link href={item.href} className="text-white/70 hover:text-white transition-colors duration-300">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="tech-card p-4 rounded-xl">
                    <h4 className="font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Contact</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        support@webinarwizard.com
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        +1 (555) 123-4567
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        123 Webinar St, Digital City
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                  <p className="text-white/50 text-sm">
                    © {new Date().getFullYear()} WebinarWizard. All rights reserved.
                  </p>
                  <div className="flex space-x-6 mt-4 md:mt-0">
                    <Link href="#" className="text-white/50 text-sm hover:text-primary transition-colors duration-300 relative group">
                      <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      Privacy Policy
                    </Link>
                    <Link href="#" className="text-white/50 text-sm hover:text-primary transition-colors duration-300 relative group">
                      <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      Terms of Service
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
