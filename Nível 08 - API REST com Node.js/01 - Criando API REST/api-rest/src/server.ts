import express from "express";

const PORT = 3333;

const app = express();

app.get("/products", (request, response) => {
  const { page, limit } = request.query;
  response.send(`Page: ${page}, Limit: ${limit}`);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
