<script>
    let search = ""
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";

</script>

<form on:submit|preventDefault={()=> goto(base+'/search/'+search)}>
    <input type="text" placeholder="Sök upp en pokemon" bind:value={search} />
  </form>

  <style>
    input{
        color: black;
    }
  </style>
                   