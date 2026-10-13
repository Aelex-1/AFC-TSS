import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { seo } from '#/utils/seo';

import { HOMESLIDEIMAGES } from '#/content/landingContent'
import { BLOGSDATA} from '#/content/blogContent';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      ...seo({
        title: "Arthur's Fried Chicken",
        description: "Welcome to Arthur's Fried Chicken, your destination for delicious and crispy fried chicken!",
      })
    ],
    links: [
      {
        rel: "preload",
        href: "./images/fc.webp",
        as: "image",
        fetchPriority: "high",
      },
    ],
  }),
  component: Home
})

function Home() {
  return (
    <main className="min-w-0">
      <section>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          autoHeight={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          className='home-slider w-screen  text-center text-black'
        >

          {HOMESLIDEIMAGES.map((slide) => (
            <SwiperSlide key={slide.alt} className=''>
              <picture>
                <source
                  media='(max-width: 767px)'
                  srcSet={slide.imageMobile}
                  width={721}
                  height={480}
                />
                <img
                  src={slide.imageWide}
                  alt={slide.alt}
                  loading='eager'
                  fetchPriority='high'
                  width={1700}
                  height={425}
                  className='w-full object-cover'
                />
              </picture>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="page-wrap">
        <div className="split-section">

          <div className='split-media'>
            <img
              src="./images/fc.webp"
              alt="Image of AFC Fried Chicken"
              width={451}
              height={459}
              loading='eager'
              fetchPriority='high'
            />
          </div>


          <div className="split-content">
            <span className="afc-title text-5xl md:text-6xl text-(--color-primary)">Arthur's Fried Chicken</span>

            <h3 className=" font-bold">Try our Sulit Sarap Value Meals at your nearest AFC store.</h3>

            <div className="flex flex-wrap justify-center gap-4 mt-2 md:justify-start">

              <button className=" shrink-0 font-semibold tracking-tight">
                <Link
                  to="/locations"
                  className="button-primary text-sm px-3 py-1.5 md:px-4 md:py-2"
                >
                  See Locations
                </Link>
              </button>

              <button className="shrink-0 font-semibold tracking-tight">
                <Link
                  to="/menu"
                  className="button-secondary text-sm px-3 py-1.5 md:px-4 md:py-2"
                >
                  Browse Menu
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>


      <section className="page-wrap-red">
        <div className="split-section split-section--flip">

          <div className='split-media'>
            <img
              src="./images/about-us.webp"
              alt="Image of AFC Home Opening"
              width={850}
              height={610}
              loading="lazy"
              className="rounded-xl"
            />

          </div>

          <div className="split-content">

            <h3 className="font-bold">ABOUT US</h3>

            <p className="">
              <span className="font-bold">Arthur’s Fried Chicken</span> is a beloved local restaurant committed to serving the best and most affordable fried chicken to the Filipino community. What began as a small store with space for just twenty customers has now grown into a thriving enterprise with 8 branches across Mindanao and more are to come soon.
            </p>

            <button className="mt-2 shrink-0 font-semibold tracking-tight md:text-left">
              <Link
                to="/about"
                className="button-secondary text-sm px-3 py-1.5 md:px-4 md:py-2"
              >
                Learn Our Story
              </Link>
            </button>

          </div>
        </div>
      </section>

      <section className="page-wrap">
        <div className="split-section">

          <div className='split-media'>
            <img
              src="./images/franchise-home.webp"
              alt="Image of AFC Ffranchise"
              width={1292}
              height={761}
              loading="lazy"
            />
          </div>

          <div className="split-content">

            <h3 className="font-bold">FRANCHISING</h3>

            <p className="">
              Join the AFC family and be part of our rapid growth across Mindanao! Don't miss your chance to bring our irresistible <span className="font-bold">Sulit Sarap Fried Chicken</span> to your community! Contact us today to learn more.
            </p>

            <button className="mt-2 shrink-0 font-semibold tracking-tight md:text-left">
              <Link
                to="/franchise"
                className="button-primary text-sm px-3 py-1.5 md:px-4 md:py-2"
              >
                Franchise Now
              </Link>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-(--color-primary) py-8">
        <div className="page-wrap">

          <div className="flex items-start gap-x-5 justify-between mb-4">
            <div>
              <h3 className="text-white font-bold">BLOGS</h3>

              <p className="text-white">
                Discover our latest news and updates.
              </p>
            </div>

            <button className="shrink-0 font-semibold tracking-tight md:text-left">
              <Link
                to="/blogs"
                className="button-secondary text-sm px-3 py-1.5 md:px-4 md:py-2"
              >
                View All
              </Link>
            </button>
          </div>

          <Swiper
            modules={[Autoplay]}
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
            autoHeight={true}
            autoplay={{ delay: 6000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              }
            }}
            className='w-full text-center text-black'
          >

            {BLOGSDATA.map((blogs) => (
              <SwiperSlide key={blogs.title}>
                <Link
                  to={'/blogs/$blogSlug'}
                  params={{ blogSlug: blogs.slug }}
                  className='group'
                >
                  <div className='text-start min-h-full md:min-h-100 bg-white rounded-lg shadow-md '>
                    <img
                      src={blogs.image}
                      alt={blogs.alt}
                      width={370}
                      height={240}
                      loading='lazy'
                      className='w-full h-60 object-cover rounded-t-lg sm:h-60'
                    />
                    <h3 className="text-lg font-bold pt-4 px-5">{blogs.category}</h3>
                    <h2 className="text-2xl font-bold py-1.5 px-5 line-clamp-2 group-hover:text-(--color-primary)">{blogs.title}</h2>
                    <p className="text-md pb-3 px-5">{blogs.date}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}


          </Swiper>
        </div>

      </section>

    </main>
  )
}
