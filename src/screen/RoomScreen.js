import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import { Icon, Item, Input, List, ListItem, Thumbnail, Left, Body, Right, Button, Content, Header, Container, Title, Fab } from 'native-base';
import { connect } from 'react-redux'

import * as actionUsers from '../../redux/actions/actionUsers'

export default class RoomScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banners: []
        };
    }
    render() {

        return (
            <Container style={styles.container}>
                <Content>
                    <View>
                        <Text>Room Screen</Text>
                    </View>
                </Content>
            </Container >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});