let romanNumeralCodes = [["","I","II","III","IV","V","VI","VII","VIII","IX"],         // единицы
                        ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],    // десятки
                        ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],          // сотни
                        ["","M","MM","MMM"]];                                         // тысячи

function convertToRoman(num) {
    let result = "";
    let ranks = num.toString().split('').reverse();                   // num в строку, разбивая на массив строк и переворачивая порядок элементов массива
    for (var i=0; i < ranks.length; i++)
    {
        result = romanNumeralCodes[i][parseInt(ranks[i])] + result;
    }
    return result; 
}

convertToRoman(2);          // "II"
convertToRoman(16);         // "XVI"
convertToRoman(45);         // "XLV"
convertToRoman(99);         // "XCIX"
convertToRoman(501);        // "DI"
convertToRoman(891);        // "DCCCXCI"
convertToRoman(1004);       // "MIV"
convertToRoman(2019);       // "MMXIX"
convertToRoman(3999);       // "MMMCMXCIX"
