'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function DetailLink() {
    let router = useRouter()
    let a = usePathname()
    console.log(a)
    let b = useSearchParams()
    console.log(b)
    return(
        <button onClick={() => { router.prefetch('/detail/')}}></button>
    )
}