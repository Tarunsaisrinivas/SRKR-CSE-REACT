import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FloatButton } from 'antd';

const Research = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div
        className="relative bg-no-repeat bg-cover w-full h-[70vh] bg-gradient-to-r from-black via-black to-black"
        style={{ backgroundImage: "url(/assets/images/8.jpg)" }}
      >
        <div className="absolute left-0 w-full text-center bottom-9">
          <h1 className="text-4xl font-bold text-white shadow-lg">Research</h1>
        </div>
      </div>
      <div className="m-10">
      <div
        className="w-full h-auto p-5 m-auto mt-2 mb-2 rounded-md shadow-2xl shadow-zinc-800"
        data-aos="fade"
      >
        <h1 className="p-4 text-2xl">Research projects</h1>
        <hr className="border-black border-1" />
        <ul className="text-justify list-disc list-inside">
          <li>
            Making “Deep Learning and AI skills” mainstream in India to fulfill
            trilateral needs of Entrepreneurship, Leadingindia.ai, Times of
            India group in association with Bennett University, Royal Academy of
            Engineering, London.Rs 10,00,000.
          </li>
          <li>
            Real Time Monitoring and Analysis of Water Parameters effecting Aqua
            Culture using Machine Learning Techniques”, SRKR Engineering
            College, Bhimavaram. Rs 1,20,000.
          </li>
          <li>
            Dr. R. N. V. Jagan Mohan as Principal Investigator for the project
            titled “Dissecting Autism Trajectories in Longitudinal Electronic
            Health records” funded by DST for an amount of Rs. “29,32,400”.
          </li>
          <li>
            Dr. R. N. V. Jagan Mohan as Principal Investigator for the project
            titled “AICTE Sponsored National Conference on Productivity,
            Quality, Reliability, Optimization and Computational Modeling”
            funded by AICTE for an amount of Rs. “5,00,000”.
          </li>
          <li>
            Dr. K. V. Krishnam Raju as principal investigator for the project
            titled “Design and verification of secure electronic commerce
            protocol using multi Factor authentication” funded by UGC for an
            amount of Rs. “3,00,000”.
          </li>
          <li>
            Dr. R. N. V. Jagan Mohan as a principal investigator for the project
            titled “Machine learning Evolve Predictive Data Analytics” funded by
            DST for an amount of Rs. “1,00,000”.
          </li>
          <li>
            Dr. M. S. V. S. Bhadri Raju as a Principal Investigator for the
            project titled “Analysis of effect of language complexity on
            decipherment issues- A case study using indic scripts” funded by
            AICTE for an amount of Rs. “13,64,706”.
          </li>
          <li>
            Dr. M. S. V. S. Bhadri Raju and Dr. Ch. Someswara Rao as a Co-
            Investigators for the project titled “Development of XML ontology
            tool for STEP-Geometric data” funded by AICTE for an amount of Rs.
            “12,00,000”.
          </li>
          <li>
            Dr. M. S. V. S. Bhadri Raju and Dr. Ch. Someswara Rao as a
            Co-Investigators for the project titled “Development of xml-ontology
            tool for STEP-NC data” funded by AICTE for an amount of
            Rs.”5,35,000”.
          </li>
        </ul>
      </div>
      <div
        className="w-full h-auto p-5 m-auto mt-2 rounded-md shadow-2xl shadow-zinc-800"
        data-aos="fade"
      >
        <h1 className="p-4 text-2xl">MODROBS</h1>
        <hr className="border-black border-1" />
        <ul className="text-justify list-disc list-inside">
          <li>
            Modernization and Removal of Obsolescence Rural(MODROB-Rural) scheme
            has granted for the purpose of INTERNET OF THINGS LAB with worth of
            Rs.967318/- Lakhs funded by AICTE.
          </li>
        </ul>
      </div>
      <div
        className="w-full h-auto p-5 m-auto mt-2 rounded-md shadow-2xl shadow-zinc-800"
        data-aos="fade"
      >
        <h1 className="p-4 text-2xl">Consultancy Projects</h1>
        <hr className="border-black border-1" />
        <ul className="text-justify list-disc list-inside">
        <li>Dr. G. V. Padma Raju have been involved in a consultancy project for an amount of Rs. “9,25,323” for “OpsRamp Projects”, in collaboration with NetEnrich Technologies. [2019- 2020]</li>
        <li>Dr. G. V. Padma Raju have been involved in a consultancy project for an amount of Rs. “4,20,000” for “OpsRamp Projects”, in collaboration with NetEnrich Technologies. [2018- 2019]</li>
        <li>Dr. G. N. V. G. Sirisha have been involved in a consultancy project for an amount of Rs.”6,00,000” for “Abstractive summarization of text Documents “ in collaboration with Exawizards (Japan).[2017-2018]</li>
        <li>Dr. G. N. V. G. Sirisha have been involved in a consultancy project for an amount of Rs.”5,00,000” for “Multi Class Classification of TED Talks as Text Documents” in collaboration with Exawizards (Japan). [2017-2018]</li>
        <li>Dr. M. S. V. S. Bhadri Raju have been involved in a consultancy project for an amount of Rs. “12,00,000” for “Digital Online Assessment” in collaboration with TCS Ion. [2017-2018].</li>
        <li>Dr. G. V. Padma Raju have been involved in a consultancy project for an amount of Rs. “3,85,000” for “OpsRamp Projects”, in collaboration with NetEnrich Technologies. [2017-2018].</li>
        <li>Dr. G. V. Padma Raju have been involved in a consultancy project for an amount of Rs. “4,20,000” for “NetEnrich Projects”, in collaboration with NetEnrich Technologies.[2016-2017]</li>
        <li>Dr. R. N. V. Jagan Mohan have been involved in a consultancy project for an amount of Rs. “1,50,000” for “ Mobile Application with ISO Standards” in collaboration with Yashi Technology.[2016-2017].</li>
        <li>Dr. G. V. Padma Raju have been involved in a consultancy project for an amount of Rs. “2,45,000” for “NetEnrich Projects”, in collaboration with NetEnrich Technologies.[2015-2016].</li>
        </ul>
      </div>
      <div
        className="w-full h-auto p-5 m-auto mt-2 rounded-md shadow-2xl shadow-zinc-800"
        data-aos="fade"
      >
        <h1 className="p-4 text-2xl">Patents</h1>
        <hr className="border-black border-1" />
        <ul className="text-justify list-disc list-inside">
        <li >A patent titled “Internet of Things Controlled Octahedron Frequency Reconfigurable Filtering Antenna for CDAC Applications” with patent number 202041048946 filed with Controller General of Patents, Government of India. [Published]</li>
        <li >A patent titled “Design and Analysis of Rf Mems Switch Configured CSRR Embedded BandstopFilter for Ku Band Applications” with patent number 202141003676 filed with Controller General of Patents, Government of India. [Published]</li>
        <li >A patent titled “Design and Prototype of An Iot Enabled Accident Detection Module for Vehicular CommunicationEnvironment” with patent number 202141008626 filed with Controller General of Patents, Government of India. [Published].</li>
        <li >A patent titled “Novel Interdigital Filtenna with Leaf Shaped Antenna Based ModifiedPolar Transformation For S-Band Applications” with patent number 202141011670 filed with Controller General of Patents, Government of India. [Published]</li>
        <li >A patent titled “Synthesis of Barium Titanate from Barite ores for microstrip Antenna Applications”, with patent number 201941013896 filed with Controller General of Patents, Government of India. [Published]</li>
        <li >A patent titled “Srichakra Antenna for Wideband Applications”, with patent number 201941014142 filed with Controller General of Patents, Government of India. [Published]</li>
        <li >A patent titled “System for detecting early stages of alzheimer’s disease and method employed thereof”, with patent number 201941016188 filed with Controller General of Patents, Government of India. [Published]</li>
        <li >A patent titled “Computer implemented methods for reducing failure rate of recognizing angle-oriented images and system employed thereof” with patent number 201841033688 filed with Controller General of Patents, Government of India. [Published]</li>
        <li >A patent titled “System and method for recognizing angle oriented images” with patent number 20174102699A filed with Controller General of Patents, Government of India. [Published]</li>
        <li >A patent titled “Systems and methods for genomic prediction of oryza sativa”, with patent number 201741015843 filed with Controller General of Patents, Government of India. [Published]</li>
        <li >A patent titled “Methods and systems for prediction of chromosome-by-chromosome genome similarity”, with patent number 201741033425 filed with Controller General of Patents, Government of India.</li>
        <li >A patent titled “E-Agri Clinic-A Field Expert System for Agriculture”, with patent number 2008/CHE/2015A filed with Controller General of Patents, Government of India. [Published]</li>
        <li >A patent titled “An Expert System for Residential Medical Diagnosis” with patent number 704/CHE/2014 filed with Controller General of Patents, Government of India. [Published]</li>
        <li >A project titled “A Frame Work for Step Data Transformation” with patent number 814/CHE/2014A filed with Controller General of Patents, Government of India. [Published]</li>
        </ul>
      </div>
      <FloatButton.BackTop  />
      </div>
    </>
  );
};

export default Research;
