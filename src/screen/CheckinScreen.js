import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import { Icon, Item, Input, List, ListItem, Thumbnail, Left, Body, Right, Button, Content, Header, Container, Title, Fab } from 'native-base';
import { connect } from 'react-redux'

import * as actionUsers from '../../redux/actions/actionUsers'

class CheckinScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.getRoom();
    }
    addRoom = () => {
        alert('tes');
    }
    render() {
        const datates = this.props.roomLocal.room;
        return (
            <Container style={styles.container}>
                <Content>
                    <Text onPress={this.addRoom} style={{ padding: 50, backgroundColor: 'orange', margin: 10 }}>ADD ROOM</Text>
                    <FlatList data={datates} renderItem={({ item }) => (
                        <Text style={{ padding: 50, backgroundColor: 'grey', margin: 10 }}>{item.name}</Text>
                    )} />
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
        alignContent: 'stretch'
    }
});

const mapStateToProps = state => {
    return {
        roomLocal: state.room,
    }

}

const mapDispatchToProps = dispatch => {
    return {
        getRoom: () => dispatch(actionUsers.getRoom())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckinScreen);