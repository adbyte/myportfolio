import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditi Jain | Founder Mindset, Product Thinking & AI Engineering",
  description: "Founder-minded problem solver, product thinker and AI systems builder. A journey of building products, initiatives and intelligent systems.",
  icons: { icon: "/aditi-avatar.png", shortcut: "/aditi-avatar.png", apple: "/aditi-avatar.png" },
  openGraph: {
    title: "Aditi Jain — Find the real problem. Build what matters.",
    description: "Problem discovery, independent ventures, product thinking and applied AI engineering.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
