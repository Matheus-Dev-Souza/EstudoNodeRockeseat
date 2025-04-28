const express = require('express');

const app = express();

app.get("/", (request, response) => {
    return response.json({ message: "Hello world! Fundamento Node"});
});

app.listen(3030);

