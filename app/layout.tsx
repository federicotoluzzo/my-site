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
        <meta content="Federico Toluzzo" property="og:description" />
        <meta content="" property="og:title"/>
        <meta content="https://fuffo.net" property="og:url" />
        <meta content="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ypz_d6GL7n2nXfQnbw_ARAHaFj%26pid%3DApi&f=1&ipt=a815bd195e0b7ff305873251ac030d0f45fb00481d5a7bcfd5426b3c721944d3&ipo=images" property="og:image" />
        <meta content="#AABBFF" data-react-helmet="true" name="theme-color" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <nav className="mx-auto w-fit p-8 grid grid-cols-3 gap-x-8 lg:gap-x-32">
          <ul className="inline-block mx-auto"><Link href="/"><button className="btn">Home</button></Link></ul>
          <ul className="inline-block mx-auto"><Link href="/about"><button className="btn">About</button></Link></ul>
          <ul className="inline-block mx-auto"><Link href="/portfolio"><button className="btn">Portfolio</button></Link></ul>
        </nav>
        {children}
        <footer className="text-center py-8 footerbar">
          <p>This is a footer</p>
          <br></br>
          <p>People usually write legal stuff here or something I guess</p>
          <br></br>
          <p>But I&quot;ll just say this site was made by none other than <span>Federico Toluzzo</span></p>
        </footer>
      </body>
    </html>
    </>
  );
}
