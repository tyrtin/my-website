<script>
    import { enhance } from "$app/forms";
    import ElizaBot from 'elizabot';
    const eliza = new ElizaBot();
    let chat = [{ user: 'Eliza', message: eliza.getInitial() }];
   
 async function write(msg) {
    let new_message = {user: 'me', message: msg};
        chat.push(new_message)
        chat=chat

    var element = document.getElementById("visible");
    element.style.display = "flex"; // Visa elementet
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
    element.style.display = "none"

    let new_message_Eliza = {user: 'Eliza', message: eliza.transform(msg)};
        chat.push(new_message_Eliza)
        chat=chat

        localStorage.setItem("myChat", chat);
  }
                
</script>

<main>
    <section>
        
        {#each chat as c}
            <article class={c.user}>
            <p>{c.message}</p>
            </article>  
        {/each}
        <articel id="visible" >
            <span class="circle">

            </span>
            <span class="circle">

            </span>
            <span class="circle">

            </span>
        </articel>
    </section>          
<form  method="post"
    use:enhance={({ formElement, formData, action, cancel }) => {
    cancel(); 
    const text = formData.get("text"); 
    write(text);
  }}>
            
        <input type="text" name="text" required placeholder="Skriv din fråga">
        <input type="submit" value = "Skicka">
</form>
        
  
</main>

<style>     
    @keyframes typing {
        0% { transform: scale(1); }
        50% { transform: scale(1.4);}
        100% {transform: scale(1);}
    }
 

    .Eliza{
        background-color: rgb(174, 174, 174);
        border-radius: 5px;
        margin-right: 100px;
    }

    .me{
        text-align: end;
        background-color: rgb(223, 223, 223);
        margin-left: 100px;
        border-radius: 5px;
        
    }

    #visible{
        width: 100px;
        height: 60px;
        display: none;
        justify-content: center; 
        align-items: center;
        
        
    }   
    
    .circle{
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background-color: steelblue;
        animation-name: typing;
        animation-duration: 1000ms; 
        animation-timing-function: ease-in-out; 
        animation-iteration-count: infinite;

    }
    
     .circle:nth-child(1) {
        animation-delay: 0ms; 
    }
    .circle:nth-child(2) {
        animation-delay: 333ms;
    }
    .circle:nth-child(3) {
        animation-delay: 666ms; /* Starta animationen efter 666 ms */
    }
            
    main{
        width: 60vw;
        height: 70vh;
        justify-self: center;
        padding: 10px;
        background-color: cornflowerblue;
        color:black;
    }
    
    section{
        height:90%;
        overflow-y:scroll;
        width: 90%;
        margin: 10px;
        padding: 10px;
        background-color: aliceblue;
    }
</style>