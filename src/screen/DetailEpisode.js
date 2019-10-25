import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image, Share } from 'react-native';
import { Icon, Item, Input, List, ListItem, Thumbnail, Left, Body, Right, Button, Content, Header, Container, Title } from 'native-base';
import axios from 'axios';
import { connect } from 'react-redux'

import * as actionUsers from '../../redux/actions/actionUsers'

class DetailEpisode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banners: []
        };
    }
    async componentWillMount() {
        const { navigation } = this.props;
        const webtoonId = navigation.getParam('webtoonId', 'Unknown Profile');
        const episodesId = navigation.getParam('episodesId', 'Unknown Profile');
        await this.props.handleEpisodeDetail(2, 4);
    }
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const shareOptions = {
            title: 'Title',
            message: 'Message to share', // Note that according to the documentation at least one of "message" or "url" fields is required
            url: 'www.example.com',
            subject: 'Subject'
        };

        const { params } = navigation.state;
        return {
            title: params ? params.itemId : 'Title is NULL',
            headerRight: (<Icon type="FontAwesome" name="share-alt" onPress={() => { }} />)
        }
    };

    render() {
        const datates = this.props.episodeDetailLocal.detail[0].detaildata;
        // console.log('panji');
        // console.log(datates);
        return (
            <Content>
                <View>
                    <SafeAreaView>
                        <FlatList data={datates} renderItem={({ item }) => (
                            <Image style={{ width: '100%', height: 500, margin: 10 }}
                                source={{ uri: item.image }}
                            />
                        )} />
                    </SafeAreaView>
                </View>
            </Content>

        );
    }
}

const mapStateToProps = state => {
    return {
        episodeDetailLocal: state.episodeDetail
    }

}

const mapDispatchToProps = dispatch => {
    return {
        handleEpisodeDetail: (webtoonId, episodesId) => dispatch(actionUsers.handleEpisodeDetail(webtoonId, episodesId))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailEpisode); 
