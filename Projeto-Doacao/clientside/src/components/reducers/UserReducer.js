const INITIAL_STATE = {
    profileImage: 'https://i.imgur.com/4vt7fYd.png'
}
export default function updateProfileImage(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'SET_IMAGE':
            return { ...state, profileImage: action.image};
        default:
            return state;
    }

}