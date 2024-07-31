const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/StudentsHelp';

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Connection error:', err);
});

db.once('open', async () => {
  console.log("DB connected");

  try {
    const data = db.db.collection("PYQS");
    const data2 = db.db.collection("Btech2ndYear");
    const result = await data.find({}).toArray();
    const result2 = await data2.find({}).toArray();
    if (result,result2) {
      global.data = result;
      global.data2 = result2;
      // console.log(result2)
        // console.log(result)
      console.log('Data loaded:'); // Optional: for debugging
    } else {
      console.log('No Data found');
    }
  } catch (err) {
    console.error('Error fetching data:', err);
  }
});

module.exports = db;