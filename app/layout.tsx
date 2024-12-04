import type { Metadata } from "next";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import { geistSans } from "~/mdx-components";
import Footer from "./components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://builtbynlb.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Nicolas Le Borgne",
    template: "%s | Nicolas Le Borgne",
  },
  description: "freelance frontend developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${geistSans.className}`}>
        <body className="tracking-tight antialiased">
          <div className="flex min-h-screen flex-col justify-between bg-white p-8 pt-0 text-gray-900 md:pt-8">
            <main className="mx-auto w-full max-w-[60ch] space-y-6">
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}
