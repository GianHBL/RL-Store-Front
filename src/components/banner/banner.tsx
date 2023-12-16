import React from "react";
import styles from "./banner.module.css";

interface BannerProps {
    src: string;
    alt: string;
}

const Banner: React.FC<BannerProps> = ({ src, alt }) => {
    return (
        <div className={styles.container}>
            <img src={src} alt={alt} />
        </div>
    );
}

export default Banner;