<script>
    let search = ""
    import { goto } from "$app/navigation";

</script>

<form on:submit|preventDefault={()=> goto('/search/'+search)}>
    <input type="text" placeholder="Sök upp en pokemon" bind:value={search} />
  </form>

  <style>
    input{
        color: black;
    }
  </style>
                   