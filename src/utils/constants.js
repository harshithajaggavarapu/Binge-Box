export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BG_LOGO =
  "https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/4244dac6-92b3-4f0c-bca5-0973a354987d/US-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const USER_LOGO =
  "https://occ-0-1723-1001.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABaOSLQEhS4tl2c7sqj78iG4xD39f79rYo1zxh5bKc4lUB5lu4GNo0afoKPJV0FTKP_ptrta5zIhdpVtDEEC_5vcMP8cdqsc.png?r=28c";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_TMDB_URL = "https://image.tmdb.org/t/p/w500/";

export const langs = [
  { identifier: "en", value: "English" },
  { identifier: "spanish", value: "Spanish" },
];

export const GPT_KEY = process.env.REACT_APP_GPT_KEY;
