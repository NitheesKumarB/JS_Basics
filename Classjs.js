class Person{
constructor(name ,age){
    this.name = name;
    this.age=age;
}

 greet() {
    console.log(`my name is nithees \n my age is 24`)
}

static work(){
    console.log("full time job")
}

}

const per = new Person("nithees" , 24);
per.greet();
Person.work();



class Cons{

    constructor(){
        console.log("this is constructor")
    }

    normal(){
        console.log("normal method")
    }
}

const con = new Cons();
con.normal()




// fun(a,b){
// console(a)
// console(b)
// }

// fun(12,34)