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
        At FixFrame Inc., we recognize the significance of a healthy living environment for you and
        your family. Mold can pose a hidden danger, lurking in corners and crawlspaces, undermining
        your home’s structure,
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
          title: "",
          data: [
            {
              id: 1,
              text: `
              Although winters are enchanting, the frigid conditions can significantly impact your
              home. In states with harsh cold climates, vacant properties are particularly susceptible
              to damage from frozen water lines, insufficient insulation, and faulty plumbing.
            `,
            },
            {
              id: 2,
              text: `
              Property winterization safeguards your home from the harsh winter winds. Overlooking
              even a single component, such as the radiant heat system or plumbing fixtures, can
              result in costly repairs. Therefore, conducting property winterization before fall
              ensures your property is protected and prevents expensive damage.
              `,
            },
            {
              id: 3,
              text: `
              Our property winterization services prepare your home for winter. We handle everything
              from maintaining heating systems to ensuring proper insulation, checking for potential
              leaks, and winterizing toilets. We go above and beyond to protect your property,
              offering premium services within your budget. Ready to winterize your home? Contact
              us today.
              `,
            },
            {
              id: 4,
              text: `
              Winterization is the process of preparing a home for the harsh conditions of winter,
              typically done in the fall before snow and extreme cold arrive. It protects against
              damage from burst water pipes and heat loss through openings in the building envelope.
              Inspectors should understand winterization and be able to inform their clients.
              `,
            },
            {
              id: 5,
              text: `
              Water damage from burst pipes in cold weather can be devastating. A ruptured pipe will
              release water until someone shuts it off, potentially flooding a house and causing
              extensive damage if no one is home. Even minor ruptures or quickly stopped leaks can
              lead to mold and property damage, and repairing broken water pipes can be expensive.
              `,
            },
            {
              id: 6,
              text: `
              All exposed water pipes in cold areas like attics, garages, and crawlspaces should be
              insulated with foam or fiberglass insulation available at most hardware stores.
              Insulation should cover the entire pipe. Plastic pipes tolerate cold expansion better
              than copper or steel, making them beneficial in colder climates.
              `,
            },
            {
              id: 7,
              text: `
              The water supply for exterior pipes should be shut off from inside the house and
              drained. Sprinkler systems are particularly vulnerable to cracking from cold-weather
              expansion, so it's helpful to purge any remaining water with compressed air after
              turning them off.
              `,
            },
            {
              id: 8,
              text: `
               Homeowners should remember that much of the plumbing system runs through
               significantly colder areas of the house. Since it's impossible to monitor the
               temperature of every part of the plumbing system, the indoor air temperature should
               be kept high enough throughout winter to prevent pipes in unheated places from
               freezing.
              `,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Securing and Boarding",
      text: `
        At FixFrame Inc., we recognize the significance of a healthy living environment for you and
        your family. Mold can pose a hidden danger, lurking in corners and crawlspaces, undermining
        your home’s structure,
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
              Securing Services: Ensuring the safety and security of your property is our top 
              priority. Our comprehensive Securing services nclude: Property Lockdown: We secure all 
              entry points, including doors, windows, and gates, to prevent unauthorized access and 
              ensure your property is safe.
            `,
            },
            {
              id: 2,
              text: `
              Surveillance Installation: We install state-of-the-art surveillance systems that
              provide 24/7 monitoring. Our cameras capture high-definition footage, which can be
              accessed remotely for your convenience.
              `,
            },
            {
              id: 3,
              text: `
              Alarm Systems: Our alarm systems are designed to detect any unauthorized entry or
              suspicious activity. With immediate alerts, you can respond quickly to any potential
              threats.
              `,
            },
            {
              id: 4,
              text: `
              Security Inspections: Regular security inspections are conducted to identify and
              address any vulnerabilities. We provide detailed reports and recommendations for
              enhancing security measures.
              `,
            },
            {
              id: 5,
              text: `
              Emergency Response: In the event of a security breach or emergency, our team is
              available to respond promptly and take necessary actions to mitigate any risks.
              `,
            },
            {
              id: 6,
              text: `
              Boarding Services: Our Boarding services are tailored to provide efficient and
              effective property management solutions. We ensure your property is well-maintained
              and ready for new tenants with the following services:
              `,
            },
            {
              id: 7,
              text: `
              Tenant Placement: We carefully screen potential tenants to ensure they meet your
              criteria, including background checks and reference verification. Our goal is to find
              reliable and responsible tenants for your property.
              `,
            },
            {
              id: 8,
              text: `
               Move-In/Move-Out Assistance: We handle all aspects of the move-in and move-out
               process, including coordinating schedules, assisting with logistics, and conducting
               property inspections to ensure smooth transitions.
              `,
            },
            {
              id: 9,
              text: `
               Property Preparation: Our team prepares your property for new tenants by performing
               thorough cleaning, minor repairs, and maintenance tasks. We ensure the property is in
               excellent condition and ready for occupancy.
              `,
            },
            {
              id: 10,
              text: `
               Ongoing Support: We provide ongoing support and maintenance services, including
               routine inspections, landscaping, and addressing any tenant concerns or maintenance
               requests promptly
              `,
            },
            {
              id: 11,
              text: `
               Lease Management: We manage all lease-related tasks, including drafting lease
               agreements, handling renewals, and managing any necessary legal documentation. Our
               goal is to ensure a hassle-free leasing experience for both you and your tenants.
              `,
            },
            {
              id: 12,
              text: `
               With our Securing and Boarding services, you can have peace of mind knowing that your
               property is in capable hands. We are committed to providing top-notch service and
               ensuring your property is safe, secure, and well-maintained.
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
        At FixFrame Inc., we recognize the significance of a healthy living environment for you and
        your family. Mold can pose a hidden danger, lurking in corners and crawlspaces, undermining
        your home’s structure,
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
          title: "Why Choose FixFrame?",
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
        {
          id: 3,
          title: "Quality and Satisfaction:",
          data: [
            {
              id: 1,
              text: `
              At FixFrame, quality and satisfaction are the cornerstones of our service. We use the
              highest quality materials and follow industry best practices to ensure that all
              repairs are durable and long-lasting. Our commitment to excellence means that we stand
              behind our work and strive to achieve the highest levels of customer satisfaction.
              When you choose us, you can be confident that your property is in good hands.
            `,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Maid Service (Cleaning)",
      text: `
        At FixFrame Inc., we recognize the significance of a healthy living environment for you and
        your family. Mold can pose a hidden danger, lurking in corners and crawlspaces, undermining
        your home’s structure,
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
        At FixFrame Inc., we recognize the significance of a healthy living environment for you and
        your family. Mold can pose a hidden danger, lurking in corners and crawlspaces, undermining
        your home’s structure,
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
              At FixFrame Inc., we've perfected the craft of mold remediation. Our team of expert 
              professionals blends state- of - the - art technology with extensive experience to 
              provide thorough mold removal and prevention services.We treat every project with the 
              utmost seriousness, regardless of its scale or complexity, and tackle each one with 
              meticulous attention and dedication.
              `,
            },
          ],
        },
        {
          id: 2,
          title: "Why Choose FixFrame?",
          data: [
            {
              id: 1,
              text: `
              Qualified Experts: Our technicians hold certifications from top industry organizations, ensuring that your mold issue receives the utmost professional attention.
            `,
            },
            {
              id: 2,
              text: `
                Cutting- edge Technology: We employ advanced equipment and techniques for mold 
                inspection, elimination, and prevention, ensuring effective and long - lasting
                outcomes.
              `,
            },
            {
              id: 3,
              text: `
                Tailored Approaches: Each mold situation is distinct.We customize our solutions 
                to fit your exact requirements, addressing the underlying cause rather than just 
                the surface issues.
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
              Mold Assessment: Our specialists perform thorough assessments to determine the type 
              and scope of mold presence in your premises.
            `,
            },
            {
              id: 2,
              text: `
              Mold Eradication: Employing state-of-the-art methods, we securely and efficiently
              eliminate mold from your property, preventing its recurrence.
            `,
            },
            {
              id: 3,
              text: `
              Preventive Actions: We enact preventive measures to deter mold reappearance,
              safeguarding your residence and well-being for the future.
              `,
            },
          ],
        },
        {
          id: 4,
          title: "Health and Safety:",
          data: [
            {
              id: 1,
              text: `
               At FixFrame, your health is our foremost concern.Mold can lead to various health 
               concerns, such as allergies and respiratory issues.We adhere to strict safety 
               measures to safeguard both our crew and your household throughout the remediation 
               procedure.Our dedication to your well- being is steadfast.
            `,
            },
          ],
        },
        {
          id: 5,
          title: "Service Areas:",
          data: [
            {
              id: 1,
              text: `
               FixFrame proudly serves homeowners and businesses throughout Chicago and the
               surrounding regions. We're only a phone call away, prepared to promptly address
               your mold-related inquiries.
            `,
            },
          ],
        },
        {
          id: 6,
          title: "Contact Us:",
          data: [
            {
              id: 1,
              text: `
               Don't allow mold to jeopardize your home or health any further. Reach out to Ninja 
               Group Inc today to arrange an inspection or discuss your mold removal requirements.
              Our helpful team is ready to help you
            `,
            },
            {
              id: 2,
              text: `
               If you think only untidy homes are susceptible to mold, you might be mistaken.
               Whether it’s your residence or workplace, mold can thrive anywhere. What’s more
               alarming? Often, homeowners are unaware of mold presence in their homes.
            `,
            },
            {
              id: 3,
              text: `
              Unchecked mold growth can pose a health hazard. Left untreated, mold can rapidly
              spread throughout your property, causing structural damage and impacting its value.
            `,
            },
            {
              id: 4,
              text: `
              The longer mold is allowed to flourish, the more harm it can cause.
              `,
            },
            {
              id: 5,
              text: `
              To prevent serious health risks, mold growth must be addressed promptly.
              `,
            },
            {
              id: 6,
              text: `
              We offer mold inspection and remediation services to ensure your home is safe for you
              and your family. Our mold inspectors meticulously examine your indoor spaces. We
              utilize advanced technology to detect and assess mold, as well as identify the
              underlying conditions promoting its growth. Additionally, we provide mold remediation
              services to restore your home to a healthy environment.
            `,
            },
          ],
        },
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
              At FixFrame Inc., we've perfected the craft of mold remediation. Our team of expert
              professionals blends state-of-the-art technology with extensive experience to provide
              thorough mold removal and prevention services. We treat every project with the utmost
              seriousness, regardless of its scale or complexity, and tackle each one with
              meticulous attention and dedication.
            `,
            },
          ],
        },
        {
          id: 2,
          title: "Why Choose FixFrame?",
          data: [
            {
              id: 1,
              text: `
            Experienced Team:Our team comprises certified inspectors and skilled lawn care
            specialists who bring extensive knowledge and expertise to every project. We stay
            updated with the latest industry standards and techniques to deliver superior results.
            `,
            },
            {
              id: 2,
              text: `
            Comprehensive Services: We offer a wide range of services tailored to meet the unique
            needs of homeowners and property managers.
            `,
            },
            {
              id: 3,
              text: `
              Quality Assurance: We prioritize quality in every aspect of our work. Our inspection
              reports are meticulous and comprehensive, providing you with a clear understanding of
              your property's condition. Similarly, our lawn care services are performed with
              attention to detail to ensure optimal results.
            `,
            },
            {
              id: 4,
              text: `
              Customer-Centric Approach: Your satisfaction is our top priority. We work closely with
              you to understand your goals and preferences, tailoring our services to meet your
              specific requirements. We believe in open communication, reliability, and delivering
              services that exceed your expectations.
            `,
            },
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
