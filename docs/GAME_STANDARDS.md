# GrokGames Technical Standards for AI-Created Games

This document provides detailed technical specifications and standards for AI-created game submissions to the GrokGames platform. All games must be developed with the assistance of AI language models.

## AI Creation Requirements

Every game submitted to GrokGames must:

1. Be developed with significant contributions from AI language models
2. Include documentation about which AI models were used
3. Explain the AI's contribution to the game development process

The platform supports different levels of AI involvement:
- **Fully AI-generated**: The entire codebase created by AI with minimal human editing
- **AI-assisted development**: Human refinements to AI-generated code
- **AI-human collaboration**: Iterative development between human and AI

## Game Structure Requirements

### Directory Structure

Each game must follow this structure:

```
public/games/your-game-name/
├── index.html           # Required - Main entry point
├── gg.json              # Required - Game metadata with AI info
├── cover.jpg            # Required - Cover image
├── assets/              # Optional - Recommended for organization
│   ├── images/          # Game images
│   ├── audio/           # Game audio
│   └── fonts/           # Game fonts
├── css/                 # Game stylesheets
├── js/                  # Game scripts
└── README.md            # Optional - Game-specific documentation
```

### Required Files

1. **index.html**: The main entry point for your game
2. **gg.json**: Game metadata file with AI model information
3. **cover image**: Cover art for game listing (JPG or PNG)

## Technical Requirements

### Browser Compatibility

Your game should work on:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome for Android)

### Performance

- Initial page load should be under 5MB
- Game should maintain 30+ FPS on mid-range devices
- Assets should be properly optimized

### Accessibility

We encourage making games accessible:
- Support keyboard navigation where possible
- Include alternative text for game graphics
- Consider color contrast for UI elements
- Provide options to disable flashing effects

### Code Standards

- All JavaScript should be ES6+ compatible
- CSS should be properly scoped to your game
- HTML should be semantic and valid
- Avoid global namespace pollution

## Game Metadata (gg.json) Format

The `gg.json` file must follow this schema:

```json
{
  "id": "your-game-name",              // Required - Must match directory name
  "title": "Your Game Title",          // Required - Display name
  "description": "Game description",   // Required - Max 150 chars
  "price": 0,                          // Required - In platform coins
  "isNew": true,                       // Required - Show NEW badge
  "isHot": false,                      // Required - Show HOT badge
  "imageUrl": "/games/your-game-name/cover.jpg", // Required - Cover image path
  "releaseDate": "2023-09-15",         // Required - YYYY-MM-DD format
  "tags": ["tag1", "tag2"],            // Required - Min 1, Max 5 tags
  
  "aiModels": [                        // Required - AI models used
    {
      "name": "GPT-4",                 // Required - AI model name
      "role": "primary",               // Required - "primary" or "secondary"
      "contribution": "Code generation, game logic" // Required - How AI contributed
    },
    {
      "name": "DALL-E 3",
      "role": "secondary",
      "contribution": "Asset creation"
    }
  ],
  
  // Optional fields
  "version": "1.0.0",                  // Game version
  "author": "Your Name",               // Game creator
  "website": "https://yourgame.com",   // Game website
  "repository": "https://github.com/yourusername/yourgame", // Source repository
  "license": "MIT",                    // Game license
  "controls": {                        // Game controls description
    "movement": "Arrow keys / WASD",
    "action": "Space bar",
    "pause": "P key"
  },
  "difficulty": "Medium",              // Game difficulty
  "estimatedTime": "5-10 minutes",     // Estimated playtime
  "featuredScreenshots": [             // Additional screenshots
    "/games/your-game-name/screenshot1.jpg",
    "/games/your-game-name/screenshot2.jpg"
  ],
  "aiPrompt": "Brief description of the prompt(s) used" // Optional - The prompt used to generate the game
}
```

The `aiModels` field is required and must include at least one model.

## Permitted Technologies

Your game can use:

### Core Web Technologies
- HTML5
- CSS3
- JavaScript (ES6+)
- WebGL
- Canvas API
- Web Audio API

### Libraries and Frameworks
- Popular game engines (Phaser, PixiJS, Babylon.js, Three.js, etc.)
- Utility libraries (jQuery, Lodash, etc.)
- Animation libraries (GSAP, anime.js, etc.)

### Build Tools
If you use build tools, please include:
- Built/compiled files in your submission
- Source code in a `/src` directory
- Brief documentation on how to build from source

## AI Development Guidelines

When developing games with AI assistance:

1. **Provide clear instructions**: Be specific in your prompts to get better results
2. **Iterate on the responses**: Refine the AI's output through multiple prompts
3. **Use specialized models**: Different models may excel at different tasks
4. **Document your process**: Keep track of the prompts used and AI's responses
5. **Credit the AI properly**: Accurately document which models contributed to each part
6. **Verify functionality**: Test the AI-generated code thoroughly

## Content Guidelines

### Prohibited Content
- Adult/sexually explicit content
- Excessive violence or gore
- Hate speech or discriminatory content
- Content that violates intellectual property rights
- Malicious code or privacy violations

### Asset Usage
- You must have proper rights to all assets
- Document third-party assets with appropriate attribution
- Consider using CC0/public domain assets if needed
- If using AI-generated assets, ensure you have proper licensing rights

## Testing Your Game

Before submission, test your game for:

1. Functionality across browsers
2. Mobile device compatibility
3. Keyboard and touch controls
4. Offline capability (if applicable)
5. Performance under various conditions

## Submission Checklist

Before submitting your PR, verify:

- [ ] Game runs correctly when loaded via index.html
- [ ] gg.json contains valid JSON and required fields (including AI models)
- [ ] Cover image meets size and quality requirements
- [ ] All game assets are contained within your game directory
- [ ] Game works on desktop and mobile browsers
- [ ] Code is clean, commented, and follows best practices
- [ ] No console errors when running the game
- [ ] If using external libraries, they're properly included
- [ ] You've documented which AI models were used and their contributions
- [ ] Your PR includes information about the AI development process

---

These standards help ensure quality and consistency across all AI-created games on the GrokGames platform. If you have questions about these requirements, please open an issue or contact us directly. 