The project consists of 3 parts: API, ROUND-ROBIN and UI
# API
- Java project created with spring boot
- Connected to mongo data base

# ROUND-ROBIN
- Node js project

# UI
- Vue js project

--------------------------------------------------------------------------------------------------
How to deploy with docker

The docker-compose.yaml has all configuration to deploy. For ROUND-ROBIN and UI projects it is necessary
to change environment variables for your own EC2 instance url

# ROUND-ROBIN
    SERVICE_URL=${EC2_PUBLIC_DNS}
# UI
    VUE_APP_ROUND_ROBIN_URL=${EC2_PUBLIC_DNS}

Then copy docker-compose.yaml to EC2 instance, verify your current directory contains the file and run the following commands

    To get last version of the images from docker hub
    ```
    docker-compose pull
    ```
    To deploy all containers
    ```
    docker-compose up -d
    ```

To verify run docker ps. According to configuration file:
    API will have 3 instances running in ports 3030, 3031, 3032
    ROUND-ROBIN have 1 instance running in port 8585
    UI will have 1 instance running in port 8081

For test app verify your security group for EC2 instance have inbound rules configured to allow connections for each port mentioned above. 

Finally you can test the application by navigating to ${EC2_PUBLIC_DNS}:8081
