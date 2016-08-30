'use strict';
var request = require('request');
var fs = require('fs');
var path = require('path');
var pemFile = path.resolve(__dirname, '../../../mykey.pem');
var tokenFile = path.resolve(__dirname, '../../../token');
var jwt = require('jsonwebtoken');

/**
 * GET /images
 *
 * @description
 * list of things
 *
 */
exports.find = function () {
  console.log('Get');
  refreshToken();
  // return res.status(200).json(testJson)
};


function refreshToken() {
  var date = new Date();
  var jwto;
  var hour = date.getTime() + (date.getHours() * 60 * 60 * 1000);
  var key = fs.readFileSync(pemFile);
  var assertion = {
    'iss': 'devugc@service.account',
    'exp': parseInt(hour.toString().substring(0, 10)),
    'iat': parseInt(new Date().getTime().toString().substring(0, 10)),
  };

  jwto = jwt.sign(assertion, key, { algorithm: 'RS256' });

  request.post({
    url: 'https://www.socialpatrol.net/service/oauth2/token',
    json: {
      'grant_type': 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      'assertion': jwto
    }
  }, function (error, response, body) {
    if (!error) {
      fs.writeFile(tokenFile, body.access_token);
      console.log(body.access_token);
    }
  });
}

// var testJson =
//   [{ id: 1, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14099318_1783608118591244_4070961_n.jpg?ig_cache_key=MTMyNDk1NjkwMzU5NjIzMjkyMw%3D%3D.2' },
//     { id: 2, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14027283_302037656830962_408979627_n.jpg?ig_cache_key=MTMyNDk4NTczNzgwODcxNTQ3Mw%3D%3D.2' },
//     { id: 3, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p750x750/14063676_1946131265613524_46444315_n.jpg?ig_cache_key=MTMyNDkzMDU2MjMwMTgyMjc0NQ%3D%3D.2' },
//     { id: 4, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14134967_110523832734202_580520169_n.jpg?ig_cache_key=MTMyNDk0MjM5MTA0NDMwMTU2OQ%3D%3D.2' },
//     { id: 5, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14099770_1110357952363317_147541195_n.jpg?ig_cache_key=MTMyNDk0Mzc0NzY5OTkzMDc5NA%3D%3D.2' },
//     { id: 6, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14135019_171885673221224_534207667_n.jpg?ig_cache_key=MTMyNDkzMDMzNTY4MjY5MzkwNg%3D%3D.2' },
//     { id: 1, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14099318_1783608118591244_4070961_n.jpg?ig_cache_key=MTMyNDk1NjkwMzU5NjIzMjkyMw%3D%3D.2' },
//     { id: 2, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14027283_302037656830962_408979627_n.jpg?ig_cache_key=MTMyNDk4NTczNzgwODcxNTQ3Mw%3D%3D.2' },
//     { id: 3, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p750x750/14063676_1946131265613524_46444315_n.jpg?ig_cache_key=MTMyNDkzMDU2MjMwMTgyMjc0NQ%3D%3D.2' },
//     { id: 4, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14134967_110523832734202_580520169_n.jpg?ig_cache_key=MTMyNDk0MjM5MTA0NDMwMTU2OQ%3D%3D.2' },
//     { id: 5, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14099770_1110357952363317_147541195_n.jpg?ig_cache_key=MTMyNDk0Mzc0NzY5OTkzMDc5NA%3D%3D.2' },
//     { id: 6, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14135019_171885673221224_534207667_n.jpg?ig_cache_key=MTMyNDkzMDMzNTY4MjY5MzkwNg%3D%3D.2' },
//     { id: 1, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14099318_1783608118591244_4070961_n.jpg?ig_cache_key=MTMyNDk1NjkwMzU5NjIzMjkyMw%3D%3D.2' },
//     { id: 2, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14027283_302037656830962_408979627_n.jpg?ig_cache_key=MTMyNDk4NTczNzgwODcxNTQ3Mw%3D%3D.2' },
//     { id: 3, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p750x750/14063676_1946131265613524_46444315_n.jpg?ig_cache_key=MTMyNDkzMDU2MjMwMTgyMjc0NQ%3D%3D.2' },
//     { id: 4, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14134967_110523832734202_580520169_n.jpg?ig_cache_key=MTMyNDk0MjM5MTA0NDMwMTU2OQ%3D%3D.2' },
//     { id: 5, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14099770_1110357952363317_147541195_n.jpg?ig_cache_key=MTMyNDk0Mzc0NzY5OTkzMDc5NA%3D%3D.2' },
//     { id: 6, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14135019_171885673221224_534207667_n.jpg?ig_cache_key=MTMyNDkzMDMzNTY4MjY5MzkwNg%3D%3D.2' }];