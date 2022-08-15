import { motion, useScroll, useViewportScroll, useMotionValue } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide }  from 'swiper/react';
import { Navigation, Scrollbar,Pagination, FreeMode, Mousewheel } from 'swiper';
import images from './images';
import '../src/Carousel.css';
import 'swiper/css/bundle';
// import "swiper/css/scrollbar";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
const totalNum=6;
const progressRef=(1/totalNum);
const Carousel = () => {

    // console.log(progressRef);
    const scrollRef = useRef(null);
    const { scrollXProgress }  = useScroll({
        container: scrollRef
    });
    const [progressX,setProgressX]=useState(0);
    useEffect(()=>{
        scrollXProgress.onChange((v)=>setProgressX(v));
    },[scrollXProgress])
    const [swiper,setSwiper]=useState(null);
    const [slide,setSlide]=useState(0);
    const handleIndex =(p)=>{
        console.log(p.realIndex);
        setSlide(p.realIndex);
    }
    const changeSlide=(index)=>{
        swiper.slideTo(index,1,false);
        setSlide(index);
    }
    return (
        
        // <motion.div className='carousel_wrapper' >
            <motion.div className='carousel_inner' ref={scrollRef} >
            <Swiper 
            onSwiper={setSwiper}
            onProgress={(p)=>handleIndex(p) }
            height={450}
            direction='horizontal'
            loopedSlides={6}
            spaceBetween={50}
            loop={true}
            slidesPerView={5}
            freeMode={{
                enabled:true,
                sticky:true
            }}
            mousewheel={{
                releaseOnEdges:true
            }}
            pagination={{
                enabled:true,
                clickable:true
            }}
            modules={
                [Mousewheel, FreeMode]
            }>
                
                {
                    images.map((image,i)=>{
                        return(
                            <SwiperSlide key={image} >
                            <motion.div className='item' >
                                <img src={image} alt='image' />
                            </motion.div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            {/* <div className="progress_wrapper">
                { progressRef < progressX ? <motion.div className='progress-bar' style={{height:'50px'}}/> : <motion.div className='progress-bar' />}
            </div> */}
            {/* <motion.div className="progress-bar2"  style={{scaleX: scrollXProgress}}/> */}
            <div className='progress_wrapper'>
            {
                images.map((image,i)=>{
                    return(
                        <>
                        {slide === i ? <div className='progress-selected' />:<div className='progress' onClick={()=>changeSlide(i)}/>}
                        </>
                    )
                })
            }
            </div>
            </motion.div>

        // </motion.div>
    );
}
 
export default Carousel;