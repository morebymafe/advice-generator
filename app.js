const ul = document.getElementById('authors');
const list = document.createDocumentFragment();
const url = 'https://api.adviceslip.com/advice';

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let advice = data;

      advice(function(advice) {
        let no = document.createElement('li');
        let name = document.createElement('h2');
        let email = document.createElement('span');

        name.innerHTML = `${author.advice}`;
        email.innerHTML = `${author.advice}`;

        no.appendChild(name);
        no.appendChild(email);
        list.appendChild(li);
      });
    })
    .catch(function(error) {
      console.log(error);
    });

  ul.appendChild(list);
