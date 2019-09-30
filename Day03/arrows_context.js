//var self = this;

//this.name = "Global name";

let person = {
    name: "Sam",
    print() {
        console.log(`Name: ${this.name}`);
    }
}
person.print();