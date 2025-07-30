// leetcodeService.js
const API_BASE_URL = 'https://alfa-leetcode-api.onrender.com';

export const fetchLeetCodeProfile = async (username) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${username}`);
    if (!response.ok) {
      throw new Error('Profile not found');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchLeetCodeSolved = async (username) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${username}/solved`);
    if (!response.ok) {
      throw new Error('Solved questions not found');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchLeetCodeSubmissions = async (username) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${username}/submission`);
    if (!response.ok) {
      throw new Error('Submissions not found');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
