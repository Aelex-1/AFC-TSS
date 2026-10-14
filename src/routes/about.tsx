import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect } from 'react'

import { seo } from '#/utils/seo';

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      ...seo({
        title: "AFC | About Us",
        description: "Learn about Arthur’s Fried Chicken, our story, our values, and our journey as a growing homegrown food brand in Mindanao.",
        link: "/about"
      })
    ],
    links: [
      {
        rel: "preload",
        href: "./images/about/about-store-small.webp",
        as: "image",
        fetchPriority: "high",
      },
      {
        rel: "preload",
        href: "./images/about/about-store.webp",
        as: "image",
        fetchPriority: "high",
      }
    ]
  }),
  component: RouteComponent,
})

const MISSIONDATA = [
  {
    imageSrc: './images/about/about-chicken.webp',
    title: 'DELICIOUS FOOD',
    subTitle: 'Made to satisfy'
  },
  {
    imageSrc: './images/about/about-money.webp',
    title: 'AFFORDABLE PRICE',
    subTitle: 'Made for everyone'
  },
  {
    imageSrc: './images/about/about-happy.webp',
    title: 'GLADNESS IN EVERY MEAL',
    subTitle: 'Served from joyful hearts'
  },
]

export interface HistoryTypes {
  historyYear: number;
  historyTitle: string,
  historyDescription: string;
  historyImage: string;
}

export const HISTORYDATA: HistoryTypes[] = [
  {
    historyYear: 2010,
    historyTitle: 'Humble Beginnings',
    historyDescription: 'AFC began its journey as a small food stall in Libungan, Cotabato. With a simple vision and a passion for serving delicious and affordable fried chicken, the team focused on developing and perfecting the recipe that would eventually become the foundation of the AFC brand.',
    historyImage: './images/about/history-2011.webp'
  },
  {
    historyYear: 2013,
    historyTitle: 'The first AFC Home',
    historyDescription: "AFC reached an important milestone with the opening of its Quezon Avenue branch in Midsayap, North Cotabato. This became the first AFC Home and quickly grew into one of the brand's most popular branches, establishing a stronger presence in the community and laying the groundwork for future expansion.",
    historyImage: './images/about/history-2013.webp'
  },
  {
    historyYear: 2016,
    historyTitle: 'Expanding Our Roots',
    historyDescription: "With the growing popularity of AFC, plans for expansion began to take shape. New branches were established in Midsayap, including AFC Market, allowing more customers to experience the brand while strengthening AFC's presence in its home community.",
    historyImage: './images/about/history-2016.webp'
  },
  {
    historyYear: 2020,
    historyTitle: 'The Start of Franchising',
    historyDescription: "AFC entered a new chapter by expanding through franchising, opening its first franchised branch in Cotabato City. This milestone marked the beginning of AFC's journey toward becoming a franchise-driven brand and opened opportunities for business partners to grow alongside AFC.",
    historyImage: './images/about/history-2020.webp'
  },
  {
    historyYear: 2026,
    historyTitle: 'Growing Beyond Boundaries',
    historyDescription: "AFC continues to expand its franchise network across selected areas in Mindanao, reaching more communities and customers. Alongside its growing number of branches, AFC remains committed to team development, product innovation, leadership, and process improvement—building a stronger and more modern franchise system for the years ahead.",
    historyImage: './images/about/history-2026.webp'
  },
]

const Circle = () => {
  return (
    <div className='node-circle rounded-full w-4 h-4 bg-blue-500 mx-auto'></div>
  )
}

const HistoryCard: React.FC<HistoryTypes> = ({ historyYear, historyTitle, historyDescription, historyImage }) => {
  return (
    <div className='node-card flex flex-col w-full gap-y-2 border-gray-200 border shadow-md rounded-lg p-4'>
      <img
        src={historyImage}
        alt={historyTitle}
        loading="lazy"
        width={700}
        height={400}
        className='aspect-ratio-7/4 h-auto object-cover rounded-lg md:hidden'
      />
      <div className='font-semibold text-lg'>
        {`${historyYear} ${historyTitle}`}

      </div>
      <div>
        {historyDescription}
      </div>
    </div>
  )
}

