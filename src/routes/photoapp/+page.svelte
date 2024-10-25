<script>
    let image = "https://media.wwf.se/uploads/2024/07/igelkott-puff.jpg"
    let photo = "https://cdn.naturskyddsforeningen.se/uploads/2021/09/01154401/29618_982e1a0b347a4aa-scaled.jpg"
    let picture = "https://media.istockphoto.com/id/1078433492/sv/foto/h%C3%B6stlandskap-p%C3%A5-sj%C3%B6n-vid-solnedg%C3%A5ng.jpg?s=612x612&w=0&k=20&c=1YzZ8VHOmOaIjaodXLSQ6Rb6qOo8hg4kIANFebTAmG0="
</script>

<h1>Photoapp</h1>
<p>Denna sida innehåller fina bilder</p>
<div class="photos">
    
    <div class="image-wrapper">
        <img src = {image} alt="Flexbox egenskaper">
    </div>
    <div class="image-wrapper">
        <img src= {photo} alt="Flexbox egenskaper">
    </div>
    <div class="image-wrapper">
        <img src= {picture} alt="Flexbox egenskaper">
    </div>
</div>



<style>
    .image-wrapper:hover { flex-grow:2; }
    .image-wrapper:active { transform: scale(0.9); }


    .image-wrapper{
        flex-basis: 300px;
        flex-grow:1;
        margin:10px;
    }
    .photos{
    overflow:hidden;
    align-items:center;
    justify-content:center;
    display:flex;
    flex-wrap: wrap;
    background-color: rgb(197, 255, 212);
    }
    .image-wrapper img{ 
        width: 100%;
        border-radius: 20px;
        border: 2px solid white;
        background-color: rgb(232, 209, 94);
        box-shadow: 4px 8px 10px rgba(0,0,0,0.2);
    }

    
h1{
    text-align: center;
    font-size: 50px;
    margin: 20px;
    color: rgb(22, 224, 207);
}
    
</style>