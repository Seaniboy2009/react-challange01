import React from "react";
import css from './css/NavBarSimple.module.css'

class NavBarForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            
            return{
                isLoggedIn: prevState.isLoggedIn === false ? true : false,
            }

        })
    }
    
    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                {this.state.isLoggedIn ? (
                    <form>
                        <label form="username">Username: </label>
                        <input name="username" placeholder="Usename"></input>
                        <label form="password">Password: </label>
                        <input name="password" placeholder="Password"></input>
                        <button onClick={() => this.handleClick()}>Submit</button>
                    </form>
                ) : (
                    <button onClick={() => this.handleClick()}>Log in</button>
                )}
            </div>
        )
    }
}

export default NavBarForm;