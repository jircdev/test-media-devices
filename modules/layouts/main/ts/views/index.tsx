import * as React from 'react';
import { Button } from 'pragmate-ui/components';
declare global {
	namespace JSX {
		interface IntrinsicElements {
			'beyond-layout-children': any;
		}
	}
}

export function Layout() {
	return (
		<main>
			<beyond-layout-children />
		</main>
	);
}
