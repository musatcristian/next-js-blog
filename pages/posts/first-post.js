import Link from "next/link";

export default function FirstPost() {
    return <>
        <h1>
            First Post Page
        </h1>
        <h2>
             <Link href="/">{`<=`} Home</Link>
        </h2>
    </>
}