// TODO: Import API_ENDPOINT
    import {API_ENDPOINT} from './api/index.js';
// TODO: Create the addNewBook function that takes in newTitle, newStart, and newEnd as arguments. Inside the function, create a POST request for the new book. Store the response as a JSON in a variable called newBook and return it at the end of the function.
  // Add a new book to the list
  export const addNewBook = async (newTitle, newStart, newEnd) => {
    const response = await fetch(`${API_ENDPOINT}/books`, {
      method: 'POST', 
      body: JSON.stringify({
        title: newTitle,
        start: newStart,
        end: newEnd
      }),
      headers: {
        'content-type': 'application/json',
      }
    });
}

// TODO: Create the getBooks function that retrieves all of the books that have been saved to the back-end API
const getBooks = async () => {
    const response = await fetch(`${API_ENDPOINT}/books`);
    const books = await response.json();
}

// TODO: Create the updateBook function that takes the arguments id, newTitle, newStart, newEnd. Inside of the function, create a PUT request for the specified book to be updated. Return the status of the response at the end of the function.
const updateBook = async (id, newTitle, newStart, newEnd) => {
    const response = await fetch(`${API_ENDPOINT}/books`, {
        method: "PUT",
        body: JSON.stringify({
            id,
            newTitle, 
            newStart,
            newEnd
        }),
        headers: {
            "content-type": "application/json",
        },
    });
};
// TODO: Create the deleteBook function that takes the id of the book to be deleted as an argument. Inside of the function, create a DELETE request for the specified book to be deleted. Return the status of the response at the end of the function.
const deleteBook = (id) => {
    const response = fetch(`${API_ENDPOINT}/books`, {
        method: "delete"
    });
    return response.status;
}