import { useState } from "react";
import { Heading, Center, Button, useColorModeValue } from "@chakra-ui/react";

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
      if (res.status === 200) {
        alert("Email has been sent!");
        setSubmitted(true);
        setName("");
        setEmail("");
      } else {
        console.log("error");
      }
    });
  };

  const color = useColorModeValue('black', 'white')


  return (
    <div id="contact" className="">
      <div className="md:w-2/3 md:mx-auto lg:w-1/2 lg:mx-auto px-10">
        <div className="container m-auto pb-40 ">
          <div className="px-4">
            <Center>
              <Heading as="h3" size={"xl"} pb="20px" variant="page-title">
                Contact
              </Heading>
            </Center>
            <h1 className="text-blue-500 text-3xl pb-1 text-center">
              Want to reach out?
            </h1>
            <p style={{color:color, textAlign:'center', paddingTop:'10px', paddingBottom:'10px', fontWeight:'', fontSize:'20px'}}>
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
            <Button width={'100%'} onClick={(e) => handleSubmit(e)}>Send Email</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
