// JOIN
const arr_of_words = ["I", "Love", "Javascript"];

const arr_join_example_1 = words.join();
const arr_join_example_2 = words.join(" and ");
const arr_join_example_3 = words.join(" ");

console.log(arr_join_example_1) // I,Love,Javascript
console.log(arr_join_example_2) // I and Love and Javascript
console.log(arr_join_example_3) // I Love Javascript

// Push & Pop
const antrian_warteg = ["Joni", "Budi", "Bambang", "Ones"]
console.log(antrian_warteg) //  ['Joni', 'Budi', 'Bambang', 'Ones']

antrian_warteg.pop()
console.log(antrian_warteg) //  ['Joni', 'Budi', 'Bambang']

antrian_warteg.push("Jamal")
console.log(antrian_warteg) //  ['Joni', 'Budi', 'Bambang', 'Jamal']

antrian_warteg.push("Jack", "Boni")
console.log(antrian_warteg) //  ['Joni', 'Budi', 'Bambang', 'Jamal', 'Jack', 'Boni']


// Unshift & Shift
const antrian_warteg = ["Joni", "Budi", "Bambang", "Ones"]
console.log(antrian_warteg) //  ['Joni', 'Budi', 'Bambang', 'Ones']

antrian_warteg.shift()
console.log(antrian_warteg) //  ['Budi', 'Bambang', 'Ones']

antrian_warteg.unshift("Jack")
console.log(antrian_warteg) //  ['Jack', 'Budi', 'Bambang', 'Ones']

antrian_warteg.unshift("Mariyem", "Sutejo")
console.log(antrian_warteg) //  ['Mariyem', 'Sutejo', 'Jack', 'Budi', 'Bambang', 'Ones']


// Splice
// format: array_name.splice(index, total_item_to_remove <optional>, item_to_add <optional>)
const programming_languages = ["PHP", "Python", "Javascript", "Golang"];

programming_languages.splice(2, 0, "Java", "Ruby");
console.log(programming_languages) // ['PHP', 'Python', 'Java', 'Ruby', 'Javascript', 'Golang']

programming_languages.splice(3, 2)
console.log(programming_languages) // ['PHP', 'Python', 'Java', 'Golang']


// Slice
// format: array_name.slice(start <optional>, end <optional>)
const hobbies = ["Membaca", "Mancing", "Main Game", "Scroll Sosmed", "Isengin Temen"];

// get data in range index 1 - 3 (3 excluded)
const example_slice_1 = hobbies.slice(1, 3);
console.log(example_slice_1); // ['Mancing', 'Main Game']

// get data (counting from last index)
const example_slice_2 = hobbies.slice(-3, -1);
console.log(example_slice_2); // ['Main Game', 'Scroll Sosmed']

// forEach
const job_titles = ["Junior Programmer", "Javascript Developer", "Software Engineer"];
job_titles.forEach(jobTitleLoop);

function jobTitleLoop(job_title) {
  console.log(job_title);
}

/* Output:
Junior Programmer
Javascript Developer
Software Engineer
*/

// Sort
// Ascending -> sort()
// Descending -> reverse()
const names = ["Jack", "Udin", "Ones", "Bambang"];
names.sort(); // ['Bambang', 'Jack', 'Ones', 'Udin']
names.reverse(); // ['Udin', 'Ones', 'Jack', 'Bambang']

const numbers = [18, 7, 799, 24];
numbers.sort() // [18, 24, 7, 799]
numbers.reverse() // [799, 7, 24, 18]

// hmmm... looks weird? try this for number!
numbers.sort(
  function(a, b){
    return a-b
  }
); // [7, 18, 24, 799]

numbers.sort(
  function(a, b){
    return b-a
  }
); // [799, 24, 18, 7]


// Map
const ex_names = ["Ana", "Ina", "Inu", "Ini"]
ex_names.map(function(ex_name) {
  console.log(ex_name)
})

/*
  Output:
  Ana
  Ina
  Inu
  Ini
*/
