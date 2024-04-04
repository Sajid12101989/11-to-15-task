//11.	Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
/*let names:string[]= ["Sajid","Zubair","Asad","Manawar","Tayyab"];
for(let i:number=0; i<names.length; i++){
    console.log(names[i]);
}*/
//12.	Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
/*let personName:string[]=["Sajid","Zubair","Asad","Manawar","Tayyab"];
for(let i:number=0; i<personName.length; i++){
    console.log(`Hello ${personName[i]} would you like to some eat today?`);
}*/
/*13.	Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle*/
/*let transports:string[]=["Honda","Motorcycle","Bicycle","tesla car"];
for(let trans:number=0; trans<transports.length; trans++){
    console.log("i would like to own a " + transports[trans]);
}*/
/*14.	Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/
/*let Guest_list:string[]=["Hammad","Hamza","Sumbul"];
for(let i:number=0; i<Guest_list.length; i++){
    console.log(`Dear Friend ${Guest_list[i]} \n\nyou are invited for delicious dinner. \n\nThank you\n\n`);
}*/
/*15.	Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/
var Guest_list = ["Hammad", "Hamza", "Sumbul"];
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear Friend ".concat(Guest_list[i], " \n\nyou are invited for delicious dinner. \n\nThank you\n\n"));
}
var notcome = "hamza";
var newguest = "Dara";
Guest_list[1] = newguest;
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear Friend ".concat(Guest_list[i], " \n\nyou are invited for delicious dinner. \n\nThank you\n\n"));
}
console.log("".concat(notcome, " will not come for dinner"));
