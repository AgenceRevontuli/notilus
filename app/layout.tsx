import './globals.css';
import { Header, Footer } from './components/layout/Layout'

export const metadata = {
  title: 'Notilus, Expérience en prise de notes',
  description: 'Retrouvez le bonheur de la prise de notes et créez votre second cerveau',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="font-sans">
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
