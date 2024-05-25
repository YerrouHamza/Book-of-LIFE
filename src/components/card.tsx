import User from '../assets/user-1.jpeg'

type CardProps = {
    quote: string,
    user: string
}


const Card = (props: CardProps ) => {
    return (
        <div className="bg-theme-champagne p-10 rounded-lg">
            <p className="text-lg font-semibold mb-5">{props.quote}</p>
            <div className="flex justify-center items-center gap-5">
                <img src={User} alt="User" className="w-12 h-12 rounded-full" />
                <p className="text-lg">{ props.user }</p>
            </div>
        </div>
    )
}

export default Card;