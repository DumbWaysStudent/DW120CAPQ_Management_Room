import React, { Component } from 'react';
import { StyleSheet, TextInput, Image, AsyncStorage } from 'react-native';
import { connect } from 'react-redux'
import { Text, View, Container, Header, Content, Form, Item, Input, Label, Button, Icon } from 'native-base';
import axios from 'axios';

import * as actionUsers from '../../redux/actions/actionUsers'

class RegisterScreen extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            button: false,
            swaptext: true
        };
    }
    async componentWillMount() {
        // await AsyncStorage.getItem('token', (error, result) => {
        //     if (result) {
        //         this.props.navigation.navigate('Home')
        //         console.log('token cek ok');
        //     }
        // }); 
    }
    setEmail = (text) => {
        this.setState({
            email: text
        })
        this.Validate('email', text);
    }
    setPassword = (text) => {
        this.setState({
            password: text
        })
        this.Validate('password', text);
    }
    Validate(field, value) {
        if (field == "email") {
            const email = value;
            const password = this.state.password;
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && password != "") {
                this.setState({
                    button: true
                })
            } else {
                this.setState({
                    button: false
                })
            }
        } else {
            const email = this.state.email;
            const password = value;
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && password != "") {
                this.setState({
                    button: true
                })
            } else {
                this.setState({
                    button: false
                })
            }
        }
    }
    set_viewText = () => {
        if (this.state.swaptext == true) {
            this.setState({
                swaptext: false
            })
        } else {
            this.setState({
                swaptext: true
            })
        }
    }
    getStatusLogin() {
        if (this.state.button == true) {
            return { display: 'flex', margin: 15, backgroundColor: '#ffa21f', borderColor: '#fc990d', color: 'white' };
        } else {
            return { display: 'none', margin: 15 };
        }
    }
    get_symbolText = () => {
        if (this.state.swaptext == true) {
            return "eye";
        } else {
            return "eye-with-line";
        }
    }

    check = () => {
        if (this.props.registerLocal.register.status == 'ok') {
            const userid = this.props.registerLocal.register.id;
            const status = this.props.registerLocal.register.status;
            const token = this.props.registerLocal.register.token;

            AsyncStorage.setItem('token', token)
            AsyncStorage.setItem('userid', userid)
            //this.props.navigation.navigate('Home')
            console.log('nav to home');
        }
    }

    auth = async () => {
        const passwordState = this.state.password;
        const emailState = this.state.email;

        const data = { username: emailState, password: passwordState };
        await this.props.handleRegister(data);
        await this.check();
    }

    render() {
        return (

            <Container>
                <View style={styles.head}>
                    <Button bordered light style={styles.buttonRegiser} onPress={() => { this.props.navigation.navigate('Login') }}>
                        <Text style={styles.textRegister}>LOGIN</Text>
                    </Button>
                </View>
                <View style={styles.container}>
                    <Text style={styles.login}>
                        COMIC COLLECTORS
                    </Text>
                    <Text style={styles.login_desc}>
                        Register Member
                    </Text>
                    <Form>
                        <Item stackedLabel>
                            <Label style={styles.white_label}>Email</Label>
                            <Input onChangeText={this.setEmail} style={styles.emailFied} />
                        </Item>
                        <Item stackedLabel>
                            <Label style={styles.white_label}>Password</Label>
                            <Item>
                                <TextInput style={styles.fieldPassword} secureTextEntry={this.state.swaptext} onChangeText={this.setPassword} />
                                <Icon onPress={this.set_viewText} active type="Entypo" name={this.get_symbolText()} style={styles.password} />
                            </Item>
                        </Item>
                        <Button block style={this.getStatusLogin()} onPress={this.auth}><Text>REGISTER</Text></Button>
                    </Form>
                </View>
            </Container >
        );
    }
}
/*styling css*/
const styles = StyleSheet.create({
    password: { width: '10%', color: 'white' },
    fieldPassword: { width: '90%', color: 'white' },
    emailFied: { color: 'white' },
    buttonRegiser: { margin: 5, backgroundColor: '#ffa21f', borderColor: '#fc990d' },
    head: { justifyContent: 'flex-end', alignItems: 'flex-end', backgroundColor: 'rgb(34,193,195)' },
    textRegister: { color: 'white' },
    image: { width: 120, height: 130, marginBottom: 10 },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(34,193,195)',
    },
    login: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 2,
        color: 'white'
    },
    login_desc: {
        fontSize: 15,
        textAlign: 'center',
        margin: 10,
        color: 'white',
    },
    white_label: {
        color: 'white',
        borderWidth: 0
    },
    error_label: {
        fontSize: 15,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        margin: 10,
        color: 'white',
    },
});

const mapStateToProps = state => {
    return {
        registerLocal: state.register
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleRegister: (params) => dispatch(actionUsers.handleRegister(params))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterScreen); 