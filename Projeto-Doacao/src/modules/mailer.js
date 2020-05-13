const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const path = require('path')
const { host, port, user, pass} = require('../config/mail.json')
const transport = nodemailer.createTransport({
    host,
    port,
    auth: {
      user, pass
         }
  });
  const options = {
    viewEngine: {
      extname: '.html',
      layoutsDir: path.resolve('./src/resources/mail/'),
      defaultLayout : 'forgotpassword',
      partialsDir : path.resolve('./src/resources/mail/')
    },
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html'
  }
  
  transport.use('compile', hbs(options))
  
  module.exports = transport