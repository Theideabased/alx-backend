import redis from 'redis'
import util from 'util'

const client = util.promisify(redis.createClient());

client.on("error", function (error) {
	console.log("Redis client not connected to the server:", error);
});
client.on("connect", function (error) {
	console.log("Redis client connected to the server");
});
async function setNewSchool(schoolName, value) {
	await client.set(schoolName, value, redis.print);
};

async function displaySchoolValue(schoolName) {
	await client.get(schoolName, redis.print);
};

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
