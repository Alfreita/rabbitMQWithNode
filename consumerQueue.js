const amqplib = require("amqplib");

(async () => {
  const conn = await amqplib.connect("amqp://localhost:5672");
  const channel = await conn.createChannel();
  const queue = "hello";

  channel.consume(queue, (msg) => {
    if (msg !== null) {
      console.log("Recieved:", msg.content.toString());
      channel.ack(msg);
    } else {
      console.log("Consumer cancelled by server");
    }
  });
})();
