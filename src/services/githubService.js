const GITHUB_API_URL = 'https://api.github.com';

export const fetchGithubUser = async (username) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${username}`);
    if (!response.ok) {
      throw new Error('User not found');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchGithubRepos = async (username) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${username}/repos`);
    if (!response.ok) {
      throw new Error('Repositories not found');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
