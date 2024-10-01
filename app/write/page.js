import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"

export default async function Write() {
    let session = await getServerSession(authOptions)
    return (
        <div className="p-20">
            <h4>글작성</h4>
            <form action="/api/post/new" method="POST">
                <input name="title" placeholder="글 제목을 입력해주세요."></input>
                <input name="content" placeholder="글 내용을 입력해주세요."></input>
                {
                    !session ? <input name="password" placeholder="글 비밀번호 입력"/> : null
                }
                <button type="submit">글작성</button>
            </form>
        </div>
    )
}