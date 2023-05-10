import './globals.css';
import { Header, Footer } from './components/layout/Layout'
import Provider from './provider';
import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';

export const metadata = {
  title: 'Notilus, Expérience en prise de notes',
  description: 'Retrouvez le bonheur de la prise de notes et créez votre second cerveau',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="fr">
      <body className="font-sans">
        <Provider>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Header currentUser={currentUser} />
            {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
