import { Icon } from "@iconify/react";
import ContentLayout from "../../layouts/ContentLayout";

export default function Resume() {
    return (
        <ContentLayout title="Resume">

            <a href="/resume.pdf" download={true} className="flex items-center gap-x-2 btn-1 px-3 py-2 w-fit font-bold text-lg mb-8">
                <Icon icon={"icon-park-solid:download-three"} width={"1.5rem"}/>
                Download
            </a>

            <div className="brutalist">
                <iframe width={"100%"} height={"600"} src="/resume.pdf" title="Warren Wu's Resume">
                </iframe>
            </div>

        </ContentLayout>
    )
}