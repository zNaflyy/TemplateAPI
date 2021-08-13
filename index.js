const fetch = require('node-fetch');

const headers = {
	'Content-Type': 'application/json',
	Accept: 'application/json',
	'Accept-Encoding': 'gzip, deflate, br',
	Connection: 'keep-alive',
	'X-Requested-With': 'Repl.it',
	Referrer: 'https://repl.it',
	Origin: 'https://repl.it'
};

var getData = async function(username) {
	let info = await fetch('https://repl.it/graphql', {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query:
				`{userByUsername(username: "${username}") {karma, firstName, lastName, bio, isVerified, timeCreated, isLoggedIn, organization {name}, subscription {planId}, roles { name }}}`
		})
	}).then(res => res.json());
	console.log(info.data.userByUsername)
};

//Replace this with the username you want!
getData('[username]');

