import { ReactNode } from "react";

interface BodyProps {
    children?: ReactNode
}

export default function Body({ children }: BodyProps ) {

	return (
		<div className="container">
			{children}
		</div>
	);
}