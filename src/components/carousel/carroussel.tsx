// pages/index.tsx
import React from 'react';

import styles from './carroussel.module.css';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useMediaQuery } from 'react-responsive';

import Product from '../product/product';

interface CarrousselProps {
    products: Array<{
        id: number;
        name: string;
        imageUrl: string;
        price: number;
        description: string;
        stock: number;
    }>;
}

const Carroussel: React.FC<CarrousselProps> = ({ products }) => {
    const isMobileSmall = useMediaQuery({ maxWidth: 430 });
    const isMobile = useMediaQuery({ maxWidth: 700 });
    const isTablet = useMediaQuery({ maxWidth: 1024 });
    const slidesToShow = isMobileSmall ? 1 : isMobile ? 2 : isTablet ? 3 : 4;
    const slidesToScroll = isMobileSmall ? 1 : isMobile ? 2 : isTablet ? 3 : 4;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
    };

    return (
        <div className={styles.container}>
            <Slider {...settings} className={styles.content}>
                {products.map((product) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.price}
                        description={product.name}
                        stock={product.stock}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default Carroussel;