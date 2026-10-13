import { createFileRoute, notFound } from '@tanstack/react-router'
import { getBlogBySlug } from '#/content/blogContent';
import { seo } from '#/utils/seo';

export const Route = createFileRoute('/blogs/$blogSlug')({
    loader: ({ params }) => {
        const blog = getBlogBySlug(params.blogSlug)
        if (!blog) throw notFound()
        return blog
    },
    head: ({ loaderData: post }) => {
        if (!post) return {}

        return {
            meta: [
                ...seo({
                    title: `AFC | ${post.title}`,
                    description: 'Read the latest blog post from Arthur’s Fried Chicken, featuring news, stories, events, promotions, and updates and more.',
                    image: post.image,
                    link: `/blogs${post.slug}`,
                }),
                { property: 'og:type', content: 'article' },
            ],
            links: [
                { rel: 'canonical', href: `https://arthursfriedchicken.com/blogs${post.slug}` },
                {
                    rel: "preload",
                    href: `${post.image}`,
                    as: "image",
                    fetchPriority: "high",
                }
            ],
        }
    },
    component: RouteComponent,
})

function RouteComponent() {
    const blogsData = Route.useLoaderData()

    return (
        <main className='min-w-0'>
            <section className='py-8'>
                <article className='page-wrap flex flex-col items-start gap-y-4'>
                    <img
                        src={blogsData.image}
                        alt={blogsData.alt}
                        width={1080}
                        height={720}
                        fetchPriority="high"
                        className='max-h-[70vh] object-cover rounded-xl shadow-xl border border-gray-400 mx-auto'
                    />
                    <div className=''>
                        <h2>{blogsData.title}</h2>
                        <p>{blogsData.date}</p>
                    </div>

                    <div className=''>
                        {blogsData.content.map((entry, index) => (
                            <p
                                key={index}
                                className='pb-4'
                            >
                                {entry}
                            </p>
                        ))}
                    </div>

                </article>
            </section>
        </main>
    )
}
