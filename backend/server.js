import Fastify from 'fastify';
import { SignUp} from './signUp.js';
import { login } from './login.js';

const fastify = Fastify({
    logger: true,
  });

// Signup route
fastify.post('/signup', async (request, reply) => {
    const message = await SignUp(request.body['username'],request.body['password'],request.body['confirmPassword']);
   
    reply.status(201).send({ message:message });
});

// Login route
fastify.post('/login', async (request, reply) => {
    const message = await login(request.body['username'],request.body['password']);
    reply.status(201).send({ message:message });
   
});

// Start the server
const start = async () => {
    try {
        await fastify.listen(3000);
        fastify.log.info(`Server running on port ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();