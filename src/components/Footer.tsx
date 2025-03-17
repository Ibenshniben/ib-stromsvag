import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-black/60 backdrop-blur-md border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          <Image
            src="/images/ib-logo-hvit.png"
            alt="IB Logo"
            width={50}
            height={50}
            className="rounded-full hover:scale-110 transition-transform"
          />
          
          <div className="flex gap-8 text-gray-400">
            <Link href="mailto:ibjulian9@gmail.com" className="hover:text-blue-400 transition-colors">
              Email
            </Link>
            <Link href="https://linkedin.com/in/ib-strømsvåg" target="_blank" className="hover:text-blue-400 transition-colors">
              LinkedIn
            </Link>
            <Link href="https://ibstromsvag.com" target="_blank" className="hover:text-blue-400 transition-colors">
              Portfolio
            </Link>
          </div>
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ib Strømsvåg. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}