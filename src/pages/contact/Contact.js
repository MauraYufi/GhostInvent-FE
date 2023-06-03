import React, { useState } from "react";
import Card from "../../components/card/Card";
import "./Contact.scss";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { toast } from "react-toastify";
import axios from "axios";
import { BACKEND_URL } from "../../services/authService";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const data = {
    subject,
    message,
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/api/contactus`, data);
      setSubject("");
      setMessage("");
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="contact">
      <h3 className="--mt">Contact Us</h3>
      <div className="section">
        <Card cardClass="card">
          <form onSubmit={sendEmail}>
            <label>Subjek</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <label>Pesan</label>
            <textarea
              cols="30"
              rows="10"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              className="--btn --btn-primary"
              style={{ marginTop: "2rem" }}
            >
              Kirim Pesan
            </button>
          </form>
        </Card>

        <div className="details">
          <Card cardClass={"card2"}>
            <h3>Informasi Kontak Kami</h3>
            <p>Silakan isi form atau kontak kami melalui platform di bawah</p>

            <div className="icons">
              <span>
                <FaPhoneAlt />
                <p>081239058393 </p>
              </span>
              <span>
                <FaEnvelope />
                <p>IAI_Ghostery@outlook.com</p>
              </span>
              <span>
                <GoLocation />
                <p>Yogyakarta, Indonesia</p>
              </span>
              <span>
                <FaTwitter />
                <p>@Ghostery</p>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
