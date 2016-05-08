$(document).ready(function() {

$("#tanyuan-logo-yuan").css({
	display: "block"
});

$("#tanyuan-logo img").mouseenter(function(){
	rotateBall(1);
}).mouseleave(function(){
	rotateBall(-1);
});

function rotateBall(direction) {
	var distance = ((direction+1)/2) *Math.PI * 128;
	var degree = direction * 360;
	$("#tanyuan-logo-yuan").css({
		transition: "2s cubic-bezier(1.000, 1.450, 0.185, 0.850)",
		transform: 'translateX('+ distance +'px)'
	}).find('img').css({
		transition: "2s cubic-bezier(1.000, 1.450, 0.185, 0.850)",
		transform: 'rotate(' + degree + 'deg)'	
	});
}

});