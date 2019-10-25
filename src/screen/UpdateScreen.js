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
                title: 'Eps 3',
                date: '12 September 2019',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            }, {
                title: '1 September 2019',
                date: 'Eps 2',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            }, {
                title: 'Eps 1',
                date: '12 September 2019',
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
                        <Icon type="FontAwesome" onPress={() => { this.props.navigation.navigate('Crtn'); }} active name="arrow-left" style={{ color: "black" }} />
                    </Left>
                    <Body>
                        <Title style={{ color: 'black' }} >Add Image</Title>
                    </Body>
                    <Right>
                        <Icon type="FontAwesome" name="check" onPress={() => { this.props.navigation.navigate('UpdateImg') }} />
                    </Right>
                </Header>
                <Content style={styles.container}>
                    <Form>
                        <Item stackedLabel>
                            <Label>Title</Label>
                            <Input />
                        </Item>
                        <FlatList data={this.state.banners} renderItem={({ item }) => (
                            <ListItem thumbnail>
                                <Left>
                                    <Thumbnail square source={{ uri: item.image }} />
                                </Left>
                                <Body>
                                    <Text style={{ textAlign: 'left' }}>{item.title}</Text>
                                    <Text style={{ textAlign: 'left' }}>{item.date}</Text>
                                </Body>
                            </ListItem>
                        )} />
                        <Button block light>
                            <Text>+ ADD Episode</Text>
                        </Button>
                        <Button block danger>
                            <Text>- Delete Webtoon</Text>
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
