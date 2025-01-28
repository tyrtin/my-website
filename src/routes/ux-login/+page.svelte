<script>
    let stringletters = "sfgrfdbf"
    let letters = []
    let username = ""

    for (let letter of stringletters){
        let top = Math.random()*80
        let left = Math.random()*80
        letters.push({letter:letter,top:top,left:left})
    }

    function addletter(index){
        let letter = letter[index]
        username += letter.letter
        letter.top = Math.random()*90
        letter.left = Math.random()*90

        letters = letters

    }

    setInterval(()=>{
        let letters = []

    for (let letter of stringletters){
        let top = Math.random()*80
        let left = Math.random()*80
        letters.push({letter:letter,top:top,left:left})
    }
    }, 2000);

</script>

<section>

{#each letters as {letter,top,left},i}
    <button on:click={()=>addletter(i)} style="top:{top}vh;left{left}vw;">{letter}</button> 
{/each}
</section>

<p>Username: {username}</p>


<style>

    section{
        position: relative;
        background-color: pink;
        width: 80vw;
        height: 80vh;
        margin: auto;
    }

    button{
        position: absolute;
        background-color: aqua;
        padding: 10px;
    }

    
</style>