

/*
function isVowel1(ch){

}
*/

 function isVowel1(ch) {
 	ch = ch.toLowerCase(); 
	if(ch =='a'|| ch == 'e'|| ch == 'i'|| ch == 'o' || ch == 'u'|| ch == 'y')
		return true;
	else
		return false;
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


var maxNum = function (arr) {
	var maxSoFar = arr[0];
	for (var i = 0;i<arr.length; ++i) 
		if (arr[i]>maxSoFar) 
			maxSoFar = arr[i]
	}
}