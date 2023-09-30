import { Inter } from 'next/font/google'
import Footer from '../components/footer'
import Header from '../components/header'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Trainly',
  description: 'Todos los derechos reservados.',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Header />
      <main>{children}</main>
      <Footer />
    </html>
  )
}
