import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Heart } from 'lucide-react';
import dentist1 from '@/assets/dentist-1.jpg';
import dentist2 from '@/assets/dentist-2.jpg';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Kanzaria',
      role: 'Principal Dentist',
      image: dentist1,
      specialties: ['General Dentistry', 'Cosmetic Dentistry', 'Dental Implants'],
      experience: '12+ years',
      description: 'Dr. Kanzaria is passionate about providing gentle, comprehensive dental care with a focus on patient comfort and education.',
      qualifications: ['BDS (Hons)', 'MJDF RCS (Eng)', 'PGCert Implant Dentistry']
    },
    {
      name: 'Dr. Michael Lloyd',
      role: 'Associate Dentist',
      image: dentist2,
      specialties: ['Restorative Dentistry', 'Root Canal Treatment', 'Oral Surgery'],
      experience: '8+ years',
      description: 'Dr. Lloyd specializes in complex restorative treatments and is known for his patient and reassuring chairside manner.',
      qualifications: ['BDS', 'MFDS RCS (Ed)', 'PGDip Restorative Dentistry']
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our experienced dental professionals are dedicated to providing you with 
            exceptional care in a comfortable, welcoming environment.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className="group border-0 shadow-dental hover:shadow-xl transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 h-full">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {member.name}
                      </h3>
                      <p className="text-lg text-primary font-medium mb-4">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {member.description}
                      </p>
                    </div>

                    {/* Experience */}
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="font-medium">{member.experience} experience</span>
                    </div>

                    {/* Specialties */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <Heart className="h-4 w-4 text-primary" />
                        <span>Specialties</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty) => (
                          <Badge
                            key={specialty}
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary/20"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Qualifications */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <GraduationCap className="h-4 w-4 text-primary" />
                        <span>Qualifications</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {member.qualifications.join(', ')}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Practice Values */}
        <div className="bg-warm-gray rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Our Practice Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">Compassionate Care</h4>
              <p className="text-muted-foreground">
                Every patient receives personalized, gentle treatment tailored to their unique needs.
              </p>
            </div>
            <div className="space-y-3">
              <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">Clinical Excellence</h4>
              <p className="text-muted-foreground">
                We stay current with the latest techniques and technology for optimal results.
              </p>
            </div>
            <div className="space-y-3">
              <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">Patient Education</h4>
              <p className="text-muted-foreground">
                We believe informed patients make the best decisions about their oral health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;