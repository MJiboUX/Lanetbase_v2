export const getSkillRecommendations = (skill: string): string[] => {
  const recommendations: Record<string, string[]> = {
    'web development': [
      'Join our Web Development community',
      'Check out coding challenges',
      'Browse development courses'
    ],
    'design': [
      'Connect with other designers',
      'Participate in design challenges',
      'Showcase your portfolio'
    ],
    // Add more skills and recommendations
  };

  return recommendations[skill.toLowerCase()] || [
    'Complete your profile',
    'Join our community discussions',
    'Explore available courses'
  ];
};