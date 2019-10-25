import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image, Share } from 'react-native';
import { Icon, Item, Input, List, ListItem, Thumbnail, Left, Body, Right, Button, Content, Header, Container, Title, Form, Label } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { connect } from 'react-redux'

import * as actionUsers from '../../redux/actions/actionUsers'

class CreateImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            field: "",
            field2: "https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90",
            data: [],
            episode: 1,
        };
    }
    setText = async (text) => {
        await this.setState({
            field: text
        })
        //await console.log(this.state.field);
    }

    insertText = () => {
        const dataObject = this.state.data;
        const pageField = this.state.field;
        const imageField = this.state.field2;
        const object = {};
        object.page = pageField;
        object.image = imageField;
        dataObject.push(object);
        this.setState({
            data: dataObject,
            field: "",
        });
        console.log(this.state.data);
    }

    auth = async () => {
        await this.insertText();
        await this.props.handleCreateDetail(this.state.data);
        //await this.props.navigation.navigate('Crtn');
    }

    save = async () => {
        //console.log(this.props.createDetailLocal.createdetail); 
        await this.props.handleDataDetail(this.props.createDetailLocal.createdetail);
        await this.props.navigation.navigate('Crt');
    }

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('title', 'NO-ID');
        return (
            <Container>
                <Header style={{ backgroundColor: 'white' }}>
                    <Left>
                        <Icon type="FontAwesome" onPress={() => { this.props.navigation.navigate('Crt'); }} active name="arrow-left" style={{ color: "black" }} />
                    </Left>
                    <Body>
                        <Title style={{ color: 'black' }} >Add Image</Title>
                    </Body>
                    <Right>
                        <Icon type="FontAwesome" name="check" onPress={this.save} />
                    </Right>
                </Header>
                <Content style={styles.container}>
                    <Form>
                        <Item stackedLabel>
                            <Label>Page Name</Label>
                            <Input value={this.state.field} onChangeText={this.setText} placeholder="Type your text here" />
                        </Item>
                        {/* <Text>Add Images</Text> */}
                        <FlatList data={this.state.data} renderItem={({ item }) => (
                            <ListItem thumbnail>
                                <Left>
                                    <Thumbnail square source={{ uri: item.image }} />
                                </Left>
                                <Body>
                                    <Button small danger style={{ width: 50 }}>
                                        <Text style={{ marginLeft: 5 }}>Delete</Text>
                                    </Button>
                                    <Text style={{ textAlign: 'left' }}>{item.title}</Text>
                                </Body>
                            </ListItem>
                        )} />
                        {/* <Button block light>
                            <Text>+ ADD Image</Text>
                        </Button> */}
                        <Button block onPress={this.auth} >
                            <Text>+ ADD Detail</Text>
                        </Button>
                        <Button block onPress={this.save} >
                            <Text>SAVE</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const mapStateToProps = state => {
    return {
        createDetailLocal: state.createDetail
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleCreateDetail: (params) => dispatch(actionUsers.handleCreateDetail(params)),
        handleDataDetail: (params) => dispatch(actionUsers.handleDataDetail(params))

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateImage);