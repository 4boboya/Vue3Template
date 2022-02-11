export interface User {
    name: string;
    phone: string;
    body: { [name: string]: string };
}