//create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inventory_db'
});

db.connect( (err) => {
    if(err){
        throw err;
    }
    console.log('MySQL Connected....')
});