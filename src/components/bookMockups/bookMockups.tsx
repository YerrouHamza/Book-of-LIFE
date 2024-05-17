
// import bookMockups styles
import './bookMockups.scss';


type BookMockupsProps = {
    bookCover: string,
    bookLink: string,
    altBookCover: string
}

const BookMockups = (props: BookMockupsProps) => {
    return (
        <a className="book-container" href={props.bookLink} target="_blank">
            <div className="book">
                <img alt={props.altBookCover} src={props.bookCover} />
            </div>
        </a>
    );
}

export default BookMockups;