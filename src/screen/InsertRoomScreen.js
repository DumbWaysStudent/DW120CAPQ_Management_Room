import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import { Icon, Item, Input, List, ListItem, Thumbnail, Left, Body, Right, Button, Content, Header, Container, Title, Fab, Label } from 'native-base';
import { connect } from 'react-redux'

import * as actionUsers from '../../redux/actions/actionUsers'

class InsertRoomScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    setRoom = (text) => {
        this.setState({
            name: text
        })
    }
    insert = async () => {
        const nameInput = this.state.name;
        const data = { name: nameInput };
        await this.props.insertRoom(data);
        await this.props.navigation.navigate('Room');
    }
    render() {

        return (
            <Container style={styles.container}>
                <Content>
                    <Item stackedLabel>
                        <Label style={styles.white_label}>Room Name</Label>
                        <Input onChangeText={this.setRoom} style={styles.setRoom} />
                    </Item>
                    <Button block onPress={this.insert}><Text>INSERT</Text></Button>
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
        insertRoom: (params) => dispatch(actionUsers.insertRoom(params))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InsertRoomScreen); 