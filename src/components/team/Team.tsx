import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, GraduationCap, ChevronRight } from 'lucide-react';

const members = [
  {
    name: 'Peter Kinyua',
    role: 'Senior Founding Partner',
    bio: 'A titan in constitutional litigation and commercial arbitration. Peter has shaped legal precedents that define the modern East African legal landscape.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f9915650-7141-4201-8235-b051096a6e79/peter-kinyua-portrait-3ea067af-1778829470152.webp',
    education: 'LL.M, Harvard Law School | LL.B, UoN',
    specialties: ['Constitutional Law', 'International Arbitration', 'Strategic Advisory']
  },
  {
    name: 'Mary Mwaniki',
    role: 'Managing Partner',
    bio: 'Expert in Banking and Corporate Governance. Mary leads our transactional practice with a reputation for precision in multi-million dollar deals.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f9915650-7141-4201-8235-b051096a6e79/mary-mwaniki-portrait-7fff7d8c-1778829471865.webp',
    education: 'LL.B (Hons), UoN | Certified Secretary (K)',
    specialties: ['Banking & Finance', 'M&A', 'Corporate Governance']
  },
  {
    name: 'James Wainaina',
    role: 'Partner, Infrastructure',
    bio: 'The lead counsel for major infrastructure projects. James facilitates the legal framework for Kenyas most significant real estate developments.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f9915650-7141-4201-8235-b051096a6e79/james-wainaina-portrait-85a5eb12-1778829470675.webp',
    education: 'LL.B (Hons), Post-Grad Diploma (KSL)',
    specialties: ['Real Estate', 'Infrastructure', 'Project Finance']
  },
  {
    name: 'Catherine Auma',
    role: 'Senior Associate, Tech Law',
    bio: 'A visionary in Intellectual Property and Technology Law. Catherine helps global tech firms navigate data privacy and digital regulation in Africa.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f9915650-7141-4201-8235-b051096a6e79/catherine-auma-portrait-0cc8fe8d-1778829470370.webp',
    education: 'LL.B (Hons), Certified IP Specialist',
    specialties: ['FinTech', 'Data Privacy', 'Intellectual Property']
  }
];

export const Team = () => {
  return (
    <section id="team" className="bg-[#FAFAF8] py-32 lg:py-56 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex items-center justify-center space-x-4"
          >
            <div className="h-px w-16 bg-[#c5a059]" />
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#c5a059]">Our Elite Team</span>
            <div className="h-px w-16 bg-[#c5a059]" />
          </motion.div>
          <h3 className="text-7xl font-serif font-black text-[#1a2e25] md:text-9xl tracking-tighter">The Partners</h3>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="group flex flex-col md:flex-row bg-white rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-[0_60px_120px_-30px_rgba(40,50,45,0.15)] transition-all duration-700"
            >
              <div className="md:w-5/12 relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#1a2e25]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-8 left-8 flex space-x-3 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                  <button className="rounded-2xl bg-white p-4 text-[#1a2e25] shadow-xl hover:bg-[#c5a059] hover:scale-110 transition-all">
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button className="rounded-2xl bg-white p-4 text-[#1a2e25] shadow-xl hover:bg-[#c5a059] hover:scale-110 transition-all">
                    <Mail className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="md:w-7/12 p-12 flex flex-col">
                <div className="mb-8">
                  <h4 className="text-3xl font-serif font-black text-[#1a2e25] mb-2">{member.name}</h4>
                  <p className="text-[11px] font-black text-[#c5a059] uppercase tracking-[0.3em]">{member.role}</p>
                </div>
                
                <div className="mb-10 space-y-5">
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="h-5 w-5 text-[#c5a059] shrink-0" />
                    <span className="text-xs font-bold text-[#1a2e25]/60">{member.education}</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {member.specialties?.map((spec, i) => (
                      <span key={i} className="text-[9px] font-black uppercase tracking-wider px-4 py-2 bg-[#1a2e25]/5 rounded-full text-[#1a2e25]/70 border border-[#1a2e25]/5">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-base leading-relaxed text-[#1a2e25]/70 mb-10 font-medium">{member.bio}</p>
                
                <div className="mt-auto">
                  <button className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#1a2e25] group/btn">
                    <span>Full Biography</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2 text-[#c5a059]" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};