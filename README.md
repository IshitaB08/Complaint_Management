# BITS Pilani Complaint Portal 
Complaint Management System for BITS Pilani, Pilani Campus

This is a much needed complaint portal for our campus - a digital solution ofr this basic need that was a long time in coming. It allows students to register their complaints on a web portal especially meant for this purpose. 
We have three sections for complaints - individual level, hosel level, institute level. 
All the various complaints registered by the user will be shown on a separate tab pertaining to each complaint. 
Once a user regsiters a complaints, its timestamp is recorded and then accordingly after 3 days a reminder mail shall be sent to the superintendent. For hostel level complaints a mail shall be generated after 20 days and sent to the warden. 
This shall ensure accountability among the authorities responsible for seeing to it that the complaints are looked into. 
The users will also have the ability to upvote complaints they resonate with so that these complaints move to the top of teh stack of complaints. 

For running the application on a Linux system :- 
 - clone the repository
 - cd into the cloned folder : BITS_Pilani_Complaint_Portal
 - run the command npm install. 
 - run node app.js
 - open the chosen browser at the link - http://localhost:3000/

Current Features : 
 - Users have the ability to register which leads them to their dashboard. 
 - Pre existing users can login to access the same
 
What hasn't yet been added : 
 - Login with BITS Mail isn't working yet - this is largely due to the fact that Google has deprecated its G+ API used for        third party authentication. Hence we have provided an option for manual registration and login in the app. 
 - We have not yet added in the functionality for reminder mails to the Warden and Superintendent.
 - 
