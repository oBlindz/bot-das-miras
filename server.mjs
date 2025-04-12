// Dependencies
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

// Dotenv
dotenv.config();

// .env variables
const user = process.env.MONGO_USER;
const uri = process.env.MONGO_URL;

// Client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

// Mongo connect
async function connect() {
  try {
    await client.connect();
    await client.db(user).command({ping: 1});
  } catch (err) {
    console.error(err);
  };
};

async function close() {
  try {
    client.close();
  } catch (err) {
    console.error(err);
  };
};
//connect();

// Miras

// Miras memes
async function memeSo2(){
  connect();
  try {
    const database = client.db('standoff2');
    const collection = database.collection('mirameme');

    const query = {id: 0};
    const mira = await collection.findOne(query);

    console.log(mira);
    close();
  } catch (err) {
    console.error(err);
  };
};
memeSo2();
