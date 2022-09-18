module.exports = {
  apps : [{
    name   : "app1",
    script: './server_fastify.mjs',
    instances: "max",
    max_memory_restart: "150M",
    watch: '.'
  // }, {
  //   script: './service-worker/',
  //   watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
