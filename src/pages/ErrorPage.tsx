export default function ErrorPage() {
    return (
        <>
            <div className="w-full h-full flex flex-col gap-y-4 justify-center items-center">

                <div className="font-bold text-4xl dark:text-dark-100">Error 404: Page Not Found</div>
                <div className= "text-neutral-380 font-bold text-2xl dark:text-dark-380">make sure the url is correct</div>

            </div>
        </>
      )
}