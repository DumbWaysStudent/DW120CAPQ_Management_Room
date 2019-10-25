import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image, Share } from 'react-native';
import { connect } from 'react-redux'
import { Icon, Item, Input, List, ListItem, Thumbnail, Left, Body, Right, Button, Content, Header, Container, Title, Form, Label } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import * as actionUsers from '../../redux/actions/actionUsers'

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banners: [],
            title: "",
            field: "",
        };
    }

    setText = async (text) => {
        await this.setState({
            field: text
        })

    }

    auth = async () => {
        await this.props.navigation.navigate('DetailImg');
    }



    savewebtoon = async () => {
        // const params = { 
        //     title: this.state.field,
        //     genre: 'image',
        //     image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
        //     createdBy: '1'
        // }
        // await this.props.handleSaveWebtoon(params)
        // await console.log(this.props.saveWebtoonLocal.saveWebtoon);
        alert(this.props.createDetailLocal.createEps.length);
    }

    async componentDidMount() {
        await this.props.handleSaveEps();
        await this.props.handleSaveDetailEps();
    }

    render() {
        // const { navigation } = this.props;
        // const itemdetail = navigation.getParam('itemDetail', '-');
        // if (itemdetail != '-') {
        //     console.log(itemdetail);
        //     console.log('ok');
        // }
        const dataAll = this.props.createDetailLocal.createEps;
        return (
            <Container>
                <Header style={{ backgroundColor: 'white' }}>
                    <Left>
                        <Icon type="FontAwesome" onPress={this.auth} active name="arrow-left" style={{ color: "black" }} />
                    </Left>
                    <Body>
                        <Title style={{ color: 'black' }} >Profile</Title>
                    </Body>
                    <Right>
                        <Icon type="FontAwesome" name="check" onPress={this.savewebtoon} />
                    </Right>
                </Header>
                <Content style={styles.container}>
                    <Form>
                        <Item stackedLabel>
                            <Label>Title</Label>
                            <Input value={this.state.field} onChangeText={this.setText} placeholder="Type your text here" />
                        </Item>
                        <FlatList data={dataAll} renderItem={({ item }) => (
                            <ListItem thumbnail>
                                <Left>
                                    <Thumbnail square source={{ uri: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90' }} />
                                </Left>
                                <Body>
                                    <Text style={{ textAlign: 'left' }}>Episode</Text>
                                </Body>
                            </ListItem>
                        )} />
                        <Button block light onPress={this.auth}>
                            <Text>+ ADD Episode ok</Text>
                        </Button>
                        {/* <Icon type="FontAwesome" name="check" onPress={this.props.navigation.navigate('DetailImg')} /> */}
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
        createLocal: state.create,
        createDetailLocal: state.createDetail,
        saveWebtoonLocal: state.saveWebtoon
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleCreate: () => dispatch(actionUsers.handleCreate()),
        handleSaveWebtoon: (params) => dispatch(actionUsers.handleSaveWebtoon(params)),
        handleSaveEps: () => dispatch(actionUsers.handleSaveEps()),
        handleSaveDetailEps: () => dispatch(actionUsers.handleSaveDetailEps())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Create); 