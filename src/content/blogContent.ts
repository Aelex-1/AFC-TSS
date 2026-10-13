import type { ReactNode } from "react";


export type BlogsType = {
  id: number;
  slug:string;
  category: string;
  featured?: boolean;
  title: string;
  date: string;
  image: string;
  alt: string;
  content: ReactNode[];
  summary?: string[];
}

export const BLOGSDATA: BlogsType[] = [
  {
    id: 0,
    slug: 'afc-new-branch-in-pigcawayan',
    category: 'News',
    featured: true,
    title: 'AFC Opens Newest Branch in Pigcawayan, Cotabato',
    date: 'July 22, 2026',
    image: '/images/blogs/blog-pigcawayan-opening.webp',
    alt: 'Pigcawayan Opening',
    content: [
      "A new chapter in the AFC journey began with the opening of AFC Pigcawayan, bringing the brand’s signature Sulit Sarap experience to the community of Pigcawayan, North Cotabato. Located along Datu Piang Street in Poblacion 3, right beside the Municipal Plaza, the newest AFC branch welcomed customers eager to enjoy their favorite fried chicken and other well-loved menu items.",
      "The opening was made even more special with exciting treats and giveaways for the community. As part of the opening celebration, the first 500 customers received free macaroni salad, adding an extra treat to their Sulit Sarap experience. The warm response from the community was evident as customers filled the store, creating an energetic and memorable opening day for the AFC team and everyone who came to celebrate with us.",
      "More than just the opening of another restaurant, AFC Pigcawayan represents another step in AFC’s continued growth across Mindanao. Every new branch gives us the opportunity to serve more communities, create new experiences for customers, and strengthen our presence as a growing homegrown food brand. The support shown by the people of Pigcawayan is a reminder of why AFC continues to move forward.",
      "For aspiring entrepreneurs, the growth of AFC also presents an opportunity to become part of the journey. With a growing brand, established products, and a franchise system designed to support partners, AFC welcomes individuals who are ready to explore the possibility of opening their own AFC store in selected areas across Mindanao.",
      "As AFC Pigcawayan begins its journey, we look forward to more communities discovering the taste and value of Sulit Sarap. Whether you're a longtime AFC customer or an entrepreneur looking for your next business opportunity, there is always room to be part of the AFC story—and perhaps, the next AFC branch could be yours."
    ],
    summary: ["A new chapter in the AFC journey began with the opening of AFC Pigcawayan, bringing the brand’s signature Sulit Sarap experience to the community of Pigcawayan, North Cotabato. Located along Datu Piang Street in Poblacion 3, right beside the Municipal Plaza, the newest AFC branch welcomed customers eager to enjoy their favorite fried chicken and other well-loved menu items.",
      "The opening was made even more special with exciting treats and giveaways for the community. As part of the opening celebration, the first 500 customers received free macaroni salad, adding an extra treat to their Sulit Sarap experience. The warm response..."
    ]
  },
  {
    id: 1,
    slug: 'afc-year-2025-highlights',
    category: 'News',
    title: 'AFC Year 2025 Highlights',
    date: 'December 14, 2025',
    image: '/images/blogs/blog-2025-highlights.webp',
    alt: 'Year 2025 Highlights',
    content: [
      "The year 2025 marked another meaningful chapter in the journey of Arthur’s Fried Chicken. More than just milestones and dates, it was a year defined by people, growth, and a shared commitment to delivering Sulit Sarap experiences across every AFC branch. From celebrating long-serving team members to expanding our footprint and investing in leadership development, each moment reflected AFC’s dedication to building a stronger organization from the inside out.",
      "The year began on a high note in January with the Annual Employee Service Award Ceremony. This event honored the loyalty, dedication, and hard work of AFC employees who have consistently contributed to the company’s success. Recognizing service milestones reinforced AFC’s belief that its people are its greatest asset. The ceremony served as a reminder that sustainable growth starts with valuing those who make daily operations possible.",
      "May was a month of celebration and renewal. AFC Poblacion 3 marked its first anniversary, celebrating a year of serving the community with quality meals and consistent service. The milestone highlighted the branch’s steady growth and the strong support it has received from loyal customers. In the same month, AFC City Plaza officially reopened its doors, signaling a fresh start and renewed commitment to delivering the AFC experience. The reopening reflected resilience, adaptability, and AFC’s ability to move forward stronger after challenges.",
      "September brought another major milestone with the grand opening of AFC Poblacion 8 Home. Designed to serve as both a community hub and a symbol of AFC’s expanding presence, the new branch welcomed customers with excitement, giveaways, and the familiar taste that AFC is known for. The opening underscored the brand’s continued growth while staying rooted in its hometown of Midsayap, North Cotabato.",
      "The year concluded with a strong focus on people development through the Leadership Development Training held in November. This initiative brought together key personnel to strengthen leadership skills, align values, and prepare teams for the future. By investing in leadership and continuous learning, AFC reinforced its long-term vision of building future-ready stores led by empowered and capable individuals.",
      "Looking back, 2025 was a year that balanced expansion with reflection, celebration with responsibility, and growth with purpose. Every achievement—whether big or small—was made possible by the collective effort of AFC’s employees, partners, franchisees, and customers. As AFC moves forward, the lessons and successes of 2025 serve as a solid foundation for even greater milestones ahead.",
      "Arthur’s Fried Chicken remains committed to its mission of delivering quality food, meaningful experiences, and opportunities for growth—one branch, one team, and one community at a time."
    ]
  },
  {
    id: 2,
    category: 'Development',
    slug: 'building-stronger-leaders-afc-development-journey',
    title: "Building Stronger Leaders, Stronger Stores: AFC’s Ongoing Development Journey",
    date: 'December 9, 2025',
    image: '/images/blogs/blog-building-stronger.webp',
    alt: 'Building Leaders',
    content: [
      "Arthur’s Fried Chicken (AFC) continues to rise not only through the growing number of branches across the country, but through the ongoing transformation of the people who make each store come alive. Our recent Development Journeys, conducted for key personnel in AFC Cotabato, AFC Midsayap, and other branches, reflect a deeper commitment within the brand: to cultivate leadership, encourage continuous learning, and strengthen the systems that support long-term business success.",
      "These development sessions go beyond simple training. They are designed to empower our managers, supervisors, and store leaders to understand their roles on a deeper level, take ownership of their growth, and lead their teams with purpose. As representatives of the AFC brand, our leaders carry the responsibility of delivering consistent quality, strong service, and the familiar “Sulit Sarap” experience that customers expect. The Development Journey reinforces this by helping them refine their communication, decision-making, and professionalism. When leaders grow, the performance and culture of the entire store grow with them.",
      "AFC has always believed that learning never stops, and the Development Journey strengthens this culture of continuous improvement. Through guided discussions, evaluations, and hands-on coaching, participants are encouraged to look at their daily operations with fresh eyes and identify how they can further elevate teamwork, efficiency, and customer experience. This mindset of constant growth doesn’t just improve today’s performance—it safeguards the stability and quality of AFC branches in the future.",
      "As the brand expands, maintaining excellence across all locations becomes even more essential. The Development Journeys aim to prepare personnel not only for current expectations but also for the challenges ahead. Leaders learn to adapt to changing customer needs, manage increasing demands, and stay consistent in upholding store standards. In doing so, they help future-proof their branches and strengthen AFC’s reputation as a reliable and fast-growing fast-food business.",
      "More than anything, these development efforts highlight the heart of AFC: a family of people striving together to improve, serve, and grow. Seeing motivated teams embrace learning and leadership reminds us that AFC’s success is rooted in its people. By investing in their growth today, we are securing a stronger, more capable, and more united AFC for tomorrow."
    ]
  },
  {
    id: 3,
    slug: 'be-a-successful-franchise-owner-in-7-steps',
    category: 'Franchising',
    title: "How to become a successful franchise owner in 7-steps",
    date: 'January 7, 2026',
    image: '/images/blogs/blog-successful-franchise.webp',
    alt: 'Owning a Franchise in 7 steps',
    content: ['Becoming a successful franchise owner isn’t just about signing a contract — it’s about choosing the right brand, learning the system, and growing into a capable leader who can run a thriving business. In the case of Arthur’s Fried Chicken (AFC), franchise success comes from combining proven systems with local insight, strong people management, and consistent quality that keeps customers coming back. The steps below outline what aspiring franchisees need to understand and master in order to build a future-proof, profitable AFC branch in their community.',
      "1. Choose the right franchise fit",
      "Pick a franchisor and concept that match your goals, values, and local market. For AFC: make sure the neighborhood’s foot traffic, eating habits, and price sensitivity match AFC’s value-meal positioning. Choosing the right fit early saves time and money later.",
      "2. Do deep due diligence",
      "Carefully review franchise documents (contracts, fees, obligations), interview current franchisees, and verify the franchisor’s support structure and reputation. Ask for performance data and references.",
      "3. Secure proper financing & understand costs",
      "Know all upfront and ongoing costs (franchise fee, buildout, equipment, working capital, royalties) and arrange financing before committing. Build conservative financial projections that include slow-start months.",
      "4. Commit to training and follow the system",
      "Successful franchisees follow the brand’s operating system consistently. Use franchisor training, checklists, and SOPs to keep consistency (food quality, service, and cleanliness). ",
      "5. Build a strong local team & lead well",
      "Your people make or break day-to-day operations. Hire dependable staff, invest in leadership development (managers/supervisors), and keep morale and performance high. Good leadership directly improves customer experience and retention.",
      "6. Master local marketing & community ties",
      "Drive customers through opening promotions, localized social media, community events, and partnerships (schools, offices, markets). Word-of-mouth in smaller cities/towns is huge — be visible and generous with samples/promos at launch.",
      "7. Measure, adapt, and lean on franchisor support",
      "Track sales, costs, and customer feedback. If something’s off, adapt quickly (menu tweaks, staffing changes, local promos). Maintain close communication with AFC HQ for supply, ops, and marketing help — don’t go it alone."
    ]
  },
]


export function getAllBlogs() {
  return BLOGSDATA
}

export function getBlogBySlug(slug: string) {
  return BLOGSDATA.find((p) => p.slug === slug)
}