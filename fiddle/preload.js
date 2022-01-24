const request = require('request');

search = async function(user) {
    url = "https://osu.ppy.sh/api/get_user?k=&u=" + user;
    const done = await request({
    url: url,
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
}, (response, error, body)=> {
  results = JSON.parse(body);
  console.log(error.statusCode);
  rank = document.getElementById('rank');
  countryrank = document.getElementById('countryrank');
  pp = document.getElementById('pp');
  rank.hidden = false;
  countryrank.hidden = false;
  pp.hidden = false;
  rank.innerHTML += ' ' + results[0].pp_rank;
  countryrank.innerHTML += ' ' + results[0].pp_country_rank;
  pp.innerHTML += ' ' + results[0].pp_raw;
});
}