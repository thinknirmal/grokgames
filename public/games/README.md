# AI-Created Games Directory

This directory contains all the AI-created games available in the application. Each game is contained in its own subdirectory and must be developed with the assistance of AI language models.

## Adding a New AI-Created Game

To add a new game:

1. Create a new directory inside the `public/games` folder with the game's ID (use lowercase, kebab-case: `my-new-game`)
2. Inside that directory, create a `gg.json` file with the game's metadata (see format below)
3. Add any game assets like images to the game folder
4. Make sure to document which AI models were used to create the game

The `games-list.json` file in the public directory will be automatically updated when your changes are merged to the main branch.

## Game Metadata Format (`gg.json`)

Each game directory must contain a `gg.json` file with the following structure:

```json
{
  "id": "game-id",
  "title": "Game Title",
  "description": "Short description of the game",
  "price": 25,
  "isNew": true,
  "isHot": false,
  "imageUrl": "/games/game-id/cover.jpg",
  "releaseDate": "YYYY-MM-DD",
  "tags": ["tag1", "tag2", "tag3"],
  "aiModels": [
    {
      "name": "GPT-4",
      "role": "primary",
      "contribution": "Generated game code and mechanics"
    },
    {
      "name": "DALL-E 3",
      "role": "secondary",
      "contribution": "Created game assets"
    }
  ]
}
```

### Fields:

- `id`: Game identifier (matches the directory name)
- `title`: Display name of the game
- `description`: Short description
- `price`: Cost in coins
- `isNew`: Whether to show a "NEW" badge
- `isHot`: Whether to show a "HOT" badge
- `imageUrl`: Path to the cover image
- `releaseDate`: Release date in YYYY-MM-DD format
- `tags`: Array of category tags
- `aiModels`: **Required** - Array of AI models used to create the game

### AI Models Field

The `aiModels` field is required and must include at least one model. For each model, specify:

- `name`: The name of the AI model (e.g., "GPT-4", "Claude 3", "Gemini", etc.)
- `role`: Either "primary" (main development) or "secondary" (supporting role)
- `contribution`: Brief description of how the AI contributed to the game

## AI Model Suggestions

Here are some of the AI models you might use in your game development:

### Text-to-Code Models
- GPT-4, GPT-3.5 (OpenAI)
- Claude 3, Claude 2 (Anthropic)
- Gemini Pro, Gemini Ultra (Google)
- Llama 3, Llama 2 (Meta)
- Mixtral 8x7B, Mixtral 8x22B (Mistral AI)
- Code Llama (Meta)
- StarCoder (Hugging Face)

### Text-to-Image Models
- DALL-E 3 (OpenAI)
- Midjourney
- Stable Diffusion
- Imagen (Google)

### Audio Generation
- Suno
- Soundraw
- MusicLM (Google)

## Automation

GitHub Actions workflows automatically maintain the `games-list.json` file:

1. When a PR with changes to the games directory is created, a preview of the new games list is added as a comment
2. When changes are merged to the main branch, the `games-list.json` file is automatically updated

The application loads this list to show all available games in the GamesSection component with appropriate AI model badges. 