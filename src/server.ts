// Import the framework and instantiate it
import Fastify from "fastify";
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
  return { hello: "world" };
});

startServer(); // Run the server!
