import { join } from 'lodash/array';
// import { moment } from 'moment';

let component = () => {
	let element = document.createElement('div');

	// lodash is required for the next line to work
	element.innerHTML = join(['Hello', 'webpack'], ' ');

	return element;
};

document.body.appendChild(component());

// console.log(moment().format());
