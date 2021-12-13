import { person, sayHello } from './lib';

let test = () => console.log(person.name);

test();

console.log(sayHello(person.name));
