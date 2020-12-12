CREATE TABLE BloodGroup (
	BloodGroup_Id int NOT NULL AUTO_INCREMENT,
	BloodGroup_Name varchar(255)
)

CREATE TABLE Donars
(	Person_id int NOT NULL AUTO_INCREMENT,
    LastName varchar(255),
    FirstName varchar(255),
    Age int,
	BloodGroup_Id int,
	Updated_on timestamp,
	FOREIGN KEY (BloodGroup_Id) REFERENCES BloodGroup(BloodGroup_Id),
    PRIMARY KEY (Person_id )
);