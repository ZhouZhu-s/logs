# Front-end log application

1. install pm2
    
    ```bash
    npm install -g pm2
    ```
    
2. start project
    
    ```bash
    pm2 start app.js
    ```
    
3. Generate the configuration file for starting the pm2 service
    
    ```bash
    pm2 startup
    ```
    
    Copy to generate the following command
    
    ```bash
    To setup the Startup Script, copy/paste the following command:
    sudo env PATH=$PATH:/home/user1/.nvm/versions/node/v8.8.1/bin /home/user1/.nvm/versions/node/v8.8.1/lib/node_modules/pm2/bin/pm2
    startup systemd -u user1 --hp /home/user1
    ```
    
    Paste the above command to the terminal
    
    ```bash
    sudo env PATH=$PATH:/home/user1/.nvm/versions/node/v8.8.1/bin /home/user1/.nvm/versions/node/v8.8.1/lib/node_modules/pm2/bin/pm2
    startup systemd -u user1 --hp /home/user1
    ```
    
    Enter the password
    
4. save config
    
    ```bash
    pm2 save
    ```