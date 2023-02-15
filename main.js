var button=document.querySelector(".download-btn")
var load=document.querySelector(".poornishanmugaraj")
    button.addEventListener("click",start)
	  function start(){
		    let timer=button.dataset.time
			button.classList.add("timer")
			button.innerHTML=`your countdown start<b>${timer}</b>`
			const counting=setInterval(function(){
				if(timer>0){
					timer--
					button.innerHTML=`your countdown start<b>${timer}</b>`
					return
				}
				clearInterval(counting)
				load.classList.add("shanmugaraj")
				button.innerHTML=`<h1 class="poornishanmugaraj">your File is Loading<span style="font-size:43px;">...</span></h1>`
				setTimeout(function(){
					load.classList.add("manikharniga")
					button.classList.replace("timer","download-btn")
					button.innerHTML=`<button class="download-btn" data-time="3">
					                  <span class="text">Download Files</span> </button>`
				},5000)									  
			},1000)
	  }