import React, {Component} from "react";
import Title from "./title";
import Description from './description';
import Image from './image';


class simpleCard extends Component{
    render() {
        return  <div>
                    <div className="container">
                        <div className="box image">
                          <Image/>
                        </div>
        
                        <div className="box title">
                          <Title/>
                        </div>

                        <div className="box description">  
                            <Description/>
                        </div>  
                    </div>
                    
                    
        </div>
    }
}
export default simpleCard;