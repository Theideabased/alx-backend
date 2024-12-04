import redis from 'redis';
import {promisify} from 'util';

const client = redis.createClient();

client.on("error", function (error) {
	console.log("Redis client not connected to the server:", error);
});
client.on("connect", function (error) {
	console.log("Redis client connected to the server");
});

const getAsync = promisify(client.get).bind(client);

function setNewSchool(schoolName, value) {
	client.set(schoolName, value, redis.print);
};

async function displaySchoolValue(schoolName) { 
	try { 
		const value = await getAsync(schoolName); 
		redis.print(null, value); } 
	catch (error) { 
		console.error("Error fetching school value:", error); 
	}
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
