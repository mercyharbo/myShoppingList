// Create 3 variables that hold references of the list
const button = document.querySelector('button');
    
//Create a function that will run in response to the button on clicked
button.addEventListener('click', (e) => {
    const input = document.querySelector('input').value;

    // Create a new list item li, span and button
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const node = document.createTextNode(input);
    li.appendChild(node);
    
    // Create new button and append it to the li
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    li.appendChild(deleteButton);
    ul.appendChild(li);

    // Clear input fields after submitting 
    function clearFields() {
        document.querySelector('input').value = '';
    }

    // Delete li from the ul
    deleteButton.addEventListener('click', () => {
        ul.removeChild(li);
    });
 
    // Input focus after entering one input after the other
    document.querySelector('input').focus();

    clearFields();
    saveShoppingCarts(input);
    e.preventDefault();
});
