const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	// TODO
	if (str.length) {
	  results = fruit.filter((fruits) => {
		return fruits.toLowerCase().includes(str.toLowerCase());
	  });
	}
	return results;
  }
  
  function searchHandler(e) {
	const searchResults = search(e.target.value);
	showSuggestions(searchResults, e.target.value);
  }
  
  function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';
	const filteredResults = results
	  .filter(result => result.toLowerCase().includes(inputVal.toLowerCase()))
	  .slice(0, 4); 
	filteredResults.forEach(result => {
	  const li = document.createElement('li');
	  li.textContent = result;
	  suggestions.appendChild(li);
	});
  }
  
  function useSuggestion(e) {
	input.value = e.target.textContent;
	suggestions.innerHTML = '';
  }
  
  input.addEventListener('keyup', searchHandler);
  suggestions.addEventListener('click', useSuggestion);