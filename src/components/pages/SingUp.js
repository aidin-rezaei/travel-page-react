import React from "react"
import { Button } from "../Button"


function SingUp() {
    return (
        <>
            <div className="hero-container2">
                <video src="/videos/video-1.mp4" autoPlay loop muted />
                <h1>ADVENTURE AWAITS</h1>
                <p>What are you waiting for?</p>
                <div className="hero-btns">
                    <div className='input-areas2'>
                        <form>
                            <input type="email" name='email' placeholder='Your Email' className='footer-input' /><br />
                            <input type="password" name='password' placeholder='Your Password' className='footer-input' /><br />
                            <div>
                                <Button buttonStyle='btn--outline'>Sign Up</Button>
                                <Button buttonStyle='btn--primary'>Log in</Button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )

}

export default SingUp