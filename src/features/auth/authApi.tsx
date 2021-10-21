// A mock function to mimic making an async request for data
export interface IUser {
    userName: string;
    password: string;
}
export function userLogIn(user: IUser) {
    return new Promise<{ token: string }>((resolve) =>
        setTimeout(() => resolve({ token: "" + Math.random() }), 500)
    );
}
