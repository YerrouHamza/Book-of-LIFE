import Navbar from './navbar.tsx';
import Button from './button.tsx';

// import icons
import HeroStar from '../assets/shapes/hero-stare.png';
import HeroSwirl from '../assets/shapes/Hero-swirl.svg';


// Define the props type for the header component
type headerProps = {
  title: {
    first: String,
    second: String,
  },
  description: String,
  isNavbarShow: Boolean
}

const Header = (props: headerProps) => {
  // Define the navbar props pages
  const navbarProps = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About',
      link: '/about'
    },
    {
      title: 'Contact',
      link: '/contact'
    }
  ]

  return (
    <header className="bg-theme-champagne py-10">
        {props.isNavbarShow && navbarProps.length > 0 ? <Navbar pages={navbarProps} /> : null}
        <div className='m-auto max-w-screen-xl mt-10 flex flex-col justify-center items-center relative'>

          {props.title?.first ? 
            <h1 className='text-center text-7xl font-bold leading-tight'>
              {props.title.first} <br />
              <span className='text-theme-vermillion'>{props.title.second}</span>
            </h1>
          : null}

          {props.description ? <p className='text-center text-lg mt-10 mx-auto w-1/3'>{props.description}</p> : null}
          
          <Button text='SUBSCRIBE' variant='dark' customClass='mx-auto mt-10' />

          <img className='hero-svg absolute right-3 w-32' src={HeroStar} alt='hero star shape' />
          <img className='hero-svg absolute -left-10 w-60' src={HeroSwirl} alt='hero swirl shape' />
        </div>
    </header>
  );
}

export default Header;