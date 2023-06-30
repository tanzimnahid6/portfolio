import  { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs
      .sendForm(
        "service_z71gdde",
        "template_lyqy6ym",
        form.current,
        "Rr9uDpR39YiVS93VJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          if(result.text === "OK"){
            alert('Message send')
            e.target.reset()
        
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="md:px-14  px-4 py-8 text-white bg-gradient-to-b to-green-800 from-gray-500"
    >
      <div className="container   py-4">
        {/* Section: Design Block */}
        <section className="mb-32">
          <div className="flex flex-wrap">
            <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 ">
              <h2 className="mb-6 text-5xl font-bold">Contact us</h2>
              <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, modi accusantium ipsum corporis quia asperiores
                dolorem nisi corrupti eveniet dolores ad maiores repellendus
                enim autem omnis fugiat perspiciatis? Ad, veritatis.
              </p>
              <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                New York, 94126, United States
              </p>
              <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                + 01 234 567 89
              </p>
              <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                info@gmail.com
              </p>
            </div>
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
              <form ref={form} onSubmit={sendEmail}>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    placeholder="Name"
                    name="user_name"
                    required
                    className="w-full bg-transparent border-2 rounded p-2"
                    id="exampleInput90"
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full bg-transparent border-2 rounded p-2"
                    id="exampleInput91"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    name="message"
                    className="w-full bg-transparent border-2 rounded p-2"
                    rows="3"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <div className="text-center">
                  <input
                    type="submit"
                    value="Send"
                    className="btn w-full hover:btn-primary"
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
