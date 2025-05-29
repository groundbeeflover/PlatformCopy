"use client"
import React from 'react'
import {Body, H1} from "../../design-system/formatting"
import {Accordion} from "../../components/accordion"
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const FAQ = () => {
    return (
        <div className="bg-white">
            <Navbar/>
            <Body>
            <H1>FAQ</H1>
            {FAQDATA.map((data, i) => <div key={i}>
                <Accordion
                    Header={data.question}
                    Main={data.answer}>
                </Accordion>
            </div>)}
            </Body>
            <Footer/>
        </div>
    )
}
export default FAQ


const FAQDATA = [
    {
        "question" : "What is maasec?",
        "answer" : "MaaSec is the only ACM Student Chapter in the Netherlands, founded at Maastricht University. It creates opportunities for students to engage with cybersecurity through workshops, open-source development, and international competitions. Rooted in both academic and applied perspectives, MaaSec supports students in exploring the field and contributing to meaningful, student-led initiatives."
    },
    {
        "question" : "What does maasec do?",
        "answer" : "We organize workshops on reverse engineering, safe coding, and cloud security, and host expert lectures to share cutting-edge knowledge. We represent Maastricht University in CTF competitions and run training sessions for students. We offer free security consulting to startups, support student-led research with mentorship and resources, and publish open-source tools. We also take part in national cybersecurity exercises and represent the university at hackathons and specialized events."
    },
    {
        "question" : "What is MaaSec’s mission and what values does it stand for?",
        "answer" : "MaaSec is dedicated to hands-on learning, open collaboration, and real-world impact. Our mission is to bridge the gap between academic research and practical cybersecurity application. We provide students with tools, challenges, and mentorship to help them grow into ethical hackers, builders, and future cybersecurity leaders. By combining theory with practice, we prepare students to tackle real-world security challenges with confidence and integrity."
    },
    {
        "question" : "Do I need to be an expert to join or take part in MaaSec activities?",
        "answer" : "Not at all! You don't need any prior experience--just curiosity and motivation. We welcome learners at all levels and provide guidance and resources to help you grow"
    },
    {
        "question" : "How can I join?",
        "answer" : "You can shoot us an email (see footer) join our discord (link on home page) or join our WhatsApp group!"
    }, 

]
