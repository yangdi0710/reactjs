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
// - Chỉ gọi callback một lần sau khi component mounted

// useEffect(callback, [dependencies])
// - Callback sẽ được gọi lại mỗi khi dependencies (deps) thay đổi

//----------------------------------------------------------------
// 1. Callback luôn được gọi sau khi component mounted
// 2. Cleanup luôn được gọi trước khi component unmounted


const tabs = ['posts', 'comments', 'albums']

function Content() {

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [ShowGoToTop, setShowGoToTop] = useState(false)

    // console.log(type);

    useEffect(() => {
        console.log('title changed');
        // document.title = title

        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            . then(posts => {
                setPosts(posts)
            })
    }, [type])

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY >= 300){
                //Show
                setShowGoToTop(true)
            } else {
                //Hide
                setShowGoToTop(false)
            }

            //setShowGoToTop(window.scrollY >= 200)
        }

        window.addEventListener('scroll', handleScroll)
        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
            
        }

    }, [])

    return (
        <div>

            {tabs.map(tab => (
                <button 
                    key={tab}
                    style={type === tab ? {
                        color: 'white',
                        backgroundColor: '#000',
                    } : {}}
                    onClick={() => setType(tab)}
                    
                >
                    {tab}
                </button>
            ))}

            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
            {ShowGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        bottom: 20,
                        right: 20
                    }}
                >
                    Go to top!
                </button>
            )}
        </div>
    )
}

export default Content