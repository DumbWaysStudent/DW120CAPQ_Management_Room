import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Icon, Item, Input, List, ListItem, Thumbnail, Left, Body, Right, Button, Content, Header, Container, Title } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Slideshow from 'react-native-image-slider-show';
import { connect } from 'react-redux'
import axios from 'axios';

import * as actionTodos from '../../redux/actions/actionTodos'
import * as actionUsers from '../../redux/actions/actionUsers'

import Favourite from './Favourite';
import Profile from './Profile';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banners: [],
            favouriteData: [],
            position: 1,
            interval: null,
            dataSource: [],
            datAll: {},
        };
    }

    set_datAall() {
        this.setState({
            datAll: this.props.usersLocal.users
        })
    }
    set_slide = () => {
        const dataSlide = this.state.dataSource;
        if (this.props.usersLocal.users.length > 3) {
            for (let i = 0; i < 3; i++) {
                const slide = { url: this.props.usersLocal.users[i].image };
                dataSlide.push(slide);
            }
        } else {
            for (let i = 0; i < this.props.usersLocal.users.length; i++) {
                const slide = { url: this.props.usersLocal.users[i].image };
                dataSlide.push(slide);
            }
        }
        this.setState({
            dataSource: dataSlide
        })

    }
    async componentDidMount() {
        await this.props.handleGetTodos();
        await this.props.getUser();
        await this.props.handleGetFav();
        //await this.props.handleSearch(); 
        await this.set_slide();
        await this.set_datAall();
    }

    async componentWillMount() {
        await this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 2000)
        });
    }
    componentWillUnmount() {
        clearInterval(this.state.interval);
    }
    //end slider 
    setSearch = () => {
        this.setState({
            datAll: this.props.searchLocal.search
        })
    }
    searching = async (text) => {
        await console.log(text);
        await this.props.handleSearch(text);
        await this.setSearch();
    }
    tes = () => {
        alert('tes');
    }
    render() {
        const datates = this.props.usersLocal.users;
        const favLocal = this.props.favLocal.favourite;
        return (
            <Content>
                <View style={styles.container}>
                    <Item style={{ marginBottom: 0 }}>
                        <Input onChangeText={this.searching} placeholder='Search Comics' />
                        <Icon type="MaterialIcons" name="search" />
                    </Item>
                    <Slideshow
                        dataSource={this.state.dataSource}
                        indicatorColor='rgb(34,193,195)'
                        indicatorSelectedColor='#fc990d'
                        position={this.state.position}
                        onPositionChanged={position => this.setState({ position })} />
                    <Text style={{ marginVertical: 15, marginLeft: 10, fontSize: 20 }}>Favourite Comics</Text>
                    <SafeAreaView>
                        <FlatList horizontal data={datates} renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('Detail', {
                                    itemId: item.id.toString(),
                                    head: item.title.toString(),
                                    image: item.image.toString()
                                });
                            }}>
                                <View style={{ width: 120, alignItems: 'center' }} >
                                    <Image style={{ borderRadius: 10, width: 100, height: 100, borderWidth: 5, borderColor: 'rgb(34,193,195)', padding: 20 }}
                                        source={{ uri: item.image }}

                                    />
                                    <Text style={{ textAlign: 'center', color: '#ffa21f' }}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>

                        )} />
                    </SafeAreaView>
                    <Text style={{ marginLeft: 10, fontSize: 20 }}>
                        All Comics
                    </Text>
                    <SafeAreaView>
                        <FlatList data={this.state.datAll} renderItem={({ item }) => (
                            <ListItem thumbnail>
                                <Left>
                                    <Thumbnail style={{ borderRadius: 10, borderWidth: 5, borderColor: 'rgb(34,193,195)' }} source={{ uri: item.image }} />
                                </Left>
                                <Body>
                                    <Text style={{ textAlign: 'left' }}>{item.title}</Text>
                                    <Button title="Go to Details"
                                        small primary iconLeft style={{ width: '40%', paddingRight: 5, backgroundColor: '#ffa21f' }}>
                                        <Icon name="star" style={{ color: 'rgb(34,193,195)' }} />
                                        <Text style={{ marginRight: 10 }}>Favourite</Text>
                                    </Button>
                                </Body>
                            </ListItem>
                        )} />
                    </SafeAreaView>
                </View>
            </Content>

        );
    }
}

/*styling css*/
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ebe8e8',
    },
});

const mapStateToProps = state => {
    return {
        todosLocal: state.todos,
        usersLocal: state.users,
        favLocal: state.favourite,
        searchLocal: state.search
    }

}

const mapDispatchToProps = dispatch => {
    return {
        handleGetTodos: () => dispatch(actionTodos.handleGetTodos()),
        getUser: () => dispatch(actionUsers.handleGetUsers()),
        handleGetFav: () => dispatch(actionUsers.handleGetFav()),
        handleSearch: (params) => dispatch(actionUsers.handleSearch(params))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);
