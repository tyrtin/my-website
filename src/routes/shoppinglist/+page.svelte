<script>
    import { fade } from 'svelte/transition'
    let varor = []
    let vara = ""
    function itemsubmit(){
        if (vara == ""){
            return
        }
        let new_vara = {namn: vara, bought: false};
        varor.push(new_vara)
        varor=varor



    }
    function itembought(vara){
        vara.bought = true
        varor =varor
    }
    
    function item_not_bought(vara){
        vara.bought = false
        varor =varor
    }

    function item_ta_bort(index){
        varor.splice(index,1)
        varor=varor
    }


</script>

<main class="container">
    <h1 class ="h1">Shoppinglista</h1>
    <div class="categories_container">
        <section>
            <h2>Varor att köpa</h2>
            <ul>
                {#each varor as vara}
                {#if vara.bought == false}
                    <li transition:fade class ="varaitem">
                    <form on:submit|preventDefault={itembought(vara)}>
                        {vara.namn} <input type = "submit" value= "Köpt" class="knapp">
                    </form>
                    </li>
                {/if}
                {/each}
            </ul>
        </section>
        <section>
            <h2>Köpta varor</h2>
            <ul>
                {#each varor as vara,i}
                {#if vara.bought == true}
                    <li>
                        <form on:submit|preventDefault={item_not_bought(vara)}>
                            {vara.namn} <input type = "submit" value= "Köpas" class="knapp"> 
                            <button type="button" on:click={()=>item_ta_bort(i)} class="click">Ta bort</button>
                        </form>
                        
                        
                    </li>
                {/if}
                {/each}
            </ul>
        </section>
    </div>
    <form on:submit|preventDefault={itemsubmit}>
        <label for="vara">Vara:</label>
        <input type="text" id="vara" bind:value={vara}>
        <input type="submit" value="Lägg till" class="button">
    </form>
   

</main>


<style>
.varaitem{
    border-bottom: 1px white;
}
    
.click{
    background-color: rgb(200, 221, 239);
    font-size: 10px;
    border-radius: 10px;
    border-bottom: outset 2px rgb(255, 255, 255);
    border-right: outset 2px rgb(255, 255, 255);
}

.knapp{
    background-color: rgb(211, 230, 246);
    font-size: 10px;
    border-radius: 10px;
    border-bottom: outset 2px rgb(199, 216, 217);
    border-right: outset 2px rgb(184, 202, 208);
}

.button{
    justify-self: start;
    border-bottom: outset 4px rgb(153, 227, 232);
    border-right: outset 4px rgb(75, 203, 246);
    border-radius: 6px;
    background-color: rgb(92, 182, 227);
}
    
.container{
    background-color: lightskyblue;
    width: 60vw;
    height: 70vh;
    border-radius: 20px;
    display: grid;
    color:black;
    grid-template-rows: 1fr 9fr 1fr;
        
}

.categories_container{
    background-color: powderblue; 
    height: 100%;
    border-radius: 20px; 
    grid-gap:10px;
    grid-template-columns: 1fr 1fr;
    display: grid;
}

.container h1{
    background-color: lightslategray;
    border-radius: 20px;
    margin: 5px;
    justify-self: center;
}

h2{
    background-color: slategray;
    border-radius: 20px;
    font-size: 20px;
    margin: 10px;
    text-align: center;
}

section{
    height:100%;
    
}



.categories_container section:nth-child(even){  /* vilket barn vill vi styla? */
    background-color: rgba(0, 0, 0, 0.1) /* svart bakgrund med 10% opacitet */
  }
 
  .categories_container section:nth-child(odd){  /* vilket barn vill vi styla? */
    background-color: rgba(0, 0, 0, 0.3) /* svart bakgrund med 30% opacitet */
  }

        
</style>