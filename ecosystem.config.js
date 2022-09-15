module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'surya',
      host : '192.168.1.62',
      ref  : 'origin/main',
      repo : 'https://github.com/surya5602/Task',
      path : '/var/www/deployment',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',

    }
  }
};
