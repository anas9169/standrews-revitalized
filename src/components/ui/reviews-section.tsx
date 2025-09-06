import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const ReviewsSection = () => {
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
    <section id="reviews" className="py-20 bg-warm-gray">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">5.0</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Read our 5-star reviews
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear what our patients have to say about 
            their experience at St Andrews Dental Practice.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="group border-0 shadow-dental hover:shadow-xl transition-all duration-500 transform-gpu hover:-translate-y-1 bg-background"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start">
                    <Quote className="h-8 w-8 text-primary/30 group-hover:text-primary/50 transition-colors duration-300" />
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-lg text-foreground leading-relaxed">
                    "{review.text}"
                  </blockquote>

                  {/* Author */}
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-medium text-muted-foreground">
                      — {review.author}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-background rounded-3xl p-12 shadow-dental">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Experience 5-Star Dental Care
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our family of satisfied patients and discover why we're Biggleswade's 
            most trusted dental practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-12 px-8 py-3 text-lg dental-hero-gradient">
              Book Your First Visit
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-8 py-3 text-lg">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;