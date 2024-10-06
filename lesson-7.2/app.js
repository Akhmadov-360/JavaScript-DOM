fetch("https://fakestoreapi.com/users")
  .then((response) => response.json())
  .then((users) => {
    const usersContainer = document.getElementById("container");

    users.forEach((u) => {
        const card = document.createElement("div");
        card.classList.add("user-card");
        const blackBox = document.createElement("div");
        blackBox.classList.add("wrapper");
        const userName = document.createElement("h1");
        userName.classList.add("username");
        userName.textContent = u.username;
        const userSpan = document.createElement("span");
        userSpan.classList.add("userInfo");
        const email = document.createElement("p");
        email.classList.add("email");
        email.textContent = u.email;;
        const btn = document.createElement("button");
        btn.classList.add("follow-btn");
        btn.textContent = "Follow";
        const mainText = document.createElement("p");
        mainText.classList.add("text");
        mainText.textContent = u.catchPhrase;

        usersContainer.appendChild(card);
        card.appendChild(blackBox);
        blackBox.appendChild(userName);
        card.appendChild(userSpan);
        userSpan.appendChild(email);
        userSpan.appendChild(btn);
        card.appendChild(mainText);
    });

  })
  .catch((error) => console.error("Error fetching the users:", error));