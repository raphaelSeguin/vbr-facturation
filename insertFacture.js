const Mongodb = require('mongodb').MongoClient;

const dbURI = process.env.NODE_ENV === 'production' ? process.env.DB_URI : require('./config.js');

module.exports = (facture) => {
    Mongodb.connect(
        dbURI, 
        { useNewUrlParser: true }, 
        function(err, db) {
            if (err) {
                console.log('error connecting to the database : ', err.errmsg);
            }
            else {
                const dbo = db.db("factures");
                dbo.collection('factures', function(err, res) {
                    if (err) throw err;
                    res.insertOne(facture);
                    db.close();
                });
            }
        }
    );
}


