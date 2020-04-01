import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Circle, Image, Text } from 'react-konva';

import PlateImage from '../../../../../static/assets/images/plate.jpg';
import Konva from 'konva';

export default class ItemsCircle extends Component {
    constructor() {
        super();
    }

    let plateThumbImage = new Image();
    plateThumbImage.onLoad = function() {
        let image = new Konva.Image({
            x: 500,
            y: 150,
            image: plateThumbImage,
            width: 100,
            height:100,
        });
    };
    plateThumbImage.src = {PlateImage}
    

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