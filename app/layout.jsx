import '../styles/globals.scss'
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
                <link href="https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
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