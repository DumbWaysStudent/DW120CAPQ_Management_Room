import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, ListItem, Image } from 'react-native';


export default class Tes extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Button onPress={this.tes} title="Press Me">
                    Press Me
                </Button>
            </View>
        )

    }
}


