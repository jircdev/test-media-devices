import React from 'react';

export /*bundle*/
function View(): JSX.Element {
	const elements = [
		'JavaScript Asíncrono: async/await, Promises',
		'Eventos: Event listeners, addEventListener, removeEventListener.',
		'DOM Manipulación: Crear, modificar y leer elementos del DOM.',
	];
	const output = elements.map((element, index) => <li key={element}>{element}</li>);
	return (
		<div className='page__container'>
			<h1 className='text-primary'>Gestión de dispositivos Multimedia</h1>

			<h3>Objetos a utilizar</h3>

			<div className='card'>
				<h3>Conocimientos previos</h3>
				<ul>{output}</ul>
			</div>

			<div className='card'>
				<h3>Datos Relacionados</h3>
				<ul>{output}</ul>
			</div>
			<div className='card'>
				<h3>APIs Javascript Browser</h3>
				<ul>
					<li>
						<code>Navigator.mediaDevices</code>
					</li>
					<li>
						<code>MediaRecorder</code>
					</li>
					<li>
						<code>AudioContext</code>
					</li>
				</ul>
			</div>
		</div>
	);
}
