const SITE_URL = 'https://arthursfriedchicken.com'

export const seo = ({
    title,
    description,
    keywords,
    image,
    link,
}: {
    title: string
    description?: string
    image?: string
    keywords?: string
    link?: string
}) => {
    const tags = [
        { title },
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },

        { name: 'og:type', content: 'website' },
        { name: 'og:title', content: title },
        { name: 'og:description', content: description },
        { name: 'og:url', content: `${SITE_URL}${link || ''}` },

        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:url', content: `${SITE_URL}${link || ''}` },

        ...(image
            ? [
                { name: 'twitter:image', content: image },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'og:image', content: image },
            ]
            : []),
    ]

    return tags
}