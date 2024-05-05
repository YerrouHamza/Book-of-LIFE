import BookOfLifeLogo from '../assets/book-of-life.svg';

function Navbar() {
  return (
    <div className="flex justify-between items-center gap-10 max-w-screen-xl m-auto py-10">
        <nav className='flex items-center gap-20 w-2/4'>
            <img 
                src={BookOfLifeLogo}
                alt="Book Of LIFE logo"
                className="h-20 w-20"
            />
            <ul className='flex justify-between items-center gap-10 font-semibold'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>

        <div className="">
            <button className='border-2 border-black px-5 py-2 text-black rounded-lg mr-8'>RECENT EPISODES</button>
            <button className='border-2 border-black bg-black px-5 py-2 text-white rounded-lg'>SUBSCRIBE</button>
        </div>
    </div>
  );
}


export default Navbar;