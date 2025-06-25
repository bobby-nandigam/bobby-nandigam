
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: 'Machine Learning Engineer',
      company: 'Billionnbright Solutions LLP',
      period: 'Sep 2024 - May 2025',
      type: 'Full-time',
      description: [
        'Designed and implemented machine learning models to solve classification and prediction problems for real-world business datasets',
        'Conducted feature engineering and model tuning to enhance accuracy and performance of ML pipelines',
        'Collaborated with cross-functional teams to deploy ML models into production and streamline analytics workflows'
      ],
      skills: ['Machine Learning', 'Python', 'Model Deployment', 'Feature Engineering']
    },
    {
      title: 'Artificial Intelligence Intern',
      company: 'SlashMark IT Solutions Pvt. Ltd.',
      period: 'Jan 2024 - May 2024',
      type: 'Internship',
      description: [
        'Developed AI solutions using machine learning algorithms and deep learning frameworks',
        'Conducted data analysis to derive insights and optimized AI models for a variety of practical applications',
        'Worked on automating and optimizing workflows using AI and machine learning techniques',
        'Assisted in the creation of custom AI tools to support business-specific use cases and improve decision-making'
      ],
      skills: ['Deep Learning', 'AI Solutions', 'Data Analysis', 'Workflow Automation']
    },
    {
      title: 'Data Science Intern',
      company: 'YoungMinds Private Limited',
      period: 'Nov 2023 - Dec 2023',
      type: 'Internship',
      description: [
        'Gained hands-on experience in data analysis, machine learning, and statistical modeling',
        'Contributed to impactful projects by extracting insights from data to solve complex problems',
        'Collaborated with a diverse team to enhance organizational performance through data-driven decisions',
        'Developed visualizations and dashboards to communicate findings and support data-driven strategies'
      ],
      skills: ['Data Science', 'Statistical Modeling', 'Data Visualization', 'Dashboard Development']
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My journey through various roles in machine learning, AI, and data science, contributing to innovative solutions and meaningful projects.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                      {exp.title}
                    </CardTitle>
                    <p className="text-lg font-semibold text-muted-foreground mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <Badge variant="secondary" className="mb-2">{exp.type}</Badge>
                    <p className="text-sm text-muted-foreground font-medium">{exp.period}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
