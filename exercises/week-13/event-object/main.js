console.log('this works')

// grab the anchor tag
let anchor = document.querySelector('a')

// write the function
const viewComments = (event) => {
    event.preventDefault()
    console.log(event)
}

// add an event listener to the anchor tag
anchor.addEventListener('click', viewComments)