import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {makeApiCall} from "../redux/actions";
import {Navigation} from "react-native-navigation";

class HomeComponent extends PureComponent {

    componentDidMount() {
        this.props.makeApiCall();
    }

    navigate = (item) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: 'Car',
                passProps: {
                    image: item.image
                }
            }
        })
    };

    _renderItem = ({item}) => {
        return (
            <TouchableOpacity style={{
                width: '90%',
                alignItems: 'center',
                backgroundColor: '#8a6e99',
                borderWidth: 2,
                borderColor: 'black',
                borderRadius: 16,
                padding: 16,
                marginHorizontal: '5%',
                marginVertical: 8
            }}
            onPress={() => this.navigate(item)}>
                <View>
                    <Text style={{fontSize: 24}}>{item.make}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    render() {
        const {apiResponse} = this.props;
        let cars = [];
        if (apiResponse != null && apiResponse.data != null && apiResponse.data.cars != null)
            cars = apiResponse.data.cars;
        return (
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                renderItem={this._renderItem}
                data={cars}
            />
        );
    }
}

const mapstateToProps = ({data}) => ({
    apiResponse: data
});

const mapDispatchToProps = {
    makeApiCall
};

const Home = connect(
    mapstateToProps,
    mapDispatchToProps
)(HomeComponent);

export default Home;
