import { IProduct } from './App';
import React, { useCallback, useState } from 'react';

interface AddProductFormProps {
	addProduct: (product: IProduct) => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ addProduct }) => {
	const [name, setName] = useState<string>(''); // product name state
	const [price, setPrice] = useState<number | undefined>(undefined); // product price state

	// product for submit handler
	const onSubmitForm = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault();
			if (name.trim() === '' || price === undefined) {
				alert('Please enter both name and price');
				return;
			}
			addProduct({ name, price });
			setName('');
			setPrice(undefined);
		},
		[name, price, addProduct]
	);

	return (
		<form onSubmit={onSubmitForm}>
			<input
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder='Enter name'
			/>
			<input
				type='number'
				value={price ?? ''}
				onChange={(e) => setPrice(parseFloat(e.target.value))}
				placeholder='Enter price'
			/>
			<button type='submit'>Submit</button>
		</form>
	);
};

export default AddProductForm;
