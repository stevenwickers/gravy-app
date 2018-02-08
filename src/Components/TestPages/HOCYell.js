import React from 'react';

export const withYell = PassedInComponent => {
    return class  extends React.PureComponent{
        constructor(props){
            super(props);

        }

        render(){
            return(
                <PassedInComponent {...this.props} >
                    {this.props.children.toUpperCase()}!
                </PassedInComponent>
            )

        }
    }


};


