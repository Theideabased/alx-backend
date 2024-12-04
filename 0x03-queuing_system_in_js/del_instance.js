import redis  from 'redis';
const client = redis.createClient();

const key = 'HolbertonSchools';
client.del(key, (err, reply) => {
	if (err) {
		console.error("Error deleting key: ", err);
	} else {
		console.log(`Deleted key reply: ${reply}`);
	}
});
