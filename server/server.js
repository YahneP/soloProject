const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

require("./config/mongoose");
app.use(
    cors(),
    express.json(), 
    express.urlencoded({ extended: true })
)


require("./routes/userRoutes.js")(app);
require("./routes/pizzaRoutes.js")(app);

app.listen(8000, ()=>console.log("Server running on port 8000" ));