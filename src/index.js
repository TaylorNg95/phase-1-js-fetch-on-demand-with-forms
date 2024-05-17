const init = () => {
    const inputForm = document.querySelector('form');
    
    inputForm.addEventListener('submit', event => {
        event.preventDefault();
        const idValue = document.querySelector('#searchByID').value;
        
        fetch(`http://localhost:3000/movies/${idValue}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.querySelector('#movieDetails h4').textContent = data.title;
            document.querySelector('#movieDetails p').textContent = data.summary;
        })

    })

}

document.addEventListener('DOMContentLoaded', init);