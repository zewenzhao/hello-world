//helper functions
function isVowel1(ch) {
    ch = ch.toLowerCase(); 
    return (ch =='a'|| ch == 'e'|| ch == 'i'|| ch == 'o' || ch == 'u'|| ch == 'y')
        
};

var isVowel2 = function (ch) {
    const VOWELS = /[aeiouy]/i;
    return VOWELS.test(ch);
};

var strReverse1 = function (A) {
    var result = ""
    for (var i = 0;i<A.length; ++i) 
    result = A[i] + result;
    return result 
};

var strReverse2 = function (B) {
    return B.split("").reverse().join("");
    
}

var getMaxWord = function (C) {
    var arr = C.split(" ");
    var max = "";
    var len = 0;
    for (var i = 0; i<arr.length; ++i) {
    
    if (arr[i].length>len) {
     len = arr[i].length;
        max = arr[i];
    }
    }
    return max;
}
    
function filterWords(st, n) {
    var arr = st.split(" ");
    var listwords = [];
    
    for (var i = 0; i<arr.length; i++) {
    
    if (arr[i].length>n) {
        listwords.push(arr[i]);
    }
    }
    return listwords.join(" ");
    
}

//1. define the onclick handler 
var main = function() {
    var str, len;   //user inputs
   
    //dispatch on button id
    if (this.id == "btn1"){
        //get user input
        str = $('#inBox1').val();
        console.log(str);
        $("#outDiv").text(isVowel1(str));
        $.mobile.changePage("#dialog1", "pop", true, true);
    }
    else if (this.id == "btn2"){
        str = $('#inBox1').val();
        $("#outDiv").text(isVowel2(str));
        $.mobile.changePage("#dialog2", "pop", true, true);
    }
    else if (this.id == "btn3"){
        str = $('#inBox1').val();
        $("#outDiv").text(strReverse1(str));
    }
    else if (this.id == "btn4"){
        str = $('#inBox1').val();
        $("#outDiv").text(strReverse2(str));
    }
    else if (this.id == "btn5"){
        str = $('#inBox1').val();
        $("#outDiv").text(getMaxWord(str));
    }
    else if (this.id == "btn6"){
        str = $('#inBox1').val();
        n =$('#inBox2').val();
        $("#outDiv").text(filterWords(str, n));
    }
    
    
};

//2. register the onclick handlers after the DOM is complete
$(document).ready(function() {
    //register the handler for all of the buttons
    $("button").on("click", main);
});