import nodemailer from "nodemailer";

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "477bc0d53fa9b1",
    pass: "285d830a936e8a",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <luis@feedget.com>",
      to: "Luis Felipe <lfbmrj15@gmail.com>",
      subject,
      html:body
    });
  }
}
