export const POSTS = `POSTS`

const initialState = {
    posts: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state;
    }
}
