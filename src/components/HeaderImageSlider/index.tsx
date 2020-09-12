import * as React from "react";
import { Root, Img, SwiperWrapper } from "./elements";
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';


export const HeaderImageSlider = () => {

    const params = {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
    }

    console.log("slider")
    return (
        <Root >
            <SwiperWrapper>
                <Swiper {...params}>
                    <Img src={'./../img/IMG_0575.JPG'}></Img>
                    <Img src={'./../img/IMG_0571.JPG'}></Img>
                    <Img src={'./../img/IMG_0572.JPG'}></Img>
                    <Img src={'./../img/IMG_0573.JPG'}></Img>
                    <Img src={'./../img/IMG_0574.JPG'}></Img>
                </Swiper>
            </SwiperWrapper>
        </Root>
    )
}

