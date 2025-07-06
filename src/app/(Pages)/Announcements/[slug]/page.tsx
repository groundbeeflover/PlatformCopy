import Link from "next/link";
import {ArrowLeftIcon} from "lucide-react";
import {getArticleData, getArticleSlugs} from "../../../../../lib/announcement";
import Footer from "app/components/Footer";
import Navbar from "app/components/Navbar";



const Announcement = async ({params}: {params: Promise<{slug: string}>}) => {
    const {slug} = await params;
    const articleData = await getArticleData(slug)
    
    return (
        <div className="bg-white">
        <Navbar/>
            <section className="mx-auto w-10/12 mt-10 sm:mt-5 sm:flex flex-col lg:gap-5 sm:gap-2 md:gap-3">
            <div className="flex justify-between ">
                <Link href="/Announcements" className="text-black">
                    <ArrowLeftIcon width={20}/>
                    <p>Announcements</p>
                </Link>
                <p className="text-black">{articleData.date}</p>
            </div>
            <article className="article" dangerouslySetInnerHTML={{__html: articleData.contentHtml}}/>
        </section>
        <Footer />
        </div>

)
}

export default Announcement;

export async function generateStaticParams() {
    const slugs = await getArticleSlugs();
    return slugs.map((slug: string) => ({slug}));
}
