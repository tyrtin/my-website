
<script>

	
	let dir  = 'R' 

	let top = 20;
	let up = 20;
	function onKeyDown(e) {
		 switch(e.keyCode) {
			 case 38:
				 top -= 20;
				 break;
			 case 40: 
				 top += 20;
				 break;
			 case 87:
				 up -= 20;
				 break;
			 case 83:
				 up += 20;
				 break;
			 
		 }
		let interval = setInterval(I, 500)

		function I() {
		let ball = document.getElementById("ball")
		let ball_left = window.getComputedStyle(ball).left
		

		if (ball_left=='700px'){

			console.log('here')
			dir='R'
		}
		if (ball_left =='0px'){
			dir ='L'
		}
}


		
		

	}

    
	
</script>
<style>
    /* .circle {
  width: 150px;
  height: 150px;
  background-color: lightblue;
  border-radius: 50%;
  position: absolute;
  animation: bounce 1.5s ease-out 1s 10;
  justify-self: center;
}
@keyframes bounce {
  0% { 
    background-color: lightblue;
    top: 0px;
  }
  50% { 
    top: 250px;
  }
  100% { 
    background-color: lightgreen;
    top: 0px;
  } */

@keyframes fall {
    0% {
        left: 0px;
    } 
    100% {
        left: 700px;
    }
}


@keyframes fall_left {
    0% {
        left: 700px;
    }
    
    100% {
        left: 0px;
    }
}


.L{

    animation: fall_left 2s ease-in-out 2s infinite;

} 

.R {
	animation: fall 2s ease-in-out 2s infinite;

}

#ball{
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
} 

	main {
		width: 800px;
		height: 500px;
		border: solid rgb(255, 255, 255) 1px;
		margin: 10px auto;
		position: relative
	}
	.left {
		width: 50px;
		height: 100px;
		background-color: red;
		position: absolute;
		right: 0px;
	}

    .right{
		width: 50px;
		height: 100px;
		background-color: blue;
		position: absolute;
	}
</style>


<main>
	<div class = "left" id= "röd" style="{top}px" >
	</div>
    <div class = "right" id="blå" style="top: {up}px">
	</div>
	<div class = "circle" >

	</div>
	<div id="ball" class={dir}  >
	
	</div>
</main>

<svelte:window on:keydown|preventDefault={onKeyDown} />


