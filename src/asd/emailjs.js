import emailjs from "@emailjs/browser";

// 🔹 Your EmailJS Credentials
const SERVICE_ID = "service_sqjwf09";
const TEMPLATE_ID = "template_wcx4a4a";
const PUBLIC_KEY = "XgiHAGb6Vrl_Cjmqa";

/**
 * Send Contact Form Email
 * @param {Object} data
 * @param {string} data.name
 * @param {string} data.email
 * @param {string} data.phone
 * @param {string} data.subject
 * @param {string} data.message
 */

export const sendContactEmail = async (data) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        full_name: data.name,     // matches {{full_name}} in EmailJS
        email: data.email,        // matches {{email}}
        phone: data.phone,        // matches {{phone}}
        subject: data.subject,    // matches {{subject}}
        message: data.message,    // matches {{message}}
      },
      PUBLIC_KEY
    );

    console.log("Email successfully sent!", response.status, response.text);
    alert("Message sent successfully!");

    return true;
  } catch (error) {
    console.error("EmailJS Error:", error);
    alert("Failed to send message. Please try again.");

    return false;
  }
};
