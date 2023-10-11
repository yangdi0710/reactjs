import { useEffect, useState } from "react"


// Events: add/ remove event listener
// Observer pattern: Subscribe/ Unsubscribe
// Closure
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted/ Unmounted
// ===
// Call API


/**
1. Update DOM
    - F8 blog title
2. Call API
3. Listen DOM events
    - Scroll
    - Resize
4. Cleanup
    - Remove listener/ unsubscribe
    - Clear timer
 */


// useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM
// useEffect(callback, [])
// useEffect(callback, [dependency])

//----------------------------------------------------------------
// 1. Callback luôn được gọi sau khi component mounted



function Content() {

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        // document.title = title

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            . then(posts => {
                setPosts(posts)
            })
    })

    return (
        <div>
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content