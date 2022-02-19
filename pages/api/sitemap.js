const fs = require('fs');
import pokemons from './pokemons.json'
export default function handler(req, res) {
    try {
        const types = [
            "bug",
            "dark",
            "dragon",
            "electric",
            "fairy",
            "fighting",
            "fire",
            "flying",
            "ghost",
            "grass",
            "ground",
            "ice",
            "normal",
            "poison",
            "psychic",
            "rock",
            "steel",
            "water"
        ]

const sitemap =
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

<url>
<loc>https://www.datapokemon.com/</loc>
</url>

<url>
<loc>https://www.datapokemon.com/effectiveness</loc>
</url>

<url>
<loc>https://www.datapokemon.com/types</loc>
</url>

${pokemons.data.pokemon_v2_pokemon.map((pokemon) => {
return `
<url>
<loc>${`https://www.datapokemon.com/pokemon/${pokemon.id}`}</loc>
</url>
`; }).join("")}
${types.map((type) => {
return `
<url>
<loc>${`https://www.datapokemon.com/type/${type}`}</loc>
</url>
`;}).join("")}

<url>
<loc>https://www.datapokemon.com/type/bug?page=2</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/bug?page=3</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/bug?page=4</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/dark?page=2</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/dark?page=3</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/dragon?page=2</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/dragon?page=3</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/electric?page=2</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/electric?page=3</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/electric?page=4</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/fairy?page=2</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/fairy?page=3</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/fighting?page=2</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/fighting?page=3</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/fire?page=2</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/fire?page=3</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/fire?page=4</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/flying?page=2</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/flying?page=3</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/flying?page=4</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/flying?page=5</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/flying?page=6</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/ghost?page=2</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/ghost?page=3</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/grass?page=2</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/grass?page=3</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/grass?page=4</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/grass?page=5</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/grass?page=6</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/ground?page=2</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/ground?page=3</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/ground?page=4</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/ice?page=2</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/normal?page=2</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/normal?page=3</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/normal?page=4</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/normal?page=5</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/normal?page=6</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/poison?page=2</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/poison?page=3</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/poison?page=4</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/psychic?page=2</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/psychic?page=3</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/psychic?page=4</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/psychic?page=5</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/psychic?page=6</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/rock?page=2</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/rock?page=3</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/rock?page=4</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/steel?page=2</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/steel?page=3</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/water?page=2</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/water?page=3</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/water?page=4</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/water?page=5</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/water?page=6</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/water?page=7</loc>
</url>

<url>
<loc>https://www.datapokemon.com/type/water?page=8</loc>
</url>


</urlset>`;

        fs.writeFileSync("./public/sitemap.xml", sitemap);
        console.log("genarated Sitemap successfully");
        res.json('genarated Sitemap successfully')
        return;
    } catch (error) {
        res.status(404).send('Error in Sitemap')
    }

};



