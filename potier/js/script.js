// Ce script permet au logo de changer quand la souris le survole 
		var image = document.getElementById("image");

		image.addEventListener('mouseover', function(){
			image.src = "../images/logoafter.png";
		})
		image.addEventListener('mouseout', function(){
			image.src = "../images/logo.png";
		})