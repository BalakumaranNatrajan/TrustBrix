const nodemailer = require("nodemailer");
const hbs = require('nodemailer-express-handlebars');
const path = require('path')



async function sentEmail(data) {
    const options = {
        viewEngine: {
            extname: '.hbs',
            partialsDir: path.join(__dirname, '../views'),
            layoutsDir: path.join(__dirname, '../views'),
            defaultLayout: 'forget'
        },
        viewPath: path.join(__dirname, '../views'),
        extName: '.hbs'
    }
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "temteam123@gmail.com",
            pass: "test@12345"
        }
    });

    transporter.use('compile', hbs(options));
    let mailOptions = {
        from: 'developers@trustbrix.com', // sender address
        to: data.email, // list of receivers
        subject: 'Recovery password email',
        template: 'forget',
        context: data
    };

    let info = await transporter.sendMail(mailOptions)
    return info;

}



module.exports = sentEmail;