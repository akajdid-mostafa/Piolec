'use client';

import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Contact from "@/components/contact";
import { useState } from "react"; // Import useState for form handling

const Page = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    type: "0", // Default value for select
    entreprise: "",
    message: "",
  });

  // State to manage modal visibility
  const [showModal, setShowModal] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Prepare the data to match the API's expected format
    const apiData = {
      name: formData.name,
      number: formData.phone, // Map "phone" to "number" as per the API
      email: formData.email,
      type: formData.type,
      entreprise: formData.entreprise,
      message: formData.message,
    };

    try {
      // Send a POST request to the API
      const response = await fetch("https://email-lemon-pi.vercel.app/api/Piolec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const result = await response.json();
      console.log("API Response:", result); // Log the API response

      // Show the modal
      setShowModal(true);

      // Clear all inputs and reset select to "0"
      setFormData({
        name: "",
        phone: "",
        email: "",
        type: "0",
        entreprise: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Une erreur s'est produite. Veuillez réessayer."); // Show an error message
    }
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <NextLayout> 
      <Breadcrumb pageName="" backgroundImage="assets/img/cta/contact.png" backgroundCover={false} />
      <Contact />
      {/* Contact Section Section Start */}
      <section className="contact-section section-paddingg">
        <div className="container">
          <div className="contact-wrapper">
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="contact-content wow fadeInUp"
                data-wow-delay=".4s"
                >
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      Nous contacter
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      N'hésitez pas à nous contacter <br />
                      Notre équipe
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Sed ut perspiciatis unde omnis iste natus error voluptatem
                    accusantium <br />
                    doloremque laudantium, totam rem aperiam
                  </p>
                  {/* <ul
                    className="contact-list wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <li>
                      <a href="mailto:piolec21@outlook.com">piolec21@outlook.com</a>
                    </li>
                    <li>61 AV. Lalla yacout, N°39, 1er étage centre riad, casablanca</li>
                    <li>
                      <a href="tel:+212662241871">0662241871 / 0666491605</a>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div className="col-lg-8">
                <div
                  className="contact-right wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <h2 className="pb-4">Envoyez-nous un message</h2>
                  <form
                    onSubmit={handleSubmit} // Add form submission handler
                    id="contact-form"
                    className="contact-form-items"
                  >
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Votre Nom"
                            value={formData.name}
                            onChange={handleInputChange}
                            onFocus={(e) => (e.target.placeholder = "")} // Remove placeholder on focus
                            onBlur={(e) =>
                              (e.target.placeholder = "Votre Nom")
                            } // Restore placeholder on blur
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Votre Téléphone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            onFocus={(e) => (e.target.placeholder = "")} // Remove placeholder on focus
                            onBlur={(e) =>
                              (e.target.placeholder = "Votre Téléphone")
                            } // Restore placeholder on blur
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="email"
                            name="email"
                            id="email2"
                            placeholder="Votre Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onFocus={(e) => (e.target.placeholder = "")} // Remove placeholder on focus
                            onBlur={(e) =>
                              (e.target.placeholder = "Votre Email")
                            } // Restore placeholder on blur
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <select
                            name="type"
                            id="type"
                            value={formData.type}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="0" disabled>
                              Sélectionner le type de personne
                            </option>
                            <option value="Particulier">Particulier</option>
                            <option value="Entreprise">Entreprise</option>
                          </select>
                        </div>
                      </div>
                      {/* Conditionally render "Nom de Société" input */}
                      {formData.type === "Entreprise" && (
                        <div className="col-lg-12">
                          <div className="form-clt">
                            <input
                              type="text"
                              name="entreprise"
                              id="entreprise"
                              placeholder="Nom de Société"
                              value={formData.entreprise}
                              onChange={handleInputChange}
                              onFocus={(e) => (e.target.placeholder = "")} // Remove placeholder on focus
                              onBlur={(e) =>
                                (e.target.placeholder = "Nom de Société")
                              } // Restore placeholder on blur
                              required
                            />
                          </div>
                        </div>
                      )}
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleInputChange}
                            onFocus={(e) => (e.target.placeholder = "")} // Remove placeholder on focus
                            onBlur={(e) =>
                              (e.target.placeholder = "Message")
                            } // Restore placeholder on blur
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <button type="submit" className="theme-btn">
                          Envoyer un message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal to thank the user */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Merci !</h2>
            <p>Votre message a été envoyé avec succès.</p>
            <button onClick={closeModal} className="theme-btn">
              Fermer
            </button>
          </div>
        </div>
      )}
    </NextLayout>
  );
};

export default Page;