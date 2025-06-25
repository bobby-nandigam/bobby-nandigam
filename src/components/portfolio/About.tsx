
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: '🤖',
      title: 'AI & ML Expertise',
      description: 'Specialized in developing intelligent systems using cutting-edge machine learning algorithms and deep learning frameworks.'
    },
    {
      icon: '💻',
      title: 'Full-Stack Development',
      description: 'Proficient in building end-to-end web applications with modern technologies and best practices.'
    },
    {
      icon: '📊',
      title: 'Data-Driven Solutions',
      description: 'Expert in extracting actionable insights from complex datasets to drive business decisions.'
    },
    {
      icon: '🚀',
      title: 'Innovation Focus',
      description: 'Passionate about leveraging technology to solve real-world problems and create meaningful impact.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I am a dedicated Software Developer seeking challenging roles where I can contribute to meaningful projects. 
            My journey spans across machine learning, artificial intelligence, and full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">My Objective</h3>
          <p className="text-lg text-center text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            I aim to collaborate with forward-thinking teams to design, develop, and deliver high-quality software solutions. 
            My goal is to continuously grow in system-level design, problem-solving, and overall software development expertise 
            while contributing to projects that make a real difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
