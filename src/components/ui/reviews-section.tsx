import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import leafPattern from '@/assets/leaf-pattern.png';

const ReviewsSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1200], [0, -150]);
  const y2 = useTransform(scrollY, [0, 1200], [0, 75]);

  const reviews = [
    {
      text: "Made to feel completely comfortable. Everything explained in a way that was understandable. OUTSTANDING.",
      author: "Patient Review",
      rating: 5
    },
    {
      text: "Dr Kanzaria reacted to the problem and explained the situation and best options for treatment. Been coming for many years and always treated very well. Like the atmosphere",
      author: "Long-term Patient",
      rating: 5
    },
    {
      text: "All staff are extremely friendly and supportive understanding the stress of the financial commitment and surgery procedures. Surgery has been effective and painless.",
      author: "Dental Implant Patient",
      rating: 5
    },
    {
      text: "Very prompt service I was able to get an emergency appointment straight away.",
      author: "Emergency Patient",
      rating: 5
    },
    {
      text: "Friendly staff and a nice waiting area. Very knowledgeable friendly staff. We have been coming here for years, very friendly dentist and reception staff",
      author: "Family Patient",
      rating: 5
    },
    {
      text: "I am very nervous patient and Dr Lloyd is very patient with me and deals with my nervousness really well. I would definitely recommend Dr Lloyd and practice to others.",
      author: "Anxious Patient",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-warm-gray relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 opacity-[0.08]"
      >
        <div 
          className="w-full h-[120%] bg-repeat"
          style={{
            backgroundImage: `url(${leafPattern})`,
            backgroundSize: '350px 350px',
            filter: 'sepia(100%) saturate(180%) hue-rotate(30deg) brightness(0.7)',
            transform: 'rotate(-15deg)',
          }}
        />
      </motion.div>
      <motion.div 
        style={{ y: y2 }}
        className="absolute inset-0 opacity-[0.04]"
      >
        <div 
          className="w-full h-[120%] bg-repeat"
          style={{
            backgroundImage: `url(${leafPattern})`,
            backgroundSize: '250px 250px',
            filter: 'sepia(100%) saturate(120%) hue-rotate(60deg)',
            transform: 'rotate(30deg) scale(0.8)',
          }}
        />
      </motion.div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ 
                scale: 1.02, 
                rotateY: 3,
                rotateX: 1
              }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src="/assets/dentist-1.jpg"
                alt="Happy Patient"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-xl font-bold text-foreground ml-2">5.0</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  What Our Patients Say
                </h2>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
              </motion.div>
              {/* Reviews */}
              <div className="space-y-6">
                {reviews.slice(0, 3).map((review, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-warm-gray rounded-2xl p-6 shadow-lg"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-foreground mb-3 leading-relaxed">
                      "{review.text}"
                    </blockquote>
                    <div className="text-sm font-medium text-muted-foreground">
                      — {review.author}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;