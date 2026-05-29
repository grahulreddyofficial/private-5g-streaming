const express = require('express');
const bcrypt = require("bcrypt");
const cors = require('cors');
const { createToken } = require("./jwt");
const auth = require("./middleware/checktk");
const { insertDB, getDB } = require("./db");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('API For 5G-Lab-Dashboard');
});

app.post('/login', async (req, res) => {
  const user = req.body;
  const password = user.password;
  const HashedPassword = await getDB(user);
  if (HashedPassword == null) {
    return res.status(404).json({
      success: false,
      message: "User Not Found!"
    });
  }
  const match = await bcrypt.compare(password, HashedPassword);
  if (match) {
    let token = createToken(user);
    return res.status(200).json({
      success: true,
      token: token
    });
  } else {
    return res.status(401).json({
      success: false,
      message: "Invalid Password!"
    });
}
});

app.post('/sign-up', async (req, res) => {
  try {
    const user = req.body;
    await insertDB(user);
    res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch(err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error Creating User!"
    });
  }
});

app.get('/dashboard', auth.checkToken, (req, res) => {
  res.json({
    success: true,
    user: req.user,
    data: "Secret dashboard data"
  });
});

// Protected route only for sensitive data
app.get('/api/dashboard', auth.checkToken, (req, res) => {
  res.json({
    success: true,
    user: req.user,
    data: "Secret dashboard data"
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
