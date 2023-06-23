// Every other Letter in the string make it caps
//Given a string, every other letters should be capatilize

//Edge Cases
// "HELLO"=> "HeLlO"
// "Hello You" => "HeLlO yOu"

const capLetter = (string) =>{
    let camelString ="";
    for (let i=0; i<string.length; i++){
        if(i%2===0){
            camelString +=string[i].toUpperCase();
        }else{
            camelString +=string[i].toLowerCase();}
    }
    return camelString;
};
console.log(capLetter("hello"));