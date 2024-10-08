import { Inter_Tight } from 'next/font/google';
import './globals.css';

const inter = Inter_Tight({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata = {
    title: 'FocalPoint',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
