import githubApi from '../api/githubApi';

export const getGithubUser = async (user) => {
  const response = await githubApi.getGithubUser(user);

  if (response.id) {
    const {avatar_url, location, name} = response;

    return {
      avatar_url,
      location,
      name,
    };
  }

  console.log(response);
};
