const Userswebtoons = require('../models').userswebtoons;
const Webtoons = require('../models').webtoons;

const Sequelize = require('sequelize');
const Op = Sequelize.Op

exports.index = (req, res) => {
    const id = req.params.userid;
    Userswebtoons.findAll({
        where: {
            createdBy: id
        },
        include: [{
            model: Webtoons,
            as: 'WebtoonData'
        }]
    }).then(favourites => res.send(favourites));
};

exports.find = (req, res) => {
    const id = req.params.userid;
    const keyword = req.params.keyword;

    Userswebtoons.findAll({
        where: {
            createdBy: id
        },
        include: [{
            model: Webtoons,
            as: 'WebtoonData',
            where: { title: { [Op.substring]: keyword } }
        }]
    }).then(favourites => res.send(favourites));
}; 