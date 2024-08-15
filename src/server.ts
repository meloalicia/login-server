// Import the framework and instantiate it
import Fastify from "fastify";
import { getDBConnection } from "../database/config";
const fastify = Fastify({
  logger: true,
});

async function startServer() {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

// Declare a route
fastify.get("/", async function handler(request, reply) {
  const users = getDBConnection()("users");
  const results = await users.where("name", "Yuri").first();
  reply.send(`tomar sorvete ${results.name}`);
});

startServer(); // Run the server!
