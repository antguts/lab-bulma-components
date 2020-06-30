import React, { Component } from 'react';

const CoolButton = (props) =>{
        return (
            <div>
                <button className={props.type}>Button 1</button>
                {/* <button className="button is-small is-success">Button 2</button>
                <button className="button is-primary">Button 3</button>
                <button className="button is-success">Button 4</button>
                <button className="button is-danger">Button 5</button> */}
            </div>
        );
}

export default CoolButton;