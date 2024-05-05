import Navbar from './navbar.tsx';

function Header() {
  return (
    <header className="bg-theme-champagne">
        <Navbar />
        <div className='m-auto max-w-screen-xl'>
            Header
        </div>
    </header>
  );
}

export default Header;