import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://cmj10301:skekdlaak12@cluster0.drwdp.mongodb.net/forum?retryWrites=true&w=majority&appName=Cluster0'
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url).connect()
}
export { connectDB }