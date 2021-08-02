let button = document.querySelector('button');

//Create a function that will run in response to the button on clicked
button.addEventListener('click', (e) => {
    let input = document.querySelector('input').value;

    // Create a new list item li, span and button
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    let node = document.createTextNode(input);
    li.appendChild(node);
    
    // Create new button and append it to the li
    let deleteButton = document.createElement('button');
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
    e.preventDefault();
});

