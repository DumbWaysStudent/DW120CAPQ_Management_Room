import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image, AsyncStorage } from 'react-native';
import { Icon, Item, Input, List, ListItem, Thumbnail, Left, Body, Right, Button, Content, Header, Container, Title } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { connect } from 'react-redux'
import axios from 'axios';
import * as actionUsers from '../../redux/actions/actionUsers'

class Favourite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banners2: [],
            id: 0
        };
    }

    async componentWillMount() {
        await AsyncStorage.getItem('userid', (error, result) => {
            this.setState({
                id: result
            })
            console.log(result);
        });

        await this.props.handleMyfavourite(this.state.id);
        await this.setData();
    }

    setData = () => {
        this.setState({
            banners2: this.props.myfavouriteLocal.myfovourite
        })
    }

    setSearch = () => {
        //console.log('faagggg :' + this.props.mysrcfavouritecLocal.srcmyfavourite);
        this.setState({
            banners2: this.props.mysrcfavouritecLocal.srcmyfavourite
        })
    }

    searching = async (text) => {
        const id = this.state.id;
        await console.log(text);
        await this.props.handleSrcMyfavourite(id, text);
        await this.setSearch();
    }

    // searchFilter = (text) => {
    //     if (text.trim() == "") {
    //         this.setState({ banners2: this.state.banners });
    //     } else {
    //         const new_data = this.state.banners.filter(item => {
    //             const textData = text.toUpperCase();
    //             const title_up = item.desc.toUpperCase();
    //             const caption_up = item.title.toUpperCase();
    //             //const item_data = { title: title_up, cation: caption_up }
    //             if (title_up.indexOf(textData) > -1 || caption_up.indexOf(textData) > -1) {
    //                 return item;
    //             }
    //         });
    //         this.setState({ banners2: new_data });
    //     }
    // }

    render() {
        return (
            <Content>
                <View>
                    <Item style={{ marginBottom: 15 }}>
                        <Input placeholder='Search' onChangeText={this.searching} />
                        <Icon type="MaterialIcons" name="search" />
                    </Item>
                </View>
                <SafeAreaView>
                    <FlatList data={this.state.banners2} renderItem={({ item }) => (
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: item.WebtoonData.image }} />
                            </Left>
                            <Body>
                                <Text style={{ textAlign: 'left' }}>{item.WebtoonData.title}</Text>
                                <Text style={{ textAlign: 'left' }}>{item.WebtoonData.genre}</Text>
                            </Body>
                        </ListItem>
                    )} />
                </SafeAreaView>
            </Content>
        );
    }
}

const mapStateToProps = state => {
    return {
        myfavouriteLocal: state.myfavourite,
        mysrcfavouritecLocal: state.mysrcfavourite
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleMyfavourite: (params) => dispatch(actionUsers.handleMyfavourite(params)),
        handleSrcMyfavourite: (id, params) => dispatch(actionUsers.handleSrcMyfavourite(id, params))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Favourite); 