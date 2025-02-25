# AI Model Badges Reference Guide

## Introduction

GrokGames uses a color-coded badge system to visually indicate which AI models were used in the creation of each game. This guide explains how to interpret these badges and what each color represents.

## Badge Locations

AI model badges appear in two locations on each game card:

1. **Primary Badge** - Located in the top-right corner of the game card, showing the primary AI model used
2. **Model List** - Located at the bottom of the card, showing all AI models that contributed to the game

## Color Coding System

Each AI model is assigned a specific color to make it easy to identify at a glance:

| Color | Model | Description |
|-------|-------|-------------|
| ![#10a37f](https://via.placeholder.com/15/10a37f/000000?text=+) `#10a37f` | **GPT-4** | OpenAI's most advanced model, capable of complex reasoning and code generation |
| ![#19c37d](https://via.placeholder.com/15/19c37d/000000?text=+) `#19c37d` | **GPT-3.5** | OpenAI's widely used model balancing capabilities and performance |
| ![#8e44ad](https://via.placeholder.com/15/8e44ad/000000?text=+) `#8e44ad` | **Claude** | Anthropic's models known for thoughtful, conversational text and code generation |
| ![#4285f4](https://via.placeholder.com/15/4285f4/000000?text=+) `#4285f4` | **Gemini** | Google's multimodal AI models with strong code generation capabilities |
| ![#ef4a23](https://via.placeholder.com/15/ef4a23/000000?text=+) `#ef4a23` | **Llama** | Meta's open-source models known for versatility across tasks |
| ![#6236ff](https://via.placeholder.com/15/6236ff/000000?text=+) `#6236ff` | **Mixtral** | Mistral AI's mixture-of-experts models with strong programming abilities |
| ![#555555](https://via.placeholder.com/15/555555/000000?text=+) `#555555` | **Other** | Other AI models not specifically categorized above |

## Primary vs. Secondary Models

When examining a game's AI contributions, you'll notice models are classified as either "primary" or "secondary":

- **Primary Model**: The main AI model that generated most of the game code or was the primary contributor to the game's development
- **Secondary Models**: Supporting AI models that contributed to specific aspects like graphics, narrative, or auxiliary functions

## How to Read AI Model Badges

When you see a game with multiple AI model badges:

1. The badge in the top-right corner represents the primary AI model
2. Hover over any badge to see a tooltip describing that model's specific contribution
3. The complete list of AI models at the bottom shows all contributors

## Examples

### Example 1: GPT-4 Primary with DALL-E Secondary
- **Top Badge**: Green GPT-4 badge
- **Bottom List**: GPT-4 badge + other model badges
- **Interpretation**: GPT-4 generated the core game code, while other models helped with specific components

### Example 2: Claude Primary with Multiple Secondary Models
- **Top Badge**: Purple Claude badge
- **Bottom List**: Claude + multiple other model badges
- **Interpretation**: Claude was the primary code generator, with other models contributing to assets, story, or mechanics

## Using Badges in Your Submissions

When adding AI model information to your game's `gg.json` file:

```json
"aiModels": [
  {
    "name": "GPT-4",
    "role": "primary",
    "contribution": "Generated game code and core mechanics"
  },
  {
    "name": "DALL-E 3",
    "role": "secondary",
    "contribution": "Created game assets and character designs"
  }
]
```

- Be accurate about which models you used
- Clearly designate one model as "primary" (or the most significant contributor)
- Provide specific details about each model's contribution
- Use the exact model name to ensure proper badge coloring

## Badge Detection Logic

The platform automatically determines the appropriate badge color based on the model name:

- Names containing "gpt-4" receive the GPT-4 styling
- Names containing "gpt-3.5" or "gpt3.5" receive the GPT-3.5 styling
- Names containing "claude" receive the Claude styling
- Names containing "gemini" receive the Gemini styling
- Names containing "llama" receive the Llama styling
- Names containing "mixtral" receive the Mixtral styling
- All other models receive the generic "other" styling

## Why AI Model Badges Matter

The badge system serves several important purposes:

1. **Transparency**: Clearly communicates which AI technologies contributed to each game
2. **Education**: Helps users understand the capabilities of different AI models
3. **Attribution**: Properly credits the AI systems that helped create the game
4. **Comparison**: Allows users to compare games made with different AI models
5. **Discovery**: Enables filtering games by the AI models used in their creation

---

By understanding our AI model badge system, you can better appreciate the technology behind each game and make informed choices about which games to play or how to create your own submissions. 