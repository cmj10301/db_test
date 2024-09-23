export default function Write() {
    return (
        <div className="p-20">
            <h4>글작성</h4>
            <form action="/api/post/new" method="POST">
                <input name="title" placeholder="글 제목을 입력해주세요."></input>
                <input name="content" placeholder="글 내용을 입력해주세요."></input>
                <button type="submit">버튼</button>
            </form>

            <form action="/api/post/sign" method="POST">
                <input name="user_id" placeholder="아이디"></input>
                <input name="user_password" placeholder="비밀번호"></input>
                <button type="submit">회원가입</button>
            </form>
        </div>
    )
}