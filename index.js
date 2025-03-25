import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 5000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})

const db= new pg.Client({
    user:"postgres",
    host: "localhost",
    database:"trial",
   // password hidden for security issues
    port:5432,
  })
  
  db.connect();
  let quiz=[];
  
async function loadQuizData() {
    try {
      const result = await db.query("SELECT * FROM ventilators ORDER BY id");
      quiz = result.rows;
      console.log(quiz);
     console.log("Data loaded successfully");
    } catch (err) {
      console.error("Error loading data:", err);
    }
  }
  
loadQuizData();
  
  

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", {});
});

app.get("/cylinders", (req, res)=>{
    res.render("cylinders.ejs", {});
})
app.get("/syringes", (req, res)=>{
    res.render("syringe.ejs", {});
})

app.use(bodyParser.urlencoded({extended: true}));
app.get("/ventilators", (req, res)=>{
    res.render("ventilators.ejs", {current:quiz});
})
app.get("/medicines", (req, res)=>{
    res.render("medicine.ejs", {});
})

app.post("/updateVentilator", async (req, res) => {
  console.log("done");
   const ans=req.body;
   console.log(ans);
   console.log(quiz[ans.id-1].currentamount);
  const updated=parseInt(quiz[ans.id-1].currentamount)+parseInt(ans.amount) ;
  console.log(updated);
 await db.query(`UPDATE Ventilators SET currentamount =${updated} WHERE id =${ans.id}`, (err, res)=>{
    if(err){
      console.log("error");
    }
    else{ 
      console.log("yes");
     
    }
  
  })
  await loadQuizData();
    res.redirect("/ventilators");
})
// import express from "express";
// import bodyParser from "body-parser";
// import pg from "pg";

// const app = express();
// const port = 5000;

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// const db = new pg.Client({
//   user: "postgres",
//   host: "localhost",
//   database: "trial",
//   password: "Pakha@2578",
//   port: 5432,
// });

// db.connect();

// let quiz = [];

// // Load initial data
// async function loadQuizData() {
//   try {
//     const result = await db.query("SELECT * FROM ventilators");
//     quiz = result.rows;
//     console.log("Data loaded successfully");
//   } catch (err) {
//     console.error("Error loading data:", err);
//   }
// }

// loadQuizData();

// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.render("index.ejs", {});
// });

// app.get("/cylinders", (req, res) => {
//   res.render("cylinders.ejs", {});
// });

// app.get("/syringes", (req, res) => {
//   res.render("syringe.ejs", {});
// });

// app.get("/ventilators", (req, res) => {
//   res.render("ventilators.ejs", { current: quiz });
// });

// app.get("/medicines", (req, res) => {
//   res.render("medicine.ejs", {});
// });

// app.post("/updateVentilator", async (req, res) => {
//   try {
//     const { id, amount } = req.body;
//     const ventilator = quiz.find((v) => v.id == id);

//     if (!ventilator) {
//       console.error("Ventilator not found");
//       return res.status(404).send("Ventilator not found");
//     }

//     const updatedAmount = parseInt(ventilator.currentamount) + parseInt(amount);

//     await db.query(
//       "UPDATE ventilators SET currentamount = $1 WHERE id = $2",
//       [updatedAmount, id]
//     );

//     // Re-fetch data to update `quiz`
//     await loadQuizData();

//     res.redirect("/ventilators");
//   } catch (err) {
//     console.error("Error updating ventilator:", err);
//     res.status(500).send("Internal Server Error");
//   }
// });
