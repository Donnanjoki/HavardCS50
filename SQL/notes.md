Structured Query Language

### Flat-file Database

> . Data can be described in patterns of columns and tables.
> csv or comma-separated value files are files that are flat in that all the data is stored in a single table represented by a text file.
> This form of data is called flat-file database.

### Relational Database

> . SQL is the standard language for storing, manipulating and retrieving data in databases.
> . SQL stands for structured Query Language 0 lets you access and manipulate data.
> . SQL can

       1] Execute queries against a database
       2] Retrieve data from a database
       3] Insert records in a database
       4] Update records in a database
       5] Delete records from a database
       6] Create new databases
       7] Create new tables in a database
       8] Create stored procedures in a database
       9] Create views in a database
       10] Set permissions on tables, procedures and views

### Using SQL in Your Web Site

To build a site that shows data from a database, you will need:
1] An RDBMS database program such as MS Access, SQL server, MYSQL
2] To use a server-side scripting language PHP, Python, Ruby, C#, and JavaScript (NodeJS)
3] To use SQL to get the data you want
4] To use HTML/ CSS to style the page

### Relational Database Management System - RDBMS

> . This is the basis for SQL and for all modern database systems such as MS SQL Server, IBM DB2, Oracle, MySQL and Microsoft Access.
> . The data is RDBMS is stored in database objects called tables. A table is a collection of related data entries and it consists of columns and rows.

## SQL Statement

> . Most of the actions you need to perform on a database are done with SQL statements. Most of these SQL statements consists of keywords that are easy to understand.

Note: SQL keywords are not case sensitive, hence select is the same as SELECT.

### Semicolon after SQL statements?

> . Some databases require a semicolon at the end of each SQL statement
> . Semicolon is the standard way to separate each SQL statement in database systems that allow more than one sql statement to be executed in the same call to the server.

### Most Important SQL Commands

1] SELECT - extracts data from a database
2] UPDATE - updates data in a database
3] DELETE - deletes data from a database
4] INSERT INTO - inserts new data into a database
5] CREATE DATABASE - Creates a new database
6] ALTER DATABASE - Modifies a database
7] CREATE TABLE - creates a new table
8] ALTER TABLE - modifies a table
9] DROP TABLE - deletes a table
10] CREATE INDEX - creates an index (search key)
11] DROP INDEX - deletes an index

### RELATIONAL DATABASES

> . Google, X and Meta all use relational databases to store their information at scale.

> . Relational databases store their data in rows and columns in structures called tables.
> . SQL allows 4 types of commands: CRUD
> A] Create
> B] Read
> C] Update
> D] Delete

> .We can read items from a table using the syntax;
> SELECT columns FROM table

> . We can INSERT into a SQL database utilizing the form;
> INSERT INTO table (column...) Values(value, ...);.

> . SQL supports many commands to access data which include:
> 1] AVG
> 2] COUNT
> 3] DISTINCT
> 4] LOWER
> 5] MAX
> 6] MIN
> 7] UPPER

> . SQL also offers additional commands we can utilize in our queries, such as;
> WHERE -- adding a Boolean expression to filter our data
> LIKE -- filtering responses more loosely
> ORDER BY -- Ordering responses
> LIMIT -- Limit the number of responses
> GROUP BY -- Grouping responses together

By storing data in relational database, data can be more efficiently stored.
In sqlite, we have 5 datatypes; that is

BLOB -- binary large objects that are groups of ones and zeros
INTEGER -- an integer
NUMERIC -- for numbers that are formatted specifically like dates
REAL -- like a float
TEXT -- for strings and the like

Also columns can be set to add special constraints:
NOT NULL
UNIQUE

Primary keys are used to identify a unique record in a table. Foreign keys are used to build relationships between tables by pointing to the primary key in another table.

### JOINS

HOW could we combine tables temporarily?
Tables could be joined together using the JOIN command.

### INDEXES

> . While relational databases have the ability to be more fast and more robust than utilizing a csv file, data can be optimized within a table using indexes.

> . Note as such indexing all columns would result in utilizing more storage space. Hence there is a tradeoff for enhanced speed.

### RACE CONDITIONS

> . Utilization of SQL can sometimes result in some problems.
> . You can imagine a case where multiple users could be accessing the same database and executing commands at the same time.
> . This could result in glitches where code is interrupted by other people’s actions. This could result in a loss of data.

Built-in SQL features such as BEGIN TRANSACTION, COMMIT and ROLLBACK help avoid some of these race condition problems.

### SQL Injection Attacks

> .An injection attach is where a malicious actor could input malicious SQL code.

> . Note you never want to utilize formatted strings in queries or blindly trust the user's input.
