import React from "react";
import styles from "./category.module.css";

interface Props {
    name: string;
    imageUrl: string;
}

const Category: React.FC<Props> = ({ name, imageUrl}) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src= {imageUrl} alt="Category" />
            </div>
            <div className={styles.title}>
                <h3>{name}</h3>
            </div>
        </div>
    );
};

export default Category;