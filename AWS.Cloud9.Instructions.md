## Using the AWS Cloud9 IDE with the Dow Jones Education React Tutorial

1) Go to **https://console.aws.amazon.com/cloud9/home**
1) Log in with your AWS account or register for a new account and log in
1) Click **Create Environment**
1) Enter the name react-dj and click **Next Step**
1) Choose Create a new instance for environment
1) Choose `t2.micro` and click **Next Step**
1) Check over the details and click **Create Environment**
1) When the IDE is finished loading, enter the following commands into the Bash tab at the bottom of the screen:
1) `git clone https://github.com/dowjones/react-tutorial.git` - Clone the Git repo for this project
1) `cd react-tutorial` - go into the project folder 
1) `npm install` - This is the node package manager installation and may take around 10 minutes or longer to complete, depending on things like network conditions, CPU power and the weather outside.
1) In a separate window, go to **http://console.aws.amazon.com/ec2/v2/home#Instances:tag:Name=react-dj;sort=instanceId** where `react-dj` is the name of the original c9 project you made.
1) Click on the instance name and look for the **Public DNS**. Make note of it, as you will need it later. It will be something like `ec2-xx-xxx-xxx-xxx.us-east-2.compute.amazonaws.com`
1) In the **Description** tab for the instance at the bottom of the page, in the section labeled **Security Group**, click on the security group.
1) Click on the **Inbound** tab, then click **Edit**.
1) When the modal pops up, click **Add Rule**. Choose the **Type** `Custom TCP Rule`, enter a **Port Range** of `3000` and choose the **Source** `My IP`.
1) Click **Save**.
1) Back in the Cloud9 IDE, in the Bash tab at the bottom of the screen, run the command
`npm start`. This will boot up the stack and may take a few moments.
1) In a separate browser window, go to the **Public DNS** address that you saved earlier, but add the **port** `3000` to the end of the URL. You should have something to the effect of: `http://ec2-xx-xxx-xxx-xxx.us-east-2.compute.amazonaws.com:3000`

#### Note: Some firewalls block connections to AWS instances for security purposes. If this doesn't work, first try a different network.
#### Note: Shut down your EC2 instance as soon as you are done to avoid any further charges for a running EC2 instance.

