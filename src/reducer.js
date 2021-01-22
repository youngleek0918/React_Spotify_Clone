export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: null,
    token: 'BQAXyvdShqT8ORn6J4KZdyIy5iwbRTJWjs8Krlu1Lr7cU5YlOFY43K4fNknC34_GmuaK2JF-m_bxEPStdTEa9k8VmOuCluzvVKvKcLj1oXyW9uYQ2KmUhr9iYtyJWudSHBzq784P6LuN4ciwF3is7R9TbtDKzaYBJXy6IuglVzvexAQW'
};

const reducer = (state, action) => {
    console.log(action)

    // Action -> type, [payload]
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

export default reducer