if (-1 || 0) alert("first"); // выполнится, так как возвращается -1 и это значение является true
if (-1 && 0) alert("second"); // НЕ выполнится, так как вернется 0, а это false
if (null || (-1 && 1)) alert("third"); // выполнится, так как вернется 1, а это true