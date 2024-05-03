import React, { useEffect, useState } from "react";
import "../styles/dashboard.scss";
import "../styles/house-top-view.scss";
import "../styles/elevations.scss";
import gear from "../../resources/gear.png";
import Clock from "../components/Clock";
import CustomDate from "../components/CustomDate";
import Button from "../components/Button";
import Zone from "../components/Zone";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: Array(6).fill(false),
        };
    }
    handleClick(i) {
        const Buttons = Array(6).fill(false);
        Buttons[i] = true;
        this.setState({ buttons: Buttons });
    }
    renderButton(i, label) {
        return (
            <Button
                label={label}
                onClick={() => this.handleClick(i)}
                isActive={this.state.buttons[i]}
            />
        );
    }
    render() {
        return (
            <div className="app-grid">
                <div className="header-options elevation-20">
                    <div className="w3-bar-item">user</div>
                    <div className="w3-bar-item">voice assistant: enabled</div>
                    <CustomDate className="w3-bar-item"></CustomDate>
                    <Clock className="w3-bar-item">w3-bar-item</Clock>
                    <img src={gear} alt="settings-icon" />
                </div>
                <div className="dashboard-interactive">
                    <div className="left-toolbar"></div>
                    <div className="middle-toolbar">
                        <div className="upper-options">
                            {this.renderButton(0, "DATA / STATS")}
                            {this.renderButton(1, "DASHBOARD")}
                            {this.renderButton(2, "SECURITY")}
                            {/* <Button label="DATA / STATS" onClick=""></Button>
                            <Button label="DASHBOARD"></Button>
                            <Button label="SECURITY"></Button> */}
                        </div>
                        <div className="main-visual elevation-8">
                            <div className="group">
                                <Zone className="rectangle_1 elevation-6"></Zone>
                                <Zone className="rectangle_2 elevation-6"></Zone>
                                <Zone className="rectangle_3 elevation-6"></Zone>

                                <Zone className="rectangle_4 elevation-6"></Zone>
                                <Zone className="rectangle_5 elevation-6"></Zone>
                                <Zone className="rectangle_6 elevation-6"></Zone>

                                <Zone className="rectangle_7 elevation-6"></Zone>
                                <Zone className="rectangle_8 elevation-6"></Zone>
                                <Zone className="rectangle_9 elevation-6"></Zone>
                            </div>
                        </div>
                        dioawodnowa
                        <div className="lower-options">
                            {/* <Button label="HYDRO SYSTEM"></Button>
                            <Button label="USERS"></Button>
                            <Button label="LAB"></Button> */}
                            {this.renderButton(3, "HYDRO SYSTEM")}
                            {this.renderButton(4, "USERS")}
                            {this.renderButton(5, "LAB")}
                        </div>
                    </div>
                    <div className="right-toolbar"></div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
