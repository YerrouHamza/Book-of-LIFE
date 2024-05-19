// import components
import Header from "../components/header"

// Element Template
import SectionTemplate from "../template/sectionTemplate"

// import icons
import Question from '../assets/question.svg'
import Idea from '../assets/idea.svg'
import Qoute from '../assets/qoute.svg'
import User from '../assets/user-1.jpeg'

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

            <SectionTemplate 
                title="Read. Get inspired by every minute of it."
                sectionShape="chamagne"
            >
                <div className="flex justify-center gap-28 md:gap-20 lg:gap-40 flex-wrap md:flex-nowrap px-5 md:px-1 mb-32 md:mx-20 xl:mx-5">
                    <article className="w-full md:w-1/2 flex flex-col justify-center items-center text-center">
                    <img src={Question} alt="Question" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente tempora neque et vel, accusamus error fugiat quos nobis modi ipsum.</p>
                    </article>

                    <article className="w-full md:w-1/2 flex flex-col justify-center items-center text-center">
                    <img src={Idea} alt="Idea" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente tempora neque et vel, accusamus error fugiat quos nobis modi ipsum.</p>
                    </article>
                </div>

                <div className="bg-theme-champagne text-center md:mx-20 xl:mx-5">
                    <div className="quote p-12 xl:p-20">
                        <img src={Qoute} alt="Star" className="m-auto w-12 xl:w-16 mb-12 xl:mb-16" />
                        <p className="text-3xl xl:text-4xl font-semibold md:px-20 xl:px-32 mb-16">
                            One of the best daily podcasts that covers every topic on Spotify.
                        </p>
                        <div className="max-w-[300px] flex justify-center items-center m-auto gap-5">
                            <img src={User} alt="User" className="w-12 h-12 rounded-full" />
                            <p className="text-xl">John Doe</p>
                        </div>
                    </div>
                </div>
            </SectionTemplate>


            <SectionTemplate 
                title="What our listeners say"
                description="Their experience throughout every platform"
                variant="alice"
                titleShape="v1"
                sectionShape="dark"
            >
                <div className="">
                </div>
            </SectionTemplate>
        </div>
    )
}


export default Home