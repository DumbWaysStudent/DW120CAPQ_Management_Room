import React from 'react';
import { Icon, Item, Input, List, ListItem, Thumbnail, Left, Body, Right, Button, Content, Header, Container, Title, Fab } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
    Image,
    PixelRatio,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';

export default class App extends React.Component {
    state = {
        avatarSource: null,
        name: 'unknown Profile'
    };

    constructor(props) {
        super(props);
        this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    }

    setName = (text) => {
        this.setState({
            name: text
        })
    }

    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
            },
        };

        ImagePicker.showImagePicker(options, response => {
            //console.log('Response = ', response);
            console.log(response.data);
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                //let source = { uri: response.uri };

                // You can also display the image using data:
                let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                });
            }
        });
    }
    render() {
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
                        <Icon type="FontAwesome" onPress={() => { this.props.navigation.navigate('Prof', { name: this.state.name, source: this.state.avatarSource }); }} active name="check" style={{ color: "black" }} />
                    </Right>
                </Header>
                <Content>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                            <View
                                style={[styles.avatar, styles.avatarContainer, { marginBottom: 20 }]}>
                                {this.state.avatarSource === null ? (
                                    <Text>Select a Photo</Text>
                                ) : (
                                        <Image style={styles.avatar} source={this.state.avatarSource} />
                                    )}
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Input style={{ textAlign: "center", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "grey" }} placeholder='Profile Name' onChangeText={this.setName} />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40%'
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        borderRadius: 75,
        width: 150,
        height: 150,
    },
});