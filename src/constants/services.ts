import { 
  Building2, 
  Handshake, 
  Gavel, 
  FileText,
  ShieldAlert,
  Home,
  Scale,
  Briefcase
} from 'lucide-react';

export interface Service {
  slug: string;
  title: string;
  description: string;
  fullContent: string;
  icon: any;
  image: string;
  specializations: string[];
}

export const servicesData: Service[] = [
  {
    slug: 'corporate-commercial-law',
    title: 'Corporate & Commercial Law',
    description: 'Comprehensive legal support for M&A, tax advisory, business structuring, and corporate governance.',
    fullContent: 'KMW Advocates provides comprehensive legal support for mergers and acquisitions, tax advisory, business structuring, and corporate governance. We assist clients in navigating the complex regulatory environment in Kenya, ensuring compliance and strategic growth.',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop',
    specializations: ['Mergers & Acquisitions', 'Tax Advisory', 'Business Structuring', 'Corporate Governance']
  },
  {
    slug: 'conveyancing-real-estate',
    title: 'Conveyancing & Real Estate',
    description: 'Expert handling of property transactions, land laws, and commercial leasing.',
    fullContent: "Our firm handles all aspects of property transactions, including land ownership laws, guidelines, developments, and commercial leasing. We ensure that our clients' real estate investments are protected and legally sound.",
    icon: Home,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f9915650-7141-4201-8235-b051096a6e79/blog-land-records-01773c8e-1778829138883.webp',
    specializations: ['Property Transactions', 'Land Ownership Laws', 'Commercial Leasing', 'Real Estate Development']
  },
  {
    slug: 'litigation-arbitration',
    title: 'Litigation & Arbitration',
    description: 'Cutting-edge dispute resolution covering banking, employment, constitutional, and IP law.',
    fullContent: 'We operate a cutting-edge dispute resolution practice managing cases spanning banking litigation, employment disputes, constitutional law, intellectual property infringements, and commercial debt recovery. Our team is dedicated to achieving the best possible outcomes for our clients through strategic litigation and arbitration.',
    icon: Gavel,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f9915650-7141-4201-8235-b051096a6e79/blog-arbitration-5842e416-1778829137544.webp',
    specializations: ['Banking Litigation', 'Employment Disputes', 'Constitutional Law', 'IP Infringements', 'Commercial Debt Recovery']
  },
  {
    slug: 'public-procurement',
    title: 'Public Procurement',
    description: 'Assisting suppliers and procuring bodies with Kenyan public procurement compliance.',
    fullContent: 'We assist both suppliers and public procuring bodies to navigate and enforce compliance with Kenyan public procurement rules. Our expertise ensures that procurement processes are fair, transparent, and legally compliant.',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=2070&auto=format&fit=crop',
    specializations: ['Procurement Compliance', 'Tender Advisory', 'Regulatory Navigation', 'Dispute Resolution']
  },
  {
    slug: 'specialized-laws',
    title: 'Specialized Laws',
    description: 'Extensive experience in handling antitrust, competition, and monopoly laws.',
    fullContent: 'Our firm has extensive experience in handling specialized areas of law, including antitrust, competition, and monopoly laws. We provide strategic advice to help clients navigate these complex regulatory landscapes.',
    icon: ShieldAlert,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    specializations: ['Antitrust Law', 'Competition Law', 'Monopoly Regulations', 'Regulatory Compliance']
  }
];