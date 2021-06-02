"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myFriends = [{
        firstname: "greg",
        lastname: "Izuka",
        age: 10,
        gender: "MALE",
        isFriend: [{
                name: "Mathew",
                isFriend: false
            }, {
                name: "Peter",
                isFriend: true
            }, {
                name: "Martha",
                isFriend: false
            }
        ]
    }];
const resolver = {
    Query: {
        friends: () => {
            return myFriends;
        },
        // isFriend: ({friendbool}: {friendbool:any})=>{
        //   console.log(friendbool)
        //     return myFriends.isFriend.filter((friend, index)=> friend.isFriend=== friendbool)
        // },
    },
    Mutation: {
        addFriend: (parent, { input }) => {
            // console.log('this is our input', input);
            // const isFriend = [
            //   {
            //     firstname: "Baba",
            //    isFriend: true
            //   }
            // ]
            myFriends.push(input);
            return myFriends[myFriends.length - 1];
        },
        deleteFriend: (parent, { id }) => {
            id = id - 1;
            let initialLength = myFriends.length;
            if (myFriends[id]) {
                myFriends.splice(id, 1);
                return initialLength == myFriends.length ? "Sorry couldn't delete" : "Success deleting";
            }
            return "Sorry couldn't delete";
        }
    }
};
exports.default = resolver;
