
//! Primitive datatypes - Immutable ( which can't be changed )

let a = 10;
let b = a;
b = 30;
console.log(a);
console.log(b);

//? Here, the value of 'b' is changed, so primitive datatypes can be changed ???

//! Non-Primitive datatypes - Mutable ( which can be changed )

let obj1 = {
    id : 4, 
    name : "batman"
};

let obj2 = obj1;

console.log(obj1);
console.log(obj2);

obj2.id = 8;

console.log(obj1);
console.log(obj2);

//? Here, on changing 'id' from obj2, the id of obj1 is also changed, why ???


//^ Primitive datatypes are stored in "stack memory" and non-primitive are stored in "heap memory".
//^ Primitive datatypes are "Call by value" and non-primitive are "Call by reference".


/* 
When we create a variable using primitive datatype then it is stored in stack memory,
even a new variable is created at different memory location with only value of existing variable,
any changes made to new variable are also reflected in stack, without any changes in value of old 
as both are at different memory locations.
And any changes made to value of variable, then it is over-write on value again, 
the variable is created with new value again at different memory location in stack. 
That's why they are immutable.



But non-primitive datatye values are stored in heap with only identifier created in stack and
it contain address of memory location at which value is stored.
So, if a new object is created with values of old, then they both have address of same
memory location.
If any changes made to new object then it will be done in memory location, which contain 
values for new and old objects both, so changes are reflected in both. 

*/


//? Stack memory has very less space (only few mb) so primitive datatypes are stored in it,
//? as they require less space.

//? Heap memory has majority space( in gb ) , so non-primitive datatypes are stored in it,
//? as they require more space for different operations and complex size.

//? If a string has very big size and it cant be stored in stack then V8 engine will 
//? store it in heap memory despite being it a primitive datatype. 





//^ For const primitive datatype it stores value in stack so we cant change value.
// const x = 10;
// x = 3;
// console.log(x);



//^ For const object, it stores address of memory location of values of object,
//^ so we can change the values of object even if it is const because address remains same.

const obj = {
    id : 1, 
    name : "yes"
};

console.log(obj);

obj.id = 2121;
console.log(obj);



//^ But we cant assign another object to an object of const type as it will tend to 
//^ change memory address and will produce error.

let objj = {
    id : 3
};

obj = objj;
console.log(obj);










