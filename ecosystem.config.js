module.exports = {
    apps: [
        {
            name: 'test',
            script: 'index.js',
            instances: 1, 
            autorestart: true,
            watch: false, // Disable watch mode in production
            ignore_watch: ['node_modules'],
            max_memory_restart: '1G' 
        },
    ],
};