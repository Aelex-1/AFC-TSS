import { createFileRoute } from '@tanstack/react-router'
import {
  FranchiseOfferCard,
  FranchiseStepsCard
} from '#/components/FranchiseCard'
import CountUp from '#/components/CountUp'

import {
  EstablishedBrandIcon,
  ProductIcon,
  AffordableIcon,
  GrowthIcon,
  TrophyIcon,
} from '#/components/CustomIcons';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "#/components/Accordion";
import { CopyToClipboard } from '#/components/CopyToClipboard';
import { seo } from '#/utils/seo'

export const Route = createFileRoute('/franchise')({
  head: () => ({
    meta: [
      ...seo({
        title: "AFC | Franchise",
        description: "Discover AFC franchising opportunities and learn how you can start your own Arthur’s Fried Chicken store in selected areas across Mindanao.",
        link: "/franchise"
      })
    ],
    links: [
      {
        rel: "preload",
        href: "./images/franchise/franchise-banner.webp",
        as: "image",
        fetchPriority: "high",
      }
    ]
  }),
  component: RouteComponent,
})

const franchiseOffers = [
  {
    icon: <EstablishedBrandIcon className='h-15 w-auto' />,
    title: 'Established Brand',
    content: 'Partner with a trusted and growing homegrown brand that has built a loyal customer base and a strong reputation for delivering Sulit Sarap across Mindanao. Our growing presence continues to strengthen customer familiarity and trust in the AFC name.'
  },
  {
    icon: <ProductIcon className='h-15 w-auto' />,
    title: 'Flagship Product',
    content: "Offer AFC's signature fried chicken and other well-loved menu items that keep customers coming back for the quality, taste, and value they know and trust. Our products are at the heart of the AFC experience and help create repeat customers."
  },
  {
    icon: <AffordableIcon className='h-15 w-auto' />,
    title: 'Affordable Investment',
    content: 'Start your business with a competitive franchise package designed for sustainable growth and a faster path to ownership. AFC provides a structured investment opportunity for entrepreneurs looking to build their own food business.'
  },

  {
    icon: <GrowthIcon className='h-12 w-auto' />,
    title: 'Growing Market Presence',
    content: "Join a franchise that continues to expand across Mindanao, creating greater brand recognition and customer confidence with every new branch. Be part of AFC's journey as we bring Sulit Sarap to more communities."
  },
  {
    icon: <TrophyIcon className='h-13 w-auto' />,
    title: 'Rewarding Business Opportunity',
    content: "Build a business with strong growth potential, backed by a proven concept, repeat customers, and a franchise system focused on mutual success. With the right location and management, franchise partners can grow alongside an expanding brand."
  },
]

const franchiseSteps = [
  {
    title: "Submit Your Application",
    step: "Interested Franchisee must submit the following:",
    requirements: [
      "Letter of Intent",
      "Filled-up Franchise Evaluation Form",
      "Resume",
      "Site Location Map/Proposal"
    ]
  },
  {
    title: "Franchise Consultation",
    step: "Set a meeting with company's Franchise representatives to discuss the Franchise Package."
  },
  {
    title: "Qualification & Package Review",
    step: "If your qualifications and site proposal are approved, the franchisor will discuss the Franchise Package details and the Franchise Agreement terms and conditions with you."
  },
  {
    title: "Review & Sign the Agreement",
    step: "Once terms are agreed upon, you will receive a copy of the Franchise Agreement for signature."
  },
  {
    title: "Franchise Awarding",
    step: "Schedule the contract signing and franchise awarding. A photo and PR coverage will be arranged for documentation and marketing."
  },
  {
    title: "Franchise Confirmation",
    step: "After you return the signed Franchise Agreement and pay the Franchise Fee, you will receive a notice confirming that your franchise has been granted."
  },
]

