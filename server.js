const express = require('express');
const app = express();
const history = require('connect-history-api-fallback');

const fs = require('fs');
const path = require('path');

const axios = require('axios').create({
  httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false })
});

const replaceString = `<title>home | monkethemes</title>
<meta name="twitter:card" content="app" />
<meta property="og:title" content="monkethemes" />
<meta property="og:description" content="The best (and only, probably) place to find your new favourite monkeytype theme." />
<meta property="twitter:image" content="https://monkethemes.com/api/static/assets/favicon.png" />`;

app.use(history({
  rewrites: [
    {
      from: /^\/theme\/.*$/,
      to: function(context) {
        return context.parsedUrl.pathname;
      }
    }
  ]
}));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/theme/:themeId', async (req, res) => {
  try {
    const themeResponse = await axios.get(`http://backend:3001/api/theme/${req.params.themeId}`);
    const themeData = themeResponse.data;
    let indexFile = fs.readFileSync(path.join(__dirname, 'dist', 'index.html'), 'utf8');
    const metaTags = `
        <title>${themeData.title} | monkethemes</title>
        <meta property="og:title" content="${themeData.title}" />
        <meta property="og:site_name" content="monkethemes" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:description" content="${themeData.description}"/>
        <meta property="og:image" content="https://monkethemes.com/api/static/thumb/${req.params.themeId}.png" />
    `;
    indexFile = indexFile.replace(replaceString, metaTags);
    res.send(indexFile);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred.');
  }
});

app.get('/user/:userId', async (req, res) => {
  try {
    const userResponse = await axios.get(`http://backend:3001/api/user/${req.params.userId}`);
    const userData = userResponse.data;
    let indexFile = fs.readFileSync(path.join(__dirname, 'dist', 'index.html'), 'utf8');
    const metaTags = `
        <title>${userData.username}'s themes | monkethemes</title>
        <meta property="og:title" content="${userData.username}'s themes" />
        <meta property="og:site_name" content="monkethemes" />
        <meta name="twitter:card" content="app" />
        <meta property="og:description" content="discover ${userData.username}'s finest monkeytype creations."/>
        <meta property="og:image" content="${userData.avatarUrl}" />
    `;
    indexFile = indexFile.replace(replaceString, metaTags);
    res.send(indexFile);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred.');
  }
});

app.get('*', (req, res) => {
    let indexFile = fs.readFileSync(path.join(__dirname, 'dist', 'index.html'), 'utf8');
    res.send(indexFile);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
