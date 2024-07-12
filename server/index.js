// const express = require('express');
// const app = express();
// const port = process.env.PORT || 5000;
// const cors = require('cors');
// const multer = require('multer');
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// // Middleware connected to frontend
// app.use(cors());
// app.use(express.json());

// // Configure Multer storage
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/'); // directory where files will be saved
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname); // unique filename
//     }
// });

// const upload = multer({ storage: storage });

// app.get('/', (req, res) => {
//     res.send("Hello World!");
// });

// const uri = "mongodb+srv://Food-app:Foodapp123@cluster0.hfyydkn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run() {
//     try {
//         await client.connect();

//         const FoodCollections = client.db("food_collections").collection("Foods");

//         // Endpoint to upload food item with multiple images
//         app.post("/upload.food", upload.array('img', 10), async (req, res) => {
//             const data = req.body;
//             const files = req.files;

//             if (!files || files.length === 0) {
//                 return res.status(400).send("No files were uploaded.");
//             }

//             // Add image paths to the data object
//             data.img = files.map(file => file.path);

//             const result = await FoodCollections.insertOne(data);
//             res.send(result);
//         });

//         app.get("/all-foods", async (req, res) => {
//             const Foods = FoodCollections.find();
//             const result = await Foods.toArray();
//             res.send(result);
//         });

//         app.get("/foods/:id", async (req, res) => {
//             const id = req.params.id;
//             const filter = { _id: new ObjectId(id) };
//             const result = await FoodCollections.findOne(filter);
//             res.send(result);
//         });

//         app.patch('/food/:id', async (req, res) => {
//             const id = req.params.id;
//             const updateFoodData = req.body;
//             const filter = { _id: new ObjectId(id) };

//             const updateDoc = {
//                 $set: {
//                     ...updateFoodData
//                 },
//             };
//             const options = { upsert: true };
//             const result = await FoodCollections.updateOne(filter, updateDoc, options);
//             res.send(result);
//         });

//         app.delete('/food/:id', async (req, res) => {
//             const id = req.params.id;
//             const filter = { _id: new ObjectId(id) };
//             const result = await FoodCollections.deleteOne(filter);
//             res.send(result);
//         });

//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment, successfully connected to MongoDB");
//     } finally {
//         // Ensure the client will close when you finish/error
//         //await client.close();
//     }
// }
// run().catch(console.dir);

// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// });

// const express = require('express')
// const app=express()
// const port =process.env.PORT || 5000
// const cors =require('cors')

// //middleware connected to frontend
// app.use(cors());
// app.use(express.json());

// app.get('/',(req,res)=>{
//     res.send("hello world!")
// })

// const {MongoClient, ServerApiVersion, ObjectId} = require('mongodb');
// const uri="mongodb+srv://Food-app:Foodapp123@cluster0.hfyydkn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const client =new MongoClient(uri,{
//     serverApi:{
//         version:ServerApiVersion.v1,
//         strict:true,
//         deprecationErrors:true,
//     }
// });

// async function run(){
//     try{
//         //connect the client to the server
//         await client.connect();

//         //create a collection of database
//         const FoodCollections=client.db("food_collections").collection("Foods");

//         app.post("/upload.food",async (req, res) => {
//             const data=req.body;
//             const result=await FoodCollections.insertMany(data);
//             res.send(result);
//         })

//         app.get("/all-foods",async(req, res)=>{
//             const Foods=FoodCollections.find();
//             const result=await Foods.toArray();
//             res.send(result);
//         })
//         app.get("/foods/:id",async(req, res)=>{
//             const id=req.params.id;
//             const filter={_id:new ObjectId(id)};
//             const result=await FoodCollections.findOne(filter);
//             res.send(result);
//         })
 
//         app.patch('/food/:id',async(req,res)=>{
//             const id=req.params.id;
//             const updateFooddata=req.body;
//             const filter={_id:new ObjectId(id)};

//             const updateDoc={
//                 $set:{
//                     ...updateFooddata
//                 },
//             }
//             const options ={upsert:true};
//             const result=await FoodCollections.updateOne(filter,updateDoc,options);
//             res.send(result);
//         })

//         app.delete('/food/:id',async(req,res)=>{
//             const id=req.params.id;
//             const filter={_id:new ObjectId(id)};
//             const result=await FoodCollections.deleteOne(filter);
//             res.send(result);
//         })

