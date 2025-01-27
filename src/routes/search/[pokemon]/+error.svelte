
<script>
    import { base } from '$app/paths';
    import { page } from "$app/stores";
  </script>
  
  <section>
  
    <h1>{"You searched for: " + $page.params.pokemon}</h1>
    <hr />
    <h2>{$page.status}: {$page.error.message}</h2>
  </section>

  <main>
    <a href="{base}/search">Back to search</a> 
  </main>

  <style>
    section{
      color: black;
      font-size: large;
    }
    a{
      color: black;
      height: 20px;
      width: 100px;
      background-color: yellowgreen;
      border-radius: 10px;
      font-size: larger;
      font-weight: bold;

    }
  </style>
    