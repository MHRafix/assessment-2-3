const Button: React.FC<IButtonProps> = ({ variant, children, onClick }) => {
	// styles of btn by variant
	const styles: any = {
		primary: {
			backgroundColor: 'blue',
			color: 'white',
		},
		secondary: {
			backgroundColor: 'gray',
			color: 'black',
		},
		'icon-arrow-primary': {
			backgroundColor: 'blue',
			color: 'white',
		},
	};

	return (
		<button style={styles?.[variant]} onClick={onClick}>
			{variant === 'icon-arrow-primary' && <span>&rarr;</span>}
			{children}
		</button>
	);
};

export default Button;

interface IButtonProps {
	variant: string;
	children: JSX.Element | string;
	onClick: () => void;
}
