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
              `header must be in format '๐งช test: ' or '๐งช test(test):'

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
        'โจ feat:',
        '๐ perf:',
        '๐ฉน fix:',
        'โป๏ธ  refactor:',
        '๐ docs:',
        '๐งช test:',
        '๐จ style:',
        '๐ง chore:',
        '๐๏ธ  build:',
        '๐ฅ ci:',
        'โ env:',
        '๐ง wip:',
        '๐ฆ๏ธ pack:',
      ],
    ],
  },
};
