import Fastify from 'fastify'
const fastify = Fastify({
  logger: false
})

import FastifyStatic from "@fastify/static";
import FastifyView from "@fastify/view";
import path from "path";
import pug from "pug";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 3000



await fastify.register(
  import('@fastify/compress'),
  { global: true }
)

fastify.register(FastifyStatic, {
  root: path.resolve(__dirname, "dist"),
  prefix: "/" // optional: default '/'
});

fastify.register(FastifyView, {
  engine: {
    pug: pug
  },
  options: {cache:true},
});

// fastify.get('/', (req, reply) => {
//   reply.view('/src/assets/pug/index.pug', { text: 'text' });
// });

fastify.listen({ port: port, host: "0.0.0.0" }, (err) => {
  if (err) throw err;
  console.log(`server listening on http://localhost:${fastify.server.address().port}`);
});