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
      ref  : 'origin/master',
      repo : 'git@github.com/surya5602/Task.git',
      path : '/home/surya/Desktop/Nodeapp/devops/Task',
      'post-deploy' : 'npm install && pm2 start index.js',

    }
  }
};
