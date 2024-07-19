const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://appnetwise.com/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://appnetwise.com/static/logo4-50723923112d55b8165636f8401ff3e2.svg',
    logoLink: 'https://appnetwise.com/',
    title:
      "<a href='https://appnetwise.com/'><img class='img-responsive' src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/hasura/gatsby-gitbook-boilerplate',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/hasurahq" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discordapp.com/invite/hasura" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'AppNetWise', link: 'https://appnetwise.com' }],
    frontLine: false,
    ignoreIndex: true,
    title: '<span>UI/UX</span>',
  },
  siteMetadata: {
    title: 'AppNetWise',
    description: 'Documentation built with mdx. Powering AppNetWise ',
    ogImage: null,
    docsLocation: 'https://github.com/appnetwise/anw-process-document/blob/main/content',
    favicon: 'https://appnetwise.com/favicon-32x32.png?v=a3c8c4fd807cb62bea3f2371445ad700',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
