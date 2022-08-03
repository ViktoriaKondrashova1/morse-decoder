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
    
    const arr = [];
    let x = '';

    for(let i = 0; i < expr.length; i++) {
        x += expr[i];
        if (x.length == 10) {
            arr.push(x);
            x = '';
        }
    }

    let result = arr.map(el => {
        while (el[0] == 0 && el[1] == 0) {
            return el.slice(2); 
            }   
        return el   
    })

    let result2 = result.map(el => {
        while (el[0] == 0 && el[1] == 0) {
            return el.slice(2); 
            }   
        return el   
    })

    let result3 = result2.map(el => {
        while (el[0] == 0 && el[1] == 0) {
            return el.slice(2); 
            }   
        return el   
    })

    let result4 = result3.map(el => {
        while (el[0] == 0 && el[1] == 0) {
            return el.slice(2); 
            }   
        return el   
    })

    let result5 = result4.map(el => {
        if (el == '**********') {
            return el.replace('**********', ' '); 
            }   
        return el  
    })

    let result6 = result5.map(el => {
        while (el.includes('10')) {
            return el.replace('10', '.'); 
            }   
        return el  
    })

    let result7 = result6.map(el => {
        while (el.includes('10')) {
            return el.replace('10', '.'); 
            }   
        return el  
    })

    let result8 = result7.map(el => {
        while (el.includes('10')) {
            return el.replace('10', '.'); 
            }   
        return el  
    })

    let result9 = result8.map(el => {
        while (el.includes('10')) {
            return el.replace('10', '.'); 
            }   
        return el  
    })

    let result10 = result9.map(el => {
        while (el.includes('10')) {
            return el.replace('10', '.'); 
            }   
        return el  
    })

    let result11 = result10.map(el => {
        while (el.includes('11')) {
            return el.replace('11', '-'); 
            }   
        return el  
    })

    let result12 = result11.map(el => {
        while (el.includes('11')) {
            return el.replace('11', '-'); 
            }   
        return el  
    })

    let result13 = result12.map(el => {
        while (el.includes('11')) {
            return el.replace('11', '-'); 
            }   
        return el  
    })

    let result14 = result13.map(el => {
        while (el.includes('11')) {
            return el.replace('11', '-'); 
            }   
        return el  
    })

    let result15 = result14.map(el => {
        while (el.includes('11')) {
            return el.replace('11', '-'); 
            }   
        return el  
    })

    let result16 = result15.map(el => {
        if (el == '.-') {
            return el.replace('.-', 'a'); 
            } 
        else return el  
    })

    let result17 = result16.map(el => {
        if (el == '-...') {
            return el.replace('-...', 'b'); 
            }   
        else return el  
    })

    let result18 = result17.map(el => {
        if (el == '-.-.') {
            return el.replace('-.-.', 'c'); 
            }   
        else return el  
    })

    let result19 = result18.map(el => {
        if (el == '-..') {
            return el.replace('-..', 'd'); 
            }   
        else return el  
    })

    let result20 = result19.map(el => {
        if (el == '.') {
            return el.replace('.', 'e'); 
            }   
        else return el  
    })

    let result21 = result20.map(el => {
        if (el == '..-.') {
            return el.replace('..-.', 'f'); 
            }   
        else return el  
    })

    let result22 = result21.map(el => {
        if (el == '--.') {
            return el.replace('--.', 'g'); 
            }   
        else return el  
    })

    let result23 = result22.map(el => {
        if (el == '....') {
            return el.replace('....', 'h'); 
            }   
        else return el  
    })

    let result24 = result23.map(el => {
        if (el == '..') {
            return el.replace('..', 'i'); 
            }   
        else return el  
    })

    let result25 = result24.map(el => {
        if (el == '.---') {
            return el.replace('.---', 'j'); 
            }   
        else return el  
    })

    let result26 = result25.map(el => {
        if (el == '-.-') {
            return el.replace('-.-', 'k'); 
            }   
        else return el  
    })

    let result27 = result26.map(el => {
        if (el == '.-..') {
            return el.replace('.-..', 'l'); 
            }   
        else return el  
    })

    let result28 = result27.map(el => {
        if (el == '--') {
            return el.replace('--', 'm'); 
            }   
        else return el  
    })

    let result29 = result28.map(el => {
        if (el == '--') {
            return el.replace('--', 'm'); 
            }   
        else return el  
    })

    let result30 = result29.map(el => {
        if (el == '-.') {
            return el.replace('-.', 'n'); 
            }   
        else return el  
    })

    let result31 = result30.map(el => {
        if (el == '---') {
            return el.replace('---', 'o'); 
            }   
        else return el  
    })

    let result32 = result31.map(el => {
        if (el == '.--.') {
            return el.replace('.--.', 'p'); 
            }   
        else return el  
    })

    let result33 = result32.map(el => {
        if (el == '--.-') {
            return el.replace('--.-', 'q'); 
            }   
        else return el  
    })

    let result34 = result33.map(el => {
        if (el == '.-.') {
            return el.replace('.-.', 'r'); 
            }   
        else return el  
    })

    let result35 = result34.map(el => {
        if (el == '...') {
            return el.replace('...', 's'); 
            }   
        else return el  
    })

    let result36 = result35.map(el => {
        if (el == '-') {
            return el.replace('-', 't'); 
            }   
        else return el  
    })

    let result37 = result36.map(el => {
        if (el == '..-') {
            return el.replace('..-', 'u'); 
            }   
        else return el  
    })

    let result38 = result37.map(el => {
        if (el == '...-') {
            return el.replace('...-', 'v'); 
            }   
        else return el  
    })

    let result39 = result38.map(el => {
        if (el == '.--') {
            return el.replace('.--', 'w'); 
            }   
        else return el  
    })

    let result40 = result39.map(el => {
        if (el == '-..-') {
            return el.replace('-..-', 'x'); 
            }   
        else return el  
    })

    let result41 = result40.map(el => {
        if (el == '-.--') {
            return el.replace('-.--', 'y'); 
            }   
        else return el  
    })

    let result42 = result41.map(el => {
        if (el == '--..') {
            return el.replace('--..', 'z'); 
            }   
        else return el  
    })

    let result43 = result42.map(el => {
        if (el == '.----') {
            return el.replace('.----', '1'); 
            }   
        else return el  
    })

    let result44 = result43.map(el => {
        if (el == '..---') {
            return el.replace('..---', '2'); 
            }   
        else return el  
    })

    let result45 = result44.map(el => {
        if (el == '...--') {
            return el.replace('...--', '3'); 
            }   
        else return el  
    })

    let result46 = result45.map(el => {
        if (el == '....-') {
            return el.replace('....-', '4'); 
            }   
        else return el  
    })

    let result47 = result46.map(el => {
        if (el == '.....') {
            return el.replace('.....', '5'); 
            }   
        else return el  
    })

    let result48 = result47.map(el => {
        if (el == '-....') {
            return el.replace('-....', '6'); 
            }   
        else return el  
    })

    let result49 = result48.map(el => {
        if (el == '--...') {
            return el.replace('--...', '7'); 
            }   
        else return el  
    })

    let result50 = result49.map(el => {
        if (el == '---..') {
            return el.replace('---..', '8'); 
            }   
        else return el  
    })

    let result51 = result50.map(el => {
        if (el == '----.') {
            return el.replace('----.', '9'); 
            }   
        else return el  
    })

    let result52 = result51.map(el => {
        if (el == '-----') {
            return el.replace('-----', '0'); 
            }   
        else return el  
    })

    return result52.join('')
}


module.exports = {
    decode
}