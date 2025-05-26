export const Roles = {
    USER: 'USER',
    ADMIN: 'ADMIN',
};
export type Role = typeof Roles[keyof typeof Roles];

export type User = {
    id: string;
    role: Role;
    name: string;
    surename: string;
    email: string;
    phone: string;
};