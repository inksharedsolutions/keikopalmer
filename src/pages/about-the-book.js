import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/Book_Cover.png'
import Book2 from '../../static/books/Book_Cover_02.png'


const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'keiko-palmer',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `Delayed Justice `,
                                spanFirst: ``,
                                imgSrc: Book1,
                                id: '',
                                content:
                                    `
                                        <p>
                                            A mysterious family tragedy tears loved ones apart for nearly two decades. 
                                            The criminals who meticulously plan the grand larceny and the airplane crash almost 
                                            get away with murder—until the incriminating evidence appears. The family reunite and lost 
                                            fortune is about to surface. It won’t be too long before Delayed Justice is served on a cold platter. 
                                        </p> 

                                    `,

                                ebooks: {
                                    stratton: 'https://www.stratton-press.com/books/delayed-justice/',
                                    barnes: 'https://www.barnesandnoble.com/w/delayed-justice-keiko-palmer/1133203341?ean=9781643457154',
                                    amazon: 'https://www.amazon.com/Delayed-Justice-Keiko-Palmer-ebook/dp/B07X4ZF58B/ref=sr_1_1?dchild=1&keywords=9781643457154&qid=1600227045&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Delayed-Justice-Keiko-Palmer/dp/1643455990/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1600227045&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/delayed-justice-keiko-palmer/1133203341?ean=9781643455990',
                                    booksamillion: 'https://www.booksamillion.com/p/Delayed-Justice/Keiko-Palmer/9781643455990?id=7997864620895',
                                }
                            }}
                        />

                        <BookInfo
                            data={{
                                title: `Family Secrets`,
                                spanFirst: ``,
                                imgSrc: Book2,
                                id: '',
                                content:
                                    `
                                        <p>
                                            Some families have one or two secrets that are buried for decades. 
                                            Once they are unveiled, happy endings take place. On the other hand, 
                                            some families have one or two dark secrets that stem from their lies, j
                                            ealousy, or criminal acts. Once they are forcefully unveiled, they face criminal charges 
                                            as a result. “What goes around comes around” comes true in life. 
                                        </p>
                                    `,

                                ebooks: {
                                    stratton: 'https://www.stratton-press.com/books/family-secrets/',
                                    barnes: 'https://www.barnesandnoble.com/w/family-secrets-keiko-palmer/1135498632?ean=9781643458007',
                                    amazon: 'https://www.amazon.com/Family-Secrets-Keiko-Palmer-ebook/dp/B082MTDJ5C/ref=sr_1_1?dchild=1&keywords=9781643458007&qid=1600229314&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Family-Secrets-Keiko-Palmer/dp/1643456458/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1600229314&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/family-secrets-keiko-palmer/1135498632?ean=9781643456454',
                                    booksamillion: 'https://www.booksamillion.com/p/Family-Secrets/Keiko-Palmer/9781643456454?id=7997864620895',
                                }
                            }}
                        />



                        <div className="commentSection">
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;