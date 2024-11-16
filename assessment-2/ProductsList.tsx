import React from 'react';
import { IProduct } from './App';

const ProductsList: React.FC<IProductListProps> = React.memo(({ products }) => {
	return (
		<div>
			<ul>
				{products.map((product) => (
					<li key={product.id}>
						{product.name} - {product.price}
					</li>
				))}
			</ul>
		</div>
	);
});

export default ProductsList;

interface IProductListProps {
	products: IProduct[];
}
