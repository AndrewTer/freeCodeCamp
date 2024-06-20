function rot13(str) 
{
  let result = "";

  for (let i = 0; i < str.length; i++)
  {
    let charCode = str[i].charCodeAt();
    
    if (charCode <= 90 && charCode > 64)
    {
      let newCharCode = charCode + 13;
      if (newCharCode > 90)
      {
        newCharCode = newCharCode - 90 + 64;
      }
      result += String.fromCharCode(newCharCode);
    } 
    else
    {
      result += str[i];
    }
  }
  
  return result;
}

console.log(rot13("SERR PBQR PNZC"));
