import { useState } from "react";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let data = {
        name,
        email,
        message,
      };
  
      fetch("/api/Contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log("Response succeeded!");
          setSubmitted(true);
          setName("");
          setEmail("");
          setBody("");
        }else{
          console.log('error')
        }
      });
    };
  
    return (
      <div id="contact" className="">
          <div
            className="md:w-2/3 md:mx-auto lg:w-1/2 lg:mx-auto px-10"
          >
            <div className="container m-auto pb-40 ">
              <div className="px-4">
                <h1 className="text-orange-500 text-2xl font-medium text-center lg:text-5xl pb-6">
                  Contact
                </h1>
                <h1 className="text-blue-500 font-light text-3xl pb-1 text-center">
                  Want to reach out?
                </h1>
                <p className="text-gray-200 pt-3 text-center text-xl">
                  Lets discuss it!
                </p>
              </div>
              <form>
                <input
                  placeholder="Name"
                  type="text"
                  id="fullname"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="w-full p-2 my-2 ring-1 ring-indigo-200 rounded-md"
                  required
                />
                <input
                  placeholder="Email"
                  type="email"
                  id="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="w-full p-2 my-2 ring-1 ring-indigo-200 rounded-md"
                  required
                />
                <textarea
                  placeholder="Message..."
                  cols="30"
                  id="message"
                  rows="10"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  className="w-full p-2 my-2 ring-1 ring-indigo-200 rounded-md"
                  required
                ></textarea>
                <button className="bg-blue-200 p-2 h-12 w-full text-blue-400 rounded-md" onClick={(e) => handleSubmit(e)}>Send Email</button>
              </form>
            </div>
          </div>
      </div>
    );
  };
  
  export default ContactForm;
  