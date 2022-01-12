import { Component } from "react";

export default class AbvCalculator extends Component{

    //ABV =(76.08 * (og-fg) / (1.775-og)) * (fg / 0.794)

    constructor(props){
        super(props)

        this.maxG = 1.150
        this.minG = 0.800

        this.state = {
            og:1.045,
            fg:1.014,
            abv:0
        }
    }

    componentDidMount(){
        this.update({});
    }

    update( {og = this.state.og, fg = this.state.fg} ){

        og = Math.min( Math.max( og , this.minG) , this.maxG );
        fg = Math.min( Math.max( fg , this.minG) , this.maxG );

        let abv = (76.08 * (og-fg) / (1.775-og)) * (fg / 0.794)

        this.setState({
                'og' : og,
                'fg' : fg, 
                'abv' : abv,
        } )
        
    }

    roundInputs = () => {

        console.log('blur')

        this.setState({
            'og' : this.state.og.toFixed(3),
            'fg' : this.state.fg.toFixed(3), 
    })

    }

    render(){

        return( <div>

                    <span>OG: <input type="number" step="0.001" onChange={ (e) => this.update( {og:e.target.value} ) } value={this.state.og} onBlur={this.roundInputs} ></input></span>
                    <span>FG: <input type="number" step="0.001" onChange={ (e) => this.update( {fg:e.target.value} ) } value={this.state.fg} onBlur={this.roundInputs}></input></span>

                    <div>ABV: {this.state.abv.toFixed(2)} %</div>

                </div>)
    }

}