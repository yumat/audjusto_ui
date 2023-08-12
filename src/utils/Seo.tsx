import React from "react"

const Seo: React.FC<{ title: string; url: string; description: string }> = ({ title, url, description }) => {
    return (
        <>
            <title>{title}</title>
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title}/>
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Aujusto" />
            <meta property="og:locale" content="ja_JP" />
            <meta property="og:description" name="description" content={description} />
            <meta property="og:image" content="" />
        </>
    )
}

export default Seo