//Lets use the github api to see what repositories different users have.

const repositoryUl = document.getElementById("repositoryUl");
const userNames = ['JiuTak', 'santhoshboinapally', 'suvarna-ratna']
const urls = []
userNames.forEach(userName => urls.push(fetch(`https://api.github.com/search/repositories?q=user:${userName}`)))

let users = () => {
  Promise.all(urls)
    .then((responses) => {
      return Promise.all(responses.map((response) => response.json()));
    })
    .then(function (datas) {
      console.log(datas);
      //creating an new array that contains all the item arrays
      let usersData = datas.map((data) => data.items);

      usersData.forEach((el) => {
        const li = document.createElement("li");
        //creates separates arrays for each user
        const repos = el;

        //creates the list that contains all the repositories for each user
        let usersRepos = "";
        repos.forEach(
          (repo) => (usersRepos += `<li><span>${repo.name}</span> : <a href="${repo.html_url}">${repo.html_url}</a></li>`)
        );

        li.innerHTML = `
            <li style="font-size:18px;color:darkblue;font-weight:bolder">${repos[0].owner.login}\'s repositories</li>
            <ul>${usersRepos}</ul>
            `;

        repositoryUl.append(li);
      });
    })
    .catch(function (error) {
      // if there's an error, log it
      console.log(error);
    });
};

users();