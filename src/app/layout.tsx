// import { Footer } from "./_components/footer/footer";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
// import { Header } from "./_components/header/header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl" className="dark">
      <body className="grid grid-rows-[80px_1fr_auto] min-h-screen font-bold  dark:bg-base-100 dark:text-base-content">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
