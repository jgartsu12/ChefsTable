import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';

export default class PhlogCarousel extends Component {
    componentWillMount() {
        this.setState({
            phlogImages: [],
            activeImageIndex: 0,
        });
    
    setTimeout(() => {
        this.setState({
            phlogImages: createImages(15),
        })
    }, 100);
    }

    createImages = n => range(n).map(i => <div key={i} style={{ height: 250, background: '333' }}>{i}</div>);

    changeActiveImage = (activeImageIndex) => 
        this.setState({
            activeImageIndex
        });

    render() {
        const {
            activeImageIndex,
            phlogImages,
        } = this.state;

        return (
            <ItemsCarousel //config
                enablePlaceholder
                numberOfPlaceholderItems={4}
                minimumPlaceholderTime={1000}
                placeHolderItem={<div style={{ height: 250, background='#333' }}>PlaceHolder</div>}

                numberOfCards={4}
                gutter={12}
                showSlither={true}
                firstAndLastGutter={true}
                freeScrolling={false}

                requestToChangeActive={this.changeActiveImage}
                activeImageIndex={activeImageIndex}
                activePosition={'center'}

                chevronWidth={30}
                rightCheveron={'>'}
                leftCheveron={'<'}
                outsideChevron={false}
                >
                    {phlogImages}
            </ItemsCarousel>
        );
    }
}