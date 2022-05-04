import React from 'react'

const Message = () => {
    return (
        <>
            <div className="parent-msg">
                <div className="grid-msg-container">
                    <div className="grid-msg-1">
                        <h2>Do you have any queries? suggestions and/ or messages?</h2>
                    </div>
                    <div className="grid-msg-2">
                        <section className="name-email">
                            <label htmlFor="Name">
                                <h3>Name</h3>
                                <input type="text" id="Name" />
                            </label>
                            <label htmlFor="Email">
                                <h3>Email</h3>
                                <input type="text" id="Email" />
                            </label>
                        </section>
                        <section className="message-box">
                            <label htmlFor="Message">
                                <h3>Message</h3>
                                <textarea id="Message" name="story" rows="2" cols="33">
                                </textarea>
                            </label>
                            <br />

                            {/* {to add btn functionality} */}
                            <button>Submit</button>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Message