const franchiseFAQ = [
  {
    question: "How much is the AFC franchise fee?",
    answer: <span> The AFC franchise fee ranges from <strong> ₱750,000 to ₱1 million. </strong> The final franchise fee may depend on the applicable franchise package and other factors discussed during the application and evaluation process. </span>
  },
  {
    question: "How much capital do I need to start an AFC franchise?",
    answer: <span> The estimated total investment capital ranges from <strong> ₱4.5 million to ₱11 million, </strong> inclusive of the franchise fee. The actual investment required varies depending on the store's location, size, site condition, and whether the project involves constructing a new building or renovating an existing space. </span>
  },
  {
    question: "What is the royalty fee?",
    answer: <span>AFC charges a <strong> 2% royalty fee </strong> based on gross sales. This fee is part of the franchise arrangement and supports the continued use and development of the AFC brand and franchise system.</span>
  },
  {
    question: "How long is the AFC franchise term?",
    answer: <span>The standard AFC franchise term is <strong> 5 years. </strong> Franchise partners operate under the terms and conditions outlined in the franchise agreement.</span>
  },
  {
    question: "Where can I open an AFC franchise?",
    answer: <span>AFC franchise opportunities are currently available in <strong> selected areas across Mindanao. </strong> Proposed locations are subject to evaluation to determine their suitability and market potential for an AFC branch.</span>
  },
  {
    question: "How quickly can I expect to recover my investment?",
    answer: <span>AFC's estimated return on investment (ROI) can be as fast as <strong> 18 months,</strong> depending on factors such as the store's location, sales performance, operating costs, and management. Actual ROI may vary from one franchise location to another, and the 18-month period is not a guarantee.</span>
  },
  {
    question: "Does AFC provide support to franchisees?",
    answer: <span>Yes. AFC provides support throughout the franchise process, from the initial setup and preparation of the store to training and ongoing operations. Franchise partners can receive guidance in areas such as store development, operations, training, marketing, and other aspects of running an AFC branch.</span>
  },
]

const storePackageData = [
  {
    imgSrc: "./images/package-main.webp",
    imgAlt: "Deluxe Package Store Type",
    packageTitle: "Deluxe Package",
    lotArea: "300 - 450 Square Meters",
    investmentCapital: "Minimum of ₱8M. Final cost varies.",
  },
  {
    imgSrc: "./images/package-lite.webp",
    imgAlt: "Lite Package Store Type",
    packageTitle: "Lite Package",
    lotArea: "120 - 250 Square Meters",
    investmentCapital: "Minimum of ₱4M. Final cost varies.",
  },
]

