//import { getCollectionProducts } from '../lib/shopify';
import Link from 'next/link';
import { GridTileImage } from './grid/tile';

export async function Carousel() {
    // Collections that start with `hidden-*` are hidden from the search page.
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
        images: [], // You may add more images if needed
        seo: { title: 'Product 1', description: 'Description of Product 1' },
        tags: [],
        updatedAt: '2022-01-01T00:00:00Z',
    };

    // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
    const carouselProducts = [product, product, product, product, product, product];

    return (
        <div className=" w-full overflow-x-auto pb-6 pt-1">
            <ul className="flex animate-carousel gap-4">
                {carouselProducts.map((product, i) => (
                    <li
                        key={`${product.handle}${i}`}
                        className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
                    >
                        <Link href={`/product/${product.handle}`} className="relative h-full w-full">
                            <GridTileImage
                                alt={product.title}
                                label={{
                                    title: product.title,
                                    amount: product.priceRange.maxVariantPrice.amount,
                                    currencyCode: product.priceRange.maxVariantPrice.currencyCode
                                }}
                                src={product.featuredImage?.url}
                                fill
                                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}