console.log('Hello, world!');

// define spreadsheet URL (note the file MUST be public)
const mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1lJSFqDWzLyiYl4rUOe_mm0NJ6yvtwj8lFIihkuwH4VA/edit#gid=0';

function loadResults() {
    $('#test').sheetrock({
        url: mySpreadsheet,
        query: "select * order by A asc",
    });

}

loadResults()