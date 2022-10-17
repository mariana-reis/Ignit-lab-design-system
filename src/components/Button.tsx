import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps extends ButtonHTMLAtributes<HTMLButtonElement> {
	children: ReactNode;
	asChild?: boolean;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
	const Comp = asChild ? Slot : 'button';
	return (
		<Comp
			className={clsx(
				'py-3 px-4 bg-cyan-500 rounded font-semibold text-brack text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-gray-900',
				className
			)}
			{...props}
		>
			{children}
		</Comp>
	);
}
