
CREATE TABLE colors (
  id SERIAL PRIMARY KEY,
  color_name VARCHAR(240)
);

INSERT INTO colors (color_name) VALUES ('red');
INSERT INTO colors (color_name) VALUES ('blue');
INSERT INTO colors (color_name) VALUES ('magenta');
INSERT INTO colors (color_name) VALUES ('green');
INSERT INTO colors (color_name) VALUES ('pink');

SELECT * FROM colors ORDER BY random();
