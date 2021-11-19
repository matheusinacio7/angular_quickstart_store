const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3030;

const distPath = path.join(__dirname, 'dist');

app.use(express.static(distPath));

app.get('*', (_req, res) => res.status(200).sendFile(path.join(distPath, 'index.html')));

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
