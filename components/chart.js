import CoverImage from './cover-image'

export default function Chart({ heading, title, url, slug }) {

    return (
      <section className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 text-light-white">
            {heading}
        </h2>
        <div className="w-screen md:w-9/12 h-80">
            <iframe className=""
                    width = "100%"
                    height = "100%"
                    src={url} 
                    title={title}></iframe>
        </div>
      </section>
    )
  }
  