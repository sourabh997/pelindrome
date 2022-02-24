function palindrome(textVariable) {
    var str = "";
    var len = textVariable.length;
    var l = len - 1;
    var n = 0;
  
    for (i = l; i >= n; i--) {
  
      str += textVariable[i];
    }
  
    if (str == textVariable) {
      var res = console.log("It is Palindrome");
    }
    else {
      var res = console.log("It is not a Palindrome");
    }
    return res;
  }
  
  var textVariable = "adada";
  palindrome(textVariable);
  
  var res;
  console.log(res);