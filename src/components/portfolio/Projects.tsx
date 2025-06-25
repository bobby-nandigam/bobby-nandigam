
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Code, Database, Brain } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Skin Carcinoma Classification',
      category: 'Machine Learning',
      description: 'Developed a skin carcinoma classification system using machine learning algorithms to assist in early detection and diagnosis. Utilized advanced image processing techniques to analyze dermatological images and accurately classify different types of skin carcinomas.',
      technologies: ['Python', 'TensorFlow', 'Computer Vision', 'Image Processing', 'Medical AI'],
      icon: <Brain className="h-6 w-6" />,
      gradient: 'from-green-400 to-blue-500',
      features: [
        'Advanced image preprocessing pipeline',
        'Multi-class classification with high accuracy',
        'Real-time inference capabilities',
        'Medical-grade validation protocols'
      ]
    },
    {
      title: 'Hostel Management System',
      category: 'Web Development',
      description: 'Created a comprehensive web-based hostel management system for efficient administration of hostel facilities. Enhanced communication and organization within the hostel community while ensuring seamless operations.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Database Design', 'Web APIs'],
      icon: <Database className="h-6 w-6" />,
      gradient: 'from-purple-400 to-pink-500',
      features: [
        'Room allocation and management',
        'Student registration system',
        'Fee management and tracking',
        'Staff supervision dashboard'
      ]
    }
  ];

  const categories = ['All', 'Machine Learning', 'Web Development'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            A showcase of my technical projects demonstrating expertise in machine learning, web development, and problem-solving.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={filter === category ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white`}>
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="icon" variant="ghost" className="hover:scale-110 transition-transform">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="hover:scale-110 transition-transform">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Code className="h-4 w-4 mr-2" />
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
