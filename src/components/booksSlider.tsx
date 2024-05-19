// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import BookMockups from './bookMockups/bookMockups';

// Import Swiper styles
import 'swiper/css';

type SwiperSlideProps = {
    sliders: Array<{
        cover: string,
        url: string
    }>
}


const BooksSlider = (props: SwiperSlideProps) => {
    return (
        <section className='bg-theme-champagne py-44'>

            <Swiper
                className='mySwiper overflow-visible'
                spaceBetween={10}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        props.sliders.map((slider, index) => {
                            return <SwiperSlide key={index}>
                                <BookMockups 
                                    bookCover={slider.cover}
                                    bookLink={slider.url}
                                    altBookCover='book cover'
                                />
                            </SwiperSlide>
                        })
                    }
            </Swiper>
        </section>

    );
}


export default BooksSlider;