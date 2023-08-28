const { app } = require('./app/app');

const port =  3000;

app.listen(port, () => {
    console.log(`Express app running on port: ${port}`);
  });
  