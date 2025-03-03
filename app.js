const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./config/connectDatabase');
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });
const cors = require('cors');

const diseases = require('./routes/disease');
const registers = require('./routes/register');
const vaccineRoutes = require('./routes/vaccine');
const notifyRoutes = require("./routes/notify");
const details = require('./routes/detail');


connectDatabase();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use('/api/v1/', diseases);
app.use('/api/v1/', registers);
app.use('/api/vaccines', vaccineRoutes);
app.use("/api/notifications", notifyRoutes);
app.use('/api/v1/', details);


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT} in ${process.env.NODE_ENV}`);
});
