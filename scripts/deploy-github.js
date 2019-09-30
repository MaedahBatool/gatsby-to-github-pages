const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
    'public',
    {
        branch: 'master',
        repo: 'https://github.com/MaedahBatool/gatsby-to-github-pages',
    },
    () => {
        console.log('Deploy Complete!')
    }
)