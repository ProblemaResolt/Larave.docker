import React, { Component } from 'react';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        const countup = () => {
            const nowTime = new Date();
            const msg = "ローカル時刻は、　" + ( '00' + nowTime.getHours()).slice( -2 ) + ":" + ( '00' + nowTime.getMinutes()).slice( -2 ) + ":" + ( '00' + nowTime.getSeconds()).slice( -2 ) + " です。";
            document.getElementById("localClock").innerHTML = msg;
        };
        setInterval(countup, 1000);

        return (
            <div>
                <div id="localClock"></div>
            </div>
        );
    }
}