'use client'

import Image from "next/image"
import Link from "next/link"
import {useRouter} from "next/navigation"

export const dynamic = 'force-dynamic'

export default function ListItem({result}) {
    console.log(JSON.parse(result)[0])
    const router = useRouter()

    return (
    <div className="list-bg">
        {
            JSON.parse(result).map((a, i) => {
                return (
                    <div className="list-item" key={i}>
                        <Image src={'/Thumbnail.png'} alt="썸네일" width={50} height={50}/>
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