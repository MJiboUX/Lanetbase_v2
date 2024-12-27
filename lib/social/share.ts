import { awardLanetcoins } from '../wallet/rewards';

export const shareToSocial = async (
  userId: string,
  content: string,
  platforms: ('twitter' | 'linkedin')[]
) => {
  try {
    const response = await fetch('/api/social/share', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, content, platforms }),
    });

    if (!response.ok) {
      throw new Error('Failed to share content');
    }

    const { success } = await response.json();
    
    if (success) {
      await awardLanetcoins(userId, 5, 'Social media share');
    }

    return success;
  } catch (error) {
    console.error('Error sharing to social media:', error);
    return false;
  }
};