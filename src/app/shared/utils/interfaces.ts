export interface LoginResponse{
    "sub": string,
    "admin": boolean,
    "id": string,
    "name": string,
    "surname": string,
    "iat": number,
    "img":string,
    "badge": string
}

export interface Post{
    "color"?: string,
    "text"?: string,
    "from"?: string,
    "_id"?: string,
    "__v"?: string,
}

export interface Convenzione{
    "titoloLink"?: string,
    "text"?: string,
    "url"?: string,
    "titolo"?: string
    "_id"?: string
}

