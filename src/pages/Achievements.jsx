import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FloatButton } from "antd";
const Achievements = () => {
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
          <h1 className="text-4xl font-bold text-white shadow-lg">
            Achievements
          </h1>
        </div>
      </div>
      <div className="m-10">
        <div
          className="w-full h-auto p-5 m-auto mt-2 mb-2 rounded-md shadow-2xl shadow-zinc-800"
          data-aos="fade"
        >
          <h1 className="p-4 text-2xl">Faculty Achievements</h1>
          <hr className="border-black border-1" />
          <ul className="text-justify list-disc list-inside">
            <li>
              Smt K Aruna Kumari and Sri D V S R K Raju worked as a mentor for
              Google career readiness Program on Associate Cloud Engineer
              Certification Course.
            </li>
            <li>
              D. Ravi Babu Acted as Microchip Academy Educator @ATMEGA 16.
            </li>
            <li>
              V V Sivaramaraju Acted as reviewer for "Statistics, Optimization &
              Information Computing" journal. Recently reviewed manuscript in
              the month February-2022.
            </li>
            <li>
              V V Sivaramaraju Published a Book as Co-Author for "BIG DATA USING
              HADOOP" in the month June-2022.
            </li>
            <li>
              S Suresh Kumar Qualified the UGC-NET with 99.61 percentile in June
              2019.
            </li>
            <li>
              Dr.R N V Jagan Mohan Acted as reviewer for International Journal
              Papers.
            </li>
            <li>
              Dr.R N V Jagan Mohan Acted as DRC member of phd review panel
              member.
            </li>
            <li>
              Dr.M S V S Badhri Raju was awarded senior member of IEEE in 2018
            </li>
            <li>
              Dr.M S V S Badhri Raju received Best teacher award from Indian
              Society of Technical Education (ISTE), AP & TS section in 2015.
            </li>
            <li>
              Dr G.V.Padma Raju received Sarvothama Acharya award by Bharath
              Nirman Trust, 2019.
            </li>
            <li>
              Dr Chinta Someswara Rao won Best Paper award at International
              conference on Soft Computing & Data Analytics, Springer 2019
            </li>
            <li>
              K D V Pavan Kumar Varma, Assistant Professor department of CSE and
              Ch Ravi Swaroop assistant professor department of cse are act as
              coordinators cisco networking academy (winners-women rock IT).
            </li>
            <li>
              Academy championship (Rank 3) for outstanding performance in Women
              Rock IT 2017-18.
            </li>
            <li>
              Academy championship for outstanding performance in women rock IT
              2019-20.
            </li>
            <li>
              Venkata kiran v acted as a co ordinator for Master Orator
              Championship.
            </li>
          </ul>
        </div>
        <div
          className="w-full h-auto p-5 m-auto mt-2 rounded-md shadow-2xl shadow-zinc-800"
          data-aos="fade"
        >
          <h1 className="p-4 text-2xl">Student Achievements:</h1>
          <hr className="border-black border-1" />
          <ul className="text-justify list-disc list-inside">
            <li>
              Mrs. Amudalapalli Jayasri, a third-year student, has been awarded
              as the winner of Mater Orator Championship Season 5, conducted in
              Hyderabad.
            </li>
            <li>
              Mr.Nakka Sasank,a fourth-year student,has been appointed as the
              National Educational Policy Ambassador from Ap state by ugc
            </li>
            <li>
              Mrs.Thota Varshi,a fourth-year student, has been awarded in IBM
              Hack challenge 2023 conducted in Banglore
            </li>
            <li>
              B Bala Tripura Sundari Won the Kumari Datla Kavitha Saraswathi
              Memorial Gold Medal for The topper From Computer Science
              Engineering(2019-2020).
            </li>
            <li>
              Chennam Chaitanya Won Smt Mantena Sundaramma Memorial “Gold Medal”
              For the Best GATE Ranker among all branches in 2021.
            </li>
            <li>
              Chennam Chaitanya Won Sri.Ch . Venkata Soma Raju Memorial Silver
              Medal and Cash Prize Instituted by his Son Sri Ch.Murali Krishnam
              Raju for the Top Rank (33) in Gate-2021 among all branches in the
              college.
            </li>
            <li>
              Kankatala Srujana Won the Kumari Datla Kavitha Saraswathi Memorial
              Gold Medal for The topper From Computer Science
              Engineering(2018-2019)..
            </li>
            <li>
              Kankatala Srujana Won the Prof. G.J.V Jagannadha Raju (Founder
              Principal of SRKR Engg College) Medal for the Best Outgoing
              student from Computer Science& Engineering Branch 2018-2019.
            </li>
            <li>
              Mohith prasanth kalalahasthi,Thota purushotham,Mohammad
              Mohsin,Y.V.sai.vineeth were stood one of the 36 teams which got
              short-listed for semifinal through ot india.
            </li>
            <li>
              Uday Sai Tyada, Sripada Satya Ramya And Srinivasa Reddy Dwarampudi
              participated in UIF and involved in developing prototypes which
              leads to innovation and entrepreneurship in Stanford university,
              2017.
            </li>
            <li>
              Sriram N S R S V Pavan Kalyan and sri sravya nalla won 1st prize
              in spa SPARDHA 2k19.
            </li>
            <li>
              Oruganti Sarath Chandra and S.lakshmi prathyusha won 3rd prize in
              SPARDHA 2k19.
            </li>
            <li>
              {" "}
              Ashutosh mishra and Ravi Shankar kumar yadav are winners of
              evolution contest club level at SRKR toast master club.
            </li>
            <li>
              Md mahaboobunnisa of cse department is in top 10 of master orator
              championship 2018 and 2019 seasons in a row where over
              3600+students participated across states.
            </li>
            <li>
              Miss. Priyanka Achanta and Apoorva Tavvala of 2007-2011 batch are
              awarded as star performers by TCS during training program
              conducted in 2011.
            </li>
            <li>
              Miss Y.Geetha Prasanthi(2009-2013) stood university topper at the
              end of third year B.Tech and got gold medal and Cash Prize of Rs
              10,000/- by CSI-Vishakapatnam Chapter.
            </li>
            <li>
              Miss Y.Geetha Prasanthi(2009-2013) won best student award by TCS.
            </li>
            <li>
              Miss M.Sravya(2010-2014) stood university topper at the end of
              third year B.Tech and got gold medal and Cash Prize of Rs 10,000/-
              by CSI-Vishakapatnam Chapter.
            </li>
            <li>
              Miss Maneesha Kodali student of 4/4 B.Tech. (CSE) 2012-2016
              attended and presented a research paper in International Space
              Development Conference USA in 2013 and got recognition
              certificate.
            </li>
            <li>
              Miss Maneesha Kodali student of 4/4 B.Tech. (CSE) 2012-2016 stood
              as runners-up in annual International SUNSAT Desing Compition 2015
              conducted by Ohio University USA.
            </li>
          </ul>
        </div>
        <div
          className="w-full h-auto p-5 m-auto mt-2 rounded-md shadow-2xl shadow-zinc-800"
          data-aos="fade"
        >
          <h1 className="p-4 text-2xl">Achievements in Sports:</h1>
          <hr className="border-black border-1" />
          <ul className="text-justify list-disc list-inside">
            <li>
              Penmetsa Rakshitha got selected in JNTUK university team
              selections held in C.R.Reddy college of engineering for south zone
              intercollegiate tournament for badminton among all branches in
              2023
            </li>
            <li>
              Dandu Sahrudaya won Jawaharlal Nehru Technological University
              Kakinada "Runner's Trophy" held in C.R.Reddy College of
              Engineering for Badminton women(2023 - 2024)
            </li>
            <li>
              Penmetsa Rakshitha won the runners trophy in JNTUK central zone
              intercollegiate tournament held in C.R.Reddy college of
              engineering for badminton among all branches in 2023
            </li>
            <li> Won the inter premier Cricket cup in 2022.</li>
            <li>
              {" "}
              Y.G. Srinivas of 3rd year,cse secured Gold Medal in KARATE
              conducted in andhra university,Visakhapatnam on 5-12-2019
            </li>
            <li>
              {" "}
              R.M.S.S Surya of 2rd year,cse secured Bronze Medal in KARATE
              conducted in andhra university,Visakhapatnam on 5-12-2019
            </li>
            <li>
              {" "}
              M.S.S Sai Datta of 4th year,cse Participated in Basketball
              conducted in Hindustan Institute of Technology, Chennai on
              7-12-2019
            </li>
            <li>
              {" "}
              U.A.V Varma of 4th year,cse secured participated in Cricket
              conducted in University of Mysore on 28-11-2019
            </li>
            <li>
              {" "}
              R.M.S.S Surya of 2rd year,cse secured participated in KARATE
              conducted in Sathyabama University, Chennai on 5-12-2019
            </li>
            <li>
              {" "}
              Md. Sabiha of 2rd year,cse Participated in Rope Skipping, South
              Zone University Selections conducted in Adikavi Nannaya
              University, Rajemahendravaram on 27-12-2019.
            </li>
            <li>
              {" "}
              B Govinda Satya Narayana of 2rd year,cse Participated in
              Basketball,conducted in SRM University, Chennai on 22-10-2018.
            </li>
            <li>
              U.A.V Varma of 3rd year,cse attended Cricket Coaching Camp,
              conducted by BCCI on 15-4-2019.
            </li>
            <li>
              {" "}
              U.A.V Varma of 1st year,cse Participated in Cricket, conducted in
              Hindustan Institute of Technology, Chennai on Jan-2017.
            </li>
            <li>
              {" "}
              A.V.Sai Pavan of 3rd year, Participated in Hockey, conducted in
              Alagappa University, Kariakudi on Dec-2016.
            </li>
            <li>
              {" "}
              A Hemanth Varma of 1st year, Participated in Pistol Shooting ,
              conducted in Guru Nanak University, Punjab on Nov-2016.
            </li>
            <li>
              {" "}
              A.V.Sai Pavan of 3rd year,cse won in Hockey conducted in LB
              College, Visakhapatnam in the year 2016.
            </li>
            <li>
              {" "}
              A Snigdha Bruhathi of 4th year,cse won in Volleyball(W) conducted
              in Sri Vishnu College of Pharmacy, Bhimavaram in the year 2016.
            </li>
            <li>
              {" "}
              K Reethika of 4th year,cse won 3rd prize in Volleyball(W)
              conducted in Sri Vishnu College of Pharmacy, Bhimavaram in the
              year 2016.
            </li>
            <li>
              TSP Kalyan of 4th year, secured 3rd prize in Best Physiques(65Kgs)
              conducted in andhra university,Visakhapatnam in the year 2016.
            </li>
            <li>
              {" "}
              U.A.V Varma of 2nd year,cse was Selected to South Zone University
              Cricket Team conducted in andhra university,Visakhapatnam in the
              year 2018.
            </li>
            <li>
              {" "}
              U.A.V Varma of 2nd year,cse participated in Basketball conducted
              in Christ University Bangalore in the year 2017.
            </li>
            <li>
              {" "}
              U.A.V Varma of 2nd year,cse participated in Cricket conducted in
              andhra university,Visakhapatnam in the year 2018.
            </li>
            <li>
              {" "}
              CH Sandeesh of 2nd year,cse participated in Hockey conducted in
              Christ University Bangalore in the year 2018.
            </li>
            <li>
              {" "}
              CH Sandeesh of 3rd year,cse won in Hockey conducted in LB College,
              Visakhapatnam in the year 2017.
            </li>
            <li>
              {" "}
              A.V.Sai Pavan of 4th year,cse won in Hockey conducted in LB
              College, Visakhapatnam in the year 2017.
            </li>
            <li>
              {" "}
              K Raja of 4th year,cse participated in Chess Men conducted in Anna
              University, Chennai in the year 2017.
            </li>
            <li>
              B Devi Naga Krishna Sai Mounika of 4th year,cse won in Chess
              conducted in Samatha Degree College, Visakhapatnam in the year
              2017.
            </li>
            <li>
              D Dedeepya of 4th year,cse won in Chess conducted in Samatha
              Degree College, Visakhapatnam in the year 2017.
            </li>
            <li>
              M Achyutha Sai Teja of 3rd year,cse won in Chess conducted in
              Samatha Degree College, Visakhapatnam in the year 2017.
            </li>
            <li>
              B Manasha of 4th year,cse won in Chess conducted in Samatha Degree
              College, Visakhapatnam in the year 2017.
            </li>
            <li>
              K Raja of 4th year,cse won in Chess Men conducted in Samatha
              Degree College, Visakhapatnam in the year 2017.
            </li>
          </ul>
        </div>
        <FloatButton.BackTop  />
      </div>
    </>
  );
};

export default Achievements;
