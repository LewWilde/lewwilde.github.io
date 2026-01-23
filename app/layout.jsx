import '../styles/globals.scss'
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Saira } from 'next/font/google'

const saira = Saira({
    subsets: ['latin'],
    display: 'swap',
})

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={saira.className}>
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}

export const metadata = {
    description: 'A web developer from Blackburn, UK',
    title: {
        template: '%s | Lew Wilde',
        default: 'Lew Wilde', // a default is required when creating a template
    },
}