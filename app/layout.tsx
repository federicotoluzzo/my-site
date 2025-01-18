import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="flex items-center">
          <ul>
            <a>
              <ul>
                Home
              </ul>
            </a>
            <a>
              <ul>
                About
              </ul>
            </a>
            <a>
              <ul>
                Portfolio
              </ul>
            </a>
          </ul>
        </nav>
        <button className="btn"><a href="/test">test</a></button>
        {children}
      </body>
    </html>
  );
}
