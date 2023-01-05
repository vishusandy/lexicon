var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/vishusandy/lexicon.git', // Update to point to your repository
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);
