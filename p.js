class family {
    constructor(name,age,weight, experiencia ){
        this.name= name;
        this.age = age;
        this.weight= weight;
        this.experiencia= experiencia;
    }
    functFamily (){
        return `me llamo ${this.name} tengo ${this.age} peso ${this.weight} y mi experiencia es ${this.experiencia}`
    }
}

let persona1 = new family("manuel",30,108,"70%");

let persona2 = new family("Dany",37,70,"67%");

let persona3 = new family("nenoi",13,60,"10%");

let persona4 = new family("exmoxnix",5,19,"8%");

family.prototype.estado = function(x) { 
  let modo = x 
  console.log(`${this.name} esta ${modo}`);
}  

persona1.estado("estudiando");

async function choisePokemon (){
    try{
        let id = Math.floor(Math.random()*1000)+1
        let eleccion = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        let data = await eleccion.json();
        return data.name;

    }   catch (error){
        console.log(error)
    } finally {
        console.log("fPromise")
    }

}

//console.log(await choisePokemon());

family.prototype.favoritePokemon = 
async function(){
    let pokemon = await choisePokemon();
    console.log(`soy ${this.name} y mi pokemon favorito es ${pokemon}`)
};

persona1.favoritePokemon();

//cosnumir api

async function translate(text){

    let url = `https://api.mymemory.translated.net/get?q=${text}&langpair=es|en`

    let res = await fetch(url)

    let data = await res.json()

    console.log(data.responseData.translatedText)

}

translate("soy manuel y mi pokemon favorito es farigiraf")