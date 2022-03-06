import sendGrid from "@sendgrid/mail";

export default sendGrid.setApiKey(process.env.SEND_GRID);
