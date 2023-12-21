import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { GridTileImage } from '../../../components/grid/tile';
import Footer from '../../../components/layout/footer';
import { Gallery } from '../../../components/product/gallery';
import { ProductDescription } from '../../../components/product/product-description';
import { HIDDEN_PRODUCT_TAG } from '../../../lib/constants';
//import { getProduct, getProductRecommendations } from '../../../lib/shopify';
import { Image } from '../../../lib/shopify/types';
import Link from 'next/link';

export const runtime = 'edge';

export default async function ProductPage({ params }: { params: { handle: string } }) {
    //const product = await getProduct(params.handle);
    const product = {
        id: '1',
        handle: 'product-1',
        availableForSale: true,
        title: 'Product 1',
        description: 'Description of Product 1',
        descriptionHtml: '<p>Description of Product 1</p>',
        options: [],
        priceRange: {
            maxVariantPrice: { amount: '10.00', currencyCode: 'USD' },
            minVariantPrice: { amount: '10.00', currencyCode: 'USD' },
        },
        variants: [],
        featuredImage: {
            url: 'https://th.bing.com/th/id/OIP.f9vsODFTv9h4xHqFN3OdOAHaHa?pid=ImgDetMain',
            altText: 'Image 1',
            width: 100,
            height: 100,
        },
        images: [
            {
                url: 'https://i.pinimg.com/originals/13/6d/a7/136da7690f6cd4dd0486fed931b64b6f.jpg',
                altText: 'Image 1',
                width: 100,
                height: 100,
            },
            {
                url: 'https://th.bing.com/th/id/OIP.f9vsODFTv9h4xHqFN3OdOAHaHa?pid=ImgDetMain',
                altText: 'Image 1',
                width: 100,
                height: 100,
            },
            {
                url: 'https://th.bing.com/th/id/OIP.f9vsODFTv9h4xHqFN3OdOAHaHa?pid=ImgDetMain',
                altText: 'Image 1',
                width: 100,
                height: 100,
            },
            {
                url: 'https://th.bing.com/th/id/OIP.f9vsODFTv9h4xHqFN3OdOAHaHa?pid=ImgDetMain',
                altText: 'Image 1',
                width: 100,
                height: 100,
            },
        ], // You may add more images if needed
        seo: { title: 'Product 1', description: 'Description of Product 1' },
        tags: [],
        updatedAt: '2022-01-01T00:00:00Z',
    };
    return (
        <>
            <div className="pt-24 mx-auto max-w-screen-2xl px-4">
                <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row lg:gap-8">
                    <div className="h-full w-full basis-full lg:basis-4/6">
                        <Gallery
                            images={product.images.map((image: Image) => ({
                                src: image.url,
                                altText: image.altText
                            }))}
                        />
                    </div>

                    <div className="basis-full lg:basis-2/6">
                        <ProductDescription product={product} />
                    </div>
                </div>
                <Suspense>
                    <RelatedProducts id={product.id} />
                </Suspense>
            </div>
            <Suspense>
                <Footer />
            </Suspense>
        </>
    );
}

async function RelatedProducts({ id }: { id: string }) {
    //const relatedProducts = await getProductRecommendations(id);
    const relatedProducts = [{
        id: '1',
        handle: 'product-1',
        availableForSale: true,
        title: 'Product 1',
        description: 'Description of Product 1',
        descriptionHtml: '<p>Description of Product 1</p>',
        options: [],
        priceRange: {
            maxVariantPrice: { amount: '10.00', currencyCode: 'USD' },
            minVariantPrice: { amount: '10.00', currencyCode: 'USD' },
        },
        variants: [],
        featuredImage: {
            url: 'https://th.bing.com/th/id/OIP.f9vsODFTv9h4xHqFN3OdOAHaHa?pid=ImgDetMain',
            altText: 'Image 1',
            width: 100,
            height: 100,
        },
        images: [], // You may add more images if needed
        seo: { title: 'Product 1', description: 'Description of Product 1' },
        tags: [],
        updatedAt: '2022-01-01T00:00:00Z',
    }];

    if (!relatedProducts.length) return null;

    return (
        <div className="py-8">
            <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
            <ul className="flex w-full gap-4 overflow-x-auto pt-1">
                {relatedProducts.map((product) => (
                    <li
                        key={product.handle}
                        className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
                    >
                        <Link className="relative h-full w-full" href={`/product/${product.handle}`}>
                            <GridTileImage
                                alt={product.title}
                                label={{
                                    title: product.title,
                                    amount: product.priceRange.maxVariantPrice.amount,
                                    currencyCode: product.priceRange.maxVariantPrice.currencyCode
                                }}
                                src={product.featuredImage?.url}
                                fill
                                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}