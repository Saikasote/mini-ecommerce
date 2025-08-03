import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';

const Carousel = () => {
    const images = [
        '/electronics.png', '/jewellary.png', '/clothing.png'
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <Box sx={{ mt: 2 }}>
            <Slider {...settings}>
                {images.map((src, i) => (
                    <Box
                        key={i}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '300px',
                            backgroundColor: '#FFF2E0',
                            overflow: 'hidden'
                        }}
                    >
                        <img
                            src={src}
                            alt={`slide-${i}`}
                            style={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'contain'
                            }}
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default Carousel;
