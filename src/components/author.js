import React from 'react'
import AuthorImg from '../../static/author/main_author.jpg'

const Author = () => {
    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <p>
                            Keiko Palmer grew up on the island of Okinawa as Japanese and
                            completed her college education during the US military occupation
                            of the island. Widowed with two grown children and retired as a public
                            school teacher in Georgia, she now writes and travels.
                        </p>

                        <h1 className="author-name-tag">
                            <span>Keiko</span>
                            <span>Palmer</span>
                        </h1>

                        <span className="author-tagline">
                            Author & Writer
                        </span>

                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;