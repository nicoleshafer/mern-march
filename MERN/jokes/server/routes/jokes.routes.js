const JokeController = require('../controllers/jokes.controller')

module.exports = app => {
    app.get("/api/jokes", JokeController.getJokes);
    app.post("/api/jokes", JokeController.createJoke);
    app.get("/api/jokes/:_id", JokeController.getJokeById);
    app.put("/api/jokes/:_id", JokeController.updateJoke);
    app.delete("/api/jokes/:_id", JokeController.deleteJoke)
}