import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'


export class Home extends Component {

    constructor(props){
        super(props);

        this.box = {
            background: "rgba(120, 120, 120, 0.4)"
        }
    }


    render() {
        return (

                    <Col>
                    
                    <div style={this.box}>
                    <h1>About Me:</h1>
                    
                        <p>
                        I starting coding in college. Unlike my affinity for code, college did not pan out. I continued to code as a hobby for many years. 
                        Never creating anything of substance. When I came across the bootcamp, the content and timeframe called to me. 
                        I jumped on the opportunity to learn something that I love.
                        </p>
                        <p>
                        I am recent transplant to Florida with my family. We came for the weather and Disney. 
                        As cliche as that sounds its true! In my heart I am always from Massachusettes.
                        </p>
                    </div>
         
                    </Col>


        )
    }
}

export default Home
