export interface BlogSection {
  title: string;
  content: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  content: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'land-records-digitization',
    title: `The Future of Property: Digitization in Kenya`,
    excerpt: `Exploring the impact of Ardhisasa on real estate transactions and property rights.`,
    date: 'Jan 24, 2025',
    author: 'James Wainaina',
    category: 'Property',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f9915650-7141-4201-8235-b051096a6e79/service-land-property-57b01e22-1778829470552.webp',
    content: [
      {
        title: `The Shift to Digital`,
        content: `The Ministry of Lands has revolutionized property management with the Ardhisasa platform.`
      }
    ]
  },
  {
    id: 'data-protection-compliance',
    title: `Navigating Data Privacy in East Africa`,
    excerpt: `How the Data Protection Act 2019 is reshaping corporate responsibility and consumer rights.`,
    date: 'Feb 12, 2025',
    author: 'Catherine Auma',
    category: 'Tech Law',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f9915650-7141-4201-8235-b051096a6e79/service-tech-ip-c3947e62-1778829473425.webp',
    content: [
      {
        title: `Compliance as Competitive Advantage`,
        content: `Privacy is no longer just a legal checkbox; it's a core component of brand trust.`
      }
    ]
  },
  {
    id: 'arbitration-vs-litigation',
    title: `The Rise of Commercial Arbitration`,
    excerpt: `Why global enterprises are choosing arbitration over traditional courtrooms in Nairobi.`,
    date: 'Feb 05, 2025',
    author: 'Peter Kinyua',
    category: 'Litigation',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f9915650-7141-4201-8235-b051096a6e79/service-dispute-resolution-bc362d68-1778829472406.webp',
    content: [
      {
        title: `Speed and Confidentiality`,
        content: `Arbitration provides the efficiency and privacy that high-stakes commercial disputes require.`
      }
    ]
  }
];