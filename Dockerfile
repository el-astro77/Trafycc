# Use the official Ubuntu base image
FROM ubuntu:latest

# Install Nginx web server
RUN apt-get update && apt-get install -y nginx

# Remove the default Nginx HTML files
RUN rm -rf /var/www/html/*

# Copy your entire project folder to the web server directory
COPY . /var/www/html/

# Expose port 80 for the web server
EXPOSE 80

# Start Nginx web server in the foreground
CMD ["nginx", "-g", "daemon off;"]
