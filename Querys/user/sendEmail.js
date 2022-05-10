import sendGrid from "../../emailConfig";

export const sendEmail = async (email, name, message, phone_number) => {
  console.log(email, name, message, phone_number);
  let _message = message;
  try {
    const message = {
      to: "saeid.noormohammad@gmail.com",
      from: {
        email: "saeid.noormohammad@gmail.com",
        name: name,
      },
      subject: `New Message From ${name} 7bc.com`,
      text: `${_message} phone Number:${phone_number} email:${email}`,
    };
    await sendGrid.send(message);
    return "Done";
  } catch (error) {
    console.log(error);
  }
};
