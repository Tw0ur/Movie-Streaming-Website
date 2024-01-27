import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IUser {
    id?: number;
    name: string;
    email: string;
    password: string;
    favorite?: number[];
    watching?: number[];
    auth?: boolean
}

interface IUsers {
    users: IUser[];
}

export const profile = {
    user: {
        id: 1,
        name: 'Amirzhan',
        email: 'twour@inbox.ru',
        auth: true,
        password: '1',
        favorite: [],
        watching: []
    }

}
const initialState: IUsers = {
    users: [
        {
            id: 1,
            name: 'Amirzhan',
            email: 'twour@inbox.ru',
            password: '1',
            favorite: [],
            watching: []
        },
    ],
};


const users = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUsers: (state, action: PayloadAction<IUser>) => {


            if (state.users.some((user) => user.email === action.payload.email)) {
                alert('Это почта уже существует')
                return;
            }

            const newUser = {
                ...action.payload,
                favorite: [],
                watching: [],
                id: state.users.length + 1,
                auth: true,

            }

            state.users = [...state.users, newUser];
            profile.user = [newUser]
            window.location.pathname = '/home'
            console.log(initialState)
            console.log(newUser)
            console.log('New state:', state.users[state.users.length - 1]);

        },
        authUser: (state, action: PayloadAction<{ email: string; password: string }>) => {
            const {email, password} = action.payload;
            const user = state.users.find((u) => u.email === email && u.password === password);

            if (user) {
                user.auth = true;
                window.location.pathname = '/home'
            } else {
                alert('Authentication failed');
            }
        },
        addFavorite: (state, action: PayloadAction<{ id: number; }>) => {
            const {id} = action.payload;
            const userIndex = state.users.findIndex((user) => user.id === id);

            if (userIndex !== -1) {
                const user: IUser = state.users[userIndex];

                const index = user.favorite.indexOf(id);
                if (index !== -1) {
                    state.users[userIndex].favorite.splice(index, 1);
                    profile.user.favorite.splice(index, 1);
                } else {
                    state.users[userIndex].favorite.push(id);
                    profile.user.favorite.push(id);
                    console.log(profile.user)
                }

            }
        },
    },
});

export const {addFavorite, addUsers, authUser} = users.actions;
export default users.reducer;
