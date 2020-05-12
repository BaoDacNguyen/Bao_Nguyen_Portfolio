let playerName;
let score;
let gameover;
const leaderboard = [];
const Lname = "entry.1499564588";
const Lscore = "entry.1022991227";
const FormID = "1FAIpQLSeXO-V-MTvxbsULkO2ae79j46XAMiu3xyKczzln69Y8YapSeg";
const urlPOST = `https://docs.google.com/forms/d/e/${FormID}/viewform`;
const clientID = "344663259245-ra5rvubspaqve0a6s7ot50q5hiv8dadj.apps.googleusercontent.com";
const formLink = "https://docs.google.com/spreadsheets/d/1jo7_E0OwV6nfMk_VV6uzjkFcmPb3hY3F3g-yijtbsS8/edit?usp=sharing";
const clientSecret = "tXcsTBr3-zpBzBXQau-px5-1"

let sheetID = '1jo7_E0OwV6nfMk_VV6uzjkFcmPb3hY3F3g-yijtbsS8';
const key = 'AIzaSyD75eMkF9OaNEuv9bsM_xn9WHJmcA65IH4';
const sheet = encodeURIComponent('Form Responses 1');
const urlGET =`https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${sheet}?key=${key}`;
