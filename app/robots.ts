import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // Google AI
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      // OpenAI
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      // Anthropic
      {
        userAgent: 'Anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      // Perplexity
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // Meta
      {
        userAgent: 'FacebookBot',
        allow: '/',
      },
      // Apple
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
      // Microsoft Bing / Copilot
      {
        userAgent: 'Bytespider',
        allow: '/',
      },
      // Cohere
      {
        userAgent: 'cohere-ai',
        allow: '/',
      },
    ],
    sitemap: 'https://prix-peinture-belgique.be/sitemap.xml',
    host: 'https://prix-peinture-belgique.be',
  };
}