//         await client.db("admin").command({ping:1});
//         console.log("Pinged your deployment , succesfully connected to mongodb");
//     }
//     finally{

//     }
// }
// run().catch(console.dir);

// app.listen(port,()=>{
//     console.log(`listening on port ${port}`)
// })


// const express = require('express');
// const app = express();
// const port = process.env.PORT || 5000;
// const cors = require('cors');

// // Middleware connected to frontend
// app.use(cors());
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("hello world!");  
// });

// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const uri = "mongodb+srv://Food-app:Foodapp123@cluster0.hfyydkn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run() {
//     try {
//         // Connect the client to the server
//         await client.connect();

//         // Create collections for food and users
//         const FoodCollections = client.db("food_collections").collection("Foods");
//         const UserCollections = client.db("food_collections").collection("Users");

//         // Food routes
//         app.post("/upload.food", async (req, res) => {
//             const data = req.body;
//             const result = await FoodCollections.insertOne(data);
//             res.send(result);
//         });

//         app.get("/all-foods", async (req, res) => {
//             const foods = await FoodCollections.find().toArray();
//             res.send(foods);
//         });

//         app.get("/foods/:id", async (req, res) => {
//             const id = req.params.id;
//             const filter = { _id: new ObjectId(id) };
//             const result = await FoodCollections.findOne(filter);
//             res.send(result);
//         });

//         app.patch('/food/:id', async (req, res) => {
//             const id = req.params.id;
//             const updateFoodData = req.body;
//             const filter = { _id: new ObjectId(id) };

//             const updateDoc = {
//                 $set: {
//                     ...updateFoodData
//                 },
//             };
//             const options = { upsert: true };
//             const result = await FoodCollections.updateOne(filter, updateDoc, options);
//             res.send(result);
//         });

//         app.delete('/food/:id', async (req, res) => {
//             const id = req.params.id;
//             const filter = { _id: new ObjectId(id) };
//             const result = await FoodCollections.deleteOne(filter);
//             res.send(result);
//         });

    
//         app.post("/users", async (req, res) => {
//             const userData = req.body;
//             const result = await UserCollections.insertOne(userData);
//             res.send(result);
//         });

//         app.get("/users", async (req, res) => {
//             const users = await UserCollections.find().toArray();
//             res.send(users);
//         });

//         app.get("/users/:id", async (req, res) => {
//             const id = req.params.id;
//             const filter = { _id: new ObjectId(id) };
//             const result = await UserCollections.findOne(filter);
//             res.send(result);
//         });

//         app.patch('/users/:id', async (req, res) => {
//             const id = req.params.id;
//             const updateUserData = req.body;
//             const filter = { _id: new ObjectId(id) };

//             const updateDoc = {
//                 $set: {
//                     ...updateUserData
//                 },
//             };
//             const options = { upsert: true };
//             const result = await UserCollections.updateOne(filter, updateDoc, options);
//             res.send(result);
//         });

//         app.delete('/users/:id', async (req, res) => {
//             const id = req.params.id;
//             const filter = { _id: new ObjectId(id) };
//             const result = await UserCollections.deleteOne(filter);
//             res.send(result);
//         });

//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment, successfully connected to MongoDB");
//     } finally {
//         // Ensure client will close when you finish/error
//         // await client.close();
//     }
// }
// run().catch(console.dir);

// app.listen(port, () => {
//     console.log(`listening on port ${port}`);
// });



// const express = require('express');
// const cors = require('cors');
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware connected to frontend
// app.use(cors());
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("Hello World!");
// });

// const uri = "mongodb+srv://Food-app:Foodapp123@cluster0.hfyydkn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run() {
//     try {
//         await client.connect();

//         const FoodCollections = client.db("food_collections").collection("Foods");

//         // Endpoint to get paginated food items
//         app.get("/all-foods", async (req, res) => {
//             const page = parseInt(req.query.page) || 1;
//             const limit = parseInt(req.query.limit) || 10;

//             const skip = (page - 1) * limit;
//             const total = await FoodCollections.countDocuments();
//             const totalPages = Math.ceil(total / limit);

//             const foods = await FoodCollections.find().skip(skip).limit(limit).toArray();

