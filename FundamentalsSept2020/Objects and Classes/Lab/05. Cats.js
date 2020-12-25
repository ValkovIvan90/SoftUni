function cats(arr) {

    class Cat {
        constructor(name, age) {
            this.name = name,
                this.age = age            

        }
        seis(){
           console.log(`${this.name}, age ${this.age} says Meow`);          

        }

    }
    for (const key of arr) {
        let[name,age]=key.split(' ');
        let cat=new Cat(name,age);
         cat.seis();
    }
   
   


}
cats(['Mellow 2', 'Tom 5'])