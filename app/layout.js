import Navbar from '@/components/Navbar'
import './globals.css'


export const metadata = {
  title: 'CRUD',
  description: 'CRUD APPLICATION.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
      <div className="max-w-3xl mx-auto p-4">
        <Navbar />
        <div className="mt-8">{children}</div>
      </div>
    </body>
  </html>
  )
}
