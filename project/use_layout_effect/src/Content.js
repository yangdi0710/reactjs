import { useState, useEffect, useLayoutEffect } from "react"

/**
 * useEffect
 * 1. Cập nhật lại state
 * 2. Cập nhật DOM (mutated)
 * 3. Render lại UI
 * 4. Gọi cleanup nếu deps thay đổi
 * 5. Gọi useEffect callback
 */

/**
 * useLayoutEffect
 * 1. Cập nhật lại state
 * 2. Cập nhật DOM (mutated)
 * 3. Gọi cleanup nếu deps thay đổi (sync)
 * 4. Gọi useLayoutEffectEffect callback (sync)
 * 5. Render lại UI
 */

function Content(){

    const [count, setCount] = useState(0)

    useLayoutEffect(() => {
        if(count > 3){
            setCount(0)
        }
    })

    const handleCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button
                onClick={handleCount}
            >
                Click
            </button>
        </div>
    )
}


export default Content