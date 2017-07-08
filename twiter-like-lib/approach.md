## What technologies would you use to build out this platform? Please tell us the languages, databases, tools / servers you would use to build out the above platform.
# technologies : 
    1. api framework : node/express for api framework, 
    2. front end : angular js (having familarity with) otherwise react (so that code can be reused for mobile apps)

# languages : javascript as it can be used @frontend, backend and scripting

# databases :
    1. mongo: to store session, user, access controll list and class level permission as this type of data is unstructured in nature and do not require deep query and complex joins
    2. mysql: to store data which requre complex joins and deep query and arithematic calculation at db level, sql provides Stored Procedure feature those can be directly exploited by api where complex data retreiving is required
    3. redis (in cache database): to store data which gets consumend by user and do not update frequently. data like:
        a. api responses for individual user which do not change very frequently(to store api responses)
        b. session information
        c. trending hashtags etc.
# tools / servers : 
    1. hosting: EC2 amazon-ubuntu or EBS(managed instances) 
    2. Server : node
    3. mysql server, mongod sever
    4. grunt: for automating distribution creation
    5. testing: 
    6. npm : for installation of node modules

## How much can the system you have built scale up to? What are the limiting factors of your system and when will it start failing?

# node api server
    1. as single threaded archetecture if so much computation is carried will block execution 
# SQL : 
    1. indexes are not properly taken care
    2. database level user permissions are not implemented
    3. 


## SQL Schema:
    find in create_db.sql file

## Write a function/API that will return all the tweets to show on the dashboard of a 
    <!--PENDING-->

