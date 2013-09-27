/*
 * GET home page.
*/
var targets = [
        'students',
        'terrorists',
        'beneficiaries',
        'single mothers',
        'paedophiles',
        'immigrants',
        'the elderly',
        'Māori',
        'teenagers'
    ],
    actions = [
        'imprison',
        'get tough on',
        'drug test',
        'ban',
        'crush',
        'crack down on',
        'sterilise',
        'imprison'
    ],
    specials = ['mention royal family', 'photo op with all blacks', 'woman\'s weekly cover'],
    _ = require('underscore');

exports.index = function(req, res) {
    var target = _.first(_.shuffle(targets)),
        action = _.first(_.shuffle(actions)),
        special = _.first(_.shuffle(specials)),
        options = {};

    if (_.random(1, 4) === 1) {
        options.special = special;
    } else {
        options.target = target;
        options.action = action;
    }

    res.render('index', options);
};
