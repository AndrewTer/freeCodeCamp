function palindrome(str) 
{
  // преобразование всех букв в строке к нижнему регистру
  let lower_case_string = str.toLowerCase();

  // удаление всех символов кроме букв нижнего регистра и цифр
  lower_case_string = lower_case_string.replace(/[^a-z0-9]/g, '');
  
  // переворачивание строки 
  let reverse_lower_case_string = lower_case_string.split('').reverse().join('');

  // сравнение исходной строки без пробелов и спец.символов с перевёрнутой исходной строкой без пробелов и спец.символов
  return lower_case_string.includes(reverse_lower_case_string) ? true : false;
}

palindrome("A man, a plan, a canal. Panama.");
