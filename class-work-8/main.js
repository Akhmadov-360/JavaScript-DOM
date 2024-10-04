fetch("https://fakestoreapi.com/users")
  .then((response) => response.json())
  .then((users) => {
    console.log(users);
    users.forEach(u => {
        const container = document.getElementById("products-container");

        const name = document.createElement('p')
        name.textContent = u.username;

        container.appendChild(name);

    });
  })
  .catch((error) => console.error("Error fetching the users:", error));

  