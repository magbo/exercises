//Na samym początku skrypu stwórz zmienną form, której wartość będzie obiekt reprezentujący element <form> w kodzie HTML.
var form = document.getElementById('form1');

var p = document.createElement("p");
document.body.appendChild(p); 


 

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Zapobiegamy domyślnej akcji przeglądarki, czyli przeładowania strony
  
  var year = form.year.value; // Przypisaliśmy wartość podaną przez użytkownika do zmiennej
  
  var isBissextile  = function(year) {

  	if (year % 4 === 0) {
  		if (year % 100 === 0) {
  			if (year % 400 === 0) {
  				return "Leap year";
  			} else {
  				return "Common year";		
  			};
  		} else {
  		   return "Leap year";	
  		};
    } else {
    	return "Common year";
  	};

  };
  // Tutaj będziemy wywoływać funkcję i przypisywać wynik do elementu.
  
  

  
  p.innerHTML = isBissextile(year);

});

