import { IncomingMessage } from "http";

export interface Iingr {
    id: number;
    name: string;
    type: string;
}

export interface Irecipe {
    id: number;
    name: string;
    type: string;
    
}

export interface Iingredients
{
    id:number;
    name:string;
}

export interface Irecipep {
    id_recipes:number;
    recipes:string;
    name:string;
    ingredients: Iingredients;
}