const got = require('got');
var gamesArray; 

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
    const round1 =[];
    gamesArray.forEach(element => {
        if (element.round === 1 && element.year === 2020) {
            round1.push(element)
        }     
    });
    res.render('round_detail', {title: 'Round 1', round: round1})
}

exports.getRound2 = function(req, res) {
    const round2 =[];
    gamesArray.forEach(element => {
        if (element.round === 2 && element.year === 2020) {
            round2.push(element)
        }     
    });
    res.render('round_detail', {title: 'Round 2', round: round2})
}

exports.getRound3 = function(req, res) {
    const round3 =[];
    gamesArray.forEach(element => {
        if (element.round === 3 && element.year === 2020) {
            round3.push(element)
        }     
    });
    res.render('round_detail', {title: 'Round 3', round: round3})
}

exports.getRound4 = function(req, res) {
    const round4 =[];
    gamesArray.forEach(element => {
        if (element.round === 4 && element.year === 2020) {
            round4.push(element)
        }     
    });
    res.render('round_detail', {title: 'Round 4', round: round4})
}

exports.getRound5 = function(req, res) {
    const round5 =[];
    gamesArray.forEach(element => {
        if (element.round === 5 && element.year === 2020) {
            round5.push(element)
        }     
    });
    res.render('round_detail', {title: 'Round 5', round: round5})
}