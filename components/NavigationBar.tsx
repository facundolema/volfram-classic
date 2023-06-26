import Link from 'next/link'

export default function NavigationBar ()
{
  return (
    <nav className="flex justify-between py-4">
      <NavLink href="/projects" label='Projects'/>
      <NavLink href="/about" label='About Us'/>
      <NavLink href="/team" label='Team'/>
    </nav>
  )
}

function NavLink (
  { href, label } :
  { href: string; label: string })
{
  return (
    <Link
    href={href}
    className='group transition-all duration-300 ease-in-out'>
    <span className="bg-left-bottom bg-gradient-to-r from-gray-800 to-gray-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
      {label}
    </span>
  </Link>
  )
}