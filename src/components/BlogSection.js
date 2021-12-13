import React from "react"

function BlogSection() {
    return (
        <div className='cards'>
            {/* <h1>Why is it suggested?</h1> */}
            <div className='lblog'>
                <img src="images/b4.jpg" alt="" />
                <div>
                    <h1>Thinking of a great trip?</h1>
                </div>
            </div>
            <div className='rblog'>
                <div>
                    <h1>Buy the best ticket with us very easily</h1>
                </div>
                <img src="images/b1.jpg" alt="" />
            </div>
            <div className='lblog'>
                <img src="images/b3.jpg" alt="" />
                <div>
                    <h1>Comes with free transit</h1>
                </div>
            </div>
            <div className='rblog'>
                <div>
                    <h1>As easy as that:)</h1>
                </div>
                <img src="images/b5.jpg" alt="" />
            </div>
        </div>
    )
}

export default BlogSection