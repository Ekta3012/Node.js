let given_str="ABCKLMCBALND";
let check=0;
function findDuplicates(str){
  var result = [];
  var char_array = str.split('');
    for(let i=0;i<char_array.length;i++){
       var new_char = char_array[i];
       if(char_array.indexOf(new_char) === char_array.lastIndexOf(new_char) ){
         result.push(new_char);
       }
    }
  return result.join(" ");
}
console.log(findDuplicates(given_str));