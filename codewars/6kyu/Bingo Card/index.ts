const getBingoColumn = (start, char) => {
	const arr = [];
	const requaredLength = char === "N" ? 4 : 5;
	while (arr.length < requaredLength) {
		const numBingoStyle = `${char}${Math.floor(
			Math.random() * 15 + start
		)}`;
	
		if (!arr.includes(numBingoStyle)) {
	    arr.push(numBingoStyle);
		}
	}

	return arr;
};

function getCard() {
	const arr = [];
	let start = 1;
	for (const char of "BINGO") {
		arr.push(...getBingoColumn(start, char));
		start += 15;
	}
  
	return arr;
}