const History = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("node-show");
        } else {
          entry.target.classList.add("node-retain");
          entry.target.classList.remove("node-show");
        }
      })
    }, { rootMargin: "-300px 0px -200px 0px" });

    const nodeElements = document.querySelectorAll(".node");
    nodeElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className='relative'>
      {/* line pillar thing */}
      <div className="absolute left-2 top-0 bottom-0 w-px bg-gray-300 md:left-1/2 md:-translate-x-1/2" />

      <div className="space-y-10 md:space-y-12">

        {HISTORYDATA.map((data, i) => {
          const isLeft = i % 2 === 0;

          return (
            <div key={i} className='node'>
              {/* mobile screen */}
              <div className="flex items-start gap-4 md:hidden">
                <div className="relative z-10 shrink-0">
                  <Circle />
                </div>
                <div className="flex-1 min-w-0">
                  <HistoryCard historyYear={data.historyYear} historyTitle={data.historyTitle} historyDescription={data.historyDescription} historyImage={data.historyImage} />
                </div>
              </div>

              {/* desktop or tab screen */}
              <div className="hidden md:grid grid-cols-[1fr_2rem_1fr] items-center">
                <div className="pr-6 flex justify-end">
                  {isLeft ? <HistoryCard historyYear={data.historyYear} historyTitle={data.historyTitle} historyDescription={data.historyDescription} historyImage={data.historyImage} /> :
                    <img
                      src={data.historyImage}
                      alt={data.historyTitle}
                      width={1200}
                      height={686}
                      loading="lazy"
                      className='node-card aspect-ratio-7/4 h-auto border border-gray-200 shadow-md rounded-lg'
                    />}

                </div>
                <div className="relative z-10 flex justify-center">
                  <Circle />
                </div>
                <div className="pl-6">
                  {isLeft ? <img className='node-card aspect-ratio-7/4 h-auto border border-gray-200 shadow-md rounded-lg' src={data.historyImage} loading="lazy" alt={data.historyTitle} /> :
                    <HistoryCard historyYear={data.historyYear} historyTitle={data.historyTitle} historyDescription={data.historyDescription} historyImage={data.historyImage} />}
                </div>
              </div>
            </div>
          )
        })

        }



      </div>
    </div>
  )
}

function RouteComponent() {
  return (
    <main className="min-w-0">
      <section className="relative">
        <picture>
          <source
            media='(max-width: 767px)'
            srcSet='./images/about/about-store-small.webp'
            width={420}
            height={280}
          />
          <img
            src='./images/about/about-store.webp'
            alt='AFC store front'
            loading='eager'
            fetchPriority='high'
            width={1650}
            height={413}
            className='w-full h-auto'
          />
        </picture>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex justify-center items-center h-fit w-fit bg-(--color-primary) rounded-lg shadow-md">
          <h2 className=" text-white font-bold text-center whitespace-nowrap px-6 py-2 md:px-10">OUR MISSION</h2>
        </div>
      </section>

      <section className="page-wrap pt-14">
        <div className='text-center pb-4 md:pb-6'>
          <span className='text-md md:text-lg font-medium text-gray-700'>AFC's mission is to provide:</span>
        </div>
        <div className='flex flex-col gap-y-6  md:grid md:grid-cols-3 md:place-content-start md:content-between'>
          {MISSIONDATA.map((entry) => (
            <div className='flex flex-col items-center text-center'>
              <img
                src={entry.imageSrc}
                alt={entry.title}
                width={320}
                height={400}
                className="h-60 w-auto aspect-4/5 object-cover rounded-lg shadow-md mb-4" />
              <span className='font-extrabold text-xl text-(--color-primary)'>{entry.title}</span>
              <small className='italic text-gray-700'>{entry.subTitle}</small>
            </div>
          ))}
        </div>
        <hr className="mt-8 border-gray-200" />
      </section>


      <section className="page-wrap mx-auto pt-8 ">
        <div className='text-center '>
          <h2 className="text-(--color-primary) font-boldpx-10 py-2">OUR HISTORY</h2>
          <span className='text-md md:text-lg font-medium text-gray-700'>AFC's progress and milestones throughout the years</span>
        </div>
      </section>

      <section className="page-wrap mx-auto py-8">
        <History />
      </section>

      <section className="page-wrap-red">
        <div className="split-section split-section--flip md:grid-cols-[7fr_4fr]">

          <div className='split-media '>
            <img
              src="./images/about/branch-map.webp"
              alt="Map of Philippines with AFC locations"
              width={210}
              height={333}
              loading="lazy"
              className="max-h-120 w-auto"
            />

          </div>

          <div className="split-content">

            <h3 className="font-bold">OUR VISION</h3>
            <h4>AFC will soon be available to Visayas and Luzon</h4>
            <p>
              Arthur’s Fried Chicken aims to lead Mindanao by 2030, expand to Visayas by 2032, and grow across the Philippines—creating jobs, developing leaders, and building a better future for Filipino families.
            </p>
            <p>
              With rapid growth on the horizon, we invite you to join us on this exciting path to success.
            </p>
            <button className="mt-2 shrink-0 font-semibold tracking-tight md:text-left">
              <Link
                to="/franchise"
                className="button-secondary text-sm px-3 py-1.5 md:px-4 md:py-2"
              >
                Explore Franchise
              </Link>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
