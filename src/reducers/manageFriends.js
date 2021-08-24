export function manageFriends(state = {friends: [],}, action){
    // action = {
    //     type: "ADD_FRIEND",
    //     friend: {
    //       name: "Chrome Boi",
    //       hometown: "NYC",
    //       id: 1,
    //     },
    //   };

    // action = {
    //     type: "REMOVE_FRIEND",
    //     id: 1,
    //   };

    switch (action.type) {
        case "ADD_FRIEND":
            return {...state, friends: [...state.friends, action.friend ]};
        
        case "REMOVE_FRIEND":
            const remove = state.friends.findIndex(friend => friend.id === action.id);
            return {...state, friends: [...state.friends.slice(0, remove),
                ...state.friends.slice(remove + 1)]}

        default:
            return state;
    }

}
