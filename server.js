import express from "express";
import dotenv from "dotenv";

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("servido funcionando...");
});

app.use("/animes", animesRoutes);

app.listen(serverPort, () => {
    console.log(`servidor funcionando na porta http://localhost:${serverPort}.`);
});