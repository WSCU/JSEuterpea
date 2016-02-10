$(document).ready(function() {
	var ret;
	var string = "Tokens: \n";
	$("#output").val("");	// wipe the output every page load
      $("#run").click(function() {
      	if($("#input").val()) {
      		ret = tokenize($("#input").val().trim());
      		for(var i=0; i<ret.length;i++) {
      			string += ret[i] + "\n";
      		} // close i loop
      		$("#output").val(string);
      	} else {
      		alert("Enter something you tool");
      	}
      });
});

