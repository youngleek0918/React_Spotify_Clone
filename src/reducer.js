export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: null,

    // remove after finished developing...
    // token: 'BQA8k9lvfJroBgMxNxXflIilFLBlmD6_3C5ZnW2ANC7LcPbQXf…HUqPB709_8Z8KEnH5oKxiSpdPWkeb61K3S6vjh9h1aVOsxNHX',
};

const reducer = (state, action) => {
    console.log(action)

    // Action -> type, [payload]
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        default:
            return state;
    }
}

export default reducer