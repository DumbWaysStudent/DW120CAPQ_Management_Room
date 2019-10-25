import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image, Share } from 'react-native';
import { Icon, Item, Input, List, ListItem, Thumbnail, Left, Body, Right, Button, Content, Header, Container, Title, Form, Label } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class Creation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banners: [{
                title: '1.cover.png',
                date: '-',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            }, {
                title: '2.introduction.png',
                date: '-',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            }, {
                title: '3.empty.png',
                date: '-',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            }
            ]
        };
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: 'white' }}>
                    <Left>
                        <Icon type="FontAwesome" onPress={() => { this.props.navigation.navigate('Update'); }} active name="arrow-left" style={{ color: "black" }} />
                    </Left>
                    <Body>
                        <Title style={{ color: 'black' }} >Add Image</Title>
                    </Body>
                    <Right>
                        <Icon type="FontAwesome" name="check" onPress={() => { this.props.navigation.navigate('Crtn') }} />
                    </Right>
                </Header>
                <Content style={styles.container}>
                    <Form>
                        <Item stackedLabel>
                            <Label>Name</Label>
                            <Input />
                        </Item>
                        <Text>Add Images</Text>
                        <FlatList data={this.state.banners} renderItem={({ item }) => (
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
                        <Button block light>
                            <Text>+ ADD Image</Text>
                        </Button>
                        <Button block danger>
                            <Text>- Delete Episode</Text>
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
