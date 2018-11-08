	var application = {
		middleware: require('express'),
	        http: require('http'),
		fs: require('fs'),
   		cron: require('node-cron'),
		geodist: require('geodist'),
		path: require('path'),
                  database: require('mongodb').MongoClient,
	   websocketserver: require('ws').Server
	             }  	

var websocket = require('ws');
var public = application.path.join(__dirname, '/');
var app = application.middleware();

app.get('/', function(req, res) {
    res.sendFile(application.path.join(public, 'index.html'));
    return void 0;
});


app.use('/', application.middleware.static(public));

const assert = require('assert');

const dbName = 'test';

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.OPENSHIFT_NODEJS_IP || '192.168.1.54';

var url = 'mongodb://127.0.0.1:27017/test';

if(process.env.OPENSHIFT_MONGODB_DB_URL){
  url = process.env.OPENSHIFT_MONGODB_DB_URL + 'test';
}

const server = application.http.createServer(app);
const wss = new application.websocketserver({ server });

wss.on('connection', function (ws) {
           ws.on('message', function (msg) {
 
     var message;
        try {
            message = JSON.parse(msg);
        } catch (e) {
            message = JSON.parse(JSON.stringify(msg));
        }
        
        var event = message.event;
        switch(event){
	 case 'read':
	
	     switch(message.data.store) {

        case 'aboardData':
         application.database.connect(url, function(err, db) {
         if (err){ }
         var dbo = db.db('test');
         if(message.data.position === 'administrador' || message.data.position === 'control de garita'){
         dbo.collection('report').find({ position: 'piloto', calcdate: { $gte: new Date(message.data.timeelapsed) } }).toArray(function(err, result) {
         if (err){ }
            if(ws.readyState === websocket.OPEN) {
  	    ws.send(JSON.stringify({
                event: 'read',
                data: result
            }));
	    }
          db.close();
          return void 0;
	 });

	 } else {	 
        dbo.collection('report').find({ position: 'piloto', calcdate: { $gte: new Date(message.data.timeelapsed) }, route: message.data.route, company: message.data.company, unit: message.data.unit }).toArray(function(err, result) {
         if (err){ }
            if(ws.readyState === websocket.OPEN) {
  	    ws.send(JSON.stringify({
                event: 'read',
                data: result
            }));
	    }
          db.close();
          return void 0;
	 });
	 }	 
        return void 0;
        });
	 break;
	 case 'charData':
         application.database.connect(url, function(err, db) {
         if (err){ }
         var dbo = db.db('test');
         if(message.data.position === 'administrador' || message.data.position === 'control de garita'){
	 dbo.collection('report').find({ position: 'ayudante', calcdate: { $gte: new Date(message.data.timeelapsed) } }).toArray(function(err, result) {
         if (err){ }
            if(ws.readyState === websocket.OPEN) {
  	    ws.send(JSON.stringify({
                event: 'read',
                data: result
            }));
	    }
           db.close();
           return void 0;
	 });

	 } else {
	 dbo.collection('report').find({ position: 'ayudante', calcdate: { $gte: new Date(message.data.timeelapsed) }, route: message.data.route, company: message.data.company, unit: message.data.unit }).toArray(function(err, result) {
         if (err){ }
            if(ws.readyState === websocket.OPEN) {
  	    ws.send(JSON.stringify({
                event: 'read',
                data: result
            }));
	    }
           db.close();
           return void 0;
	 });
	 }	 
        return void 0;
        });
	 break;
         case 'chartotalData':
         application.database.connect(url, function(err, db) {
         if (err){ }
         var dbo = db.db('test');
	 var date = new Date(message.data.timeelapsed);
	 date.setHours(0,0,0,0);
         if(message.data.position === 'administrador' || message.data.position === 'control de garita'){
         dbo.collection('report').find({ position: 'ayudante', calcdate: { $gte: date } }).toArray(function(err, result) {
         if (err){ }
            if(ws.readyState === websocket.OPEN) {
  	    ws.send(JSON.stringify({
                event: 'read',
                data: result
            }));
	    }
           db.close();
           return void 0;
	 });

	 } else {	 
	 dbo.collection('report').find({ position: 'ayudante', calcdate: { $gte: date }, route: message.data.route, company: message.data.company, unit: message.data.unit }).toArray(function(err, result) {
         if (err){ }
            if(ws.readyState === websocket.OPEN) {
  	    ws.send(JSON.stringify({
                event: 'read',
                data: result
            }));
	    }
           db.close();
           return void 0;
	 });
	 }	 
        return void 0;
        });
         break;
         case 'aboardTotalData':
         application.database.connect(url, function(err, db) {
         if (err){ }
         var dbo = db.db('test');
	 var date = new Date(message.data.timeelapsed);
	 date.setHours(0,0,0,0);
         if(message.data.position === 'administrador' || message.data.position === 'control de garita'){
         dbo.collection('report').find({ position: 'piloto', calcdate: { $gte: date } }).toArray(function(err, result) {
         if (err){ }
            if(ws.readyState === websocket.OPEN) {
  	    ws.send(JSON.stringify({
                event: 'read',
                data: result
            }));
	    }
           db.close();
           return void 0;
	 });

	 } else {	 
	 dbo.collection('report').find({ position: 'piloto', calcdate: { $gte: date }, route: message.data.route, company: message.data.company, unit: message.data.unit }).toArray(function(err, result) {
         if (err){ }
            if(ws.readyState === websocket.OPEN) {
  	    ws.send(JSON.stringify({
                event: 'read',
                data: result
            }));}
           db.close();
           return void 0;
	 });
	 }	 
        return void 0;
        });
         break;

         case 'networkData':
         application.database.connect(url, function(err, db) {
         if (err){ console.log(err) }
         var dbo = db.db('test');
	 if(message.data.position === 'administrador' || message.data.position === 'control de garita'){
          dbo.collection('inform').find({  calcdate: { $gte: new Date(message.data.timeelapsed)  } }).toArray(function(err, res) {
         if (err){ }
            if(ws.readyState === websocket.OPEN) {
		    ws.send(JSON.stringify({
                event: 'read',
                data: res
            }));}
		 db.close();
		 return void 0;
          });

	 } else {	 
         dbo.collection('inform').find({ calcdate: { $gte: new Date(message.data.timeelapsed) }, status: 'closed' , unit: message.data.unit, route: message.data.route, company: message.data.company }).toArray(function(err, res) {
         if (err){ }
            if(ws.readyState === websocket.OPEN) {
	    ws.send(JSON.stringify({
                event: 'read',
                data: res
            }));}
		 db.close();
		 return void 0;
          });
	  }	 
         return void 0;
	 });
	      break;	     
	     }		
         
	 break;		
         case 'temporarynewpassword':
         application.database.connect(url, function(err, db) {
         if (err){  }
	 var dbo, query, newvalue;
             dbo = db.db("test");
             query = { user: message.data.user };
             newvalue = { $set: {key: message.data.password } };
        
	 dbo.collection("users").updateOne(query, newvalue, function(err, res) {
         if (err){ }
                 if(ws.readyState === websocket.OPEN) {
		 ws.send(JSON.stringify({ event: 'temporarynewpasswordset' }));
		 }
		 db.close();
		 return void 0;
          });
	 return void 0;
	 });
	 break;	
	 case 'authentication':
         application.database.connect(url, function(err, db) {
         if (err){ }
         var dbo, cursor;
	 dbo = db.db('test');
         dbo.collection('users').findOne({user: message.data.user, key: message.data.key}, function(err, result) {
         if (err){ }
	 if(result === null){ 
	 if(ws.readyState === websocket.OPEN) {
         ws.send(JSON.stringify({ event: 'login', data: { msg: 'no existe', success: false } })); }
	 db.close();	 
	 } else { if(ws.readyState === websocket.OPEN) { ws.send(JSON.stringify({ event: 'login', data: { msg: 'login', success: true, profile: { id: result._id, user: result.user, firstname: result.firstname, secondname: result.secondname, firstlastname: result.firstlastname, secondlastname: result.secondlastname, position: result.position, assignedid: result.assignedid, unit: result.unit, route: result.route, company: result.company, price: result.price } } }));}
         if(message.data.key === 'clave'){  if(ws.readyState === websocket.OPEN) { ws.send(JSON.stringify({ event: 'temporarypassword' }));} }
	 db.close();	 
	 }
	 db.close();
	 return void 0;	 
         });
         return void 0;	 
	 });

	 break;		
         case 'userreset':
         application.database.connect(url, function(err, db) {
         if (err){ }
         var dbo, cursor, myobj;
	 dbo = db.db('test');
	 myobj = { user: message.data.user, reportdate: message.data.reportdate };	 
         dbo.collection("userreset").insertOne(myobj, function(err, res) {
         if (err){ }
	 if(ws.readyState === websocket.OPEN) {
		 ws.send(JSON.stringify({ event: 'userreset' }));}
		 db.close();
          }); 
	 return void 0; 
	 });
	 break;	
         case 'passwordreset':
         application.database.connect(url, function(err, db) {
         if (err){ }
         var dbo, cursor, myobj, newvalue;
	 dbo = db.db('test');
	 myobj = { user: message.data.user };
	 newvalue = { $set: { key: 'clave' } };	 
         dbo.collection("users").updateOne(myobj, newvalue, function(err, res) {
         if (err){ }
         dbo.collection("userreset").deleteOne(myobj, function(err, res) {
         if (err){ }
                 if(ws.readyState === websocket.OPEN) {
	         ws.send(JSON.stringify({ event: 'passwordreset' }));}
		 db.close();
           });
	   return void 0;	 
          }); 
	 return void 0; 
	 });
	 break;	
		
	 case 'aboardhourindicator':
         application.database.connect(url, function(err, db) {
         if (err){ }
	 var dbo, collection, cursor;	 
         dbo = db.db('test');
         collection = dbo.collection('report');
                 if(message.data.position === 'administrador' || message.data.position === 'control de garita'){
                 cursor = collection.aggregate([{ 
	          $match: { position: 'piloto', calcdate: { $gte: new Date(message.data.timeelapsed) } }
	          },{
                  $group: {
		    _id: { unit: "$unit", route: "$route", company: "$company" },
                    count: { $sum: "$number" }
                       }
                    },{
		    $project: {
			count: '$count',
			   _id: 0
		    }
		    }]).toArray(function(err, docs) {
                        if(ws.readyState === websocket.OPEN) {
			ws.send(JSON.stringify({event: 'aboardhourindicator', data: docs[0]  }));}
                        db.close();
			return void 0;    
		    });

		 } else {	 
		 cursor = collection.aggregate([{ 
	          $match: { position: 'piloto', calcdate: { $gte: new Date(message.data.timeelapsed) }, route: message.data.route, company: message.data.company, unit: message.data.unit }
	          },{
                  $group: {
		    _id: { unit: "$unit", route: "$route", company: "$company" },
                    count: { $sum: "$number" }
                       }
                    },{
		    $project: {
			count: '$count',
			   _id: 0
		    }
		    }]).toArray(function(err, docs) {
                        if(ws.readyState === websocket.OPEN) {
			ws.send(JSON.stringify({event: 'aboardhourindicator', data: docs[0]  }));}
                        db.close();
			return void 0;    
		    });
		 }	 
          return void 0;		 
       });
         break;		
	 case 'chargedhourindicator':
         application.database.connect(url, function(err, db) {
         if (err){ }
	 var dbo, collection, cursor;	 
         dbo = db.db('test');
         collection = dbo.collection('report');
                 if(message.data.position === 'administrador' || message.data.position === 'control de garita'){
                  cursor = collection.aggregate([{ 
	          $match: { position: 'ayudante', calcdate: { $gte: new Date(message.data.timeelapsed) } }
	          },{
                  $group: {
		    _id: { unit: "$unit", route: "$route", company: "$company" },
                    count: { $sum: "$number" }
                       }
                    },{
		    $project: {
			count: '$count',
			   _id: 0
		    }
		    }]).toArray(function(err, docs) {
                        if(ws.readyState === websocket.OPEN) {
                        ws.send(JSON.stringify({event: 'chargedhourindicator', data: docs[0]  }));}
			db.close();   
			return void 0;    
		    });

		 } else {	 
		 cursor = collection.aggregate([{ 
	          $match: { position: 'ayudante', calcdate: { $gte: new Date(message.data.timeelapsed) }, route: message.data.route, company: message.data.company, unit: message.data.unit }
	          },{
                  $group: {
		    _id: { unit: "$unit", route: "$route", company: "$company" },
                    count: { $sum: "$number" }
                       }
                    },{
		    $project: {
			count: '$count',
			   _id: 0
		    }
		    }]).toArray(function(err, docs) {
                        if(ws.readyState === websocket.OPEN) {
                        ws.send(JSON.stringify({event: 'chargedhourindicator', data: docs[0]  }));}
			db.close();   
			return void 0;    
		    });
	        }
          return void 0;		 
         });
	 break;		
	 case 'aboarddayindicator':
         application.database.connect(url, function(err, db) {
         if (err){ }
	 var dbo, collection, cursor, date;	 
         dbo = db.db('test');
         collection = dbo.collection('report');
         date = new Date(message.data.timeelapsed);
	 date.setHours(0,0,0,0);
                 if(message.data.position === 'administrador' || message.data.position === 'control de garita'){
		 cursor = collection.aggregate([{ 
	          $match: { position: 'piloto', calcdate: { $gte: date } }
	          },{
                  $group: {
		    _id: { unit: "$unit", route: "$route", company: "$company" },
                    count: { $sum: "$number" }
                       }
                    },{
		    $project: {
			count: '$count',
			   _id: 0
		    }
		    }]).toArray(function(err, docs) {
                        if(ws.readyState === websocket.OPEN) {
			ws.send(JSON.stringify({event: 'aboarddayindicator', data: docs[0]  }));}
                        db.close();
			return void 0;    
		    });

		 } else {
		 cursor = collection.aggregate([{ 
	          $match: { position: 'piloto', calcdate: { $gte: date }, route: message.data.route, company: message.data.company, unit: message.data.unit }
	          },{
                  $group: {
		    _id: { unit: "$unit", route: "$route", company: "$company" },
                    count: { $sum: "$number" }
                       }
                    },{
		    $project: {
			count: '$count',
			   _id: 0
		    }
		    }]).toArray(function(err, docs) {
                        if(ws.readyState === websocket.OPEN) {
                        ws.send(JSON.stringify({event: 'aboarddayindicator', data: docs[0]  }));}
                        db.close();
			return void 0;    
		    });
		 }	 
          return void 0;		 
       });
	 break;	
         case 'chargeddayindicator':
         application.database.connect(url, function(err, db) {
         if (err){ }
	 var dbo, collection, cursor, date;	 
         dbo = db.db('test');
         collection = dbo.collection('report');
         date = new Date(message.data.timeelapsed);
	 date.setHours(0,0,0,0);
                 if(message.data.position === 'administrador' || message.data.position === 'control de garita'){
            	 cursor = collection.aggregate([{ 
	          $match: { position: 'ayudante', calcdate: { $gte: date } }
	          },{
                  $group: {
		    _id: { unit: "$unit", route: "$route", company: "$company" },
                    count: { $sum: "$number" }
                       }
                    },{
		    $project: {
			count: '$count',
			   _id: 0
		    }
		    }]).toArray(function(err, docs) {

                        if(ws.readyState === websocket.OPEN) {
                        ws.send(JSON.stringify({event: 'chargeddayindicator', data: docs[0]  }));}
                        db.close();
			return void 0;    
		    });

		 } else {	 
		 cursor = collection.aggregate([{ 
	          $match: { position: 'ayudante', calcdate: { $gte: date }, route: message.data.route, company: message.data.company, unit: message.data.unit }
	          },{
                  $group: {
		    _id: { unit: "$unit", route: "$route", company: "$company" },
                    count: { $sum: "$number" }
                       }
                    },{
		    $project: {
			count: '$count',
			   _id: 0
		    }
		    }]).toArray(function(err, docs) {
                        if(ws.readyState === websocket.OPEN) {
			ws.send(JSON.stringify({event: 'chargeddayindicator', data: docs[0]  }));}
                        db.close();
			return void 0;    
		    });
	 }
          return void 0;		 
       });
	 break;	
	 case 'collectedpercentagebar':
         application.database.connect(url, function(err, db) {
         if (err){ }
	 var dbo, collection, cursor, date;	 
         dbo = db.db('test');
         collection = dbo.collection('inform');
         date = new Date(message.data.timeelapsed);
	 date.setHours(0,0,0,0);
                 if(message.data.position === 'administrador' || message.data.position === 'control de garita'){
                 cursor = collection.aggregate([{ 
	          $match: { calcdate: { $gte: date } }
	          },{
                  $group: {
		    _id: { company: "$company" },
                    aboard: { $sum: "$aboard" },
                    charged: { $sum: "$charged" },
                    totalprice: { $max: "$price" },
                    count: { $sum: 1 }
                       }
                    },{
		    $project: {
			    percentage: { $divide: ['$charged', '$aboard'] },
			   _id: 0
		    }
		    }]).toArray(function(err, docs) {
                        if(ws.readyState === websocket.OPEN) {
			ws.send(JSON.stringify({event: 'collectedpercentagebar', data: docs[0]  }));}
                        db.close();
			return void 0;    
		    });

		 } else {	 
		 cursor = collection.aggregate([{ 
	          $match: { calcdate: { $gte: date }, route: message.data.route, company: message.data.company, unit: message.data.unit }
	          },{
                  $group: {
		    _id: { company: "$company" },
                    aboard: { $sum: "$aboard" },
                    charged: { $sum: "$charged" },
                    totalprice: { $max: "$price" },
                    count: { $sum: 1 }
                       }
                    },{
		    $project: {
			    percentage: { $divide: ['$charged', '$aboard'] },
			    charged: '$charged',
			    aboard: '$aboard',
			   _id: 0
		    }
		    }]).toArray(function(err, docs) {
                        if(ws.readyState === websocket.OPEN) {
			ws.send(JSON.stringify({event: 'collectedpercentagebar', data: docs[0]  }));}
                        db.close();
			return void 0;    
		    });
		   }	 
          return void 0;		 
       });
	 break;			

	}
         return void 0;
           });
       
          return void 0;
     });


server.listen(port, ip);
