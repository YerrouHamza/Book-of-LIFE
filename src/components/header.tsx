import Navbar from './navbar.tsx';
import Button from './button.tsx';
import BooksSlider from './booksSlider.tsx';

// import icons
import HeroStar from '../assets/shapes/hero-stare.png';
import HeroSwirl from '../assets/shapes/Hero-swirl.svg';

import Book from '../assets/cover-test.webp';
import Book2 from '../assets/cover-test-2.webp';
import Book3 from '../assets/cover-test-3.jpeg';
import Book4 from '../assets/cover.png';


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


  // slider props
  const sliders = [
    {
      cover: Book,
      url: 'https://www.google.com'
    },
    {
      cover: Book4,
      url: 'https://www.google.com'
    },
    {
      cover: Book2,
      url: 'https://www.google.com'
    },
    {
      cover: Book3,
      url: 'https://www.google.com'
    },
    {
      cover: Book,
      url: 'https://www.google.com'
    },
    {
      cover: Book2,
      url: 'https://www.google.com'
    }
  ]

  return (
    <header className="bg-theme-champagne py-10 overflow-x-hidden">
        {props.isNavbarShow && navbarProps.length > 0 ? <Navbar pages={navbarProps} /> : null}
        <div className='m-auto max-w-screen-xl mt-20 flex flex-col justify-center items-center relative'>

          {props.title?.first ? 
            <h1 className='text-center text-7xl font-bold leading-tight'>
              {props.title.first} <br />
              <span className='text-theme-vermillion'>{props.title.second}</span>
            </h1>
          : null}

          {props.description ? <p className='text-center text-lg mt-10 mx-auto w-1/3'>{props.description}</p> : null}
          
          <Button text='SUBSCRIBE' variant='dark' size='lg' customClass='mx-auto mt-10' />

          <img className='hero-svg absolute right-3 w-32' src={HeroStar} alt='hero star shape' />
          <img className='hero-svg absolute -left-10 w-60' src={HeroSwirl} alt='hero swirl shape' />
        </div>

        <BooksSlider sliders={sliders}  />
    </header>
  );
}

export default Header;