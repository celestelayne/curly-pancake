console.log('Hello, world!');

const loadResults = () => {
    let url = 'https://api.sheety.co/46ddf0290bbad330a73c97cecaf5b475/symmetryAndColor/symmetryAndColor';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
        // Do something with the data
        console.log(json);
    });
}

loadResults()