function RouteComponent() {
  return (
    <main className="min-w-0">

      <section>
        <img
          src='./images/franchise/franchise-banner.webp'
          alt='franchise banner'
          width={1920}
          height={480}
          loading='eager'
          fetchPriority='high'
          className='object-cover aspect-2/1 md:aspect-4/1'
        />
      </section>

      <section className="bg-(--color-primary)">
        <div className="page-wrap flex flex-col py-8 text-center">
          <div className="flex flex-col items-center justify-center mb-8">
            <h2 className="font-bold text-white">FRANCHISE WITH AFC!</h2>
            <p className='text-white pt-2'>
              Franchising with AFC allows you to join a rapidly growing brand known for its delicious and affordable fried chicken. Become part of the AFC family and benefit from strong brand recognition and a loyal customer base.
            </p>
          </div>

          <div className='flex flex-col items-center gap-y-8 justify-between md:flex-row lg:px-10'>
            <div className="flex flex-col w-60 h-80 py-16 px-4 justify-center items-center bg-white rounded-xl ">
              <span className="text-7xl font-bold text-blue-900">OVER</span>
              <CountUp start={2999980} end={3000000} suffix="+" duration={1500} customClass="text-4xl font-bold text-(--color-primary)" />
              <p className="text-xl font-bold text-(--color-secondary)">CUSTOMERS SERVED</p>
            </div>

            <div className="flex flex-col w-60 h-80 py-16 px-4 justify-center items-center bg-white rounded-xl ">
              <p className="text-xl font-bold text-(--color-secondary)">SERVING SINCE</p>
              <p className="text-7xl font-bold text-(--color-primary) ">2013</p>
            </div>

            <div className="flex flex-col w-60 h-80 py-16 px-4 justify-center items-center bg-white rounded-xl ">

              <CountUp start={0} end={10} duration={1000} customClass="text-9xl font-bold text-(--color-primary)" />
              <p className="text-xl font-bold text-amber-400">BRANCHES OPENED</p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-(--color-secondary) py-8'>
        <div className='page-wrap'>
          <div className='text-center '>
            <h2 className="text-white font-boldpx-10 py-2">WHAT WE OFFER</h2>
            <h5 className=' text-gray-50'>AFC's clear and effective strategy for building a franchise</h5>
          </div>
          <div className='flex flex-row flex-wrap gap-8 items-center justify-center mt-4'>
            {franchiseOffers.map((entry, index) => (
              <FranchiseOfferCard key={index} icon={entry.icon} title={entry.title} content={entry.content} />
            ))}
          </div>
        </div>
      </section>

      <section className='bg-gray-100 py-8'>
        <div className='page-wrap'>
          <h2 className="text-(--color-primary) text-center font-boldpx-10 pb-4">STORE PACKAGE AND DESIGNS</h2>
          <div className='flex flex-col items-center justify-center gap-4 sm:gap-8 sm:flex-row'>
            {storePackageData.map((entry, index) => (
              <div
                key={index}
                className='flex flex-col justify-between rounded-lg border border-gray-400 shadow-(--shadow-sm) w-full sm:max-w-3/5'>
                <img
                  src={entry.imgSrc}
                  alt={entry.imgAlt}
                  width={580}
                  height={380}
                  loading='lazy'
                  className='rounded-t-lg' />

                <h4 className='px-4 pt-2 text-(--color-primary)'>{entry.packageTitle}</h4>
                <p className='px-4 pt-2'>Lot Area: <strong>{entry.lotArea}</strong></p>
                <p className='px-4 pb-4 pt-2'>Investment Capital: <strong>{entry.investmentCapital}</strong></p>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className=' bg-orange-50  py-8'>
        <div className='page-wrap'>

          <h2 className="text-(--color-secondary) text-center font-boldpx-10 pb-4">FRANCHISE ACQUISITION STEPS</h2>
          <FranchiseStepsCard franchiseSteps={franchiseSteps} />
        </div>
      </section>

      <section className='bg-gray-100 py-8'>
        <h2 className=" text-center font-boldpx-10 pb-4"> FREQUENTLY ASKED QUESTIONS</h2>
        <div className="page-wrap flex justify-center items-center">
          <Accordion className="w-full max-w-2xl bg-white px-10 border border-gray-200 rounded-lg">
            {franchiseFAQ.map((entry, index) => (
              <AccordionItem key={index}>
                <AccordionTrigger className="w-fit">
                  {entry.question}
                </AccordionTrigger>
                <AccordionContent>
                  {entry.answer}
                  <hr className='mt-4 text-gray-300' />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className='bg-(--color-primary) py-8'>
        <div className='page-wrap flex flex-col items-center justify-center text-center gap-y-4 md:grid md:grid-cols-2'>
          <div className='flex flex-col gap-y-2 items-center text-white md:items-start md:text-start md:border-r md:border-gray-100 md:pr-8'>
            <h3>Join the AFC Family!</h3>
            <p>Interested in Franchsing with AFC? Get started by filling up the pre-evaluation form!</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfVyop_FXZts9x5oTP9zTixs1VHg78jO4fvrfAE0CBhtj7XIQ/viewform"
              target='blank'
              className='px-4 py-2 rounded-full text-white bg-(--color-secondary) w-fit hover:bg-(--color-secondary-hover)'>
              Fanchise Pre-Evaluation Form
            </a>
            <hr className="w-full border-gray-100 my-2 md:hidden" />
          </div>
          <div className='flex flex-col gap-y-2 items-center text-white md:items-start md:text-start md:pl-8'>
            <h3>AFC Franchise Manager</h3>
            <div className='flex flex-row gap-x-2'>
              <p><strong>Email:</strong> afcfranchisingcorp@gmail.com</p>
              <CopyToClipboard text='afcfranchisingcorp@gmail.com' />
            </div>
            <div className='flex flex-row gap-x-2'>
              <p><strong>Mobile:</strong> +63 995 438 5060</p>
              <CopyToClipboard text='+63 995 438 5060' />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
