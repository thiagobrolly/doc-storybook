module.exports = {
  plugins: [
    {
      rules: {
        'header-match-team-pattern': (parsed) => {
          return [true, ''];
        },
        'explained-emoji-enum': (parsed, _when, validEmojis) => {
          const { header } = parsed;
          const isEmojiIncludes = validEmojis.find((emoji) =>
            header.replace(/ *\([^)]*\) */g, '').includes(emoji),
          );
          if (header && !isEmojiIncludes) {
            return [
              false,
              `header must be in format '🧪 test: ' or '🧪 test(test):'

choose one:
${validEmojis.map((emojiType) => emojiType).join('\n')}`,
            ];
          }
          return [true, ''];
        },
      },
    },
  ],
  rules: {
    'header-match-team-pattern': [2, 'always'],
    'explained-emoji-enum': [
      2,
      'always',
      [
        '✨ feat:',
        '🚀 perf:',
        '🩹 fix:',
        '♻️  refactor:',
        '📝 docs:',
        '🧪 test:',
        '🎨 style:',
        '🔧 chore:',
        '🏗️  build:',
        '💥 ci:',
        '➕ env:',
        '🚧 wip:',
        '📦️ pack:',
      ],
    ],
  },
};
