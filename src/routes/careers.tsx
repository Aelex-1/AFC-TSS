import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import { BibleIcon, JoyIcon, ExcellenceIcon, TrustIcon } from '#/components/CustomIcons'
import { LuX } from "react-icons/lu";

import { JOBLISTDATA } from '#/content/careerContent'
import { LOCATIONSDATA } from '#/content/locationContent'
import { seo } from '#/utils/seo'

export const Route = createFileRoute('/careers')({
  head: () => ({
    meta: [
      ...seo({
        title: "AFC | Careers",
        description: "Explore career opportunities at Arthur’s Fried Chicken and join a growing team dedicated to serving Sulit Sarap to more communities.",
        link: "/careers"
      })
    ],
    links: [
      {
        rel: "preload",
        href: "./images/careers/careers-banner.webp",
        as: "image",
        fetchPriority: "high",
      }
    ]
  }),
  component: RouteComponent,
})

const afcOffers = [
  {
    image: './images/careers/careers-growth.webp',
    title: 'Growth & Development',
    description: "Build your skills and gain valuable experience through training, hands-on learning, and opportunities to take on new responsibilities."
  },
  {
    image: './images/careers/careers-expanding.webp',
    title: 'Be Part of Something Growing',
    description: "Join a homegrown brand expanding across Mindanao and be part of a journey where your work can make a meaningful difference."
  },
  {
    image: './images/careers/careers-teamwork.webp',
    title: 'Teamwork & Culture',
    description: "Work alongside a supportive team that values collaboration, respect, and a shared commitment to serving our customers."
  },
]

const coreValues = [
  {
    icon: <BibleIcon className='h-15 w-auto' />,
    title: 'Fear of God',
    description: 'Develop and nurture a God-centered business and workers that honors, glorifies, is in constant awe and thanksgiving to God, trusting that our efforts are not in vain when rooted in His guidance.'
  },
  {
    icon: <JoyIcon className='h-15 w-auto' />,
    title: 'Service with Joy',
    description: 'We believe that food become even more satisfying when prepared and served with joyful hearts.'
  },
  {
    icon: <TrustIcon className='h-15 w-auto' />,
    title: 'Integrity',
    description: 'Doing the right thing even if no one is watching , honest and committed to doing the good works.'
  },
  {
    icon: <ExcellenceIcon className='h-15 w-auto' />,
    title: 'Excellence',
    description: 'Working for the Lord not just for man, always striving to do the best while at work.'
  },
]

const testimonials = [
  {
    image: "./images/careers/angel.webp",
    quote: `A customer once gave me a small tip with a note saying, “Thank you for the wonderful service. We really liked you!” It touched my heart and reminded me how small acts of kindness can make a difference.`,
    name: "Angel Grace Bigwas",
    branch: "AFC Hillpark",
    title: "Team Member"
  },
  {
    image: "./images/careers/eduard.webp",
    quote: `Working at AFC has been life-changing. The company and people around me helped me grow into a better person. Now, I’m working toward my goals while supporting my parents.`,
    name: "Mark Eduard Faunillan",
    branch: "AFC Home",
    title: "Team Member"
  },
  {
    image: "./images/careers/roselia.webp",
    quote: `My advice to new hires is to put your heart into your work. AFC gives you opportunities to grow, develop your skills, and build a better future. With hard work and dedication, you can grow from a crew member into more.`,
    name: "Roselia Ragual",
    branch: "AFC Market",
    title: "Team Member"
  },
]

const getAddress = (storeName: string) => {
  const entry = LOCATIONSDATA.find(entry => entry.storeName === storeName)
  if (!entry) return ""

  return [entry?.storeBuilding, entry?.storeStreet, entry?.storeCity, entry?.storeProvince, entry?.storeRegion]
    .filter(Boolean)
    .join(', ')
}


