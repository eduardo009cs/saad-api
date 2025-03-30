import { config } from "../utils/config.js"
import nodemailer from "nodemailer"
import fs from "fs/promises"
import { type } from "os";


export const sendMessage = async (req, res) =>{
    
    try {
        const from = config.GMAIL_FROM;
        const pass = config.GMAIL_PASS;
        const to = config.GMAIL_TO;
        const appUrl = config.APP_URL;
        const data = await fs.readFile("./public/template/index.html","utf8")
        const{users,waitingSaving, totalSaving} = req.body;

        let emailContent = data.replace("##WaitingSaving##",parseInt(waitingSaving).toLocaleString('es-MX',{style:"currency", currency:"MXN"}));
        emailContent = emailContent.replace("##TotalSaving##",parseInt(totalSaving).toLocaleString('es-MX',{style:"currency", currency:"MXN"}));
        emailContent = emailContent.replace("##AppUrl##",appUrl);
        let pendingSaving = "" ;
        users.forEach((user) => {
            pendingSaving += `<p>Pendiente ${user.name}: ${parseInt(user.saving).toLocaleString('es-MX',{style:"currency", currency:"MXN"})}</p>\n`
        });
        emailContent = emailContent.replace("##UserPending##",pendingSaving);
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth: {
                user:from,
                pass:pass
            }
        })

        const mailOptions = {
            from: from,
            to: to,
            subject: "Norificación de Ahorro - SAAD APP",
            html: emailContent
        }

        transporter.sendMail(mailOptions, (error,info) => {
            if(error){
                return res.status(500).json({message:`Hubo error al intentar envíar el correo:  ${error}`,type:"error"})
            }
            
        })
        res.status(200).send({message:"Correo enviado con éxito",type:"success"})
    } catch (error) {
        res.status(500).json({message:`Hubo error al intentar envíar el correo:  ${error}`,type:"error"})
    }
}



//txwr johq qynu lxxm

