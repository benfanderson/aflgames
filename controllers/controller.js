const got = require('got');

exports.roundLinks = function(req, res) {
    (async () => {
        try {
            res.render('index', {title: 'Season 2020'})
        } catch (error) {
            console.log(error);
        }
    })()
    
}



exports.getRound1 = function(req, res) {
    (async () => {
        try {
            const response = await got('https://api.squiggle.com.au/?q=games');
            const parsed = JSON.parse(response.body);
            const gamesArray = parsed.games;
            const round1 =[];
            gamesArray.forEach(element => {
                if (element.round === 1 && element.year === 2020) {
                    round1.push(element)
                }     
            });
            res.render('round_detail', {title: 'Round 1', round: round1})
            
        } catch (error) {
            console.log(error);
        }
    })()
}

exports.getRound2 = function(req, res) {
    (async () => {
        try {
            const response = await got('https://api.squiggle.com.au/?q=games');
            const parsed = JSON.parse(response.body);
            const gamesArray = parsed.games;
            const round2 =[];
            gamesArray.forEach(element => {
                if (element.round === 2 && element.year === 2020) {
                    round2.push(element)
                }     
            });
            res.render('round_detail', {title: 'Round 2', round: round2})
            console.log(round2)
            
        } catch (error) {
            console.log(error);
        }
    })()
}

exports.getRound3 = function(req, res) {
    (async () => {
        try {
            const response = await got('https://api.squiggle.com.au/?q=games');
            const parsed = JSON.parse(response.body);
            const gamesArray = parsed.games;
            const round3 =[];
            gamesArray.forEach(element => {
                if (element.round === 3 && element.year === 2020) {
                    round3.push(element)
                }     
            });
            res.render('round_detail', {title: 'Round 3', round: round3})
            
        } catch (error) {
            console.log(error);
        }
    })()
}

exports.getRound4 = function(req, res) {
    (async () => {
        try {
            const response = await got('https://api.squiggle.com.au/?q=games');
            const parsed = JSON.parse(response.body);
            const gamesArray = parsed.games;
            const round4 =[];
            gamesArray.forEach(element => {
                if (element.round === 4 && element.year === 2020) {
                    round4.push(element)
                }     
            });
            res.render('round_detail', {title: 'Round 4', round: round4})
            
        } catch (error) {
            console.log(error);
        }
    })()
}

exports.getRound5 = function(req, res) {
    (async () => {
        try {
            const response = await got('https://api.squiggle.com.au/?q=games');
            const parsed = JSON.parse(response.body);
            const gamesArray = parsed.games;
            const round5 =[];
            gamesArray.forEach(element => {
                if (element.round === 5 && element.year === 2020) {
                    round5.push(element)
                }     
            });
            res.render('round_detail', {title: 'Round 5', round: round5})
            
        } catch (error) {
            console.log(error);
        }
    })()
}