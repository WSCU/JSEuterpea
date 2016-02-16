$(document).ready(function() {
	var input = $("#input").val();
	$("#run").on("click",function() {
		$("#output").val(input);
	});
});

