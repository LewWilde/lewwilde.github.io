import { Component, useEffect } from "react";

export default class OffersBot extends Component {

    //ABV =(76.08 * (og-fg) / (1.775-og)) * (fg / 0.794)

    constructor(props) {
        super(props)

        this.state = {
            run: false,
            url: 'https://lewwilde.co.uk',
            status: '',
        }
    }

    componentDidUpdate() {

        //this.getResponseCode();

    };

    getResponseCode() {

        const myRequest = new Request(this.state.url);

        fetch(myRequest).then(function (response) {
            this.setState({ status: response.status })
        }.bind(this)).catch((error) => { });

    }

    onClick() {
        this.getResponseCode();
    }

    update(e) {
        this.setState({ 'url': e.target.value })

    }

    render() {

        return (
            <div>
                <input value={this.state.url} onChange={(e) => { this.update(e) }}></input><button onClick={() => this.onClick()}>go</button>
                <div>{this.state.status}</div>
            </div>

        )

    }


}