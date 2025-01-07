/*задание 1*/
const numbers = [52, 31, 9, 85, 31, 45];
let sum = 0;
let i = 0;

while (i < numbers.length) {
  sum += numbers[i];
  i++;
}

console.log(`Сумма чисел: ${sum}`);

/* Задание 2 */
const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    numberOfPages: 281,
    genre: "Fiction",
    awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"],
  },
  {
    title: "1984",
    author: "George Orwell",
    numberOfPages: 328,
    genre: "Dystopian",
    awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"],
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    numberOfPages: 180,
    genre: "Classic",
    awards: ["Modern Library's Top 100", "National Book Award Nominee"],
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    numberOfPages: 635,
    genre: "Adventure",
    awards: ["Regarded as a Great American Novel", "Part of the Western Canon"],
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    numberOfPages: 432,
    genre: "Romance",
    awards: ["BBC's Big Read", "Guardian's 100 Best Novels"],
  },
];

for (let i = 0; i < books.length; i++) {
  const book = books[i];
  console.log(`Название: ${book.title}`);
  console.log(`Автор: ${book.author}`);
  console.log(`Количество страниц: ${book.numberOfPages}`);
  console.log(`Жанр: ${book.genre}`);
  console.log(`Награды:`);

  for (let j = 0; j < book.awards.length; j++) {
    console.log(`  - ${book.awards[j]}`);
  }

  console.log("----------------------------------------------------");
}

/*Задание 3 */

function calculateAveragePages(books) {
  let totalPages = 0;

  for (let i = 0; i < books.length; i++) {
    totalPages += books[i].numberOfPages;
  }

  const averagePages = totalPages / books.length;
  return averagePages;
}
const averagePages = calculateAveragePages(books);
console.log(`Среднее количество страниц: ${averagePages}`);

/*Задание 4 */
const userString = prompt("Введите строку:");
const userNumber = parseInt(prompt("Введите количество повторений:"), 10);

function repeatString(str, n) {
  return str.repeat(n);
}
const result = repeatString(userString, userNumber);
console.log(`Результат: ${result}`);

/*Задание 5 */
const input = prompt("Введите значения через запятую:");

function calculateAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  const average = sum / array.length;
  return average;
}

const array = input.split(",").map(Number);
const average = calculateAverage(array);
console.log(`Среднее значение: ${average}`);
