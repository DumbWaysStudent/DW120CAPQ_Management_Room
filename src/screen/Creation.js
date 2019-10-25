import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image, Share, AsyncStorage } from 'react-native';
import { Icon, Item, Input, List, ListItem, Thumbnail, Left, Body, Right, Button, Content, Header, Container, Title } from 'native-base';

import axios from 'axios';
import { connect } from 'react-redux'
import * as actionUsers from '../../redux/actions/actionUsers'

class Creation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banners: [],
            token: null,
            user: null,
        };
    }

    async componentWillMount() {
        // await AsyncStorage.getItem('token', (error, result) => {
        //     if (result) {
        //         this.setState({
        //             token: result
        //         });
        //     }
        // });

        // await AsyncStorage.getItem('userid', (error, result) => {
        //     if (result) {
        //         this.setState({
        //             user: result
        //         });
        //     }
        // });

        //await console.log('token' + this.state.token);
        //await console.log('ID Usesrs : ' + this.state.user);
        // config = {
        //     headers: { 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE1NzEwNDQxNTV9.oTMoGwz40ZmMVDzKX7xNn409TMR0yxjs77f2yuf5t9Y' }
        // };
        //http://192.168.0.66:5000/api/v1/users/1/webtoons
        //await axios.get('http://192.168.0.66:5000/api/v1/webtoons') 
        // await axios.get('http://192.168.0.66:5000/api/v1/users/' + this.state.user + '/webtoons', {
        //     headers: { 'Authorization': 'Bearer ' + this.state.token }
        // })
        //     .then((response) => {
        //         const banners = response.data;
        //         this.setState({ banners });
        //     }
        //     )
        //     .catch(function (error) {
        //         console.log(error);
        //     })
    }

    componentDidMount() {
        this.props.handleCreation();
    }

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: 'MY Webtoon'
        }
    };

    render() {
        const datates = this.props.creationLocal.creation;
        return (
            <Container>

                <Content style={styles.container}>
                    <View>
                        <SafeAreaView>
                            {/* <Text>{itemId}</Text> */}
                            <FlatList data={datates} renderItem={({ item }) => (
                                <ListItem thumbnail>
                                    <Left>
                                        <Thumbnail square source={{ uri: item.image }} />
                                    </Left>
                                    <Body>
                                        <Text onPress={() => {
                                            this.props.navigation.navigate('Update');
                                        }} style={{ textAlign: 'left' }}>{item.title}</Text>
                                        <Text style={{ textAlign: 'left' }}>{item.episode}</Text>
                                    </Body>
                                </ListItem>
                            )} />
                        </SafeAreaView>
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "center" }}><Button style={{ width: 50, height: 50, borderRadius: 30, marginTop: 40 }} title="Go to Details"
                        onPress={() => {
                            this.props.navigation.navigate('Crt');
                        }} >
                        <Icon name="add" />
                    </Button></View>
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
        creationLocal: state.creation
    }

}

const mapDispatchToProps = dispatch => {
    return {
        handleCreation: () => dispatch(actionUsers.handleCreation())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Creation);