import React from 'react';
import BaseModel from '../../BaseModel';
import {MovieModel} from './MovieModel';
import {AttributeTypes} from '../../AttributesTypes';



export default class MovieModelContainer extends BaseModel {
    constructor(){
        super();

        this.name = Symbol('MovieModel');


        this.properties = MovieModel;


    }


}

