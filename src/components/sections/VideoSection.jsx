import { video } from "../../data/video"
import { videoTag } from "../../data/video"
import Heading from "../layout/Heading"
import Tag from "../ui/Tag"

export default function VideoSection () {
    return (
        <div className="my-10 flex flex-col items-center gap-10 bg-pure-white p-6 md:p-16 lg:px-24 lg:pb-20">
            <h4 className="text-center font-body text-base font-medium text-title md:text-left lg:text-2xl">{video.title}</h4>
            <div className="flex h-72 w-full items-center justify-center rounded-2xl bg-alice-blue lg:w-11/12">
                <div className="flex size-24 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-pure-blue to-light-blue">
                    <img src={video.play}/>
                </div>
            </div>
            <Heading title={video.subtitle} paragraph={video.paragraph} variant="primary" />
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:flex-wrap">
                {videoTag.map((tag, index) => (
                    <Tag key={index} icon={tag.icon} title={tag.title} description={tag.description}/>
                ))}
            </div>
        </div>
    )
}