console.log('this works');

const people = [
    { name: "adri" },
    { name: "becky" },
    { name: "chris" },
    { name: "dillon" },
    { name: "evan" },
    { name: "frank" },
    { name: "georgette" },
    { name: "hugh" },
    { name: "igor" },
    { name: "jacoby" },
    { name: "kristina" },
    { name: "lemony" },
    { name: "matilda" },
    { name: "nile" },
    { name: "ophelia" },
    { name: "patrick" },
    { name: "quincy" },
    { name: "roslyn" },
    { name: "solene" },
    { name: "timothy" },
    { name: "uve" },
    { name: "violet" },
    { name: "wyatt" },
    { name: "xenia" },
    { name: "yadri" },
    { name: "zack" }
];

// 1. get the container element
const container = document.querySelector('.container');
console.log(container);

// 2. iterate over the people array
people.forEach(person => {
    console.log(person);
    // 3. for every element in the people array, create a new listItem
    const listItem = document.createElement('li');
    // 4. add the name of the person to the listItem
    listItem.textContent = person.name;
    // 5. append the listItem to the container
    container.appendChild(listItem);
})

/* 
    search name functionality 
    1. get the input element
    2. filter the people array based on the input value
    3. pass that value to a function that will display the results
    4. clear the results
*/

const searchBar = document.querySelector('.input');

// clear list function defined
const clearList = () => {
    container.innerHTML = '';
}
// second function defined
const displayFiltered = (name) => {
    console.log(name)
    // clear the container
    clearList()

    for(let i = 0; i < name.length; i++) {
        console.log(name[i])
        // create a new list item
        let listItem = document.createElement('li');
        // add text content to the list item
        listItem.textContent = name[i].name;
        // append the list item to the container
        container.appendChild(listItem);
    }
}

// first function defined
const searchNames = (event) => {
    const searchString = event.target.value.toLowerCase();
    console.log('line 57', searchString);

    const filteredPeople = people.filter(person => {
        if(searchString) {
            return person.name.toLowerCase().includes(searchString)
        }
    })

    console.log('line 63', filteredPeople);
    // second function being called
    displayFiltered(filteredPeople)
}


// first function being called
searchBar.addEventListener('keyup', searchNames);


