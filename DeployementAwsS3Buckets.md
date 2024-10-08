# Deploying Our Static Website on AWS S3

## Step 1: Create an S3 Bucket

1. We logged into the **AWS Management Console** and navigated to **S3**.
2. We clicked on **Create Bucket** and configured the following:
   - **Bucket Name**: We chose a globally unique name (i.e., `trafycc).
   - **Block Public Access settings for this bucket**: We unchecked the "Block all public access" option to allow public access to our website.
3. We clicked **Create Bucket**.

## Step 2: Configure the Bucket for Static Website Hosting

1. We selected our newly created bucket from the S3 dashboard.
2. We went to the **Properties** tab.
3. We scrolled down to the **Static website hosting** section.
4. We chose **Use this bucket to host a website**.
5. We specified the following:
   - **Index document**: `index.html` i.e. our main HTML page.
6. We clicked **Save changes**.

## Step 3: Upload Our Website Files

1. We navigated to the **Objects** tab in our bucket.
2. We clicked on **Upload**.
3. We dragged and dropped our website files (HTML, CSS, JS) into the upload window or selected them manually.
4. We clicked on **Upload** to start the process.

## Step 4: Set Permissions for Our Files

1. After uploading, we selected the files we wanted to make publicly accessible.
2. We clicked on the **Actions** dropdown and selected **Make public**. To allow public access to all our files.

## Step 5: Accessing the website
1. After setting up the bucket for static hosting and making our files public, we accessed our website using the S3 endpoint URL - https://trafycc.s3.amazonaws.com/index.html
