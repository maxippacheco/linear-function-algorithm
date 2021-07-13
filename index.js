
// y = mx + b
// m = y2 - y1 / x2 - x1

const linearFuncionM = (y2 , y1, x2, x1) => {
	
	const mx = x2 - x1;
	const my = y2 - y1;

	const m = my / mx;

	return console.log({m});

}

const linearFuncionCalculator = ( m, b, symbol = '' ) => {
	
	let y1, y2, y3;
	
	if (symbol === '-') {
		y1 = m*0 - b;
		y2 = m*1 - b;
		y3 = m*2 - b;
	}

	if(symbol === '+'){
		y1 = m*0 + b;
		y2 = m*1 + b;
		y3 = m*2 + b;		
	}
	

	return console.log({
		y1: {x: 0, y: y1},	
		y2: {x: 1, y: y2},	
		y3: {x: 2, y: y3},	
	});
}

//Test
linearFuncionCalculator( 2, 6, '+' );
linearFuncionM(5, 3, 6, 2);