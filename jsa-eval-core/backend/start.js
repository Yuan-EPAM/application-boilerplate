require('dotenv').config();
const app = require('./server');

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server running on ${process.env.SERVER_PORT}`);
});
