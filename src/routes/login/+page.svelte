<script>
    import {users_store} from "$lib/user";
let users = [];

import { onMount } from 'svelte';
onMount(() => {
    /*Check if has more then 2 characters*/
    if($users_store.length > 2){
        users = JSON.parse($users_store);
    }
});
    let color = "black"
    let namn 
    let password
    let colors = [{namn: "Blå", value: "blue"}, {namn: "Röd", value: "red"}, {namn: "Lila", value: "purple"}, {namn: "Rosa", value: "pink"}]
    function handleSubmit(){
        let new_user = {namn: namn, password: password};
        if (users.filter((user) => user.namn ==  namn && user.password==password).length >0){
                    alert("Välkommen")
        }
        else{
            users = [...users, new_user];
            $users_store = JSON.stringify(users); 
            alert("Skapa användare/ kontrollera lösenord/användarnamn")
        }
    }

</script>

<main>

    


<div class="container">
<h1>Inloggning</h1>
<br>
<form on:submit|preventDefault={handleSubmit}>
    <div style="width: 100px; height: 100px; border-radius: 50%; overflow:hidden; background-color:{color};">   
    </div>
    <br>
    <label for="name"><b>Användarnamn:</b></label>
    <input type="text" id="name" bind:value={namn}>
    <label for= "password"><b>Lösenord:</b></label>
    <input type="password" id="lösenord" bind:value={password}>
<br>
<br>
<input type="Submit" value= "Logga in" class="button">
</form>
<br>
<a href="/register">Har du inget konto? Registrera</a>

</main>

<style>
   
   .container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: solid 5px rgb(241, 192, 232);
    border-radius: 10px;
    width: 20%;
    height: 60%;
    background-color: #fddfff;
    margin: auto;
    color:black;
    min-width: 300px
}     

    .button{
        border-bottom: outset 3px rgb(162, 135, 157);
        border-right: outset 2px rgb(162, 135, 157);
        border-radius: 6px;
        background-color: rgb(228, 155, 237);
    }
    
 main{
        background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;
    }
</style>