function RouteComponent() {
  const [activeJob, setActiveJob] = useState<string | null>(null);
  const selectedJob = JOBLISTDATA.find((entry) => entry.id === activeJob) ?? null;

  return (
    <main className='min-w-0'>
      <section className=''>
        <img
          src='./images/careers/careers-banner.webp'
          alt='Careers at AFC'
          width={1440}
          height={360}
          className='h-60 w-full md:h-auto md:w-full object-cover block'
        />

        <div className='page-wrap text-center'>
          <h1 className='text-(--color-primary) py-8'>
            CAREERS AT AFC
          </h1>
          <span className=' text-gray-700 font-medium text-base'>
            At AFC, we believe that our people are at the heart of every great customer experience. Join a growing homegrown brand where you can learn new skills, take on meaningful challenges, and grow alongside a team that values hard work and dedication. Whether you're starting your career or looking for your next opportunity, there's a place for you in the AFC family.
          </span>
          <hr className="my-16 border-gray-200" />
        </div>
      </section>


      <section className='page-wrap pb-8'>
        <div className='text-center'>
          <h3 className='pb-4'>WHY AFC?</h3>
          <h5 className=' text-gray-700 font-medium pb-4'>
            Working at AFC means being part of a growing team where every contribution matters. We provide opportunities to develop your skills, build meaningful experiences, and grow together as we continue bringing Sulit Sarap to more communities.
          </h5>

          <Swiper
            modules={[Autoplay]}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            autoHeight={true}
            autoplay={{ delay: 4000 }}
            className='w-full text-black border border-gray-200 rounded-lg shadow-lg'
          >

            {afcOffers.map((entry) => (
              <SwiperSlide key={entry.title}>
                <div className='flex flex-col gap-x-10 gap-y-6 md:grid md:grid-cols-[6fr_5fr] md:items-center md:gap-x-12'>

                  <div className='split-content pt-4 md:pt-0 md:pl-8'>
                    <h4 className='text-(--color-primary)'>{entry.title}</h4>
                    <p>{entry.description}</p>
                  </div>

                  <img
                    src={entry.image}
                    alt={entry.title}
                    width={600}
                    height={500}
                    loading='lazy'
                    className='split-media md:rounded-b-none md:rounded-r-lg'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className='bg-gray-100 pt-16 pb-8'>
        <div className='page-wrap text-center pb-4'>
          <h3 className='pb-4'>AFC CORE VALUES</h3>
          <span className='text-md md:text-lg font-medium text-gray-700'>
            Our core values guide how we work, how we serve our customers, and how we grow together as one AFC team.
          </span>
        </div>

        <div className='page-wrap flex flex-col space-y-4 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between '>
          {coreValues.map((entry, index) => (
            <div
              key={index}
              className="flex flex-col items-center">
              <div className="flex items-center justify-center w-25 h-25 rounded-full bg-white text-6xl z-10 border-t border-gray-300">
                {entry.icon}
              </div>

              <div className="flex flex-col items-center gap-y-4 sm:w-full md:w-80 sm:h-70  lg:w-60 lg:h-80 bg-white rounded-lg -mt-12 pt-16 pb-4 px-4 border border-gray-300 shadow-md">
                <h4 className="text-center">{entry.title}</h4>
                <span className="text-gray-900 text-md text-center">{entry.description}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className=''>
        <div className='page-wrap py-8'>
          <div className='text-center'>
            <h3 className='pb-4'>STAFF TESTIMONIALS</h3>
          </div>

          <div className='flex flex-col gap-y-4 justify-between md:flex-row'>
            {testimonials.map((entry, index) => (
              <div
                key={index}

                className='flex flex-col border border-gray-300 rounded-lg w-full md:w-[32%] bg-orange-50 shadow-md'>
                <img
                  src={entry.image}
                  alt={entry.name}
                  width={700}
                  height={544}
                  loading='lazy'
                  className='w-full h-auto rounded-t-lg pb-4'
                />
                <p className='px-4 pb-4 text-base text-(--color-secondary) font-bold'>"{entry.quote}"</p>
                <h5 className='px-4 pb-2 text-(--color-primary) font-bold'>{entry.name}</h5>
                <p className='px-4 text-sm text-(--color-secondary)'>{entry.branch}</p>
                <p className='px-4 pb-4 text-sm text-(--color-secondary)'>{entry.title}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      <section className='bg-gray-100 py-8'>
        <h3 className='pb-4 text-center'>JOB OPENINGS</h3>

        <div className='page-wrap flex h-[80dvh] md:grid md:grid-cols-[3fr_5fr] md:items-start md:gap-x-8 '>
          <div className={`flex-col gap-y-4 h-full overflow-scroll ${selectedJob ? 'hidden md:flex' : 'flex'}`}>
            {JOBLISTDATA.map((entry) => (
              <div
                key={entry.id}
                onClick={() => setActiveJob(entry.id)}
                className={`w-full h-fit p-4 bg-white rounded-xl border group hover:cursor-pointer hover:shadow-md
              ${selectedJob?.id === entry.id ? ' border-(--color-secondary) shadow-md' : 'border-gray-300'}`}>
                <h4 className='group-hover:underline pb-2'>{entry.title}</h4>
                <p className='text-base text-gray-600'>{entry.branch}</p>
                <p className='text-base text-gray-600'>{getAddress(entry.branch)}</p>

                <div className='flex flex-wrap gap-x-2'>
                  {entry.jobBadges.map((entry, index) => (
                    <div key={index} className='py-0.5 px-2 bg-gray-200 rounded-sm w-fit mt-2'>
                      <small className='font-bold text-gray-600'>{entry}</small>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

          <div className={`${selectedJob ? 'block' : 'hidden md:flex'}  md:flex-col w-full h-full bg-white border border-gray-300 rounded-xl shadow-xl overflow-scroll`}>
            {selectedJob ? (
              <>
                <div className=' p-4'>
                  <div className='flex justify-between'>
                    <h4 className='group-hover:underline pb-2'>{selectedJob.title}</h4>
                    <LuX
                      className='block md:hidden hover:cursor-pointer hover:text-(--color-secondary)'
                      onClick={() => setActiveJob(null)}
                    />
                  </div>
                  <p className='text-base text-gray-600'>{selectedJob.branch}</p>
                  <p className='text-base text-gray-600'>{getAddress(selectedJob.branch)}</p>
                  <p className='text-base text-gray-600'>To apply, email your resume to <span className='text-(--color-secondary) font-bold'> arthursfriedchicken07@gmail.com </span> or bring it to the indicated branch address.</p>
                </div>

                <hr className='border border-gray-300 my-4' />

                <div className='p-4'>
                  <h4 className='group-hover:underline pb-2'>Job Summary</h4>
                  <p className='text-base text-gray-600'>{selectedJob.fullDescription}</p>
                </div>

                <hr className='border border-gray-300 my-4' />

                <div className='p-4'>
                  <h4 className='group-hover:underline pb-2'>Key Responsibilities:</h4>
                  <ul>
                    {selectedJob.responsibilities.map((entry, index) => (
                      <li key={index} className='text-base text-gray-600 list-disc list-inside pl-2'>{entry}</li>
                    ))}
                  </ul>

                  <h4 className='group-hover:underline pt-4 pb-2'>Qualifications:</h4>
                  <ul>
                    {selectedJob.qualifications.map((entry, index) => (
                      <li key={index} className='text-base text-gray-600 list-disc list-inside pl-2'>{entry}</li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <div className='m-auto'>
                <h3>
                  Select a job entry to view details.
                </h3>
              </div>
            )}


          </div>
        </div>
      </section>
    </main>
  )
}
