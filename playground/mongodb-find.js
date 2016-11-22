const {MongoClient, ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=> {
	
					if(err){
					return	console.log('Unable to connect to the database', err);
					}
					console.log('Connected to database');

					var collection = db.collection('Users');

					collection.find({
						name: "Ashan Perera"
					}).toArray().then((docs) => {
						console.log('Todos');
						console.log(JSON.stringify(docs, undefined, 2));
					}, (err) => {
						console.log('Unable to fetch todso',err);
					});

					// collection.find().count().then((count)=>{
					// 	console.log(`Todos count: ${count}`);
					// }, (err) => {
					// 	console.log('Unable to fetch todos');
					// })

					//db.close();
				});