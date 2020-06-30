import React, { Component } from 'react';
import FormField from '../formfield/FormField.js';
import CoolButton from '../coolbutton/CoolButton';

class Signup extends Component {
    render() {
        return (
            <div>
                <nav className="navbar" role="navigation" aria-label="dropdown navigation">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                        Signup
                        </a>

                        <div className="navbar-dropdown">
                        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                        <FormField label="Password" type="text" placeholder="e.g Alex Smith" />
                        <CoolButton type="button is-primary"/>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Signup;