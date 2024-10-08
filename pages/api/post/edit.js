import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(요청, 응답) {
    if (요청.method == 'POST') {
        let 바꿀거 = { title : 요청.body.title, content : 요청.body.content}
        if (요청.body.title == '') {
            응답.status(500).json('수정 불가')
        } else {
            const db = (await connectDB).db("forum")
            let result = await db.collection('post').updateOne({_id : new ObjectId(요청.body._id)}, {$set : 바꿀거})
            응답.status(200).redirect('/list')
        }
    }     
}