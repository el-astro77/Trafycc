# Trafycc
Trafycc - Advertise to Your Exact Audience

Title: Deploying Trafycc on AWS EC2 Using Docker


## Step 1: Launched an EC2 Instance

 1. Logged into the **AWS Management Console** and navigated to **EC2**.
 2. Click on **Launch Instances** and configured the following:
    - **AMI**: Choose Ubuntu 
    - **Instance Type**: t2.micro 
3. Once the instance is launched, connect to it via SSH:

   ```bash
   ssh -i <${keyname}.pem> ubuntu@<your-ec2-public-ip>
  This should connect to the ec2 using the terminal.
## Step 2: Installed Docker on EC2 
 1. Installed docker using the command
    ```bash
     sudo apt install docker.io -y 
 3. Started docker using the command
    ```bash
      sudo systemctl start docker
 5. Made docker start automatically on boot using command
    ```bash
      sudo systemctl enable docker

## Step 3: Uploaded Files to EC2 using GitHub as the code repository and Git as the version control
 1. Installed git on ec2 using the command
    ```bash
     "sudo apt install git"
 4. Cloned the git repository from GitHub using the command "git clone ${repositoryname.git}" 

## Step 4: Build and Run the Docker Container on EC2
 1. Build the Docker image using the command -
 2. ```bash
    sudo docker build -t ${containername}.
 3. Run the docker container using the command -
 4. ```bash
    sudo docker run -d -p 80:80 ${containername}  .

## Step 5: Update Ec2 Security Group for Http  traffic 
 1. In the EC2 instance in the aws management console, updated the security groups by the following inbound rules.
 2. Type: HTTP
    Protocol: TCP
    Port Range: 80
    Source: Anywhere (0.0.0.0/0)
 3. This is done for EC2 instance to allow external access to the web application.

## Step 6 Access The Website
 1. Opened the EC2 instance’s public DNS in the browser. Public Ip -  http://ec2-54-166-236-149.compute-1.amazonaws.com/
