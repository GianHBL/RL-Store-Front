import React from 'react';
import styles from './page.module.css';
import Banner from '../components/banner/banner';
import Category from '../components/category/category';
import { Carousel } from '@/components/carousel';
import { ThreeItemGrid } from '@/components/grid/three-items';

export default function Home() {
  return (
    <div className="bg-gray">
      <div className="container mx-auto pt-20">
        <div className={styles.banner}>
          <Banner
            src="https://blogger.googleusercontent.com/img/a/AVvXsEi3sDNXcMD7PgJDMeLloYGF4Sv6FtFTNQLc2-1OScdJOH8PdHuS_pHa1cl7pXSGQ5MmjYm0D0MANow_CEr1H2LltHn47UiUfSutaNds4ffd2dqwZLMXIZzjW24djJus0JXFNwveTDuDEjDSxf6bLEYKUFRMt9ecKUylgL0M1DshvflnAHAcdV4d7HbufDc"
            alt="Banner"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 md:grid-gap-4 bg-steelblue pt-8 md:pt-2">
          <Category
            name="Camisas"
            imageUrl="https://th.bing.com/th/id/OIP.0UWUKrohmkGfhsP8230ZMAHaHa?pid=ImgDetMain"
          />
          <Category 
            name="Calças"
            imageUrl="data:image/jpeg;base64,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"
          />
          <Category
            name="Tênis"
            imageUrl="https://imgnike-a.akamaihd.net/1920x1920/019385ID.jpg"
          />
          <Category
            name="Bonés"
            imageUrl="data:image/jpeg;base64,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"
          />
          <Category
            name="Acessórios"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUhpYmNLT19js1aoruSomEF7XZtP8RQU4kyA&usqp=CAU"
          />
        </div>
        <ThreeItemGrid />
        <div className={styles.carroussel}>
          <h2 className="text-3xl font-bold underline"> Camisas em Destaque</h2>
        </div>
        <Carousel />
        <div className={styles.carroussel}>
          <h2> Calças em Destaque</h2>
        </div>
      </div>
    </div>
  );
}
