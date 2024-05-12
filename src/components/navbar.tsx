import BookOfLifeLogo from '../assets/book-of-life.svg';
import Button from './button';

type navbarProps = {
   // props type for the navbar component
  pages: {
    title: string,
    link: string
  }[]
}

const Navbar = (props: navbarProps) => {
  return (
    <div className="flex justify-between items-center gap-10 max-w-screen-xl m-auto px-5">
        <nav className='flex items-center gap-20 w-2/4'>
            <img 
                src={BookOfLifeLogo}
                alt="Book Of LIFE logo"
                className="h-20 w-20"
            />
            <ul className='flex justify-between items-center gap-10 font-semibold'>
                {props.pages.map((page, index) => {
                    return <li key={index}>
                        <a href={page.link}>{page.title}</a>
                    </li>
                })}
            </ul>
        </nav>

        <div className="">
            <Button customClass="mr-5" text='RECENT EPISODES' variant='light' />
            <Button text='SUBSCRIBE' variant='dark' />
        </div>
    </div>
  );
}


export default Navbar;