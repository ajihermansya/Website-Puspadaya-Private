module.exports = {
  apps : [{
    name   : "puspadaya-web",
    exec_mode: 'cluster',
    instances: 'max',
    script : 'node_modules/next/dist/bin/next',
    args: 'dev',
    watch: true, 
    env_local: {
      APP_ENV: 'local'
    },
    env_dev: {
      APP_ENV: 'dev'
    },
    env_prod: {
      APP_ENV: 'prod'
    }
  }]
}


// run : pm2 start ecosystem.config.js --env env_dev
// pm2 start ecosystem.config.js --env env_dev --no-daemon

