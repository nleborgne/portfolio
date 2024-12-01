import Link from 'next/link'

const footerLinks = [
  { name: 'Github', href: 'https://github.com/nleborgne/', },
  { name: 'Linkedin', href: 'https://linkedin.com/in/nicolas-le-borgne/', },
]

export default function Footer() {
  return (
    <footer className="w-full  mx-auto py-8">
      <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
        {footerLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </footer>
  )
}

