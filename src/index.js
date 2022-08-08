const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let tempResult = '';

    const exprLength = expr.length / 10;
	for (let i = 0; i < exprLength; i++) {
		let tempArr = expr.slice(i * 10, i * 10 + 10);
        let tempEl = String(parseInt(tempArr, 10));
        if (tempEl !== 'NaN') {
            tempResult = '';
            for (let j = 0; j < tempEl.length; j = j + 2) {
                if (tempEl[j] === '1' && tempEl[j + 1] === '1') {
                    tempResult = `${tempResult}-`;
                } else if (tempEl[j] === '1' && tempEl[j + 1] === '0') {
                    tempResult = `${tempResult}.`;
                }
            }
            result = `${result}${MORSE_TABLE[tempResult]}`;
        } else {
            result = `${result} `;
        }
	}
    return result;
}

module.exports = {
    decode
}