// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import Book from '../assets/book-cover.png';

const BooksSlider = () => {


    return (
        <section className='bg-theme-champagne py-20'>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <div className='flex flex-wrap justify-center items-center mt-10'>
                        <img src={Book} alt='book 1' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-wrap justify-center items-center mt-10'>
                        <img src={Book} alt='book 1' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-wrap justify-center items-center mt-10'>
                        <img src={Book} alt='book 1' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-wrap justify-center items-center mt-10'>
                        <img src={Book} alt='book 1' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>

    );
}


export default BooksSlider;