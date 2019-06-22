import React, {PureComponent} from 'react';
import {View, Image} from 'react-native';

export default class HomeComponent extends PureComponent {

    render() {
        return (
            <View>
                <Image
                    style={{width: '100%', height: '100%', resizeMode: 'contain'}}
                    source={{uri: this.props.image}}
                />
            </View>
        );
    }
}
