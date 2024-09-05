import "./style.scss";
import { useEffect } from "react";
import { Button, Input } from "components";
import { useParams } from "react-router-dom";
import {
  ContactImage,
  HeroImage1,
  newsHouseImage1,
  newsHouseImage2,
  newsHouseImage3,
  newsHouseImage4,
} from "assets/images/jpg";

const ServicesView = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const backgroundColor = "rgba(0, 20, 96, 0.700)";

  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundImage: `linear-gradient(${backgroundColor}, ${backgroundColor}), url(${HeroImage1})`,
  };

  type imageTypes = {
    id: number;
    image: string;
  };

  type dataTypes = {
    text: string;
    id: string | number;
  };

  type listDataTypes = {
    id: number;
    data: dataTypes[];
    title: string | undefined | null;
  };

  type newDataTypes = {
    id: number;
    text: string;
    listData: listDataTypes[];
    title: string;
    images: imageTypes[];
  };

  const newsData: newDataTypes[] = [
    {
      id: 4,
      title: "Property winterization",
      text: `
        Winterizing your property safeguards it from the harsh winter winds. Missing even one element, like the radiant heating system or plumbing fixtures, could lead to expensive repairs. Therefore, preparing your property for winter before fall is crucial to protect it and avoid costly damages.
      `,
      images: [
        {
          id: 1,
          image: newsHouseImage1,
        },
        {
          id: 2,
          image: newsHouseImage2,
        },
        {
          id: 3,
          image: newsHouseImage3,
        },
        {
          id: 4,
          image: newsHouseImage4,
        },
      ],
      listData: [
        {
          id: 1,
          title: "Comprehensive REO Property Clean-Out and Debris Removal ",
          data: [
            {
              id: 1,
              text: `
              Our property winterization services ensure your home is fully prepared for the winter season. We handle everything from maintaining heating systems to enhancing insulation, checking for potential leaks, and winterizing toilets. We go above and beyond to protect your property, offering top-notch services that fit your budget. Ready to get your home winter-ready? Reach out to us today.
            `,
            },
            {
              id: 2,
              text: `
              Winterization involves getting a home ready to withstand the harsh winter conditions, typically done in the fall before the onset of snow and extreme cold. This process helps prevent damage from burst water pipes and heat loss due to gaps in the building's exterior. Inspectors should understand the winterization process to educate their clients effectively.
            `,
            },
            {
              id: 3,
              text: `
              Water damage from burst pipes in cold weather can be catastrophic. When a pipe bursts, water continues to flow until the supply is shut off, potentially flooding the home and causing extensive damage if no one is there to intervene. Even minor leaks or quickly stopped ruptures can lead to mold and other property damage, and repairing broken pipes can be expensive.
            `,
            },
            {
              id: 4,
              text: `
              All exposed water pipes in cold areas, such as attics, garages, and crawlspaces, should be insulated using materials like foam or fiberglass, which are available at most hardware stores. Insulation should cover the entire pipe length. Plastic pipes, more resilient to cold expansion than copper or steel, may be beneficial in colder climates. The water supply to exterior pipes should be shut off from inside the home, and the pipes should be drained.
            `,
            },
            {
              id: 5,
              text: `
              Sprinkler systems are especially prone to cracking due to cold-weather expansion. Besides turning them off, it's advisable to use compressed air to clear any remaining water from the system. Homeowners should remember that plumbing often runs through areas much colder than the rest of the house. Since monitoring the temperature of all plumbing sections is impractical, maintaining a sufficiently high indoor temperature throughout the winter is essential to prevent pipes in unheated areas from freezing.
            `,
            },
          ],
        },
        // {
        //   id: 2,
        //   title: "Light Demolition and Cleanup Services for REO Properties ",
        //   data: [
        //     {
        //       id: 1,
        //       text: `
        //         After the initial cleanout, our team can assist with light demolition tasks to
        //         avoid the need for multiple contractors. This service accelerates the process,
        //         making your property market-ready more quickly. Choosing LoadUp for your REO
        //         cleanout and eco-friendly disposal needs ensures a streamlined experience.
        //       `,
        //     },
        //   ],
        // },
        // {
        //   id: 3,
        //   title: "Range of Real Estate-Owned Property Services",
        //   data: [
        //     {
        //       id: 1,
        //       text: `
        //         Every property is unique, and so are our cleanout solutions. Whether it’s a
        //         residential, corporate building, or undeveloped land, our REO property
        //         services are tailored to meet all your cleanup needs. Your account manager
        //         is always on hand to provide upfront quotes, schedule services, and address
        //         any questions.
        //       `,
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   title: "Property Clean Outs:",
        //   data: [
        //     {
        //       id: 1,
        //       text: "Office Clean Outs",
        //     },
        //     {
        //       id: 2,
        //       text: "Eviction Clean Outs",
        //     },
        //     {
        //       id: 3,
        //       text: "Apartment Clean Outs",
        //     },
        //     {
        //       id: 4,
        //       text: "Foreclosure Clean Outs",
        //     },
        //     {
        //       id: 5,
        //       text: "Renovation Clean Outs",
        //     },
        //     {
        //       id: 6,
        //       text: "Storage Unit Clean Outs",
        //     },
        //   ],
        // },
        // {
        //   id: 5,
        //   title: "Property Clean Outs:",
        //   data: [
        //     {
        //       id: 1,
        //       text: "Trash Removal",
        //     },
        //     {
        //       id: 2,
        //       text: "Waste Removal",
        //     },
        //     {
        //       id: 3,
        //       text: "Debris Removal",
        //     },
        //     {
        //       id: 4,
        //       text: "Garbage Removal",
        //     },
        //     {
        //       id: 5,
        //       text: "Construction Site Clean Ups",
        //     },
        //     {
        //       id: 6,
        //       text: "Renovation & Remodel Clean Ups",
        //     },
        //   ],
        // },
      ],
    },
    {
      id: 3,
      title: "Securing and Boarding",
      text: `
        The process of locking and protecting a property by securing entry points and covering windows and doors to prevent unauthorized access and damage.
      `,
      images: [
        {
          id: 1,
          image: newsHouseImage1,
        },
        {
          id: 2,
          image: newsHouseImage2,
        },
        {
          id: 3,
          image: newsHouseImage3,
        },
        {
          id: 4,
          image: newsHouseImage4,
        },
      ],
      listData: [
        {
          id: 1,
          title: "Securing Services:",
          data: [
            {
              id: 1,
              text: `
              Ensuring the safety and security of your property is our top 
              priority. Our comprehensive Securing services nclude: Property Lockdown: We secure all 
              entry points, including doors, windows, and gates, to prevent unauthorized access and 
              ensure your property is safe.
            `,
            },
            {
              id: 2,
              text: `
          Property Lockdown: We secure all entry points, including doors, windows, and gates, to prevent unauthorized access and ensure your property is safe.
              `,
            },

            {
              id: 2,
              text: `
        Surveillance Installation: We install state-of-the-art surveillance systemsthat provide 24/7 monitoring. Our camerascapturehigh-definition footage, which can be accessed remotely for your convenience.
              `,
            },
            {
              id: 3,
              text: `
            Alarm Systems: Our alarm systems are designed to detect any unauthorized entry or suspicious activity. With immediate alerts, you can respond quickly to any potential threats.
              `,
            },
            {
              id: 4,
              text: `
             Security Inspections: Regular security inspections are conducted to identify and address any vulnerabilities. We provide detailed reports and recommendations for enhancing security measures.
              `,
            },
            {
              id: 5,
              text: `
              Emergency Response: In the event of a security breach or emergency, our team is available to respond promptly and take necessary actions to mitigate any risks.
              `,
            },
            {
              id: 6,
              text: `
              Boarding Services:
       Our Boarding services are tailored to provide efficient and effective property management solutions. We ensure your property is well-maintained and ready for new tenants with the following services:
              `,
            },
            {
              id: 7,
              text: `
            Tenant Placement: We carefully screen potential tenants to ensure they meet your criteria, including background checks and reference verification. Our goal is to find reliable and responsible tenants for your property
              `,
            },
            {
              id: 8,
              text: `
              Move-In/Move-Out Assistance: We handle all aspects of the move-in and move-out process, including coordinating schedules, assisting with logistics, and conducting property inspections to ensure smooth transitions.
              `,
            },
            {
              id: 9,
              text: `
          Property Preparation: Our team prepares your property for new tenants by performing thorough cleaning, minor repairs, and maintenance tasks. We ensure the property is in excellent condition and ready for occupanc.
              `,
            },
            {
              id: 10,
              text: `
              Ongoing Support: We provide ongoing support and maintenance services, including routine inspections, landscaping, and addressing any tenant concerns or maintenance requests promptly.
              `,
            },
            {
              id: 11,
              text: `
       Lease Management: We manage all lease-related tasks, including drafting lease agreements, handling renewals, and managing any necessary legal documentation. Our goal is to ensure a hassle-free leasing experience for both you and your tenants.
              `,
            },
            {
              id: 12,
              text: `
             With our Securing and Boarding services, you can have peace of mind knowing that your property is in capable hands. We are committed to providing top-notch service and ensuring your property is safe, secure, and well-maintained.
              `,
            },
          ],
        },
      ],
    },
    {
      id: 6,
      title: "Repairs and Damages",
      text: `
       At Fix&Frame, we offer thorough and efficient property clean-out services to ensure your space is left spotless and ready for its next use. Whether you're dealing with a foreclosure, preparing a property for sale, or just need a deep clean, our team provides top-tier services tailored to your specific needs. We handle everything from debris removal and deep cleaning to junk hauling and sanitization. Trust us to leave your property in pristine condition.
      `,
      images: [
        {
          id: 1,
          image: newsHouseImage1,
        },
        {
          id: 2,
          image: newsHouseImage2,
        },
        {
          id: 3,
          image: newsHouseImage3,
        },
        {
          id: 4,
          image: newsHouseImage4,
        },
      ],
      listData: [
        {
          id: 1,
          title: "Our Expertise:",
          data: [
            {
              id: 1,
              text: `
              Structural Repairs: We address and repair any structural damage to your property,
              ensuring it is safe and stable. Our team is experienced in handling damages caused by
              natural disasters, accidents, or wear and tear.
            `,
            },
            {
              id: 2,
              text: `
              Water Damage Restoration: Our water damage restoration services include water
              extraction, drying, dehumidification, and mold remediation. We work quickly to
              minimize damage and restore your property to its original state.
              `,
            },
            {
              id: 3,
              text: `
              Fire and Smoke Damage Restoration: We provide comprehensive fire and smoke damage
              restoration services, including soot and smoke removal, odor control, and property
              repair. Our goal is to restore your property and eliminate any traces of fire damage.
              `,
            },
            {
              id: 4,
              text: `
              Electrical and Plumbing Repairs: Our skilled technicians handle all types of
              electrical and plumbing repairs, from fixing faulty wiring and leaky pipes to
              replacing damaged fixtures. We ensure that all repairs are performed safely and meet
              industry standards.
              `,
            },
            {
              id: 5,
              text: `
              Interior and Exterior Repairs: We offer a wide range of interior and exterior repair
              services, including drywall repair, painting, roofing, siding, and window replacement.
              Our team ensures that all repairs blend seamlessly with the existing structure and
              enhance the overall appearance of your property.
              `,
            },
          ],
        },
        {
          id: 2,
          title: "Fix&Frame?",
          data: [
            {
              id: 1,
              text: `
              Experienced Professionals: Our team consists of highly trained and experienced
              professionals who are experts in their respective fields. We are committed to
              delivering exceptional results on every project.
            `,
            },
            {
              id: 2,
              text: `
              Comprehensive Services: We offer a full range of repair and damage restoration
              services, ensuring that all your needs are met under one roof. From minor repairs to
              major restoration projects, we handle it all.
              `,
            },
            {
              id: 3,
              text: `
              Prompt and Reliable: We understand the urgency of repair and restoration work. Our
              team responds quickly to your needs and works efficiently to complete the job on time
              and within budget.
              `,
            },
            {
              id: 4,
              text: `
              Customer Satisfaction: Your satisfaction is our top priority. We work closely with
              you throughout the repair process, keeping you informed and addressing any concerns
              you may have. Our goal is to exceed your expectations.
              `,
            },
          ],
        },
        // {
        //   id: 3,
        //   title: "Quality and Satisfaction:",
        //   data: [
        //     {
        //       id: 1,
        //       text: `
        //       At Fix&Frame, quality and satisfaction are the cornerstones of our service. We use the
        //       highest quality materials and follow industry best practices to ensure that all
        //       repairs are durable and long-lasting. Our commitment to excellence means that we stand
        //       behind our work and strive to achieve the highest levels of customer satisfaction.
        //       When you choose us, you can be confident that your property is in good hands.
        //     `,
        //     },
        //   ],
        // },
      ],
    },
    {
      id: 5,
      title: "Maid Service (Cleaning)",
      text: `
        At Fix&Frame, we offer thorough and efficient property clean-out services to ensure your space is left spotless and ready for its next use. Whether you're dealing with a foreclosure, preparing a property for sale, or just need a deep clean, our team provides top-tier services tailored to your specific needs. We handle everything from debris removal and deep cleaning to junk hauling and sanitization. Trust us to leave your property in pristine condition.
      `,
      images: [
        {
          id: 1,
          image: newsHouseImage1,
        },
        {
          id: 2,
          image: newsHouseImage2,
        },
        {
          id: 3,
          image: newsHouseImage3,
        },
        {
          id: 4,
          image: newsHouseImage4,
        },
      ],
      listData: [
        {
          id: 1,
          title: "Initial Consultation:",
          data: [
            {
              id: 1,
              text: `
              Assessment: We start with an initial consultation to understand your specific cleaning
              needs and preferences. Our team will discuss the areas you want to focus on, any
              special requests, and the frequency of cleaning.
            `,
            },
            {
              id: 2,
              text: `
              Customized Plan: Based on the consultation, we create a customized cleaning plan
              tailored to your home and schedule. We ensure that all your requirements are met.
              `,
            },
          ],
        },
        {
          id: 2,
          title: "Scheduling:",
          data: [
            {
              id: 1,
              text: `
              Flexible Appointments: We offer flexible scheduling options to fit your lifestyle.
              Whether you need weekly, bi-weekly, monthly, or one-time cleaning, we arrange
              appointments at your convenience.
            `,
            },
            {
              id: 2,
              text: `
               Confirmation: Prior to each cleaning session, we send a confirmation to remind you
               of the scheduled appointment and any special instructions you may have.
              `,
            },
          ],
        },
        {
          id: 3,
          title: "Arrival and Setup:",
          data: [
            {
              id: 1,
              text: `
              Professional Team: Our team of professional cleaners arrives on time, in uniform,
              and fully equipped with all necessary cleaning supplies and equipment. Briefing:
            `,
            },
            {
              id: 2,
              text: `
              We conduct a quick briefing to review the cleaning plan and address any last-minute
              instructions or areas of concern.
            `,
            },
          ],
        },
        {
          id: 4,
          title: "Quality Check:",
          data: [
            {
              id: 1,
              text: `
               Inspection: After cleaning, our team conducts a thorough inspection to ensure all
               tasks have been completed to our high standards. Feedback:
            `,
            },
            {
              id: 2,
              text: `
              We encourage you to provide feedback on the cleaning service to ensure your
              satisfaction and address any areas for improvement.
            `,
            },
          ],
        },
        {
          id: 5,
          title: "Post-Cleaning:",
          data: [
            {
              id: 1,
              text: `
               Final Touches: We make final touches to ensure everything is in its place and your 
               home looks pristine. Secure Exit:
            `,
            },
            {
              id: 2,
              text: `
              Our team ensures that your home is secure upon departure, locking doors and setting alarms as needed.
            `,
            },
          ],
        },
        {
          id: 6,
          title: "Follow-Up:",
          data: [
            {
              id: 1,
              text: `
               Customer Satisfaction: We follow up with you to ensure you are completely satisfied
               with our services. Your feedback is valuable in helping us maintain the highest
               standards of quality.By following this detailed process, we ensure that your home 
               is cleaned thoroughly and consistently, proviing you with a clean and comfortable 
               living environment.
            `,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Debris removal",
      text: `
        As an REO agent, you understand the importance of maintaining the appeal of bank-owned properties to
        attract potential buyers and close deals. Fix&Frame provides dependable, ongoing, and one-time
        clean-out and clean-up services, including debris removal, for REO properties. Whether it's
        residential, commercial, industrial properties, or undeveloped land, our reliable REO clean-out
        teams will be your trusted partner in ensuring the continued upkeep of all your bank-owned properties.
      `,
      images: [
        {
          id: 1,
          image: newsHouseImage1,
        },
        {
          id: 2,
          image: newsHouseImage2,
        },
        {
          id: 3,
          image: newsHouseImage3,
        },
        {
          id: 4,
          image: newsHouseImage4,
        },
      ],
      listData: [
        {
          id: 1,
          title: "Comprehensive REO Property Clean-Out and Debris Removal:",
          data: [
            {
              id: 1,
              text: `
               We deploy scalable teams of licensed and insured professionals to conduct thorough cleanouts of bank-owned properties. This includes clearing out all leftover junk, furniture, and appliances, as well as cleaning up both interior and exterior debris. We also offer complete cleanup services for undeveloped land, handling everything from trash removal to tree and yard debris disposal.
              `,
            },
          ],
        },
        {
          id: 2,
          title: "Light Demolition and Cleanup Services for REO Properties",
          data: [
            {
              id: 1,
              text: `
              After the initial cleanout, our team can assist with light demolition tasks to avoid the need for multiple contractors. This service accelerates the process, making your property market-ready more quickly. Choosing LoadUp for your REO cleanout and eco-friendly disposal needs ensures a streamlined experience.
            `,
            },
          ],
        },
        {
          id: 3,
          title: "Range of Real Estate-Owned Property Services:",
          data: [
            {
              id: 1,
              text: `
            Every property is unique, and so are our cleanout solutions. Whether it’s a residential, corporate building, or undeveloped land, our REO property services are tailored to meet all your cleanup needs. Your account manager is always on hand to provide upfront quotes, schedule services, and address any questions.
            `,
            }
          ],
        }
      ],
    },
    {
      id: 1,
      title: "Inspection Services and Lawn Maintenance",
      text: "",
      images: [
        {
          id: 1,
          image: newsHouseImage1,
        },
        {
          id: 2,
          image: newsHouseImage2,
        },
        {
          id: 3,
          image: newsHouseImage3,
        },
        {
          id: 4,
          image: newsHouseImage4,
        },
      ],
      listData: [
        {
          id: 1,
          title: "Our Expertise:",
          data: [
            {
              id: 1,
              text: `
                   At Fix&Frame, we are dedicated to providing comprehensive inspection services and meticulous lawn maintenance solutions that ensure your property not only looks its best but also remains structurally sound and well-maintained throughout the year. With years of industry experience and a commitment to excellence, our team of professionals is here to meet all your property care needs.
            `,
            },
          ],
        },
        {
          id: 2,
          title: "Why Choose Us:",
          data: [
            {
              id: 1,
              text: `
            Experienced Team: Our team comprises certified inspectors and skilled lawn care specialists who bring extensive knowledge and expertise to every project. We stay updated with the latest industry standards and techniques to deliver superior results.
            `,
            },
            {
              id: 2,
              text: `
            Comprehensive Services: We offer a wide range of services tailored to meet the unique needs of homeowners and property managers.
            `,
            },
            {
              id: 3,
              text: `
              Quality Assurance: We prioritize quality in every aspect of our work. Our inspection reports are meticulous and comprehensive, providing you with a clear understanding of your property's condition. Similarly, our lawn care services are performed with attention to detail to ensure optimal results.
            `,
            },
            {
              id: 4,
              text: `
              Customer-Centric Approach: Your satisfaction is our top priority. We work closely with you to understand your goals and preferences, tailoring our services to meet your specific requirements. We believe in open communication, reliability, and delivering services that exceed your expectations.
            `,
            },
          ],
        },
        {
          id: 3,
          title: "Our Services:",
          data: [
            {
              id: 1,
              text: `
          Property Inspections: Comprehensive evaluations conducted by experienced inspectors, focusing on safety, maintenance needs, and compliance with regulations. We provide detailed reports and recommendations to help you make informed decisions.
            `,
            },
            {
              id: 2,
              text: `

Lawn Maintenance: Regular care plans customized to your lawn's specific needs and seasonal requirements. Services include regular mowing, trimming, edging, fertilization, weed management, and treatments to promote healthy growth and lush greenery.
            `,
            },
            {
              id: 3,
              text: `
              Quality Assurance: We prioritize quality in every aspect of our work. Our inspection reports are meticulous and comprehensive, providing you with a clear understanding of your property's condition. Similarly, our lawn care services are performed with attention to detail to ensure optimal results.
            `,
            }
          ],
        },
        {
          id: 4,
          title: "Quality and Satisfaction:",
          data: [
            {
              id: 1,
              text: `
          At Fix&Frame, we are committed to delivering exceptional service and superior results in inspection services and lawn maintenance. Whether you're looking to enhance curb appeal, maintain property value, or ensure a safe and inviting outdoor environment, you can trust us to provide reliable, professional, and personalized care.
            `,
            }
          ],
        },
      ],
    },
  ];

  const { id } = useParams();

  const findData = newsData.filter((el: newDataTypes) => el.id === Number(id));

  return (
    <>
      {findData.length > 0 &&
        findData.map((el: newDataTypes) => {
          return (
            <section className="services-view" key={el.id}>
              <h1 className="visually-hidden">{el.title}</h1>
              <div
                className="services-view__background"
                style={backgroundStyle}
              >
                <div className="container">
                  <h2 className="services-view__background-title">
                    {el.title}
                  </h2>
                  <p className="services-view__background-text">{el.text}</p>
                </div>
              </div>

              <div className="container">
                <ul className="services-view__houses">
                  {el.images.length > 0 &&
                    el.images.map((el: imageTypes) => {
                      return (
                        <li className="services-view__house" key={el.id}>
                          <img
                            height={410}
                            src={el.image}
                            loading="lazy"
                            alt="contact-house-image-1"
                            className="services-view__house-image"
                          />
                        </li>
                      );
                    })}
                </ul>
              </div>

              <div className="container">
                <ul className="services-view__questions">
                  {el.listData.length > 0 &&
                    el.listData.map((el: listDataTypes) => {
                      return (
                        <li className="services-view__question" key={el.id}>
                          <h3 className="services-view__question-title">
                            {el.title}
                          </h3>
                          <ul className="services-view__answers">
                            {el.data.length > 0 &&
                              el.data.map((el: dataTypes) => {
                                return (
                                  <li className="services-view__answer">
                                    <p className="services-view__answer-text">
                                      {el.text}
                                    </p>
                                  </li>
                                );
                              })}
                          </ul>
                        </li>
                      );
                    })}
                </ul>
              </div>

              <div className="container">
                <section className="services-view__contact">
                  <div className="services-view__box">
                    <h3 className="services-view__box-title">Any questions?</h3>
                    <p className="services-view__box-text">
                      Feel free to reach out to us by completing the form below.
                    </p>
                    <hr className="services-view__box-horizontal-rule" />
                    <form className="services-view__form">
                      <Input
                        required
                        type="text"
                        placeholder="Your name"
                        className="services-view__form-field"
                      />
                      <Input
                        required
                        type="email"
                        placeholder="Your Email Address"
                        className="services-view__form-field"
                      />
                      <Input
                        required
                        type="number"
                        placeholder="Contact phone"
                        className="services-view__form-field"
                      />
                      <select required className="services-view__form-field">
                        <option
                          value="project scope"
                          className="services-view__form-select-option"
                        >
                          Project scope
                        </option>
                      </select>
                      <textarea
                        required
                        className="services-view__form-texterea"
                        placeholder="Describe your request"
                      ></textarea>
                      <Button
                        type="submit"
                        className="services-view__form-submit"
                      >
                        Submit your request
                      </Button>
                    </form>
                  </div>
                  <div className="services-view__box">
                    <img
                      height={630}
                      alt="contact"
                      loading="lazy"
                      src={ContactImage}
                      className="services-view__contact-image"
                    />
                  </div>
                </section>
              </div>
            </section>
          );
        })}
    </>
  );
};

export default ServicesView;
