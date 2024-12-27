export const welcomeEmailTemplate = (userData: {
  fullName: string;
  currentSkill: string;
  recommendations: string[];
}) => `
<!DOCTYPE html>
<html>
<body>
  <h1>Welcome to LanetBase, ${userData.fullName}!</h1>
  
  <p>Thank you for joining our platform. Based on your ${userData.currentSkill} skills,
  here are some ways to get started:</p>
  
  <ul>
    ${userData.recommendations.map(rec => `<li>${rec}</li>`).join('\n')}
  </ul>
  
  <h2>Start earning Lanetcoins:</h2>
  <ul>
    <li>Complete your profile (50 coins)</li>
    <li>Daily login (10 coins)</li>
    <li>Create posts (5 coins each)</li>
    <li>Engage with community (1-2 coins per action)</li>
  </ul>
  
  <p>Best regards,<br>The LanetBase Team</p>
</body>
</html>
`;