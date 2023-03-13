document.querySelector(".popup").style.display = "none";
window.arenaCallback = () => {
	// Put your JavaScript in here!
	// This will run after Are.na’s API returns your data.
	let section= document.querySelector("section")
	let clickablelink=document.querySelectorAll("li")

	console.log(clickablelink)
	clickablelink.forEach(element => {
		element.addEventListener("click",function(){
			let fig=element.querySelector("figure")
			console.log(fig.className)
			if(fig){
				let title=element.querySelector(".title")
				let description=element.querySelector(".description")
				let linkurl=element.querySelector(".link")
				let image=element.querySelector(".image-display")
				let created=element.querySelector(".time-created")
				let updated=element.querySelector(".time-updated")
				// let title=element.querySelector(".filetype")
				if(fig.className=="video-embed-block"){
					document.querySelector("#popup-video").srcset = linkurl.href;
				}
				console.log(element)
				openPopUp(title.innerHTML,description.innerHTML,linkurl.href,image.srcset,created.innerHTML,updated.innerHTML)
			}
			
		})
	});

	document.querySelector("#filter-see").addEventListener("click",function(){
		clickablelink.forEach(element => {
			// console.log(element)
			let fig=element.querySelector("figure")
			if(fig){
				element.style.display="block"
			if(fig.className!="video-embed-block" && fig.className!="image-block") {
				element.style.display="none"
			// element.style.display="block"
			}}
			else{
				element.style.display="block"
			} 

		})
	
	})

	document.querySelector("#filter-read").addEventListener("click",function(){
		clickablelink.forEach(element => {
			// console.log(element)
			let fig=element.querySelector("figure")
			if(fig){
				element.style.display="block"
			if(fig.className!="link-block" && fig.className!="pdf-block") {
				element.style.display="none"
			}}
			else{
				element.style.display="block"
			} 
		})
	
	})

	document.querySelector("#filter-hear").addEventListener("click",function(){
		clickablelink.forEach(element => {
			// console.log(element)
			let fig=element.querySelector("figure")
			if(fig){
				element.style.display="block"
			if(fig.className!="audio-embed") {
				element.style.display="none"
			}}
			else{
				element.style.display="block"
			} 
		})
	
	})

	// document.querySelector("#filter-feel").addEventListener("click",function(){
	// 	clickablelink.forEach(element => {
	// 		console.log(element)
	// 		let fig=element.querySelector("figure")
	// 		if(fig){
	// 		if(fig.className!="video-embed-block") {
	// 			element.style.display="none"
	// 		}}
	// 	})
	
	// })

	document.querySelector("#filter-all").addEventListener("click",function(){
		clickablelink.forEach(element => {
			// console.log(element)
			let fig=element.querySelector("figure")
			if(fig){
				element.style.display="block"
			}
		})
	
	})

}

function openPopUp(popuptitle,popupdescription,url,srcset,popuptimeupdated,popuptimecreated) {
	document.querySelector(".popup").style.display = "block";
	document.querySelector("#popup-title").innerHTML = popuptitle;
	document.querySelector("#popup-description").innerHTML = popupdescription;
	if(url)document.querySelector("#popup-title").href = url;
	document.querySelector("#popup-image").srcset = srcset;
	document.querySelector("#popup-time-updated").innerHTML = popuptimeupdated;
	document.querySelector("#popup-time-created").innerHTML = popuptimecreated;
	// document.querySelector("#popup-filetype").innerHTML = popupfiletype;
   }

   document.querySelector("#close").addEventListener("click",function(){
	document.querySelector(".popup").style.display = "none";
   })