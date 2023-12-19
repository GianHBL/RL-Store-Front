import React from 'react';
import styles from './product.module.css';

interface ProductProps {
    id: number;
    name: string;
    image: string;
    price: number;
}
interface BannerProps {
    src: string;
    alt: string;
}

const Product: React.FC<ProductProps> = ({ id, name, image, price }) => {
    return (
        <div
            key={id}
            className={styles.container}
        >
            <div className={styles.img}>
                <img
                    src={image}
                    alt={name}
                />
            </div>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.price}>{`R$ ${price.toFixed(2)}`}</p>
        </div>
    )
}


export default Product;