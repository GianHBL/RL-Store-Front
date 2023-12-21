
// pages/index.tsx
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import Banner from '../components/banner/banner';
import Category from '../components/category/category';
import { Carousel } from '@/components/carousel';
import { ThreeItemGrid } from '@/components/grid/three-items';

export default function Home() {
  const Shirts = [
    {
      id: 1,
      name: 'Produto 1',
      imageUrl: 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ovwdqhllg9wjrrdb8hsj/dri-fit-training-t-shirt-0VRmcF.jpg',
      price: 19.99,
      description: 'Descrição do Produto 1',
      stock: 10,
    },
    {
      id: 2,
      name: 'Produto 2',
      imageUrl: 'https://th.bing.com/th/id/OIP.rAD8_PAVfGILLHvHeCk5lAHaHa?pid=ImgDetMain',
      price: 29.99,
      description: 'Descrição do Produto 2',
      stock: 15,
    },
    {
      id: 2,
      name: 'Produto 2',
      imageUrl: 'https://th.bing.com/th/id/OIP.0UWUKrohmkGfhsP8230ZMAHaHa?pid=ImgDetMain',
      price: 29.99,
      description: 'Descrição do Produto 2',
      stock: 15,
    },
    {
      id: 2,
      name: 'Produto 2',
      imageUrl: 'https://th.bing.com/th/id/OIP.Ei3BmyLLFEfezd95wXofGwHaHa?pid=ImgDetMain',
      price: 29.99,
      description: 'Descrição do Produto 2',
      stock: 15,
    },
    {
      id: 1,
      name: 'Produto 1',
      imageUrl: 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ovwdqhllg9wjrrdb8hsj/dri-fit-training-t-shirt-0VRmcF.jpg',
      price: 19.99,
      description: 'Descrição do Produto 1',
      stock: 10,
    },
    {
      id: 2,
      name: 'Produto 2',
      imageUrl: 'https://th.bing.com/th/id/OIP.rAD8_PAVfGILLHvHeCk5lAHaHa?pid=ImgDetMain',
      price: 29.99,
      description: 'Descrição do Produto 2',
      stock: 15,
    },
    {
      id: 2,
      name: 'Produto 2',
      imageUrl: 'https://th.bing.com/th/id/OIP.0UWUKrohmkGfhsP8230ZMAHaHa?pid=ImgDetMain',
      price: 29.99,
      description: 'Descrição do Produto 2',
      stock: 15,
    },
    {
      id: 2,
      name: 'Produto 2',
      imageUrl: 'https://th.bing.com/th/id/OIP.Ei3BmyLLFEfezd95wXofGwHaHa?pid=ImgDetMain',
      price: 29.99,
      description: 'Descrição do Produto 2',
      stock: 15,
    },
  ];
  const Calcas = [
    {
      id: 2,
      name: 'Produto 2',
      imageUrl: 'https://th.bing.com/th/id/OIP.0nusABco4jhF6HxzBWRJYgHaKu?pid=ImgDetMain',
      price: 29.99,
      description: 'Descrição do Produto 2',
      stock: 15,
    },
    {
      id: 2,
      name: 'Produto 2',
      imageUrl: 'https://th.bing.com/th/id/OIP.JfQjAgNeu_dXcQe_0ydU0gHaHa?pid=ImgDetMain',
      price: 29.99,
      description: 'Descrição do Produto 2',
      stock: 15,
    },
    {
      id: 2,
      name: 'Produto 2',
      imageUrl: 'https://th.bing.com/th/id/R.4eadf606f6d2e153e97f732a4d436815?rik=uWSGD7Ek7yDSgA&pid=ImgRaw&r=0',
      price: 29.99,
      description: 'Descrição do Produto 2',
      stock: 15,
    },
    {
      id: 2,
      name: 'Produto 2',
      imageUrl: 'https://th.bing.com/th/id/OIP.dItqjxUcPpFBdWM4jrrGSwHaHa?pid=ImgDetMain',
      price: 29.99,
      description: 'Descrição do Produto 2',
      stock: 15,
    },
    {
      id: 2,
      name: 'Produto 2',
      imageUrl: 'https://cf.shopee.com.br/file/8743eec75efee938000d3cd4eaf4e7ef',
      price: 29.99,
      description: 'Descrição do Produto 2',
      stock: 15,
    },
  ];

  return (
    <div className="bg-black">
      <div className="container mx-auto bg-yellow-500 pt-20">
        <div className={styles.banner}>
          <Banner
            src="https://th.bing.com/th/id/R.6db651919d180d4b5d8be16397970981?rik=70WITgrJ7VYMIg&pid=ImgRaw&r=0"
            alt="Banner"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 md:grid-gap-4 bg-steelblue pt-8 md:pt-2">
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
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
