const people = ["Greg", "Mary", "Devon", "James"];

people.forEach((person) => console.log(person));

people.shift();
console.log(people);

people.pop();
console.log(people);

people.unshift("Matt");
console.log(people);

people.push("Anna");
console.log(people);

for (let i = 0; i < people.length; i++) {
  if (people[i] === "Mary") {
    break;
  }
  console.log(people[i]);
}

let peopleCopy = people.slice(2);
console.log(peopleCopy);

console.log(people.indexOf("Mary"));

console.log(people.indexOf("Foo"));

people.pop();
people.shift();
people.push("James");
people.unshift("Greg");

people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

const withBob = people.concat("Bob");
console.log(withBob);
