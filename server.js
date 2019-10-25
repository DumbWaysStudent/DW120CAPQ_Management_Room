/*body parser*/
const bodyParser = require("body-parser");
/*jwt*/
const jwt = require('jsonwebtoken');
/*axios*/
const axios = require('axios');
/*group routes*/
require('express-group-routes');
/*express*/
const express = require("express");
const port = 5000;
const app = express();
/*model*/
const webtoons = require("./controllers/webtoons");
const episodes = require("./controllers/episodes");
const detailEpisodes = require("./controllers/detail");
const users = require("./controllers/users");
const userwebtoons = require("./controllers/userswebtoons");

//middlewares
const { authenticated } = require('./middleware');

app.use(bodyParser.json());
/*========================================================================*/

app.group("/api/v1", (router) => {
    //[API] : 15.for_you_implementation
    router.get('/webtoons/', webtoons.index);
    // [API] : 15.for_you_implementation
    router.get('/webtoons/favourite', webtoons.favorite);
    // [API] : 15.for_you_implementation
    router.get('/webtoons/find/:title', webtoons.find);
    // [API] : 16.for_you_implementation
    router.get('/webtoons/:id/episodes', episodes.episode);
    // [API] : 17.detail_episode_implementation
    router.get('/webtoons/:idWebtoon/episode/:idEpisode', episodes.detail);


    // [API] : 14.register_implementation
    router.post('/register', users.register);
    // [API] : 13.login_implementation
    router.post('/login', users.signin);
    // [API] : 19.search_webtoon_implementation 
    router.get('/webtoons?title=keyword', webtoons.index);
    // [API] : 18.favorite_implementation [autenticated]
    router.get('/webtoons?is_favorite=true', webtoons.index);
    // [API] : 20.my_webtoon_creation_implementation
    router.get('/users/:id/webtoons/', webtoons.data);
    // [API] : 21.my_webtoon_creation_implementation  
    router.post('/users/:createdBy/webtoon', webtoons.insert);
    // [API] : 22.update_detail_my_webtoon_implementation
    router.put('/users/:createdBy/webtoon/:id', webtoons.update);
    // [API] : 22.update_detail_my_webtoon_implementation
    router.get('/users/:createdBy/webtoon/:id/episodes', webtoons.episode);
    // [API] : 23.delete_my_webtoon_implementation
    router.delete('/users/:createdBy/webtoon/:id', webtoons.delete);
    // [API] :24.create_my_episode_implementation
    router.post('/users/:id/webtoon/:id_webtoon/episode', episodes.insert);
    // [API] :25.update_detail_my_episode_implementation
    router.put('/users/:userid/webtoon/:id_webtoon/episode/:id', episodes.update);
    // [API] : 26.delete_my_episode_implementation
    router.delete('/users/:userid/webtoon/:id_webtoon/episode/:id', episodes.delete);
    //[API] : 27.create_image_implementation
    router.post('/users/:userid/webtoon/:id_webtoon/episode/:id/image', detailEpisodes.insert);
    //[API] : 28.delete_image_implementation
    router.delete('/users/:userid/webtoon/:id_webtoon/episode/:episodeid/image/:id', detailEpisodes.delete);
    //[API] : 28.delete_image_implementation
    router.get('/users/:userid/favourite', userwebtoons.index);
    router.get('/users/:userid/favourite/:keyword/find', userwebtoons.find);

})

/*========================================================================*/

/*listing port*/
app.listen(port, () => console.log('connected'));  