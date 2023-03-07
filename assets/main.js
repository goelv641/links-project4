document.querySelector(".popup").style.display = "none";
window.arenaCallback = () => {
	// Put your JavaScript in here!
	// This will run after Are.na’s API returns your data.
	let clickablelink=document.querySelectorAll("li")

	console.log(clickablelink)
	clickablelink.forEach(element => {
		element.addEventListener("click",function(){
			let title=element.querySelector(".title")
			let description=element.querySelector(".description")
			let linkurl=element.querySelector(".link")
			console.log(element)
			openPopUp(title.innerHTML,description.innerHTML,linkurl.href)
			
		})
	});
}

function openPopUp(popuptitle,popupdescription,url) {
	document.querySelector(".popup").style.display = "block";
	document.querySelector("#popup-title").innerHTML = popuptitle;
	document.querySelector("#popup-description").innerHTML = popupdescription;
	document.querySelector("#popup-title").href = url;
   }


