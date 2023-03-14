# Front-end log application

1. build docker image
    
    ```bash
    docker build -t node-logs .
    ```
    
2. start the docker container
    
    ```bash
    sudo docker run -itd --name=node-logs -p 3000:3000 -v /home/admin/logs:/usr/src/app/logs --restart=always node-logs:latest
    ```