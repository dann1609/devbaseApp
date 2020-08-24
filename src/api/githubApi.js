import Environments from '../config/environments';

export default {
  getGithubUser: function (user) {
    const url = `${Environments.BASE}${Environments.USERS}/${user}`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.log('github error');
        console.log(url);
        console.error(error);
        return {
          error: {
            message: "Can't reach server",
          },
        };
      });
  },
};
