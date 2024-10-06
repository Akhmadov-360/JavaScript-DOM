const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard("No Profile");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");
    addReposToCard(data);
  } catch (e) {}
}

function createUserCard(user) {
  const { name, avatar_url, bio, followers, following, public_repos } = user;

  const userBio = bio ? bio : "No Bio";

  const cardHtml = `
  <div class="card">
  <div>
     <img src="${avatar_url}" alt="${name}">
  </div>
  <div class="user">
     <h2>${name}</h2>
     <p>${userBio}</p>
     <ul>
        <li>Followers: ${followers}</li>
        <li>Following: ${following}</li>
        <li>Repos: ${public_repos}</li>
     </ul>
     <div id="repos" class="repos"></div>
  </div>
</div>
  `;

  result.innerHTML = cardHtml;
}

function createErrorCard() {
  const cardHtml = `
  <div class="card error-card">
  <div class="error-icon">
    <span>404</span>
  </div>
  <p>Oops! We couldn't find the user you're looking for.</p>
</div>
 `;

  result.innerHTML = cardHtml;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");
  reposEl.innerHTML = '';

  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);
    search.value = "";
  }
});
