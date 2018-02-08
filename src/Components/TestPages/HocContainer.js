import React from 'react';
import multi from './HOF';
import * as hoc from './HOCYell';

class HocContainer extends React.Component {
    constructor(props){
        super(props);

        debugger;

        this.state = {};

        let arr = [1,2,3,4,5,6,7,8,9];
        let evenArr = [];

        arr.map(function(item){
            if(item % 2 === 0){

                console.log(item)

            }
        })

        arr.filter(function(num){
            if(num % 2 === 0){
                evenArr.push(num);

            }
        })

    }


    render(){

        debugger;


        const multiConst = (x) => (y) => x * y;
        const multiConstBy5 = multiConst(5);

        //External Function
        const multiBy2 = multi(2);

        //Call withYell function from HOC.js
        const title = (props) => <h1>{props.children}</h1>;
        const AngryTitle = hoc.withYell(title);


        return(
            <div className="large-12 columns">
                <div className="row">
                    Total: {multiBy2(5)}
                </div>
                <div className="row">
                    Internal Total: {multiConstBy5(5)}
                </div>
                <div className="row">
                    <AngryTitle>test 1234</AngryTitle>
                </div>

            </div>
        )

    }
}

export default HocContainer;