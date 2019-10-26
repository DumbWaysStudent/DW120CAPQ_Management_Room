import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import { Icon, Item, Input, List, ListItem, Thumbnail, Left, Body, Right, Button, Content, Header, Container, Title, Fab, Label } from 'native-base';
import { connect } from 'react-redux'

import * as actionUsers from '../../redux/actions/actionUsers'

class UpdateRoomScreen extends React.Component {
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
        const { navigation } = this.props;
        const id = navigation.getParam('id', '0');
        const nameInput = this.state.name;

        alert(id);
        alert(nameInput);

        const data = { name: nameInput };
        await this.props.updateRoom(id, data);
        // await this.props.navigation.navigate('Room');
    }
    render() {

        return (
            <Container style={styles.container}>
                <Content>
                    <Item stackedLabel>
                        <Label style={styles.white_label}>Room Name</Label>
                        <Input onChangeText={this.setRoom} style={styles.setRoom} />
                    </Item>
                    <Button block onPress={this.insert}><Text>UPDATE</Text></Button>
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
        updateRoom: (params, body) => dispatch(actionUsers.updateRoom(params, body))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateRoomScreen); 