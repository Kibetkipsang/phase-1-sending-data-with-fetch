function submitData(name, email) {
    const data = { name, email };

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data),
    })
    .then((response) => {
       
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data); 

        const body = document.querySelector('body');
        const newElement = document.createElement('p');
        newElement.textContent = `New Id: ${data.id}`; 
        body.appendChild(newElement);
    })
    .catch((error) => {
        console.log("Fetch error:", error);

        const body = document.querySelector('body');
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`; 
        body.appendChild(errorElement);
    });
}
