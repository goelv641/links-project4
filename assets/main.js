document.querySelector(".popup").style.display = "none";
window.arenaCallback = () => {
	// Put your JavaScript in here!
	// This will run after Are.na’s API returns your data.
	let clickablelink=document.querySelectorAll("li")

	console.log(clickablelink)
	clickablelink.forEach(element => {
		element.addEventListener("click",function(){
			let fig=element.querySelector("figure")
			console.log(fig.className)
			let title=element.querySelector(".title")
			let description=element.querySelector(".description")
			let linkurl=element.querySelector(".link")
			let image=element.querySelector(".image-display")
			if(fig.className=="video-embed-block"){
				document.querySelector("#popup-video").src = linkurl.href;
			}
			console.log(element)
			openPopUp(title.innerHTML,description.innerHTML,linkurl.href,image.srcset)
			
		})
	});
}

function openPopUp(popuptitle,popupdescription,url,srcset) {
	document.querySelector(".popup").style.display = "block";
	document.querySelector("#popup-title").innerHTML = popuptitle;
	document.querySelector("#popup-description").innerHTML = popupdescription;
	document.querySelector("#popup-title").href = url;
	document.querySelector("#popup-image").srcset = srcset;
   }

   document.querySelector("#close").addEventListener("click",function(){
	document.querySelector(".popup").style.display = "none";
   })

   
