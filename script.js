
	//-------------
	document.write( "<br />While Loops:<br />" + "----------------------" + "<br /><br />");
	//-------------
	
	var year = 1992;
	
	while (year <= 2012) {
		document.write( year + "<br />");
		year += 4;
	}
	
	//-------------
	document.write( "<br />Arrays:<br />" + "----------------------" + "<br />");
	//-------------
	
	var array = [];
	array[0] = "Jag ";
	array[1] = "heter ";
	array[2] = "Tobias ";
	array[3] = "Lans! ";
	array[4] = 23;
	
	document.write(array);
	document.write("<br />");
	document.write(array.length);
	
	//-------------
	document.write( "<br /><br />Switch:<br />" + "----------------------" + "<br />");
	//-------------
	
	var month = 6;
	switch (month) {
		case 6: document.write("Juni");
		break;
		
		case 9:	document.write("September");
		break;
		
		case 12: document.write("December");
		break;
	}
	
	//-------------
	document.write( "<br /><br />Functions<br />" + "----------------------" + "<br /><br />");
	//-------------

	function name (name) {
		document.write("My name is: " + name + "!" + "<br />");
	}
	
	name("Tobbe");
	name("Bjoern");
	
	document.write("<br />");
	
	function calc_tax(cost, tax_procent) {
		var tax = cost * tax_procent / 100;
		document.write("Kostnad inkl. skatt blir: " + (cost + tax) + " kr");
	}
	calc_tax(550, 25);
	
	document.write("<br /><br />");
	
	function calc_price(prod_cost, profit) {
		var price = prod_cost + profit;
		return price;
	}
	
	var price = calc_price(300, 90);
	document.write("To make 95kr, the price must be: " + price);
	document.write("<br />");
	calc_tax(price, 25);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	