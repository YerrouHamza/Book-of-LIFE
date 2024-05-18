// import components
import Header from "../components/header"

// import icons
import Question from '../assets/question.svg'
import Idea from '../assets/idea.svg'

const Home = () => {

    const title = {
        first: 'Your Daily',
        second: 'Podcast'
    }

    return (
        <div className="font-montserrat">
            <Header
                title={title}
                description="We cover all kinds of categories and a weekly special guest."
                isNavbarShow={true}
            />

            <section className='bg-withe py-20 max-w-screen-xl m-auto'>
                <h1 className=" text-black text-5xl text-center mb-20 max-w-screen-md m-auto font-semibold">Read. Get inspired by every minute of it.</h1>

                <div className="flex justify-center gap-40 flex-wrap md:flex-nowrap px-5 md:px-1 mb-20">
                    <article className="w-full md:w-1/2 flex flex-col justify-center items-center text-center">
                    <img src={Question} alt="Question" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente tempora neque et vel, accusamus error fugiat quos nobis modi ipsum.
                    </p>
                    </article>

                    <article className="w-full md:w-1/2 flex flex-col justify-center items-center text-center">
                    <img src={Idea} alt="Idea" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente tempora neque et vel, accusamus error fugiat quos nobis modi ipsum.
                    </p>
                    </article>
                </div>

                <div className="bg-theme-champagne text-center m-auto p-12">
                    <q className="text-3xl">One of the best daily podcasts that covers every topic on Spotify.</q>
                </div>
            </section>
        </div>
    )
}


export default Home