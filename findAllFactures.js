const Mongodb = require('mongodb').MongoClient;
const dbURI = process.env.NODE_ENV === 'production' ? process.env.DB_URI : require('./config.js');

module.exports = (facture) => {
    return new Promise( (resolve, reject) => {
        Mongodb.connect(
            dbURI, 
            { useNewUrlParser: true }, 
            function(err, db) {
                if (err) {
                    reject(err.errmsg);
                }
                else {
                    const dbo = db.db("factures");
                    dbo.collection('factures', function(err, res) {
                        if (err) reject(err);
                        else {
                            res.find({}).toArray(function(err, docs) {
                                if (err) reject(err);
                                resolve(docs);
                                db.close();
                            });
                        }
                    });
                }
            }
        );
    })
}


