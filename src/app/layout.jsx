import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import ParticlesBackground from '@/components/ParticlesBackground';
import CustomCursor from '@/components/CustomCursor';

export const metadata = {
  title: 'Your Website',
  description: 'Your website description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <ParticlesBackground />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}