document.getElementById("search-button").addEventListener("click", function() {
  let inputValue = document.getElementById("search-input").value;

  if (inputValue)
    fetch('https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/'+inputValue.toLowerCase())
      .then(response => {
        if (!response.ok)
        {
          alert('Pokémon not found');
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        document.getElementById("pokemon-name").innerHTML = data['name'].toUpperCase();
        document.getElementById("pokemon-id").innerHTML = '#' + data['id'];
        document.getElementById("height").innerHTML = data['height'] + '&nbsp;M';
        document.getElementById("weight").innerHTML = data['weight'] + '&nbsp;KG';

        document.getElementById("hp").innerHTML = data['stats'][0]['base_stat'];
        document.getElementById("attack").innerHTML = data['stats'][1]['base_stat'];
        document.getElementById("defense").innerHTML = data['stats'][2]['base_stat'];
        document.getElementById("special-attack").innerHTML = data['stats'][3]['base_stat'];
        document.getElementById("special-defense").innerHTML = data['stats'][4]['base_stat'];
        document.getElementById("speed").innerHTML = data['stats'][5]['base_stat'];

        let pokemonImg = document.createElement("img");
        pokemonImg.src = data['sprites']['front_default'];

        document.getElementById("sprite").innerHTML = '';
        document.getElementById("sprite").append(pokemonImg);

        var typesCount = data['types'].length;
        document.getElementById("types").innerHTML = '';

        for (var typeNum = 0; typeNum < typesCount; typeNum++)
        {
          let typeName = data['types'][typeNum]['type']['name'];
          let typeP = document.createElement("p");
          typeP.classList.add(typeName);
          typeP.innerHTML = typeName;

          document.getElementById("types").append(typeP);
        }
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  else
    alert('Pokémon not found');
});