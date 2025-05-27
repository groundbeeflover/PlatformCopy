import Link from "next/link";
import {ArrowLeftIcon} from "lucide-react";
import {getArticleData} from "../../../../../lib/announcement";
import Footer from "app/components/Footer";

type Params = Promise<{slug: string}>


const Announcement = async (props: {params: Params}) => {
    const params = await props.params;
    const slug = params.slug;
    const articleData = await getArticleData(slug)

    return (
        <div className="bg-white">
        <section className="mx-auto w-10/12 mt-20 flex flex-col gap-5 bg-white">
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
