import redis from 'redis'

const client = redis.createClient();

const schools = {
	Portland: '50',
	Seattle: '80',
	'New York': '20',
	Bogota: '20',
	Cali: '40',
	Paris: '2'
	};

const key = 'HolbertonSchools';
try {
	for (const prop in schools) {
		const result = client.hset(key, prop, schools[prop], redis.print);
	}
	client.hgetall(key, (err, res) => {
	if (err) {
	console.error("Error fetching data:", err);
	} else{
	console.log(res);
	}
	});
}
catch(error) {
	console.error(error);
}
