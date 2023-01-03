const name = window.prompt("Quel est votre prénom ?");
const lastName = window.prompt("Quel est ton nom de famille ?");
const birthday = window.prompt("Quel est ta date de naissance ?");
const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth() + 1;
const currentDay = now.getDate();
const age = currentYear - birthday;

console.log(`Bonjour ${name} ${lastName}, cette année tu as ${age} ans`);
