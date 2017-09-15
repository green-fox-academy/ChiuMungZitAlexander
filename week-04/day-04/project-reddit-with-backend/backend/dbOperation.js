var ObjectID = require('mongodb').ObjectID;

function queryPost(db, query, callback) {
    var collection = db.collection('posts');
    collection.find(query).toArray(function (err, result) {
        if (err) {
            throw err;
        } else {
            db.close();
            callback(result);
        }
    });
}

function insertPost(db, body, callback) {
    var collection = db.collection('posts');
    let date = new Date();
    let document = {
        title: body.title,
        href: body.href,
        timestamp: date.getTime(),
        score: 0,
        vote: 0,
        owner: body.owner
    }
    collection.insert(document, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            throw err;
        }
        console.log(result);
        db.close();
        callback(document);
    });
}

function deletePost(db, condition, callback) {
    var collection = db.collection('posts');
    condition._id = new ObjectID(condition._id)
    collection.find(condition).toArray(function (err, queryResult) {
        if (err) {
            throw err;
        } else {
            collection.deleteOne(condition, function (err, result) {
                if (err) {
                    console.log('Error:' + err);
                    throw err;
                }
                db.close();
                callback(queryResult);
            });
        }
    });
}

function modifyPost(db, condition, callback) {
    var collection = db.collection('posts');
    condition.query._id = new ObjectID(condition.query._id );
    let date = new Date();
    condition.modification.$set.timestamp = date.getTime();
    collection.updateOne(condition.query, condition.modification, function (err, result) {
        if (err) {
            throw err;
        } else {
            collection.find(condition.query).toArray(function (err, queryResult) {
                if (err) {
                    throw err;
                }
                db.close();
                callback(queryResult);
            });
        }
    });
}

function upVote (db, condition, callback) {
    var collection = db.collection('posts');
    let query = {
        '_id': new ObjectID(condition.id )
    }
    let modification = {
        $inc: {
            'score': condition.vote,
        },
        $set: {
            'vote': condition.vote
        }
    }
    collection.updateOne(query, modification, function (err, result) {
        if (err) {
            throw err;
        } else {
            collection.find(query).toArray(function (err, queryResult) {
                if (err) {
                    throw err;
                }
                db.close();
                callback(queryResult);
            });
        }
    });
}

function downVote (db, condition, callback) {
    var collection = db.collection('posts');
    let query = {
        '_id': new ObjectID(condition.id )
    }
    let modification = {
        $inc: {
            'score': condition.vote,
        },
        $set: {
            'vote': condition.vote
        }
    }
    collection.updateOne(query, modification, function (err, result) {
        if (err) {
            throw err;
        } else {
            collection.find(query).toArray(function (err, queryResult) {
                if (err) {
                    throw err;
                }
                db.close();
                callback(queryResult);
            });
        }
    });
}

function queryUser (db, query, callback) {
    var collection = db.collection('users');
    let userName = {
        'name': query.account
    }
    collection.find(userName).toArray(function (err, result) {
        if (err) {
            throw err;
        } else {
            db.close();
            let resBody = {};
            if (result[0].password == query.password) {
                resBody =  {
                    'loginCondition': true
                }
            } else {
                resBody = {
                    'loginCondition': false
                }
            }
            callback(resBody);
        }
    });
}

module.exports = {
    queryPost: queryPost,
    insertPost: insertPost,
    deletePost: deletePost,
    modifyPost: modifyPost,
    upVote: upVote,
    downVote: downVote,
    queryUser: queryUser
}