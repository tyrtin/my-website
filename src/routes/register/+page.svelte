<script>
    import {users_store} from "$lib/user";
let users = [];
import { base } from '$app/paths';
import { onMount } from 'svelte';
onMount(() => {
    /*Check if has more then 2 characters*/
    if($users_store.length > 2){
        users = JSON.parse($users_store);
    }
});




    let color = "black"
    let namn 
    let e 
    let password
    let colors = [{namn: "Blå", value: "skyblue"}, {namn: "Röd", value: "orangered"}, {namn: "Lila", value: "mediumpurple"}, {namn: "Rosa", value: "Fuchsia"}, {namn: "Gul", value: "yellow"}]
    function handleSubmit(){
        let new_user = {namn: namn, password: password, e: e, colors: color};
        if (users.filter((user) => user.namn ==  namn).length >0){
                    alert("namn finns redan")

        }
        else{
            users = [...users, new_user];
            $users_store = JSON.stringify(users); 
            alert("skapad")
        }
    }
</script>

<main>
<div class="container">
<h1>Register</h1>
<form on:submit|preventDefault={handleSubmit}>
    <div style="width: 100px; height: 100px; border-radius: 50%; overflow:hidden; background-color:{color};">   
    </div>
    <label for="name"><b>Användarnamn:</b></label>
    <input type="text" id="name" bind:value={namn}>
    <label for= "email"><b>E-postadress:</b></label>
    <input type="email" id="e-postadress" bind:value={e}>
    <label for= "password"><b>Lösenord:</b></label>
    <input type="password" id="lösenord" bind:value={password}>
    <label for="favoritefärg"><b>Färg:</b></label>
<select bind:value={color} name ="favoritefärg" id = "färg">
    <option value="white">Vit</option>
    {#each colors as c}
        <option value={c.value}>{c.namn}</option>
      
    {/each}
</select>
<br><br>
<b><input type="submit" value= "Registera" class="button"></b>
<br>
</form>
<br>
<a href="{base}/login">Har du redan ett konto? Logga in</a> 



</main>

<style>
   
   .container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: solid 5px rgb(241, 192, 232);
    border-radius: 10px;
    width: 25%;
    height: 70%;
    background-color: #fddfff;
    margin: auto;
    color:black;
    min-height: 500px;
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
