import { GridTileImage } from './tile';
import type { Product } from '../../lib/shopify/types';
import Link from 'next/link';

function ThreeItemGridItem({
  item,
  size,
  priority
}: {
  item: Product;
  size: 'full' | 'half';
  priority?: boolean;
}) {
  return (
    <div
      className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
    >
      <Link className="relative block aspect-square h-full w-full" href={`/product/${item.handle}`}>
        <GridTileImage
          src={item.featuredImage.url}
          fill
          sizes={
            size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
          }
          priority={priority}
          alt={item.title}
          label={{
            position: size === 'full' ? 'center' : 'bottom',
            title: item.title as string,
            amount: item.priceRange.maxVariantPrice.amount,
            currencyCode: item.priceRange.maxVariantPrice.currencyCode
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const firstProduct: Product = {
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
    images: [],
    seo: { title: 'Product 1', description: 'Description of Product 1' },
    tags: [],
    updatedAt: '2022-01-01T00:00:00Z',
  };
  const secondProduct: Product = {
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
      url: 'https://th.bing.com/th/id/R.d14bc0e4cd955a3136f40140cb0b757b?rik=84089PM4Qrc19Q&riu=http%3a%2f%2fgdimg.gmarket.co.kr%2f2481605362%2fstill%2f600%3fver%3d1656901241&ehk=dp9hDHpLGP%2b9%2bF2ZJnNjrRh5wmKPnXGyNrud72cQUb0%3d&risl=&pid=ImgRaw&r=0',
      altText: 'Image 1',
      width: 100,
      height: 100,
    },
    images: [],
    seo: { title: 'Product 1', description: 'Description of Product 1' },
    tags: [],
    updatedAt: '2022-01-01T00:00:00Z',
  };
  const thirdProduct: Product = {
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
      url: 'https://th.bing.com/th/id/R.898aeac7c7d19f053bc6345c0e229232?rik=MKi6kf3uMiPqjw&riu=http%3a%2f%2fwww.menoption.com%2ffile%2f2018%2f04%2fA1_1-756x1024.jpg&ehk=prLlruryoRP33%2bNeR8uaHGk2%2bAf95aUMlGRg7Gzz7Xw%3d&risl=&pid=ImgRaw&r=0',
      altText: 'Image 1',
      width: 100,
      height: 100,
    },
    images: [],
    seo: { title: 'Product 1', description: 'Description of Product 1' },
    tags: [],
    updatedAt: '2022-01-01T00:00:00Z',
  };

  return (
    <section className="p-4 mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2">
      <ThreeItemGridItem size="full" item={firstProduct} priority={true} />
      <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
      <ThreeItemGridItem size="half" item={thirdProduct} />
    </section>
  );
}