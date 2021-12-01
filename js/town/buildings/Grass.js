import {Building} from '../Building.js';

export default class Grass extends Building{
    constructor(name, description, capacity, imgsrc){
        super(name, description, capacity);
        this.imgsrc = imgsrc; 
        
    }

    getTest(){
        alert("yes");
    }
}