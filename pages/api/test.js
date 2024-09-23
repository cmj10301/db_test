import { connectDB } from "@/util/database"

export default async function handler(요청, 응답) {
    if (요청.method == 'GET') {
        const db = (await connectDB).db("forum")
        let result = await db.collection('post').find().toArray()
        응답.status(200).json(result)
        응답.status(200).json({name: '안녕'})
    }
    if (요청.method == 'POST') {
        응답.status(200).json({name: '바보'})
    }
}