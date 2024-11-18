export interface User {
    _id: string;
    tel: string;
    email: string;
    username: string;
    password: string;
    themes: string[];  // Array of theme IDs
    posts: string[];   // Array of post IDs
    created_at: string;
    updatedAt: string;
    __v: number;
}
