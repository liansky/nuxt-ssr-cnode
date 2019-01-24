module.exports = {
  apps: [{
    name: 'nuxt-ssr-cnode',
    script: './server/index.js',
    watch: true,
    ignore_watch: [ // 从监控目录中排除
      'node_modules',
      'logs',
      '.idea',
      '.git'
    ],
    watch_options: {
      usePolling: true
    },
    // max_memory_restart: '1G',
    autorestart: true,
    instances: 2,
    exec_mode: 'cluster',
    error_file: './logs/pm2/app-err.log', // 错误日志路径
    out_file: './logs/pm2/app-out.log', // 普通日志路径
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}

