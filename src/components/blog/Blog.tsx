import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { blogPosts, BlogPost } from '@/data/blogPosts';

export const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="blog" className="bg-[#FDFDFB] py-32 lg:py-56 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-32 flex flex-col items-center justify-between gap-12 md:flex-row md:items-end border-b border-[#1a2e25]/5 pb-20">
          <div className="text-center md:text-left">
            <div className="mb-6 flex items-center space-x-4 justify-center md:justify-start">
              <div className="h-px w-16 bg-[#c5a059]" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#c5a059]">Intelligence Report</span>
            </div>
            <h3 className="text-7xl font-serif font-black text-[#1a2e25] tracking-tighter">Insights</h3>
          </div>
          <div className="relative w-full max-w-md">
            <Search className="absolute left-6 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1a2e25]/30" />
            <Input 
              placeholder="Search intelligence archives..." 
              className="pl-14 h-18 bg-white border-[#1a2e25]/5 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] focus:border-[#c5a059] focus:ring-0"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <Card 
                  className="h-full border-none rounded-[3rem] overflow-hidden bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.04)] hover:shadow-[0_50px_100px_-20px_rgba(40,50,45,0.15)] transition-all duration-700 flex flex-col cursor-pointer group"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="relative h-72 overflow-hidden">
                    <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-[#1a2e25]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <Badge className="absolute left-8 top-8 bg-[#c5a059] text-[#1a2e25] border-none text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader className="pt-10 px-10">
                    <div className="flex items-center space-x-6 text-[10px] font-black text-[#1a2e25]/40 uppercase tracking-widest mb-6">
                      <div className="flex items-center">
                        <Calendar className="mr-2.5 h-4 w-4 text-[#c5a059]" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <User className="mr-2.5 h-4 w-4 text-[#c5a059]" />
                        {post.author}
                      </div>
                    </div>
                    <CardTitle className="text-3xl font-serif font-black leading-tight text-[#1a2e25] group-hover:text-[#c5a059] transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col px-10 pb-12">
                    <p className="text-base text-[#1a2e25]/60 mb-10 line-clamp-3 leading-relaxed font-medium">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto">
                      <button className="flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-[#1a2e25] group-hover:text-[#c5a059] transition-colors group/btn">
                        <span>Read Full Report</span>
                        <ArrowRight className="ml-4 h-4 w-4 transition-transform group-hover/btn:translate-x-3" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-40 text-[#1a2e25]/30 font-serif italic text-3xl">
            No intelligence archives match your query.
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1a2e25]/98 p-4 backdrop-blur-2xl"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="relative max-h-[95vh] w-full max-w-6xl overflow-y-auto rounded-[4rem] bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute right-10 top-10 z-10 rounded-full bg-white/10 p-5 text-white backdrop-blur-xl transition-all hover:bg-[#c5a059] hover:text-[#1a2e25]"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="relative h-[60vh] w-full">
                <img src={selectedPost.image} alt={selectedPost.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e25] via-[#1a2e25]/40 to-transparent" />
                <div className="absolute bottom-16 left-16 right-16">
                  <Badge className="mb-8 bg-[#c5a059] text-[#1a2e25] border-none text-[11px] font-black uppercase tracking-[0.2em] px-8 py-2.5 rounded-full">
                    {selectedPost.category}
                  </Badge>
                  <h2 className="text-5xl font-serif font-black text-white md:text-7xl max-w-4xl leading-[1.1] tracking-tighter">{selectedPost.title}</h2>
                </div>
              </div>

              <div className="p-16 md:p-32">
                <div className="mb-20 flex flex-wrap items-center gap-12 text-xs font-black uppercase tracking-[0.3em] text-[#1a2e25]/30 border-b border-[#1a2e25]/5 pb-16">
                  <div className="flex items-center">
                    <Calendar className="mr-3 h-5 w-5 text-[#c5a059]" />
                    {selectedPost.date}
                  </div>
                  <div className="flex items-center">
                    <User className="mr-3 h-5 w-5 text-[#c5a059]" />
                    {selectedPost.author}
                  </div>
                  <div className="text-[#c5a059] font-black">
                    KMW ADVOCATES INTELLIGENCE
                  </div>
                </div>

                <div className="max-w-4xl">
                  {selectedPost.content.map((section, index) => (
                    <div key={index} className="mb-24">
                      <h3 className="text-4xl font-serif font-black text-[#1a2e25] mb-10 tracking-tight">{section.title}</h3>
                      <p className="text-2xl leading-[1.6] text-[#1a2e25]/70 font-medium">{section.content}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-24 flex justify-start border-t border-[#1a2e25]/5 pt-20">
                  <Button 
                    onClick={() => setSelectedPost(null)}
                    className="h-20 px-16 rounded-2xl bg-[#1a2e25] text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-[#c5a059] hover:text-[#1a2e25] transition-all"
                  >
                    Return to Library
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};