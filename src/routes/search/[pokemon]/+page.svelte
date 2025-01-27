
<script>
	import { onMount } from 'svelte';

    /** @type {import('./$types').PageData} */
    export let data;
  
    onMount(()=>{
    let pokemon = sessionStorage.getItem("mypokemon");
      if (pokemon.length>2){
        chat = JSON.parse(pokemon)
}
})

    sessionStorage.setItem("mypokemon", JSON.stringify(data));
  </script>
  
  {#await data}
    <p>.. waiting</p>
  {:then pokemon} 
  <article>
    {#each Object.entries(pokemon.response.sprites) as sprites}
      {#if typeof sprites[1] == "string"}
      <img src={sprites[1]} />
      {/if}
    {/each}
    
  </article>
  <h1>{pokemon.response.name}</h1>

  <section>
    <p class="rubrik">Abilities:</p>
    {#each pokemon.response.abilities as a}
        <p>{a.ability.name}</p>
      {/each}
  
      <!-- <p class="rubrik">Stats</p>
    {#each pokemon.response.stats as t}
        <p>{t.stat.name}</p>
      {/each} -->
  
      <p class="rubrik">Items:</p>
    {#each pokemon.response.held_items as i}
        <p>{i.item.name}</p>
      {/each}
  
      <p class="rubrik">Moves:</p>
  <aside>
    {#each pokemon.response.moves as m}
        <p>{m.move.name}</p>
      {/each}
  </aside>
  </section>
  
  {/await}  

  

  <style>
    article{
        display: flex;
        width: 90%;
        height: 30%;
        gap: 1em;
        
    }

    .rubrik{
      font-weight: bold;
    }

    aside{
      overflow-y: scroll;
      height: 300px;
    }

    h1{
      color: black;
      font-size: x-large;
      margin-left: 15px;
    }

    p{
      color: black;
      font-size: large;
      margin-left: 20px;
      margin-bottom: 5px;
    }
  </style>
  
  
    