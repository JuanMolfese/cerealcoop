import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Contacto
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Canales oficiales para contactarte con nosotros.
              </p>              
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <Link href="https://maps.app.goo.gl/VBvaxE1udhaViQyF6" target="_blank">
                        Balcarce 1450, Tres Arroyos.
                      </Link>                      
                    </div>
                    <div className="mb-8">
                      <Link href="tel:+542983574647" target="_blank">
                        Telefono: 2983 574647 
                      </Link>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <Link href="mailto:info@cerealcoop.com.ar" target="_blank">
                        mail: info@cerealcoop.com.ar
                      </Link>
                    </div>
                    <div className="mb-8">
                      <Link href="//api.whatsapp.com/send?phone=542983574647" target="_blank">
                        Whatsapp: 2983 574647 
                      </Link>
                    </div>
                  </div>                  
                  {/* <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>   */}                
                </div>             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
