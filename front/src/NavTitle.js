import React, { Component } from "react";
import { Route } from "react-router-dom";
import $ from "jquery";
import { } from "jquery.cookie";
import LoginForm from "./NavTitle_login";
import LogoutForm from "./NavTitle_logout";

class NavTitle extends Component {
    render() {
        // console.log("/" + this.props.name)
        let route = "/" + this.props.name
        let resultForm;
        // console.log($.cookie("login_cookie"));
        function getResultForm() {
            // console.log($.cookie("login_cookie"));
            if ($.cookie("login_cookie")) {
                console.log("1")
                resultForm = <Route exact path={route} component={LogoutForm} ></Route >;
                return resultForm;
            } else {
                console.log("2")
                resultForm = <Route exact path={route} component={LoginForm} ></Route >;
                return resultForm;
            }
        }
        getResultForm();
        return (
            <div>
                {resultForm}
            </div>
        );
    }
}

export default NavTitle;