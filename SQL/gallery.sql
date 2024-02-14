CREATE TABLE maya_gallery(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Tattooname VARCHAR(100),
    Tattoopic VARCHAR(100),
    Status VARCHAR(50) DEFAULT 'Inactive',
    created_date timestamp default now(), 
    updated_date timestamp default now() on update now() 
);