import { join } from 'lodash/array';
import { output } from './utils';
// import { moment } from 'moment';

let component = () => {
	let element = document.createElement('div');

	// lodash is required for the next line to work
	element.innerHTML = join(['Hello', 'webpack'], ' ');

	return element;
};

document.body.appendChild(component());

output('First');

// export default component;

// console.log(moment().format());
