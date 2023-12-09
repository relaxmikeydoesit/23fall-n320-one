import '@/styles/globals.css';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return (
  <>
  <nav className='navbar'>
  <ul>
    <li>
	<Link href='/'>HOME</Link>
    </li>
    <li>
	<Link href='/'>ABOUT</Link>
    </li>
    <li>
	<Link href='/'>SERVICES</Link>
    </li>
    <li>
	<Link href='/'>CONTACT</Link>
    </li>
  </ul>
</nav>
<Component {...pageProps} />
  </>  
  )  
}
