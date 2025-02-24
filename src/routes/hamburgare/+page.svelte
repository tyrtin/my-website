<script>
    let bild1 = "https://www.picadeli.se/sites/default/files/styles/scale_1440/public/product_img/11211-1692869859.png?itok=BI8F_3s1"
    let bild2 = "https://cdn.abicart.com/shop/images/186272765-origpic-dab704/ws24/74924/art24/h2765/maja1.png"
    let bild3 = "https://rootsby3n.se/wp-content/uploads/1450_Rodlok-skivad-5-mm_a.webp"
    let bild4 = "https://kavli.se/wp-content/uploads/2023/10/Kavli-Amerikansk-Dressing-Jalapeno-230-g-07311442162700-19561099.png"
    let bild5 = "https://dabas.blob.core.windows.net/media/saljpartner-hall-co/7102skivor3508x2480300dpi_01.png"
    let image = [{image:bild1, info:"Rostad lök 5kr", bought:false}, {image:bild2, info:"Tomat 10kr", bought:false}, {image:bild3, info:"Röd lök 10kr", bought:false}, {image:bild4, info:"Jalapeño dressing 15kr", bought:false},{image:bild5, info:"Ost 10kr", bought:false}]
    let bilder = []
    for (let i = 0; i < image.length; i++){
        bilder.push({bought: false, image: image[i].image, info: image[i].info})}

        function burgarebought(index){
        bilder = bilder.map((bild, i) =>
            i === index ? { ...bild, bought: true } : bild);
        }
        
        function remove(index){
            bilder.slice(index,1)
            bilder = bilder.map((bild, i) =>
            i === index ? { ...bild, bought: false } : bild);
        }
</script>


<main class="bread">
    <div class="container">
    <div class = "bla">
        <section class = "hamburgare">
            <ol>
            {#each image as bild, index}
            {#if !bild.bought}
                <li>
                    <img src={bild.image} alt="">
                    {bild.info} 
                    <button type="button" on:click={()=>burgarebought(index)} class="click">Add</button>
                </li>  
                {/if}   
                {/each}
                 
            </ol>
        </section>
        <section>
            <ol>
                {#each bilder as bild, index}
                    {#if bild.bought == true}
                    <li>
                        <img src={bild.image} alt="">
                        {bild.info}
                        <button type="button" on:click={()=>remove(index)} class="remove">Remove</button>
                    </li>
                    {/if}
                {/each}
            </ol>
        </section>
    </div>
</div>
</main>

<style>

    .remove{
        background-color: red;
        height: 50px;
        width: 150px;
        border-radius: 30px;
        align-self: center;
        margin-left: auto;
        margin-right: 20px;
    }

    .click{
        background-color: aliceblue;
        height: 50px;
        width: 80px;
        border-radius: 30px;
        align-self: center;
        margin-left: auto;
        margin-right: 20px;
        
    }

    img{
        height: 100%;
    }

    ol{
        justify-self: center;
        margin-top: 60px;
        height: 80%;
        width: 500px;
        border-radius: 30px;
        overflow-y:scroll;   
    }

    li{
        display: flex;
        font-size: xx-large;
        justify-self: center;
        margin-top: 10px;
        height: 100px;
        width: 400px;
        border-radius: 30px;
        line-height: normal;
    }

    .container{
        background-color: orange;
        width: 550px;
        height: 0vh;
        border-radius: 20px;
        display: grid;
        color:black;
        grid-template-rows: 1fr;  
}

    .bla{
        background-color: white; 
        height: 100%;
        border-radius: 20px; 
        grid-gap:10px;
        grid-template-columns: 1fr 1fr;
        display: grid;
        
}

    section{
        height: 100%;
        border-radius: 50px;
    }

    .hamburgare{
        display: grid;
        grid-template-rows:repeat(1, 1fr);
        
    }

    .hamburgare li{
    background-color: maroon;
    
  }
    .bla section:nth-child(even){  
    background-color: rgba(0, 0, 0, 0.1) 
  }
 
    .bla section:nth-child(odd){  
    background-color: rgba(251, 185, 138, 0.3) 
  }



    
</style>