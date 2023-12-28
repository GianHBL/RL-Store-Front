import Grid from '../../../components/grid';
import { GridTileImage } from '../../../components/grid/tile';

import Link from 'next/link';

interface Product {
    handle: string;
    title: string;
    images: {
        src: string;
        altText: string;
    }[];
    variants: {
        priceV2: {
            amount: string;
            currencyCode: string;
        };
    }[];
}

export default function ProductGridItems({ products }: { products: Product[] }) {
    return (
        <>
            {products.map((product) => (
                <Grid.Item key={product.handle} className="animate-fadeIn">
                    <Link className="relative inline-block h-full w-full" href={`/product/${product.handle}`}>
                        <GridTileImage
                            src={product.images[0].src}
                            alt={product.images[0].altText || product.title}
                            isInteractive={true}
                            label={{
                                title: product.title,
                                amount: product.variants[0].priceV2.amount,
                                currencyCode: product.variants[0].priceV2.currencyCode,
                                position: 'center'
                            }}
                        />
                    </Link>
                </Grid.Item>
            ))}
        </>
    );
}