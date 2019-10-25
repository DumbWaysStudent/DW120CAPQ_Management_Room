import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import { Icon, Item, Input, List, ListItem, Thumbnail, Left, Body, Right, Button, Content, Header, Container, Title, Fab } from 'native-base';
import { connect } from 'react-redux'

import * as actionUsers from '../../redux/actions/actionUsers'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banners: []
        };
        this.setState({ banners2: this.state.banners });
    }
    auth = async () => {
        await this.props.handleProfile();
        //await this.props.navigation.navigate('Crtn');
    }
    render() {
        const { navigation } = this.props;
        const name_profile = navigation.getParam('name', 'Unknown Profile');
        const photo_profile = navigation.getParam('source', '');

        return (
            <Container>
                <Header style={{ backgroundColor: 'white' }}>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ color: 'black' }} >Profile</Title>
                    </Body>
                    <Right>
                        <Icon onPress={() => { this.props.navigation.navigate('Eprofile'); }} active name="create" style={{ color: "black" }} />
                    </Right>
                </Header>
                <Content>
                    <View style={styles.container}>
                        <View
                            style={[styles.avatar, styles.avatarContainer, { marginTop: 100 }]}>

                            <Image style={styles.avatar} />

                        </View>
                        <View style={{ width: '100%', marginTop: 30 }}>
                            <Text style={{ alignItems: "center", textAlign: "center", marginBottom: 30 }}>{name_profile}</Text>
                            <ListItem onPress={() => { this.props.navigation.navigate('Crtn') }} style={{ backgroundColor: '#b5b3b3' }} icon>
                                <Body>
                                    <Text>My Webtoon Cretion</Text>
                                </Body>
                                <Right>
                                    <Icon active name="create" />
                                </Right>
                            </ListItem>
                            <ListItem style={{ backgroundColor: '#b5b3b3' }} icon>
                                <Body>
                                    <Text>Log out</Text>
                                </Body>
                                <Right>

                                </Right>
                            </ListItem>
                        </View>
                    </View>

                </Content>
            </Container >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        borderRadius: 75,
        width: 150,
        height: 150,
    },
});

const mapStateToProps = state => {
    return {
        profileLocal: state.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleProfile: () => dispatch(actionUsers.handleProfile())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
