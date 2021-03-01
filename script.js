var cake_prices = new Array();
cake_prices["Round6"]=0;
cake_prices["Round8"]=0;
cake_prices["Round10"]=0;
cake_prices["Round12"]=0;


var filling_prices = new Array();
filling_prices["Select"]=0;
filling_prices["optionone"]=1;
filling_prices["optiontwo"]=2;
filling_prices["optionthree"]=3;
filling_prices["option4"]=4;

function getCakeSizePrice() {
	var cakeRadio = document.getElementsByName('selectedcake');

	for (i=0; i < cakeRadio.length; i++) {
		if (cakeRadio[i].checked) {
			user_input = cakeRadio[i].value;
		}
	}

	return cake_prices[user_input];
}


function getFillingPrice() {
	var cakeSelect = document.getElementById('edu');

	//alert(filling_prices[cakeSelect.value]);

	return filling_prices[cakeSelect.value];
}


function getCandlesPrice() {
	var cakeCandles = document.getElementById('includecandles');

	if(cakeCandles.checked) {
		return(5);
	} else {
		return(0);
	}
}


function getInscriptionPrice() {
	var cakeInscription = document.getElementById('includeinscription');

	if(cakeInscription.checked) {
		return(6); }
  
  else {
		return(0);
	}
}

function calculateTotal() {
	var total = getCakeSizePrice() + getFillingPrice() + getCandlesPrice() + getInscriptionPrice();
	var totalEl = document.getElementById('totalPrice');

	document.getElementById('totalPrice').innerHTML = "Your Total is: $" + total;
	totalEl.style.display = 'block';
}

function hideTotal() {
	var totalEl = document.getElementById('totalPrice');
	totalEl.style.display = 'none';
}