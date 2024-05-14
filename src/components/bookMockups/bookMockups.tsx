
// import bookMockups styles
import './bookMockups.scss';
import cover from '../../assets/book-cover.png';

const BookMockups = () => {
    return (
        <a 
            className="book-container"
            href=""
            target="_blank"
            rel="noreferrer noopener"
            >
            <div className="book">
                <img
                alt=""
                src={cover}
                />
            </div>
        </a>
    );
}

export default BookMockups;