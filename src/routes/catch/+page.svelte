<script>
    let fallingLetters = "QWERTYUIOPASDFGHJKLZXCVBNM@1234567890"
    let letters = []
    import { base } from '$app/paths';


    function pop (){
        
    }
</script>


<main>
    <div class="container">
        <input type="text" placeholder="email@">
        <a class = "button" href="{base}/robot">Verify</a>
    </div> 
</main>



<style>
    .button{
        background-color: white;
    }
    .container{
        display: flex;
        width: 250px;
        height: 300px;
        border: solid 5px white;
        justify-content: center;
        align-self: center;
        flex-direction: column;
        color: black;
    }
    main{
        display: flex;
        height: 100vh;
        width: 1000vw;
        background-color: black;
    }
</style>


