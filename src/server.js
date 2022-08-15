const express = require("express");
const cors = require("cors");
const path = require("path")
const { PORT } = require("./config");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(process.cwd(), 'src', 'upload')))

app.use("/v1", require("./routes/routes"));

app.listen(PORT, () => {
  console.log(`Server has been started on ${PORT}`);
});
