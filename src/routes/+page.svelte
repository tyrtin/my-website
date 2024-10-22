
<!--Delar upp sidan i två delar-->
<main>
  <div>

    <h1 class="name">Tyra Tinglev </h1>
    <h2 id="number">Här har jag samlat min uppgifter jag gjort i samband med webbutveckling i årskurs 2 på Maja Beskowgymnasiet!</h2>
    <h3>Inspirerade citat för min webbutvecklingsresa:</h3>
    <!--Under denna kommer vi lägga till fler element-->

  </div>
    <!--Här kommer vi lägga till en bild senare i uppgiften 1.2.4 Extra styling-->  
  
<p style="margin:10px;"></p>
                
<p id="inspo">
  "The only way to learn a new programming language is by writing programs in it." - <strong>Dennis Ritchie</strong>, creator of the C programming language.
</p>

<p style="background-color:pink">
  "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - <span>Patrick McKenzie, software engineer and entrepreneur</span>.
</p>
.
.
.
<!-- Lägg till detta inom <style>-taggen -->

<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" d="M29.5,-44C37.1,-41,41.4,-30.9,43.5,-21.3C45.7,-11.7,45.8,-2.5,46.6,8.2C47.5,19,49.1,31.5,43.9,38.7C38.7,45.9,26.6,47.8,14.3,53.8C1.9,59.9,-10.8,70,-18.4,66.2C-26,62.4,-28.6,44.7,-40.2,33.5C-51.8,22.4,-72.5,17.9,-75.7,9.6C-78.8,1.3,-64.3,-10.7,-56.1,-24.3C-47.8,-37.9,-45.8,-53,-37.5,-55.7C-29.2,-58.3,-14.6,-48.4,-1.8,-45.6C10.9,-42.7,21.9,-46.9,29.5,-44Z" transform=" translate(100,70)"  />
</svg>

</main>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e7008a" fill-opacity="1" d="M0,128L144,320L288,256L432,32L576,160L720,288L864,32L1008,96L1152,96L1296,320L1440,192L1440,320L1296,320L1152,320L1008,320L864,320L720,320L576,320L432,320L288,320L144,320L0,320Z"></path></svg>
<style>
  main{
    /*Styling för att dela upp sidan i två delar. */
    /*Vi kommer gå igenom detta i detalj senare*/
    margin: auto;
    width: 80vw;
    height: 70vh;
    display: grid;
    grid-template-columns: repeat(2,50%);
    overflow: hidden;
  }
  div{
    /*Styling för att centrera texten i behållaren*/
    margin: auto;
  }

  h1{
    color:grey;
}
h2{
    color: rgb(255, 165, 0);
}
h3{
    color: #3cb371;
    font-family: sans-serif;
    font-weight: bold;
}

.name{
    font-family:'Gill Sans';
    font-size: 50px;
    width: 1000px;
    height: 100px;
    padding:30px;
}
                
#inspo{
  font-family: courier;
  font-size: 160%;
}

span{
  color: green;
}


#number{
    border: 1px solid black;
    padding: 10px;
}


h1{
    background-color: lightblue;
}
                

  /* Vi skiljer elementen med ett kommatecken(,) för att ge möjligheten till att ge flera element samma styling*/
  h1, h2, h3, p {
  display: inline-block;
  /*Ger utrymme mellan element*/
  margin: 10px;
}
        
  </style>
