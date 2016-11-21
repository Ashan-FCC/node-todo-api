const {MongoClient, ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=> {
	
					if(err){
					return	console.log('Unable to connect to the database', err);
					}
					console.log('Connected to database');

					var collection = db.collection('Todos').find({
						_id: new ObjectID("583285f11f5978243feeb1d5")
					}).toArray().then((docs) => {
						console.log('Todos');
						console.log(JSON.stringify(docs, undefined, 2));
					}, (err) => {
						console.log('Unable to fetch todso',err);
					});


					//db.close();
				});