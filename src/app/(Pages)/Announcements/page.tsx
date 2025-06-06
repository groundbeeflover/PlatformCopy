import React from 'react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {AnnouncementArticleList} from "../../components/AnnouncementArticleList"
import {H1, Body} from "../../design-system/formatting"
import{getSortedAnnouncements} from "../../../../lib/announcement"



const Page = () => {
    const articlesMD = getSortedAnnouncements();
    return (
        <div className="bg-white">
            <Navbar />
            <Body> 
                <H1>Announcements</H1>
                {articlesMD !== null && (<AnnouncementArticleList articles={articlesMD} />)}
            </Body>
            <Footer />
        </div>

    )
}
export default Page
