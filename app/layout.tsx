import "./globals.css"
import Link

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
        <meta content="https://fuffo.net" property="og:url" />
        <meta content="https://embed.com/embedimage.png" property="og:image" />
        <meta content="#43B581" data-react-helmet="true" name="theme-color" />
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
          <p>But I'll just say this site was made by none other than <span>Federico Toluzzo</span></p>
        </footer>
      </body>
    </html>
    </>
  );
}
