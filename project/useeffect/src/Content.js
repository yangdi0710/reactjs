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
// 3. Cleanup luôn được gọi trước khi callback được gọi (trừ lần mounted)


// const tabs = ['posts', 'comments', 'albums']

// function Content() {

//     const [title, setTitle] = useState('')
//     const [posts, setPosts] = useState([])
//     const [type, setType] = useState('posts')
//     const [ShowGoToTop, setShowGoToTop] = useState(false)

//     // console.log(type);

//     useEffect(() => {
//         console.log('title changed');
//         // document.title = title

//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//             .then(res => res.json())
//             . then(posts => {
//                 setPosts(posts)
//             })
//     }, [type])

//     useEffect(() => {

//         const handleScroll = () => {
//             if (window.scrollY >= 300){
//                 //Show
//                 setShowGoToTop(true)
//             } else {
//                 //Hide
//                 setShowGoToTop(false)
//             }

//             //setShowGoToTop(window.scrollY >= 200)
//         }

//         window.addEventListener('scroll', handleScroll)
//         // Cleanup function
//         return () => {
//             window.removeEventListener('scroll', handleScroll)
            
//         }

//     }, [])

//     return (
//         <div>

//             {tabs.map(tab => (
//                 <button 
//                     key={tab}
//                     style={type === tab ? {
//                         color: 'white',
//                         backgroundColor: '#000',
//                     } : {}}
//                     onClick={() => setType(tab)}
                    
//                 >
//                     {tab}
//                 </button>
//             ))}

//             <input 
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//             <ul>
//                 {posts.map(post => (
//                     <li key={post.id}>{post.title || post.name}</li>
//                 ))}
//             </ul>
//             {ShowGoToTop && (
//                 <button
//                     style={{
//                         position: 'fixed',
//                         bottom: 20,
//                         right: 20
//                     }}
//                 >
//                     Go to top!
//                 </button>
//             )}
//         </div>
//     )
// }




// useEffect with timer functions

// function Content(){

//     const [countdown, setCountdown] = useState(180)

//     // useEffect(() => {
//     //     const timerId = setTimeout(() => {
//     //         setCountdown(countdown - 1)
//     //         console.log('countdown.')
//     //     }, 1000);

//     //     return () => clearTimeout(timerId)

//     // }, [countdown])

//     useEffect(() => {
//         const timerId = setInterval(() => {
//             setCountdown(prevState => prevState - 1)
//             console.log('countdown.')
//         }, 1000);

//         return () => clearInterval(timerId)

//     }, [])

//     // Cleanup function
//     return (
//         <div>
//             <h1>{countdown}</h1>
//         </div>
//     )
// }



// useEffect with preview avatar
// function Content(){

//     const [avatar, setAvatar] = useState()

//     useEffect(() => {
//         return () => {
//             avatar && URL.revokeObjectURL(avatar.preview)
//         }
//     }, [avatar])

//     const handlePreviewAvatar = (e) => {
//         const file = e.target.files[0]
        
//         file.preview = URL.createObjectURL(file)
//         setAvatar(file)
//         e.target.value = null
//         console.log("123");
//     }

//     return (
//         <div>
//             <input 
//                 type="file"
//                 onChange={handlePreviewAvatar} 
//             />
//             {avatar && 
//             <img src={avatar.preview} alt="" style={{width: 500}}/>}
//         </div>
//     )
// }



// useEffect with fake Chat App

const lessons = [
    {
        id: 1,
        name: 'Bai hoc 1'
    },
    {
        id: 2,
        name: 'Bai hoc 2'
    },
    {
        id: 3,
        name: 'Bai hoc 3'
    }
]

function Content(){

    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {

        const handleListenComment = ({ detail }) => {
            console.log(detail);
        }

        window.addEventListener(`lesson-${lessonId}`, handleListenComment)

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleListenComment)
        }

    }, [lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ? 'red' : '#333',
                            cursor: 'pointer'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                    {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Content