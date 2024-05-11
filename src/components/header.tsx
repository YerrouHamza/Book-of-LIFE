import Navbar from './navbar.tsx';

type headerProps = {
  title: {
    first: String,
    second: String,
  },
  isNavbarShow: Boolean
}

const Header = (props: headerProps) => {
  return (
    <header className="bg-theme-champagne py-10">
        {props.isNavbarShow ? <Navbar /> : null}
        <div className='m-auto max-w-screen-xl mt-10'>

        {props.title?.first ? 
          <h1 className='text-center text-7xl font-bold leading-tight'>
            {props.title.first} <br />
           <span className='text-theme-vermillion'>{props.title.second}</span>
          </h1>
        : null}
        </div>
    </header>
  );
}

export default Header;