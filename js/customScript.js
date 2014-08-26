
$(function(){
	var obj = lab_test;
	obj.hideMe("error");
	lab_test.addRow(10);
		$("#longWord").on("change",function(){
			var lRes = lab_test.longestWord($(this).val());
			$(".long-msg").html(lRes +": Length is "+ lRes.length);
			
		});


	$("#maxThree .form-control").keypress(function (e) {
		if (String.fromCharCode(e.keyCode).match(/[^0-9]/g)){ 
			$(".error").fadeIn();
			 return false;
		}
		else {
			obj.hideMe("error");
		}
	});

	$(".radioCalc").on("change",function(){
		var CurOption = $(this).val();
		var  arr = $("#mathfun").val();
		var cc = arr.split(',');
		var rsMsg = $(".math-msg");
		rsMsg.html("");
		
		if(CurOption!=""){
		var b = CurOption == "sum" ? obj.mathCalc(cc,"+") : obj.mathCalc(cc,"*");
			$(".math-msg").html(b);
		}
		if(arr==""){
			rsMsg.html("Please Enter values");
		}
	});
	$("#calc").on("click",function(e){
		e.preventDefault();
		obj.hideMe("error");
		val1 = $("#val1").val();
		val2 = $("#val2").val();
		val3 = $("#val3").val();
		var res = lab_test.maxOfThree(val3,val2,val1) ;
		res = res !=0 ? "Highest value is : " + res : "Please Enter Valid Numbers"
		$('#total').html(res);
	});

	$("#vowels").on("click",function(e){
		e.preventDefault();
		var str = $("#vow").val();
		if(str!="" && str.length==1){
		lab_test.checkVowels(str);
		}
		else{
			$('.msg').html("Allowed only one character");
		}
		
	});
	
	/*** Reverse String ***/
	 $("#rString").change(function(){
 		var msg = lab_test.stringReverse($(this).val());
		$(".string-msg").html(msg);
    });
	
	// Sort Array
	var letters =["Test-","Best-","Worst","Nest-"];
	var rs = lab_test.albSort(letters);
	$(".sort-msg").html(rs);
		
	/*$(document).on("click",function(){
		obj.hideMe("error");
	});*/
	
});	

var lab_test = {
init : function(){
},

	
/* maxOfThree */	
maxOfThree:function(num1, num2, num3){
    var max = Math.max(num1, num2, num3);
    return max;
},

/* checkVowels */
checkVowels : function(str){
    var matches = str.match(/[aeiou]/gi);
    var count = matches ? matches.length : 0;
	if(count!=0){
		$('.msg').html("Yub! It's Vowel");
	return true;
	}else{
		$('.msg').html("Oops! It's Not a Vowel ");
    return false;
	}
},


/* Math Caluclation */
mathCalc : function(arr,meth){
	var total=0;
	var total = arr.reduce(function(a, b) {
		switch(meth){
			case  "*":
				return parseInt(a,10) * parseInt(b,10);
				break;
			 case  "+":
				return parseInt(a,10) + parseInt(b,10);
				break;
		}
	});
	return total;
},
  stringReverse :function(str){
	//  String.prototype.reverse = function() {
    var str = str,
        newString = new String();
    for (n = str.length; n >= 0; n--) {
        newString += str.charAt(n);
    }
    return newString;
//}
   
  },
albSort: function(arg){
	arg.sort(function(a, b){
		var x = a.toLowerCase(), y = b.toLowerCase();
		return x < y ? -1 : x > y ? 1 : 0;
	})
	return arg;
},
longestWord:function (string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
},
spreadSheet :function(tblFiled){
	var Addcolum ="<td><input type='text' class='form-control'/> </td>";
	columnLength =	$("#spreadsheet thead th").length+1;
	var AddHeadcolum ="<th>A"+ columnLength+ "</th>";
	if(tblFiled == "row" ){
	lab_test.addRow(1);
	}
	else if(tblFiled=="column"){
		$("#spreadsheet tbody tr").append(Addcolum);
		$("#spreadsheet thead tr").append(AddHeadcolum);
	}
},
addRow:function(no){
		var dynColumn = "" ;
		
		var aa = $("#spreadsheet tbody tr td").length-1 >0 ? $("#spreadsheet tbody tr:nth-child(1) td").length-1:4;
		for(j=1;j<=aa;j++){
			dynColumn +=  "<td><input type='text' class='form-control'> </td>";
		}
		//var num = document.getElementById('myTableId').tBodies[0].rows.length;
		for (i=0; i<no; i++){
			
			var rowStart = "<tr><td>"+($("#spreadsheet tbody tr").length+1)+"</td>"
			var com= rowStart+dynColumn+"</tr>";
			$("#spreadsheet tbody").append(com);
			
		}
		//var rows = document.getElementById('spreadsheet').getElementsByTagName('tbody')[0].getElementsByTagName('tr').length;
		console.log(rows);
},
/** Hide Error ***/
 hideMe: function(a){
	 
	 document.getElementById('a').style.display = 'none';
	//$("."+a).hide();
 }

}