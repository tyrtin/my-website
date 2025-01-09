<h1 class = "h1">Memory</h1>
<script>
    let flipcount = 0
    let blueTurn = true

    let bluepoints = 0
    let redpoints = 0
    let bild = "https://wallpapers.com/images/featured/cute-anime-uptxxcxl4h2zoe9r.jpg"
    let bild2 = "https://i.pinimg.com/236x/bb/a6/b1/bba6b1778f5bd058ead2ed3ee259ebff.jpg"
    let bild3 = "https://img.freepik.com/premium-photo/illustrate-tokyo-city-by-night-with-anime-mangastyle-drawings-featuring-city-views-vibrant-purple-neon-lights-generative-ai_379823-7278.jpg?semt=ais_hybrid"
    let bild4 = "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/336341352/original/c66ef0155e01aeffa952e467d8c776e648ba9c59/draw-beautiful-anime-background-art.png"
    let bild5 = "https://img.freepik.com/free-photo/cartoon-lifestyle-summertime-scene_23-2151068243.jpg"
    let bild6 = "https://i.pinimg.com/236x/e2/61/b4/e261b4f4382a2727185acda9e3c58f1f.jpg"
    let images = [bild, bild2, bild3, bild4, bild5, bild6]
    let cards = []
    for (let i = 0; i < 12; i++){
        cards.push({flipped:false,matched:false,image:images[i%6]})
    }
    function cardflipped(card){
    
        if (flipcount < 2 && !card.flipped){
            flipcount++

            card.flipped =true
            if (flipcount==2){
                let flippedCards = cards.filter(card => card.flipped==true && card.matched==false)
                console.log(flippedCards)
                if(flippedCards[0].image == flippedCards[1].image){
                    flippedCards[0].matched = true
                    flippedCards[1].matched =true
                    if(blueTurn){
                        bluepoints++
                    }
                    else{
                        redpoints++
                    }}
                    
                    setTimeout(() => {
                        cards.forEach((card) => {
                            card.flipped = card.matched;
                });
                        flipcount = 0;
                        cards = cards;
                        blueTurn =!blueTurn
                }, 1000);
            
                }   
               
            }
        




            
        
        cards = cards
    }
    
</script>

<main class="container">
    <div class="boxes">
        {#each cards as card}
            <div class="card" on:click={()=>cardflipped(card)} class:flipped= { card.flipped }>
                <img src ={card.image} alt = "" class="front">
                <img src = "https://img.freepik.com/premium-vector/geometric-square-shapes-background-vector-square-shapes-pattern-wall-wallpaper-vector-with-lines_22857-1522.jpg?w=360" alt = "" class="back">
            </div>
        {/each}
    </div>
</main>

<aside class="blue">
    <p>
        {bluepoints}
    </p>
</aside>
<aside>
    <p>
        {redpoints}
    </p>
</aside>
<aside class="turn" class:blue= { blueTurn } >
    
</aside>



<style>

.flipped{
    transform: rotateY(180deg);

}


    .front{
        transform: rotateY(180deg);
    }


    .turn{
        box-shadow: 0 0 10px 10px yellowgreen;
        z-index: -1;
    }

    .blue{
        background-color: blue;
        left:10px;
    }
    
  aside{
    width: 100px;
    height: 100px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p{
    font-size: 30px;
  }
                          

    .card{
        border: 1px black solid;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.5s;

    }

    .card img{
        border: 1px black solid;
        height: 100%;
        width: 100%;
        position: absolute;
        backface-visibility: hidden;
    }

    .container{
        width: 20vw;
        height: 20vh;
        display: grid;
        transform: hover scale(0.5px);
    }

    .boxes{
        grid-gap: 10px;
        border-radius: 20px;
        display: grid;
        grid-template-columns:repeat(4, 150px);
        grid-template-rows: repeat(3, 150px);
    }


    .h1{
        justify-self: center;
    }

    

          
</style>