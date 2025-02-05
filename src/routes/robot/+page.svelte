<script>
    import { base } from '$app/paths';
    let clickedImages = 0
    let bild = "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/336342244/original/f813f051ed34742f71783800f2fb296a80660fe2/do-anime-game-visual-novel-and-background-in-studio-style.png"
    let bild2 = "https://images.stockcake.com/public/5/3/c/53ceba74-3b0e-41cf-8251-291fea4dd500_large/lit-traffic-lights-stockcake.jpg"
    let bild3 = "https://img.freepik.com/premium-photo/illustrate-tokyo-city-by-night-with-anime-mangastyle-drawings-featuring-city-views-vibrant-purple-neon-lights-generative-ai_379823-7278.jpg?semt=ais_hybrid"
    let bild4 = "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/336341352/original/c66ef0155e01aeffa952e467d8c776e648ba9c59/draw-beautiful-anime-background-art.png"
    let bild5 = "https://img.freepik.com/free-photo/cartoon-lifestyle-summertime-scene_23-2151068243.jpg"
    let bild6 = "https://i.pinimg.com/236x/bb/a6/b1/bba6b1778f5bd058ead2ed3ee259ebff.jpg"
    let bild7 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ6AHp1OHjP4N_NXF2GZnYeXCRlxmun2-nsBHnxfpH_DUiIJF7FAT5RN1Tk5xG-LoyYs8&usqp=CAU"
    let bild8 = "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/336317700/original/a627d823764fbe7d0be99a0c19903ba119548e32/draw-anime-background-visual-novel-game-art-2d.png"
    let bild9 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL1y2xKnlkQkC_pnDJ_pnpW0oFA1wcMfCK_6zCeaHC1S4Fv79c5TECgvcs0eS5ypqrDcQ&usqp=CAU"
    let bild10 = "https://japantoday-asset.scdn3.secure.raxcdn.com/img/store/b7/db/6ec3544cd26f490753159849af1c75dcb198/anime/_w850.jpg"
    let bild11 = "https://i.pinimg.com/736x/55/75/b0/5575b08ef2af9b900db5dc0b4d804729.jpg"
    let images = [bild, bild2, bild3, bild4, bild5, bild6, bild7,bild8,bild9, bild10,bild11]

    let curpow = 2
    let nrimgs = 4
    let lastnrimgs = 2
    let pictures = []
    let popup= []
    for (let i = 0; i < nrimgs; i++){
        pictures.push({clicked:false, image:images[Math.floor(Math.random() * images.length)]})}
    
    let imageSize = 500

   


    function cardflipped(picture){
            picture.clicked = !picture.clicked


            if (pictures.filter(picture => picture.clicked==true && picture.image != bild7).length>0){
                lastnrimgs++
                
                nrimgs= lastnrimgs*lastnrimgs
                if(nrimgs>4000){
                    lastnrimgs = 2
                    nrimgs = 4
                }
               
                pictures = []
                for (let i = 0; i < nrimgs; i++){
                    pictures.push({clicked:false, image:images[Math.floor(Math.random() * images.length)]})}
                }
                else{
                    alert("You are not a robot")
                }

        pictures = pictures
    }

</script>

<main class="container">
    <label for="Verification">Are you a robot?</label><br>
    <label for = "">Good luck</label><br>
        <div class="boxes"  style=" grid-template-columns:repeat({lastnrimgs}, {imageSize/lastnrimgs}px);  grid-template-rows: repeat({lastnrimgs}, {imageSize/lastnrimgs}px);">
            {#each pictures as picture}
                <div class="card" class:clicked={picture.clicked} on:click={()=>cardflipped(picture)}>
                    <img src = {picture.image} alt = "" >
                </div>
            {/each}
        </div>
</main>

<style>

    .clicked{
        filter:brightness(100)
    }
    label{
        font-size: large;
        font-weight: bolder;
        justify-self: center;
    }
    .boxes{
        grid-gap: 1px;
        border-radius: 20px;
        display: grid;

        justify-content: center;
    }
</style>