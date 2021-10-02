/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here
const facebookProfile = {
    name: "Ricardo Hayashi",
    friends: 10000,
    messages: ["Hello", "Bye", "Happy Birthday", "How are you doing"],
    postMessage: function postMessage(message) {
        facebookProfile.messages.push(message);
        return facebookProfile.messages;
    },
    deleteMessage: function deleteMessage(index) {
        facebookProfile.messages.splice(index,1);
        return facebookProfile.messages;
    },
    addFriend: function addFriend() {
        facebookProfile.friends++;
        return facebookProfile.friends;
    },
    removeFriend: function removeFriend() {
        facebookProfile.friends--;
        return facebookProfile.friends;
    }
}

console.log(facebookProfile.name);
console.log(facebookProfile.friends);
console.log(facebookProfile.messages);
console.log(facebookProfile.postMessage("Teste"));
console.log(facebookProfile.deleteMessage(2));
console.log(facebookProfile.addFriend());
console.log(facebookProfile.removeFriend());