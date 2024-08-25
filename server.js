const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/recipesDB', { useNewUrlParser: true, useUnifiedTopology: true });

const recipeSchema = new mongoose.Schema({
    label: String,
    image: String,
    ingredientLines: [String],
    url: String
});

const Recipe = mongoose.model('Recipe', recipeSchema);

app.post('/save-recipe', async (req, res) => {
    try {
        const recipe = new Recipe(req.body);
        await recipe.save();
        res.status(200).send('Recipe saved');
    } catch (error) {
        res.status(500).send('Error saving recipe');
    }
});

app.post('/remove-recipe', async (req, res) => {
    try {
        await Recipe.deleteOne({ label: req.body.label });
        res.status(200).send('Recipe removed');
    } catch (error) {
        res.status(500).send('Error removing recipe');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});