'use client'

import Link from "next/link"

export const dynamic = 'force-dynamic'

export default function ListItem({result}) {
    console.log(JSON.parse(result)[0])

    return (
    <div className="list-bg">
        {
            JSON.parse(result).map((a, i) => {
                console.log(i)
                return (
                    <div className="list-item" key={i}>
                        <h4>{a._id.toString()}</h4>
                        <Link href={'/detail/' + a._id}>
                          <h4>{a.title}</h4>
                        </Link>
                        <Link href={'/edit/' + a._id}>수정</Link>
                        <span onClick={(e) =>
                            fetch('/api/post/delete', {method : 'DELETE', body : a._id})
                            .then((r) => r.json())
                            .then(() => {
                                e.target.closest('.list-item').classList.add('hidden');
                            })
                        }>삭제</span>
                        <p>1월 1일</p>
                    </div>
                )
            })
        }
      </div>
    )
}