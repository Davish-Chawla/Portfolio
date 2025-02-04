import Form from "./contactform";

export default function Contact() {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-10 px-4 lg:px-20 py-10">
      {/* Left Section */}
      <div
        data-aos="fade-right"
        data-aos-delay="150"
        data-aos-duration="1500"
        className="w-full lg:w-1/2"
      >
        <div className="mb-12 lg:mb-0">
          <h2 className="mb-6 text-[32px] font-bold uppercase text-[#172554] sm:text-[40px] lg:text-[36px] xl:text-[40px]">
            Get in Touch with Us
          </h2>
          <div className="mb-8 flex w-full max-w-[370px]">
            <div className="mr-6 flex h-[60px] w-[60px] items-center justify-center rounded bg-primary/5 text-primary">
              <img src="/image/contact-icon-png-15.png"/>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Path */}
              </svg>
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-xl font-bold text-dark">Our Location</h4>
              <p className="text-base text-body-color dark:text-dark-6">
                City Rajpura, Punjab
              </p>
            </div>
          </div>
          {/* Additional Info */}
          <div className="mb-8 flex w-full max-w-[370px]">
            <div className="mr-6 flex h-[60px] w-[60px] items-center justify-center rounded bg-primary/5 text-primary">
              <img src="/image/146-1466931_pin-clipart-address-icon-home-pin-icon-svg-removebg-preview.png"/>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Path */}
              </svg>
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-xl font-bold text-dark">Phone Number</h4>
              <p className="text-base text-body-color dark:text-dark-6">
                (+91) 8283049762
              </p>
            </div>
          </div>
          <div className="mb-8 flex w-full max-w-[370px]">
            <div className="mr-6 flex h-[60px] w-[60px] items-center justify-center rounded bg-primary/5 text-primary">
            <img src="image/download-removebg-preview.png"/>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                
               
              </svg>
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-xl font-bold text-dark">Email Address</h4>
              <p className="text-base text-body-color dark:text-dark-6">
                davishchawla99@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="w-full lg:w-1/2">
        <Form />
      </div>
    </div>
  );
}
