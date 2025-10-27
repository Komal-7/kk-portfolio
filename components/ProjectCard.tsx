"use client";

export default function ProjectCard({image}:{image:string}){
    return (
        <div className="w-full md:w-5/6">
            <div className="relative group w-full aspect-video overflow-hidden rounded-lg shadow-lg z-0 hover:z-20 transition-all duration-300">
                <img
                    src={"/"+image+".png"}
                    alt="Project Screenshot"
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-70 dark:brightness-40 contrast-125 transition-all duration-500 group-hover:brightness-100 group-hover:grayscale-0"
                />
                <video
                    src={"/"+image+".mov"}
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                    }}
                />
            </div>
        </div>
    )
}