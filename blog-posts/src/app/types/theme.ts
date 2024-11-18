import { Post } from "./post";
import { User } from "./user";

// Interface for each Theme
export interface Theme {
    subscribers: string[];  // Array of user IDs
    posts: string[]; //Post       // Array of post IDs
    _id: string;            // Theme ID
    themeName: string;      // Name of the theme
    userId: User;           // Embedded User object
    created_at: string;
    updatedAt: string;
    __v: number;
}