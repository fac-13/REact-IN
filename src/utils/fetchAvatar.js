export const API_BASE = "https://api.adorable.io/avatars/192";


export const fetchData = url => {
  return fetch(url)
    .then( data => data )
    .catch(err => {
      throw new Error(`fetch getAvatar failed ${err}`);
    });
};
