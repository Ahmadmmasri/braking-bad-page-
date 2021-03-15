

// old way

/* 
fetch("https://www.breakingbadapi.com/api/").then(function(respo){
    
    return respo.json();

})
.then(function(data){
    console.log(data);
})



 */

 // modern way
 // async mean syncronization function
 const api = "https://www.breakingbadapi.com/api/characters/" ;
async function get(){
    try{
    // wait to get all data from api and then countinue
    const response = await fetch(api);
    // wait to get json file from api
    const data = await response.json();
    // print info in console
    printata(data);
    }
    catch(e){
        console.log("Error",e.message);
    }
    }
    //console.log(data);

    function printata(data){
        const header= document.querySelector('#header');
        const content= document.querySelector('#content');

        header.innerHTML+=
        `<select class="form-control" onchange="getChar(this.value)">
        <option>choose an actor to read</option>
        ${data.map(charr => `<option>${charr.name}</option>`)}
        </select>`

        console.log(header); 
        getChar();

    }

    async function getChar(name){
        const response= await fetch(`${api}?name=${name}`);
        const data= await response.json();
        if(name !== "choose an actor to read"){
        content.innerHTML=
        `<h2>${data[0].name} (${data[0].nickname})</h2>
        <h4>${data[0].portrayed}</h4>
        <img src="${data[0].img}" width=400">`;
    }
        }
   
   

    get();



