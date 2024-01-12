import { Icon } from "@iconify/react/dist/iconify.js";

export default function LoadingPage() {
    return (
        <>
            <div className="w-full h-full flex justify-center items-center">

                <div className="flex jusitfy-center text-4xl gap-x-4 font-bold">

                    <Icon icon={"mingcute:loading-3-fill"} className="animate-spin"/>

                    Loading...

                </div>

            </div>
        </>
      )
}