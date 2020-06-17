const got = require('got');

exports.roundLinks = function(req, res) {
    res.render('index', {title: 'Season 2020'})
};

(async () => {
    try {
        const response = await got('https://api.squiggle.com.au/?q=games');
        const parsed = JSON.parse(response.body);
        gamesArray = parsed.games;
    } catch (error) {
        console.log(error); 
    }   
})();

exports.getRound1 = function(req, res) {
    const round =[];
    gamesArray.forEach(element => {
        if (element.round === 1 && element.year === 2020) {
            round.push(element)
        }     
    });
    res.render('round_detail', {title: 'Round 1', round})
}

exports.getRound2 = function(req, res) {
    const round =[];
    gamesArray.forEach(element => {
        if (element.round === 2 && element.year === 2020) {
            round.push(element)
        }     
    });
    res.render('round_detail', {title: 'Round 2', round})
}

exports.getRound3 = function(req, res) {
    const round =[];
    gamesArray.forEach(element => {
        if (element.round === 3 && element.year === 2020) {
            round.push(element)
        }     
    });
    res.render('round_detail', {title: 'Round 3', round})
}

exports.getRound4 = function(req, res) {
    const round =[];
    gamesArray.forEach(element => {
        if (element.round === 4 && element.year === 2020) {
            round.push(element)
        }     
    });
    res.render('round_detail', {title: 'Round 4', round})
}

exports.getRound5 = function(req, res) {
    const round =[];
    gamesArray.forEach(element => {
        if (element.round === 5 && element.year === 2020) {
            round.push(element)
        }     
    });
    res.render('round_detail', {title: 'Round 5', round})
}