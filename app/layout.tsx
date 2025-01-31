import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <nav className="mx-auto w-fit p-8 grid grid-cols-3 gap-x-8 lg:gap-x-32">
          <ul className="inline-block mx-auto"><Link href="/"><button className="btn">Home</button></Link></ul>
          <ul className="inline-block mx-auto"><Link href="/about"><button className="btn">About</button></Link></ul>
          <ul className="inline-block mx-auto"><Link href="/portfolio"><button className="btn">Portfolio</button></Link></ul>
        </nav>
        {children}
        <footer className="text-center py-8 footerbar overflow-x-auto">
          <p>Federico Toluzzo</p>
        </footer>
      </body>
    </html>
    </>
  );
}
