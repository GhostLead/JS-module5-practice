console.log("TASK 1");
let numbers = [50, 10, 40, 30, 20].sort((a,b)=>(a-b));
console.log(numbers);
console.log("TASK 2");
let fibb = (n) => (n) == 0 ? 0 : (n == 1 ? 1 : fibb(n - 1) + fibb(n - 2));
console.log(fibb(7));

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let showContact = (contacts,index) => (contacts instanceof Array) ? contacts[index] : "Kaki";

console.log(showContact(contacts,2));

let showAllContacts = (contacts) => (contacts instanceof Array) ? contacts : "Kaki";

console.log(showAllContacts(contacts));

let addNewContact = function(contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
    }}

console.log(addNewContact(contacts,"ember","teloszam","email.email@email"));
console.log(showAllContacts(contacts));