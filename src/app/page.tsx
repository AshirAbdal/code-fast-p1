"Use Client"

import {auth} from "@/auth"
import ButtonLogin from "@/src/components/Dashboard/ButtonLogin"

export default async function Home() {
 

 const session = await auth();

 console.log(session)
 
  const priceCaptionList = [
    "Collect Customer Feedback",
    "Unlimited boards",
    "Admin Dashboard",
    "24/7 Support",
  ];

  return (
    <main>
      {/* header */}

      <section className="bg-base-200 ">
        <section className=" max-w-5xl flex flex-col md:flex-row justify-between items-center px-8 py-2 mx-auto ">
          <div className="">Mysite</div>
          <div className=" gap-0 md:gap-10 flex flex-col md:flex-row">
            <a className="link link-hover" href="#home">
              Home
            </a>
            <a className="link link-hover" href="#pricing">
              Pricing
            </a>
            <a className="link link-hover" href="#faq">
              Contact
            </a>
          </div>
          <div className="">
            {" "}
           <ButtonLogin session={session}/>
          </div>
        </section>
      </section>

      {/* hero-section */}

      <section
        className="flex flex-col lg:flex-row py-32 px-8 max-w-5xl mx-auto gap-14 "
        id="home"
      >

        <div className="mx-auto py-20 px-8  max-w-2xl items-center lg:items-start ">
          <div className="font-extrabold font text-6xl py-8 "> Home page </div>

          <div className="mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            asperiores unde expedita quis id deserunt explicabo dignissimos,
          </div>

        </div>
      </section>

      {/* pricing */}

      <section className="bg-base-200" id="pricing">
        <div className="py-32 px-8 max-w-3xl mx-auto ">
          <p className=" text-sm uppercase text-center text-primary">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">
            A pricing that adapts your need
          </h2>

          <div className="bg-base-100 p-8 w-96 rounded-2xl mx-auto ">
            <div className="flex gap-2 items-baseline">
              <div className="font-extrabold text-4xl">$20</div>
              <div className="uppercase text-sm font-medium opacity-50">
                /month
              </div>
            </div>

            <ul className="mb-2">
    

              {priceCaptionList.map((priceList) => {
                return (
                  <li className="flex items-center gap-2" key={priceList}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="size-4 text-green-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {priceList}
                  </li>
                );
              })}
            </ul>

          </div>
        </div>
      </section>

      {/* faq section */}

      <section className="bg-base-200" id="faq">
        <div className="py-32 px-8 max-w-3xl mx-auto ">
          <p className=" text-sm uppercase text-center text-primary">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <ul className="mb-2"></ul>
        </div>
      </section>
    </main>
  );
}

