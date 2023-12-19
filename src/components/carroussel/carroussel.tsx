// pages/index.tsx
import React from 'react';

import styles from './carroussel.module.css';


import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Product from '../product/product';



const Carroussel: React.FC = () => {
    const products = [
        { id: 1, name: 'Casaco preto de lã', image: 'https://picsum.photos/400/400', price: 29.99 },
        { id: 1, name: ' Camisa branca adidas P ', image: 'https://picsum.photos/400/400', price: 29.99 },
        { id: 1, name: ' calça de brim preta nova perfeita', image: 'https://picsum.photos/400/400', price: 29.99 },
        { id: 1, name: 'Casaco preto de lã', image: 'https://picsum.photos/400/400', price: 29.99 },
        { id: 1, name: ' Camisa branca adidas P ', image: 'https://picsum.photos/400/400', price: 29.99 },
        { id: 1, name: ' calça de brim preta nova perfeita', image: 'https://picsum.photos/400/400', price: 29.99 },
        { id: 1, name: 'Casaco preto de lã', image: 'https://picsum.photos/400/400', price: 29.99 },
        { id: 1, name: ' Camisa branca adidas P ', image: 'https://picsum.photos/400/400', price: 29.99 },
        { id: 1, name: ' calça de brim preta nova perfeita', image: 'https://picsum.photos/400/400', price: 29.99 },
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
    };

    return (
        <div className={styles.container}>
            <Slider
                {...settings}
                className={styles.content}
            >
                {products.map((product) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        image={product.image}
                        price={product.price}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default Carroussel;
