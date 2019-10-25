import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image, Share } from 'react-native';
import { Icon, Item, Input, List, ListItem, Thumbnail, Left, Body, Right, Button, Content, Header, Container, Title } from 'native-base';
import Slideshow from 'react-native-image-slider-show';
import { connect } from 'react-redux'
import axios from 'axios';

import * as actionUsers from '../../redux/actions/actionUsers'

class DetailScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        const { navigation } = this.props;
        const id = navigation.getParam('itemId', 'Unknown Profile');
        this.props.handleEpisode(id);
    }

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        const titleHead = params.head ? params.head : 'COMMIC COLLECTORS';
        const shareOptions = {
            title: titleHead,
            message: titleHead,
            url: titleHead,
            subject: titleHead
        };
        return {
            title: titleHead,
            headerRight: (<Icon type="FontAwesome" name="share-alt" onPress={() => { Share.share(shareOptions); }} />)
        }
    };
    render() {
        const datates = this.props.episodeLocal.episode;
        const { navigation } = this.props;
        const imgageHead = navigation.getParam('image', 'Unknown Profile');

        return (
            <Container>
                <Content>
                    <View>
                        <SafeAreaView>
                            <Image style={{ borderRadius: 10, width: '100%', height: 200, borderWidth: 5, borderColor: 'rgb(34,193,195)', padding: 20, marginBottom: 10 }}
                                source={{ uri: imgageHead }}

                            />
                            <FlatList data={datates} renderItem={({ item }) => (
                                <ListItem thumbnail>
                                    <Left>
                                        <Thumbnail style={{ borderRadius: 10, borderWidth: 5, borderColor: 'rgb(34,193,195)' }} source={{ uri: item.image }} />
                                    </Left>
                                    <Body>
                                        <Text style={{ color: '#ffa21f' }} onPress={() => { this.props.navigation.navigate('Detail_Ep', { webtoonId: item.id_webtoon.toString(), episodesId: item.id.toString() }) }}>{item.title}</Text>
                                    </Body>
                                </ListItem>
                            )} />
                        </SafeAreaView>
                    </View>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        episodeLocal: state.episode
    }

}

const mapDispatchToProps = dispatch => {
    return {
        handleEpisode: (params) => dispatch(actionUsers.handleEpisode(params))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailScreen); 