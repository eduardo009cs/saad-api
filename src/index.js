import express from 'express';
import savingRoute from "./routes/savingHistory.routes.js"
import userRoute from "./routes/user.routes.js"
import savingUserRoute from "./routes/savingUser.routes.js"
import sendMessageRoute from "./routes/sendMessage.routes.js"
import cors from "cors"
import { config } from './utils/config.js';



const app = express();
const port =config.PORT || 3000;
app.use(cors())
app.use(express.json())
app.use('/api/v1',savingRoute)
app.use('/api/v1',userRoute)
app.use('/api/v1',savingUserRoute)
app.use('/api/v1',sendMessageRoute)

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})