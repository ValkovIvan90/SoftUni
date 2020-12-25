function censWords(first,second) {

   while (first.includes(second)) {
     first=first.replace(second,('*').repeat(second.length))
   }
    console.log(first);
    
}
censWords("A small sentence with small some words small", "small")