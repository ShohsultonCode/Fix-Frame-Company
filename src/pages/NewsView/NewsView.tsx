import "./style.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  HeroImage1,
  newsHouseImage1,
  newsHouseImage10,
  newsHouseImage11,
  newsHouseImage12,
  newsHouseImage13,
  newsHouseImage14,
  newsHouseImage15,
  // newsHouseImage16,
  // newsHouseImage17,
  // newsHouseImage18,
  // newsHouseImage19,
  newsHouseImage2,
  newsHouseImage3,
  newsHouseImage4,
  newsHouseImage5,
  newsHouseImage6,
  newsHouseImage7,
  newsHouseImage8,
  newsHouseImage9,
} from "assets/images/jpg";

const NewsView = () => {
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
  };

  type listDataTypes = {
    id: number;
    title: string;
    data: dataTypes[];
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
      id: 1,
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
          title: "Experienced Residential Construction",
          data: [
            {
              text: `
               Whether you're starting a new construction project, refreshing several locations with a new
               brand identity, or renovating a single site, we oversee your project from start to finish.
               Our reliable feasibility studies encompass all aspects, and our skilled teams manage every
               stage of the project. You can rely on top-notch materials, excellent craftsmanship, and
               efficient management techniques. We address specific challenges collaboratively and
               consistently achieve the results you anticipate, on schedule and within budget. Few
               retail construction firms in Illinois can match the extensive expertise we offer at Fix&Frame.
              `,
            },
          ],
        },
        {
          id: 2,
          title: "Focused Building Solutions",
          data: [
            {
              text: `
            Considering investing in a mature residential property? As Illinois’s foremost residential
            remodeling contractor, we've crafted cost-effective renovation tactics for current interiors and
            exteriors. Do your blueprints call for adherence to stringent customer standards? We've collaborated
            closely with homeowners and their proxies statewide. If you're commencing a new property development,
            our crews oversee the endeavor from site preparation to final permitting. We tailor our construction
            solutions to accommodate your endeavors, whether single-family units, tenant enhancements, or routine
            maintenance.
          `,
            },
          ],
        },
        {
          id: 3,
          title: "Comprehensive Management Techniques",
          data: [
            {
              text: `
            Effectively managing both extensive and minor construction projects in Illinois demands the meticulous
            oversight of a seasoned contractor. Our comprehensive construction management services offer the
            framework for orchestrating every stage of new construction and residential remodeling. We manage site
            preparation, establish dependable timetables, and oversee subcontractors. Project financial management,
            safety protocols, and quality assurance are handled meticulously, and our robust statewide industry
            connections guarantee access to top-notch materials at competitive prices. Our holistic management strategy
            ensures reliable project progression while maintaining essential speed to market.
          `,
            },
          ],
        },
        {
          id: 4,
          title: "Successful Partnership Strategies",
          data: [
            {
              text: `Effectively managing both extensive and minor construction projects in Illinois demands the 
          meticulous oversight of a seasoned contractor. Our comprehensive construction management services offer the
          framework for orchestrating every stage of new construction and residential remodeling. We manage site
          preparation, establish dependable timetables, and oversee subcontractors. Project financial management,
          safety protocols, and quality assurance are handled meticulously, and our robust statewide industry
          connections guarantee access to top-notch materials at competitive prices. Our holistic management strategy
          ensures reliable project progression while maintaining essential speed to market.`,
            },
          ],
        },
      ],
      title: "Transforming Spaces: Experts in Retail and Residential Construction Services bу Fix&Frame",
      text: `
        Creating an inviting ambiance and a captivating design can continually draw devoted customers
        to your business. From the outward appearance to the internal intricacies, every facet of a
        retail establishment mirrors your brand and plays a crucial role in advancing your business growth.
        Understanding the significance of your business in the future is essential for retail development.
      `,
    },
    {
      id: 2,
      images: [
        {
          id: 1,
          image: newsHouseImage5,
        },
        {
          id: 2,
          image: newsHouseImage6,
        },
        {
          id: 3,
          image: newsHouseImage7,
        },
        {
          id: 4,
          image: newsHouseImage8,
        },
      ],
      title: "How To Clean Up Mold Properly",
      text: `
        Mold contamination is a troublesome issue that damages your home and jeopardizes your health. If left
        unaddressed, it can propagate and escalate, particularly for individuals with respiratory ailments.
        Therefore, it's imperative to rid your house of mold promptly.  Here are the steps to follow for
        proper cleaning up of mold:
      `,
      listData: [
        {
          id: 1,
          title: "Protect Yourself",
          data: [
            {
              text: `
                The initial step is to refrain from coming into contact with the mold under any circumstances.
                Ensure you have adequate protective gear to avoid any exposure. Wear old clothing that can be
                disposed of after cleanup and utilize an N-95 mask, gloves, and goggles.
              `,
            },
          ],
        },
        {
          id: 2,
          title: "Seal The Affected Area",
          data: [
            {
              text: `
              The following step is to isolate the room from the rest of the house. This will halt the mold from
              spreading any further. Cover all air vents in the room using plastic sheets and tape. Use plastic
              sheeting to seal off the doorway.
            `,
            },
          ],
        },
        {
          id: 3,
          title: "Clean Moldy Surface",
          data: [
            {
              text: `
              If porous materials like carpet and wall sheathing become moldy, they may need to be
              discarded. For solid surfaces, scrub them with cleaner and a brush until all visible mold is removed.
            `,
            },
          ],
        },
        {
          id: 4,
          title: "Vacuum Up The Debris",
          data: [
            {
              text: `After cleaning the affected area, it's essential to eliminate any remaining mold residue 
              and thoroughly dry the space. Use a vacuum cleaner for a meticulous cleaning and replace the filter.
              Additionally, you may need to cleanse the tank, hose, and other attachments with a mixture of bleach
              and water.`,
            },
          ],
        },
        {
          id: 5,
          title: "Confine",
          data: [
            {
              text: `The last step is to restore and encapsulate the area. To prevent mold recurrence, apply a coat 
              of whitewash and use oil-based primers to paint wooden surfaces. Install fresh insulation in necessary
              areas of the walls.`,
            },
            {
              text: `Keep in mind that the crucial factor in mold prevention is moisture management. If moisture 
              reappears, mold is likely to return as well. Therefore, maintain cleanliness and dryness in your home.
              Additionally, if you're uncertain about handling mold removal yourself, seek advice from professionals
              specializing in mold inspection and remediation.`,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      images: [
        {
          id: 1,
          image: newsHouseImage9,
        },
        {
          id: 2,
          image: newsHouseImage10,
        },
        {
          id: 3,
          image: newsHouseImage3,
        },
        {
          id: 4,
          image: newsHouseImage11,
        },
      ],
      title: "Landscape and Snow Removal",
      text: `
       Welcome to Fix&Frame , your trusted partner for all your landscaping and snow removal needs. We believe that your outdoor spaces deserve the same attention to detail and care as your indoor spaces. Whether it’s creating a lush, vibrant landscape or ensuring safe and snow-free pathways during winter, Fix&Frame Inc is here to make your outdoor dreams a reality.
      `,
      listData: [
        {
          id: 1,
          title: "Landscaping Services:",
          data: [
            {
              text: `Landscaping services involve the design, installation, and maintenance 
              of outdoor spaces to enhance the aesthetics and functionality of a property. `,
            },
          ],
        },
        {
          id: 2,
          title: "Common landscaping services include:",
          data: [
            {
              text: `Lawn Care: Mowing, fertilizing, aeration, and weed control to keep lawns 
              healthy and attractive.`,
            },
            {
              text: `Garden Design and Installation: Creating and planting gardens with 
              flowers, shrubs, and trees.`,
            },
            {
              text: `Hardscaping: Installing patios, walkways, retaining walls, and other 
              non-plant elements.`,
            },
            {
              text: `Irrigation Systems: Designing and installing systems to ensure plants 
              receive adequate water.`,
            },
            {
              text: `Seasonal Clean-Up: Removing leaves, debris, and preparing gardens for 
              different seasons.`,
            },
            {
              text: `Tree and Shrub Care: Pruning, trimming, and treating trees and shrubs to 
              promote growth and health.`,
            },
          ],
        },
        ]
    },

    {
      id: 4,
      images: [
        {
          id: 1,
          image: newsHouseImage12,
        },
        {
          id: 2,
          image: newsHouseImage13,
        },
        {
          id: 3,
          image: newsHouseImage14,
        },
        {
          id: 4,
          image: newsHouseImage15,
        },
      ],
      title: "Building Your Dream Bathroom",
      text: `
        Your bathroom is the one place where you start your morning as well as freshen up at the end of a long tiring
        day. While designing your bathroom, it should be functional and look fabulous. So, here are a few tips
        for you to build your dream bathroom: 
      `,
      listData: [
        {
          id: 1,
          title: `
                  `,
          data: [
            {
              text: `The bathroom is one of the most used rooms in your home where you can relax and unwind after a long day.
          Updating this space or adding a new bathroom is one of the best ways to add value to your home.  
          Team can help you plan, design, and coordinate the perfect bathroom remodel that fits in your budget.
`},
            {
              text: `
                While we understand that renovating your bathroom can be thrilling, it can also be daunting.
                Our team of bathroom renovation specialists is here to guide you through every step of the process.
                We alleviate the stress by assisting with design and layout, as well as handling all necessary permits
                and inspections.
              `,
            },
            {
              text: `
                Our projects encompass master bathrooms, guest bathrooms, powder rooms, half baths, bathtub to shower
                conversions, and complete bathroom renovations from demolition to completion. At Fix&Frame Inc.,
                we possess the expertise and resources to serve as your comprehensive solution for all bathroom
                remodeling needs.
              `,
            },
            {
              text: `
                Your bathroom is one of the most utilized spaces in your home—a place for relaxation and personal
                time. Given its significance, shouldn't it be visually stunning?
              `,
            },
            {
              text: `
                The design of your bathroom complements your home and reflects your lifestyle. Every detail matters,
                from wall colors and tile patterns to flooring and vanities, contributing to the overall ambiance.
                Whether you're planning a new bathroom or renovating an existing one, our design experts are here
                to help you achieve your dream bathroom while optimizing space utilization.
              `,
            },
            {
              text: `
                At Fix&Frame, we are committed to designing and renovating your bathroom according to your style
                and budget preferences. Our range of services includes bathroom design, renovation, plumbing, water
                damage repair, and everything you need to create your ideal bathroom. We strive to provide top-tier
                services to ensure you experience luxury in your own home.
              `,
            },
          ],
        },
      ],
    },

  ];

  const { id } = useParams();

  const findData = newsData.filter((el) => el.id === Number(id));

  return (
    <>
      {findData.length > 0 &&
        findData.map((el: newDataTypes) => {
          return (
            <section className="news-view" key={el.id}>
              <h1 className="visually-hidden">{el.title}</h1>
              <div className="news-view__background" style={backgroundStyle}>
                <div className="container">
                  <h2 className="news-view__background-title">{el.title}</h2>
                  <p className="news-view__background-text">{el.text}</p>
                </div>
              </div>

              <div className="container">
                <ul className="news-view__houses">
                  {el.images.length > 0 &&
                    el.images.map((el: imageTypes) => {
                      return (
                        <li className="news-view__house" key={el.id}>
                          <img
                            height={410}
                            src={el.image}
                            loading="lazy"
                            alt="contact-house-image-1"
                            className="news-view__house-image"
                          />
                        </li>
                      );
                    })}
                </ul>
              </div>

              <div className="container">
                <ul className="news-view__questions">
                  {el.listData.length > 0 &&
                    el.listData.map((el: listDataTypes) => {
                      return (
                        <li className="news-view__question" key={el.id}>
                          <h3 className="news-view__question-title">
                            {el.title}
                          </h3>
                          <ul className="news-view__answers">
                            {el.data.length > 0 &&
                              el.data.map((el: dataTypes) => {
                                return (
                                  <li className="news-view__answer">
                                    <p className="news-view__answer-text">
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
            </section>
          );
        })}
    </>
  );
};

export default NewsView;
