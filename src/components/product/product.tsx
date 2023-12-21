import React from 'react';
import styles from './product.module.css';

interface ProductProps {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    stock: number;
}

const Product: React.FC<ProductProps> = ({ id, name, imageUrl, price, description, stock }) => {
    return (
        <div
            key={id}
            className={styles.container}
        >
            <div className={styles.img}>
                <img
                    src={imageUrl}
                    alt={name}
                />
            </div>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.price}>{`R$ ${price.toFixed(2)}`}</p>
        </div>
    )
}


export default Product;