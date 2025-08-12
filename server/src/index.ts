import app from "./app.js";
import { env } from "./config/config.js";

const port = Number(env.PORT ?? 3000);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
