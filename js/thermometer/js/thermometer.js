//Na samym początku skrypu stwórz zmienną form, której wartość będzie obiekt reprezentujący element <form> w kodzie HTML.
var form = document.getElementById('form1');

var p = document.createElement("p");
document.body.appendChild(p); 


 

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Zapobiegamy domyślnej akcji przeglądarki, czyli przeładowania strony
  
  var celsjusz = form.celsjusz.value; // Przypisaliśmy wartość podaną przez użytkownika do zmiennej
  
  var fahrenheit = celsjusz * 9 / 5 + 32;
  // Tutaj będziemy wywoływać funkcję i przypisywać wynik do elementu.
  
  function celsjusToFahrenheit(celsjusz) {
  	return fahrenheit;
  };

  celsjusToFahrenheit(celsjusz);
  
  p.innerHTML = fahrenheit + " degrees Fahrenheit (°F)";

});

