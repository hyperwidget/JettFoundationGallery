'use strict';

/**
 * GET /images
 *
 * @description
 * list of things
 *
 */
exports.find = function (req, res) {
  console.log('Get');
  return res.status(200).json(testJson)
  // Thing.find(function(err, things) {
  //   if (err) {
  //     return next(err);
  //   }
  //   return res.status(200).json(things);
  // });

};

var testJson =
  [{ id: 1, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14099318_1783608118591244_4070961_n.jpg?ig_cache_key=MTMyNDk1NjkwMzU5NjIzMjkyMw%3D%3D.2' }, 
  { id: 2, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14027283_302037656830962_408979627_n.jpg?ig_cache_key=MTMyNDk4NTczNzgwODcxNTQ3Mw%3D%3D.2' }, 
  { id: 3, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p750x750/14063676_1946131265613524_46444315_n.jpg?ig_cache_key=MTMyNDkzMDU2MjMwMTgyMjc0NQ%3D%3D.2' }, 
  { id: 4, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14134967_110523832734202_580520169_n.jpg?ig_cache_key=MTMyNDk0MjM5MTA0NDMwMTU2OQ%3D%3D.2' }, 
  { id: 5, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14099770_1110357952363317_147541195_n.jpg?ig_cache_key=MTMyNDk0Mzc0NzY5OTkzMDc5NA%3D%3D.2' }, 
  { id: 6, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14135019_171885673221224_534207667_n.jpg?ig_cache_key=MTMyNDkzMDMzNTY4MjY5MzkwNg%3D%3D.2' },
  { id: 1, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14099318_1783608118591244_4070961_n.jpg?ig_cache_key=MTMyNDk1NjkwMzU5NjIzMjkyMw%3D%3D.2' }, 
  { id: 2, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14027283_302037656830962_408979627_n.jpg?ig_cache_key=MTMyNDk4NTczNzgwODcxNTQ3Mw%3D%3D.2' }, 
  { id: 3, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p750x750/14063676_1946131265613524_46444315_n.jpg?ig_cache_key=MTMyNDkzMDU2MjMwMTgyMjc0NQ%3D%3D.2' }, 
  { id: 4, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14134967_110523832734202_580520169_n.jpg?ig_cache_key=MTMyNDk0MjM5MTA0NDMwMTU2OQ%3D%3D.2' }, 
  { id: 5, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14099770_1110357952363317_147541195_n.jpg?ig_cache_key=MTMyNDk0Mzc0NzY5OTkzMDc5NA%3D%3D.2' }, 
  { id: 6, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14135019_171885673221224_534207667_n.jpg?ig_cache_key=MTMyNDkzMDMzNTY4MjY5MzkwNg%3D%3D.2' },
  { id: 1, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14099318_1783608118591244_4070961_n.jpg?ig_cache_key=MTMyNDk1NjkwMzU5NjIzMjkyMw%3D%3D.2' }, 
  { id: 2, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14027283_302037656830962_408979627_n.jpg?ig_cache_key=MTMyNDk4NTczNzgwODcxNTQ3Mw%3D%3D.2' }, 
  { id: 3, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p750x750/14063676_1946131265613524_46444315_n.jpg?ig_cache_key=MTMyNDkzMDU2MjMwMTgyMjc0NQ%3D%3D.2' }, 
  { id: 4, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14134967_110523832734202_580520169_n.jpg?ig_cache_key=MTMyNDk0MjM5MTA0NDMwMTU2OQ%3D%3D.2' }, 
  { id: 5, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14099770_1110357952363317_147541195_n.jpg?ig_cache_key=MTMyNDk0Mzc0NzY5OTkzMDc5NA%3D%3D.2' }, 
  { id: 6, url: 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/14135019_171885673221224_534207667_n.jpg?ig_cache_key=MTMyNDkzMDMzNTY4MjY5MzkwNg%3D%3D.2' }];