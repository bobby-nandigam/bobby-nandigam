
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      institution: 'N.B.K.R. Institute of Science and Technology, Vidyanagar',
      period: '2020 - 2024',
      cgpa: '8.5',
      icon: <GraduationCap className="h-6 w-6" />,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      degree: 'Higher Secondary Education',
      field: 'Mathematics',
      institution: 'Narayana Junior College, Nellore',
      period: '2018 - 2020',
      cgpa: '9.6',
      icon: <BookOpen className="h-6 w-6" />,
      gradient: 'from-green-500 to-blue-500'
    },
    {
      degree: 'Secondary Education',
      field: 'SSC',
      institution: "ST. Joseph's English Medium High School, Nellore",
      period: '2017 - 2018',
      cgpa: '10.0',
      icon: <Award className="h-6 w-6" />,
      gradient: 'from-yellow-500 to-red-500'
    }
  ];

  const certifications = [
    {
      title: 'Full Stack Developer',
      issuer: 'SkillLync',
      date: 'Jan 2023',
      type: 'Professional Certification'
    },
    {
      title: 'Database Fundamentals',
      issuer: 'Microsoft',
      date: 'June 2022',
      type: 'Technical Certification'
    }
  ];

  const coursework = [
    {
      title: 'Go Language',
      platform: 'Udemy',
      date: 'Sep 2024',
      type: 'Online Course'
    },
    {
      title: 'Data Science for Engineers',
      platform: 'IIT MADRAS (NPTEL)',
      date: 'Sept 2022',
      type: 'Academic Course'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Education & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My academic journey and continuous learning through formal education, certifications, and specialized coursework.
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Academic Background</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`h-1 bg-gradient-to-r ${edu.gradient}`}></div>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${edu.gradient} text-white`}>
                        {edu.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                          {edu.degree}
                        </CardTitle>
                        <p className="text-muted-foreground font-medium">{edu.field}</p>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-2">{edu.period}</Badge>
                      <p className="text-sm font-bold text-green-600">CGPA: {edu.cgpa}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications and Coursework */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="group hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg group-hover:text-blue-600 transition-colors duration-300">
                          {cert.title}
                        </h4>
                        <p className="text-muted-foreground font-medium">{cert.issuer}</p>
                        <Badge variant="outline" className="mt-2">{cert.type}</Badge>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground font-medium">{cert.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Coursework */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Additional Coursework</h3>
            <div className="space-y-4">
              {coursework.map((course, index) => (
                <Card key={index} className="group hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg group-hover:text-blue-600 transition-colors duration-300">
                          {course.title}
                        </h4>
                        <p className="text-muted-foreground font-medium">{course.platform}</p>
                        <Badge variant="outline" className="mt-2">{course.type}</Badge>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground font-medium">{course.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Extra-curricular Activities */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                <span className="text-2xl mr-3">🌟</span>
                Extra-Curricular Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  Active member of <strong>Google Developer Groups (GDG)</strong> and the <strong>Google Developer Student Clubs (GDSC)</strong> community, 
                  contributing to and participating in various technical events and workshops. 
                  Attended Google I/O events, gaining insights into the latest developer tools, technologies, and product innovations from Google.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  <Badge variant="secondary" className="text-sm py-2 px-4">GDG Member</Badge>
                  <Badge variant="secondary" className="text-sm py-2 px-4">GDSC Community</Badge>
                  <Badge variant="secondary" className="text-sm py-2 px-4">Google I/O Attendee</Badge>
                  <Badge variant="secondary" className="text-sm py-2 px-4">Technical Workshops</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