//             res.json({
//                 foods,
//                 totalPages,
//                 currentPage: page
//             });
//         });

//         app.get("/foods/:id", async (req, res) => {
//             const id = req.params.id;
//             const filter = { _id: new ObjectId(id) };
//             const result = await FoodCollections.findOne(filter);
//             res.send(result);
//         });

//         app.post("/upload.food", async (req, res) => {
//             const data = req.body;
//             const result = await FoodCollections.insertOne(data);
//             res.send(result);
//         });

//         app.patch('/food/:id', async (req, res) => {
//             const id = req.params.id;
//             const updateFoodData = req.body;
//             const filter = { _id: new ObjectId(id) };

//             const updateDoc = {
//                 $set: {
//                     ...updateFoodData
//                 },
//             };
//             const options = { upsert: true };
//             const result = await FoodCollections.updateOne(filter, updateDoc, options);
//             res.send(result);
//         });

//         app.delete('/food/:id', async (req, res) => {
//             const id = req.params.id;
//             const filter = { _id: new ObjectId(id) };
//             const result = await FoodCollections.deleteOne(filter);
//             res.send(result);
//         });

//         // Bulk delete endpoint
//         app.delete('/foods', async (req, res) => {
//             const { ids } = req.body; // Expecting an array of IDs
//             const objectIds = ids.map(id => new ObjectId(id));
//             const result = await FoodCollections.deleteMany({ _id: { $in: objectIds } });
//             res.send(result);
//         });

//         app.post('/signin', async (req, res) => {
//             const { email, password } = req.body;
//             // Implement your authentication logic here
//             res.json({ token: 'your-jwt-token' }); // Example response
//           });
          

//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment, successfully connected to MongoDB");
//     } finally {
//         // Ensure the client will close when you finish/error
//         //await client.close();
//     }
// }
// run().catch(console.dir);

// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// });



const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

const uri = "mongodb+srv://Food-app:Foodapp123@cluster0.hfyydkn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const FoodCollections = client.db("food_collections").collection("Foods");

    app.get("/all-foods", async (req, res) => {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 12;

      const skip = (page - 1) * limit;
      const total = await FoodCollections.countDocuments();
      const totalPages = Math.ceil(total / limit);

      const foods = await FoodCollections.find().skip(skip).limit(limit).toArray();

      res.json({
        foods,
        totalPages,
        currentPage: page
      });
    });

    app.get("/foods/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await FoodCollections.findOne(filter);
      res.send(result);
    });

    app.post('/upload.food', upload.single('img'), async (req, res) => {
        try {
          const { foodname, price, description, category, quantity, imgurl } = req.body;
          const imgPath = req.file ? `/uploads/${req.file.filename}` : imgurl;
  
          const foodObj = {
            foodname,
            imgurl: imgPath,
            price,
            description,
            category,
            quantity
          };
  
          const result = await FoodCollections.insertOne(foodObj);
          res.send(result);
        } catch (error) {
          res.status(500).send({ message: 'Error adding food' });
        }
      });
      

    app.patch('/food/:id', async (req, res) => {
      const id = req.params.id;
      const updateFoodData = req.body;
      const filter = { _id: new ObjectId(id) };

      const updateDoc = {
        $set: {
          ...updateFoodData
        },
      };
      const options = { upsert: true };
      const result = await FoodCollections.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    app.delete('/food/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await FoodCollections.deleteOne(filter);
      res.send(result);
    });

    // Bulk delete endpoint
    app.delete('/foods', async (req, res) => {
      const { ids } = req.body; 
      const objectIds = ids.map(id => new ObjectId(id));
      const result = await FoodCollections.deleteMany({ _id: { $in: objectIds } });
      res.send(result);
    });

    app.post('/signin', async (req, res) => {
      const { email, password } = req.body;
      
      res.json({ token: 'your-jwt-token' }); 
    });

    // Endpoint for uploading images
    app.post('/upload-image', upload.single('image'), async (req, res) => {
      if (!req.file) {
        return res.status(400).send('No file uploaded.');
      }
      const imageUrl = `/uploads/${req.file.filename}`;
      res.send({ imageUrl });
    });

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment, successfully connected to MongoDB");
  } finally {
    // Ensure the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

