module.exports = function toReadable (number) {
let wordNumber={
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14:	'fourteen',
    15:	'fifteen',
    16:	'sixteen',
    17:	'seventeen',
    18:	'eighteen',
    19:	'nineteen',
    20:	'twenty',
    30:	'thirty',	
    40:	'forty',
    50:	'fifty',	
    60:	'sixty',	
    70:	'seventy',
    80:	'eighty',	
    90:	'ninety',
    100: 'hundred'
}
function oneNum(number){
    return wordNumber[String(number)]
}
function tenNum(number){
    return wordNumber[String(number)[0]+'0']+' '+wordNumber[String(number)[1]]
}
switch (String(number).length) {
    case 1:
        return oneNum(number);
        break;
    case 2:
        if(String(number)[0]==1){
            return oneNum(number);
        }else{
            return tenNum(number).replace(' zero','');
        }
        break;
    case 3:
        if(String(number)[1]==1){
            return (oneNum(String(number)[0])+' '+wordNumber[100]+' '+oneNum(String(number).slice(1)));
        }else{
            if(String(number)[1]==0&&String(number)[2]==0){
                return (oneNum(String(number)[0])+' '+wordNumber[100])
            }else{
                if(String(number)[1]==0){
                    return (oneNum(String(number)[0])+' '+wordNumber[100]+' '+oneNum(String(number)[2]))
                }else{
                    return (oneNum(String(number)[0])+' '+wordNumber[100]+' '+tenNum(String(number%100))).replace(' zero','')
                }
            }
        }
        break;    
    default:
        break;
}

}
