import redis from 'redis';

const client = redis.createClient();

client.on("error", function(error) {
	console.error("Redis client not connected to the server: ", error);
});

client.on("connect", function() {
	console.log("Redis client connected to the server");
});

client.subscribe('holberton school');

client.on('message', (channel, message) => {
	if (message === 'KILL_SERVER') {
		client.unsubscribe('holberton school');
		clinet.quit();
	}else{
		console.log(`${message}`)};
});
