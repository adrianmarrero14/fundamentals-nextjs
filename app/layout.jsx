// This is the root layout. It will be used for all pages.

import Navbar from "../components/Navbar"

export const metadata = {
  title: "Root Layout",
  description: "This is the root layout",
  keywords: "root, layout",
  slug: "/",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
