import moment from 'moment';
import _ from 'lodash';
// import join from 'lodash/join';
import { output } from './utils';
// import output from './utils'; // а можно и так, если експортируется как default

let component = () => {
	let element = document.createElement('div');

	// lodash is required for the next line to work
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	return element;
};

document.body.appendChild(component());

output('First');

let today = moment(new Date()).locale('ru');

console.log(today.format('MMMM Do YYYY, h:mm:ss a'));
