import { useCallback, useState } from 'react';
import AddProductForm from './AddProductForm';
import ProductsList from './ProductsList';

const App: React.FC = () => {
	// products list state
	const [products, setProducts] = useState<IProduct[]>([
		{ id: 1, name: 'Apple', price: 100 },
		{ id: 2, name: 'Mango', price: 150 },
	]);

	// add product handler
	const addProduct = useCallback((product: IProduct) => {
		setProducts((prevProducts) => [
			...prevProducts,
			{ ...product, id: Date.now() }, // Date.now() for generate unique id
		]);
	}, []);

	return (
		<div>
			<h1>Product List</h1>
			<AddProductForm addProduct={addProduct} />
			<ProductsList products={products} />
		</div>
	);
};
export default App;

export interface IProduct {
	id?: number;
	name: string;
	price: number;
}
