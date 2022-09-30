const amqplib = require("amqplib");

let messageNumber = 0;

(async () => {
  const conn = await amqplib.connect("amqp://localhost:5672");
  const channel = await conn.createChannel();
  const queue = "hello";
  setInterval(() => {
    console.log('Published in queue')
    channel.sendToQueue(queue, Buffer.from(`something to do ${messageNumber}`));
    messageNumber++;
  }, 1000);
})();
