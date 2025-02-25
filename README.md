# GrokGames - AI-Created Games Platform

GrokGames is an open-source platform showcasing games created using artificial intelligence. This project provides a central hub for browser-based games that were developed with the assistance of AI language models like GPT-4, Claude, or other LLMs.

![GrokGames Banner](public/banner.png)

## 🤖 AI-Created Games Only

**Important**: GrokGames exclusively accepts games that were created with the assistance of AI language models. All games must be developed through prompting AI systems to generate code, assets, or game design. This is a core requirement for submission.

Games can use varying levels of AI assistance:
- **Fully AI-generated**: The entire game code and assets were created by AI
- **AI-assisted development**: Human refinements of AI-generated code
- **AI-human collaboration**: Iterative development between human and AI

In your submission, you must specify which AI models were used to create your game. This information will be displayed as a badge on your game's card.

## 🎮 How to Submit a Game

Contributing an AI-created game to GrokGames is simple! Follow these steps to get your game included in the platform:

### Step 1: Fork the Repository

1. Fork this repository to your own GitHub account
2. Clone your fork to your local machine

### Step 2: Create Your Game Directory

1. Create a new directory inside `public/games/` with your game's unique identifier
   - Use a kebab-case name (e.g., `my-awesome-game`)
   - Choose a unique name that isn't already used in the repository
   - Keep it concise and descriptive

```
public/games/your-game-name/
```

### Step 3: Add Required Files

Each game **must** include the following files:

#### 1. `index.html` - Game Entry Point

This is the main entry point for your game. When a user clicks on your game, this file will be loaded.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Game Name</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Your game content goes here -->
  <script src="game.js"></script>
</body>
</html>
```

#### 2. `gg.json` - Game Metadata

This file contains all the metadata for your game. It's used to display your game in the games list.

```json
{
  "id": "your-game-name",
  "title": "Your Game Title",
  "description": "A short description of your game (max 150 characters)",
  "price": 0,
  "isNew": true,
  "isHot": false,
  "imageUrl": "/games/your-game-name/cover.jpg",
  "releaseDate": "YYYY-MM-DD",
  "tags": ["tag1", "tag2", "tag3"],
  "aiModels": [
    {
      "name": "GPT-4",
      "role": "primary",
      "contribution": "Code generation, game logic"
    },
    {
      "name": "DALL-E 3",
      "role": "secondary",
      "contribution": "Asset creation"
    }
  ]
}
```

##### Metadata Fields:

| Field | Type | Description |
|-------|------|-------------|
| `id` | String | The unique identifier for your game (same as the directory name) |
| `title` | String | The display title of your game |
| `description` | String | A short description (max 150 chars) |
| `price` | Number | Price in platform coins (0 for free games) |
| `isNew` | Boolean | Whether to show a "NEW" badge |
| `isHot` | Boolean | Whether to show a "HOT" badge |
| `imageUrl` | String | Path to the cover image (must be in your game directory) |
| `releaseDate` | String | Release date in YYYY-MM-DD format |
| `tags` | Array | Categories for your game (e.g., "puzzle", "action") |
| `aiModels` | Array | **Required** - List of AI models used to create the game |

The `aiModels` field is required and must include at least one model. For each model, specify:
- `name`: The name of the AI model (e.g., "GPT-4", "Claude 3", "Gemini", etc.)
- `role`: Either "primary" (main development) or "secondary" (supporting role)
- `contribution`: Brief description of how the AI contributed to the game

#### 3. Cover Image

Include a cover image for your game:
- Recommended size: 800×450px (16:9 aspect ratio)
- Format: JPG or PNG
- Max file size: 500KB
- Place it in your game directory and reference it in gg.json

```
public/games/your-game-name/cover.jpg
```

### Step 4: Create Your Game Using AI

Develop your game using HTML, CSS, and JavaScript with the assistance of AI language models. Document the prompts you used and the AI's contribution in your PR.

**Important requirements:**
- Your game must be fully self-contained within its directory
- The game must work when accessed directly via its index.html
- All assets (images, sounds, scripts) should be included in your game directory
- External libraries are allowed, but must be included in your submission
- Responsive design is highly recommended for both desktop and mobile play
- You must document which AI models were used and how they contributed

### Step 5: Submit a Pull Request

1. Commit and push your changes to your fork
2. Create a pull request to the main repository
3. In the PR description, include:
   - A brief description of your game
   - Instructions on how to play
   - Screenshots (if applicable)
   - **Documentation of AI involvement** - which models were used and how they contributed
   - Any attribution/credits

When you submit a pull request:
- Our automated GitHub Actions will verify your game directory structure
- A preview of the updated games list will be added as a comment
- Once merged, your game will automatically appear in the platform!

## 📋 Testing Your Game Locally

To test your game before submitting:

1. Run the GrokGames platform locally:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

2. Open your browser to the local server (usually http://localhost:5173)
3. Navigate to your game in the games section

## 🚀 Game Development with AI Tips

- **Start Simple**: Ask the AI to create a small, focused game concept
- **Iterative Development**: Use multiple prompts to refine the game
- **Debug with AI**: If you encounter bugs, ask the AI to help fix them
- **Explain the Context**: Give the AI full context about the platform requirements
- **Combine Models**: Different models may excel at different aspects (code, assets, etc.)
- **Document the Process**: Keep track of your prompts and the AI's responses

## 📜 Rules and Guidelines

- Games must be created with the assistance of AI language models
- Games must be appropriate for general audiences (no adult content)
- You must have the rights to all assets used in your game
- Credit all external resources, libraries, and assets used
- Games with offensive content will not be accepted
- Games must be playable directly in the browser without plugins
- You must accurately document AI involvement in game creation

## 🔍 Need Help?

- Check out existing games in the repository for examples
- Read the [detailed documentation](public/games/README.md) about the game format
- Create an issue if you have questions or suggestions
- Join our community Discord for support

---

By submitting a game, you agree to license your game under the same license as this repository. Thank you for contributing to GrokGames! 🎮
