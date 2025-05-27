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
        "answer" : "Maasec is a student organization from maastricht university interested in all things software, but with a focus on cybersecurity."
    },
    {
        "question" : "What does maasec do?",
        "answer" : "We organize and participate in hackathons, participate in CTF events, help students work on cybersecurity related projects and organize events where students can learn about various things in cybersecurity."
    },
    {
        "question" : "How can I join?",
        "answer" : "You can shoot us an email, (see footer) join our discord (link on home page) and contact one of the founding members!"
    }, 

]