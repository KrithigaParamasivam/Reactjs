class Animal {
	constructor(name) {
		this.name = name;
	}
	eats() {
		return `${this.name} eats chicken`;
	}
    sleep(){
        return `${this.name} is sleeping`;
}
}

class Dog extends Animal {
	constructor(name, type) {
		super(name);
		this.type = type;
	}
	sound() {
		//console.log("Dog is barking");
        return `${this.name} is barking`;
	}
	breed() {
		//console.log("Dog is barking");
        return `${this.type} is pug`;
	}
}

let myDog = new Dog("Danny", "pug");
console.log(myDog.eats()); 
console.log(myDog.sleep());
console.log(myDog.sound());
console.log(myDog.breed());
