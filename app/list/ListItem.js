'use client'

import Link from "next/link"

export default function ListItem({result}) {
    return (
    <div className="list-bg">
        {
            JSON.parse(result).map((a, i) => {
                return (
                    <div className="list-item" key={i}>
                        
                        console.log(result)
                        <h4>{a._id.toString()}</h4>
                        <Link href={'/detail/' + result[i]._id}>
                          <h4>{result[i].title}</h4>
                        </Link>
                        <Link href={'/edit/' + result[i]._id}>수정</Link>
                        <span onClick={() =>
                            fetch('/api/post/delete', {method : 'DELETE', body : result[i]._id})
                        }>삭제</span>
                        <p>1월 1일</p>
                    </div>
                )
            })
        }
      </div>
    )
}