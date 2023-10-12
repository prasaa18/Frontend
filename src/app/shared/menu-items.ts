import { Injectable } from "@angular/core";


export interface Menu{
    state:String;
    name:String;
    type:String;
    icon:String;
    role:String;

}
const MENUITEMS=[

    {state:'dashboard', name:'Dashboard',type:'link',icon:'dashboard',role:''}

];

Injectable()
export class MenuItems{

    getMenuItem():Menu[]
    {

        return MENUITEMS;
    }


}