import { Award, Calendar, Shield, Star, TrendingUp, Users, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import React from "react";
export function AchievementsSection() {
  const achievements = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "AWS Certified Solutions Architect",
      description: "Professional certification in cloud architecture and best practices",
      date: "2024"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Arctic Code Vault Contributor",
      description: "Recognized by GitHub for contributing to repositories archived in the GitHub Arctic Code Vault, a long-term preservation initiative.",
      date: "2020"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Gold Medalist 🥇",
      description: " Awarded a Gold Medal in BS Software Engineering for graduating with distinction and highest academic performance.",
      date: "2019"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Leadership Excellence",
      description: "Led a team of 8 developers on successful enterprise project",
      date: "2024"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation Award",
      description: "Recognized for implementing cutting-edge AI solutions",
      date: "2022"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "5 Years of Excellence",
      description: "Consistently delivered high-quality projects on time",
      date: "2024"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "15+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Success Rate" }
  ];

  return (
    <section id="achievements" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[800px] text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Achievements & Recognition</h2>
          <p className="text-lg text-muted-foreground">
            Milestones and accomplishments that showcase my commitment to excellence and continuous growth.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{achievement.title}</h3>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {achievement.date}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}