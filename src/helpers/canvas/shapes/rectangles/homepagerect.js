import React, { Component } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';

export default class HomePageRectangle extends Component {
    
    state = {
        color: 'white'
    };

    render() {
        return (
            <div className='white-rectangle'>
                <Rect
                    x={200}
                    y={200}
                    width={200}
                    height={200}
                    fill={this.state.color}
                /> 

                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        <Text text='Open Monday-Saturday: 7AM - 9PM & Sunday: 7AM-8PM'/>
                    </Layer>
                </Stage>  
            </div>
        );
    }
}