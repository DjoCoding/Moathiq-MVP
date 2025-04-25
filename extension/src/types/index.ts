export interface UserT {
    id: string;
    username: string;
    password: string;
    role: "teacher" | "student";
}