import { Point } from "./point";

export class Area{
    public constructor(
        public id?:number,
        public name?:string, 
        public points?:Point[]){
    }
}