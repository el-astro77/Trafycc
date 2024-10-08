# Trafycc
Trafycc - Advertise to Your Exact Audience

Title: Deploying Trafycc on AWS EC2 Using Docker


## Step 1: Launch an EC2 Instance

 1. Log into the **AWS Management Console** and navigate to **EC2**.
 2. Click on **Launch Instances** and configure the following:
    - **AMI**: Choose Ubuntu (latest version recommended).
    - **Instance Type**: t2.micro (free tier eligible).
    - **Security Group**: Allow SSH (port 22) and HTTP (port 80) traffic.
3. Once the instance is launched, connecting to it via SSH:

   ```bash
   ssh -i <${keyname}.pem> ubuntu@<your-ec2-public-ip>
  This should connect to the ec2 using the terminal.
## Step 2: Install Docker on EC2 
 1. Install docker using command
    ```bash
     sudo apt install docker.io -y 
 3. Start docker using command
    ```bash
      sudo systemctl start docker
 5. Makes docker start automatically on boot using command
    ```bash
      sudo systemctl enable docker

## Step 3: Upload Files to EC2 using GitHub as the code repository and Git as the version controll
 1. Install git on ec2 using command
    ```bash
     "sudo apt install git"
 4. Clone the git repository from Github using command "git clone ${repositoryname.git}" 

## Step 4: Build and Run the Docker Container on EC2
 1. Build the Docker image using the command -
 2. ```bash
    sudo docker build -t ${containername} .
 3. Run the docker container using command -
 4. ```bash
    sudo docker run -d -p 80:80 ${containername}  .

## Step 5: Update Ec2 Security Group for Http  traffic 
 1. In EC2 instance in the aws managment console update the security groups by adding following inbound rule.
 2. Type: HTTP
    Protocol: TCP
    Port Range: 80
    Source: Anywhere (0.0.0.0/0)
 3. This is done for EC2 instance to allow external access to the web application.

## Step 6 Access The Website
 1. Open the EC2 instance’s public IP or public DNS in the browser. Public Ip -  http://ec2-54-166-236-149.compute-1.amazonaws.com/
