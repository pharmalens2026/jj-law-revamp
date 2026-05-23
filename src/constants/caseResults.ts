import { Briefcase, Home, ShieldCheck, Users } from 'lucide-react';

export interface CaseResult {
  title: string;
  category: string;
  description: string;
  icon: any;
}

export const caseResults: CaseResult[] = [
  {
    category: 'Employment Law',
    title: 'Defended Multinational Corporation',
    description: 'Successfully defended multinational corporation in complex employment dispute—avoided 50M KES in claims',
    icon: Briefcase,
  },
  {
    category: 'Property Law',
    title: 'Cross-border Acquisition',
    description: 'Facilitated cross-border property acquisition for regional logistics company worth 200M KES',
    icon: Home,
  },
  {
    category: 'Family Law',
    title: 'Complex Divorce Settlement',
    description: 'Secured favorable custody and asset division for high-profile client in complex divorce proceedings—affecting 2 children and family estate.',
    icon: Users,
  },
  {
    category: 'Human Rights',
    title: 'Community Land Rights',
    description: 'Won constitutional petition protecting community land rights affecting 5,000+ residents',
    icon: ShieldCheck,
  },
];

export const caseResultsTitle = "Proven Track Record";
export const caseResultsSubtitle = "Case Results That Speak";
export const caseResultsDescription = "Our success is measured by the outcomes we achieve for our clients. Here are some highlights from our recent work.";
export const caseResultsDisclaimer = "* Results may vary based on individual circumstances. Past performance does not guarantee future outcomes.";