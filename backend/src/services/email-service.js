// const sendgrid = require('@sendgrid/mail');

// sendgrid.setApiKey.apply(process.env.sendgridKey);

// exports.send = async (to, subject, body) => {
//     sendgrid.send({
//         to: to,
//         from: 'jhuliani@brunosilva.cc',
//         subject: subject,
//         html: body
//     });
// }

"use strict";
const config = require("../config");

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(config.sendgridKey);

exports.send = async (to, subject, body) => {
  const msg = {
    to: to, // Change to your recipient
    from: "jhuliani@brunosilva.cc", // Change to your verified sender
    subject: subject,
    html: body,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};
