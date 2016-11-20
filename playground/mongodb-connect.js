const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',
				(err, db)=> {
					if(err){
					return	console.log('Unable to connect to the database', err);
					}
					console.log('Connected to database');
					// db.collection('Todos').insertOne({
					// 	Task: 'Wake up at 8am',
					// 	Completed: false
					// }, (err, result)=>{
					// 	if(err){
					// 		return console.log('Unable to insert a todo', err);
					// 	}
					// 	console.log(JSON.stringify(result.ops,undefined, 2))
					// })

					db.collection('Users').insertOne({
						name: 'Ashan Perera',
						age: 25,
						location: 'Bangkok, TH'
					}, (err, result)=>{
						if(err){
							return console.log('Unable to insert a todo', err);
						}
						console.log(JSON.stringify(result.ops,undefined, 2))
					})
					db.close();
				});