import { ClientProxy, ClientProxyFactory, Transport, MessagePattern } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import express, { Express } from 'express';

const app: Express = express();

const client: ClientProxy = ClientProxyFactory.create({
    transport: Transport.TCP,
    options: {
        host: 'localhost',
        port: 3002,
    },
});

async function main() {
    await client.connect();

    client.emit({cmd : 'product'}, { name: 'T' });


}

main();