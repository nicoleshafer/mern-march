const express = require('express');
const app = express()
const port = 8000;

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({extended:true}));

const TvShowRoutes = require("./routes/tv.routes");
TvShowRoutes(app);

app.listen(port, () => console.log(`The server is listening on port ${port}`))