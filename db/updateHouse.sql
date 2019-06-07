UPDATE houses SET
name = $2, 
city = $3,
state = $4,
zip = $5, WHERE id = $1;