import MyService from "services/MyService";
import express from "express";
const PORT = process.env.PORT || 8080;
async function bootstrap() {
  console.log(new MyService())
  const app = express();
  app.get("/", (_, res) => {
    res.send("Hello, world")
  });
  const instance = app.listen({ port: PORT }, () => {
    console.log(`App is listening on http://localhost:${PORT}`);
  });

  process.on("exit", (code) => {
    instance.close(() => {
      console.log("Http server closed.");
      process.exit(1);
    });
  });

  process.on("beforeExit", (code) => {
    process.exit(1);
  });
}

bootstrap();