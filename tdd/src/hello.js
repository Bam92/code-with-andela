let hello = (name) => {
   return (name === undefined) ?  'Hello, world!' : 'Hello, ' + name + '!';
};

console.log(hello());
console.log(hello("papa"));