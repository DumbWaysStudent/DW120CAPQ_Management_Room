import React, { Component } from 'react';
import { StyleSheet, TextInput, Image, AsyncStorage } from 'react-native';
import { connect } from 'react-redux'
import { Text, View, Container, Header, Content, Form, Item, Input, Label, Button, Icon } from 'native-base';
import axios from 'axios';

import * as actionUsers from '../../redux/actions/actionUsers'

class LoginScreen extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            button: false,
            swaptext: true,
            error: ""
        };
    }

    async componentWillMount() {
        // await AsyncStorage.getItem('token', (error, result) => {
        //     if (result) {
        //         this.props.navigation.navigate('Home')
        //         console.log('ok');
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
            if (email != "" && password != "") {
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
            if (email != "" && password != "") {
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
        if (this.props.loginLocal.login.status == 'ok') {
            const userid = this.props.loginLocal.login.id;
            const status = this.props.loginLocal.login.status;
            const token = this.props.loginLocal.login.token;

            AsyncStorage.setItem('token', token)
            AsyncStorage.setItem('userid', userid)
            this.props.navigation.navigate('Home')
        } else {
            const failed = this.props.loginLocal.login.failed;
            this.setState({
                error: failed
            })
            //console.log('nok');
        }

    }

    auth = async () => {
        const passwordState = this.state.password;
        const emailState = this.state.email;

        const data = { username: emailState, password: passwordState };
        await this.props.handleLogin(data);
        await this.check();

    }
    render() {
        return (

            <Container>
                <View style={styles.container}>
                    <Text style={styles.login}>
                        HOTEL MELATI
                    </Text>
                    <Text style={styles.login_desc}>
                        Login With Your Account
                    </Text>
                    <Form>
                        <Item stackedLabel>
                            <Label style={styles.white_label}>Username</Label>
                            <Input onChangeText={this.setEmail} style={styles.emailFied} />
                        </Item>
                        <Item stackedLabel>
                            <Label style={styles.white_label}>Password</Label>
                            <Item>
                                <TextInput style={styles.fieldPassword} secureTextEntry={this.state.swaptext} onChangeText={this.setPassword} />
                                <Icon onPress={this.set_viewText} active type="Entypo" name={this.get_symbolText()} style={styles.password} />
                            </Item>
                        </Item>
                        <Button block style={this.getStatusLogin()} onPress={this.auth}><Text>LOGIN</Text></Button>
                    </Form>
                    <Text style={styles.error_label} >{this.state.error}</Text>
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
        backgroundColor: 'grey',
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
    //console.log('tess');
    return {
        loginLocal: state.login
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleLogin: (params) => dispatch(actionUsers.handleLogin(params))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen); 