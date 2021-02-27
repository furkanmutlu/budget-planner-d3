const form = document.querySelector('form');
let inputName = document.querySelector('#name');
let inputCost = document.querySelector('#cost');
const error = document.querySelector('#error');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if(inputName.value && inputCost.value) {
        const item = {
            name: inputName.value,
            cost: parseInt(inputCost.value)
        };

        await db.collection('expenses').add(item);
        error.textContent = '';
        inputName.value = '';
        inputCost.value = '';

        return;
    }

    error.textContent = 'Please enter values before submitting.';
})
