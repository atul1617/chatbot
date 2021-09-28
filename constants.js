// Options the user could type in
const prompts = [
  ["hi", "hey", "hello","HELLO","HEY","HI"],
  ["about buit","tell about buit","TELL ABOUT BUIT","ABOUT BUIT","buit","tell me about buit","TELL ME ABOUT BUIT"],
  ["what makes this institute special"],
  ["what is this college proud of"],
  ["how many undergraduate students attend this institute"],
  ["what is this institute bond rating"],
  ["tell me faculty of buit","facility","FACILITY","faculty of buit","tell me faculty of buit campus"],
  ["which cultural activities are provided by the college","cultural activities","sports event"],
  ["fees structure","fees","FEES","FEES STRUCTURE","fees structure of buit","tell me fees structure of buit"],
  ["bachelor of engineering","btech","b.tech.","be","BE","BTECH","fees structure btech","fees structure be","fees structure of be course","btech fees structure","be fees structure","tell me fees structure of btech","FEES STRUCTURE BTECH","BTECH FEES STRUCTURE","be fees structure"],
  ["mtech","MTECH","fees structure mtech","FEES STRUCTURE MTECH","MTECH FEES STRUCTURE","mtech fees structure","tell me fees structure of mtech"],
  ["features of buit","environment of campus","FEATURES","FEATURES OF BUIT","ENVIRONMENT OF CAMPUS","campus environment"],
  ["mca","MCA","fees structure mca","FEES STRUCTURE MCA","MCA FEES STRUCTURE","mca fees structure","tell me fees structure of mca"],
  ["tell me about btech","tell me about be","about btech","about be","tell me about btech course","tell me about be course","about btech course","about be course","tell me facilities of btech course in buit","tell me facilities of be course in buit","what are facilities of btech course","what are facilities of be course"],
  ["tell about cse","CSE","cse","about cse","ABOUT CSE","tell about cse branch","what are facilities of cse branch"],
  ["tell about mech","MECH","mech","ABOUT MECH","about mech","what are facilities of mech branch"],
  ["tell about IT","IT","it","about it","ABOUT IT","what are facilities of it branch"],
  ["tell about civil","CIVIL","civil","ABOUT CIVIL","about civil","what are facilities of civil branch"],
  ["tell about EC","EC","ec","about ec","ABOUT EC","what are facilities of ec branch"],
  ["tell about placement","placement","how many company visit in your campus","PLACEMENT"],
  ["what", "why", "how", "where", "when"],
  ["tell me admission process in btech","tell me admission process in be","admission process btech","admission process be","ADMISSION PROCESS BTECH","btech admission process","be admission process","admission process of btech course","admission process of be course","admission process btech course","admission process be course","tell me admission process in btech course","tell me admission process in be course"],
  ["tell me admission process in mtech","admission process mtech","ADMISSION PROCESS MTECH","mtech admission process","MTECH ADMISSION PROCESS"],
  ["tell me admission process in mca","admission process mca","ADMISSION PROCESS MCA","mca admission process","MCA ADMISSION PROCESS"],
  [""],
  ["haha","ha","hehe","funny","joke"],
  ["COLLEGE CAMPUS","college campus","college campus","campus","campus","CAMPUS","CAMPUS","buit campus","BUIT CAMPUS","tell me about buit campus","tell about buit campus"],
  ["HELP ME","help me"],
  ["vision","VISION","vision of buit","VISION OF BUIT","buit vision","BUIT VISION"],
  ["mission","MISSION","MISSION OF BUIT","mission of buit","buit mission","BUIT MISSION"],
]

// Possible responses, in corresponding order

const replies = [
  ["HELLO, I AM BUIT ASSISTANT", "HI, I AM BUIT ASSISTANT", "HEY!, I AM BUIT ASSISTANT"],
  ["The University Institute of Technology, (UIT) Barkatullah University, Bhopal (Formerly called College of Engineering) is a self-financing technical institute, established in August 1997. AICTE approved B.E. , M. Tech, MCA courses are offered in this institute. It has 5 undergraduate, 6 postgraduate programs and diploma courses in emerging areas of engineering and technology. University Institute of Technology aims to impart futuristic technical education and instill high patterns of discipline through the dedicated well qualified faculty and supporting staff. "  ],
  [" In our college has top faculty, best knowledge sharing environment, faculty easily approachable, best quality education, senior faculty member, good student interaction between faculty and students, emphasized on personality development, use latest technologies, lovely and charming environment"],
  ["Students who have come out from here have gone to  high profile government or private jobs and the teaching environment here is very good. The latest technology is teach here. "],
  ["1500 students"],
  ["6.4"],
  ["There are central library and department libraries, virtual lab IRTC lab and software lab are there in the college, faculty provide workshop internship, quality of food in canteen is very good, girls & boys hostel are also available, Banking and Post office facilities are also available on the University campus"],
  ["Our institute organised sports events and many cultural events. The largest sports event is sporticaa event, and in cultural events are many like tekniksha, quizzes, science day, IOT model representation and many more."],
  ["Which course do you want to know the fee structure of?"],
  ["Barkatullah University Institute of Technology offers Bachelor’s degree in Engineering to the aspiring students. The B.E.program is offered with multiple specializations. Each of the specializations takes four years to complete. The intake capacity differs for different specializations. All departments in B.E. fees are the same. Total year wise fees 1st year 47775 , 2nd year 42275 , 3rd year 42275 , 4th year 42275 . If you come OBC,SC,ST then the government gives you scholarship."],
  ["Barkatullah University Institute of Technology offers postgraduate courses in the field of Engineering Technology leading to the Degree of Masters of Technology. The MTech program is divided into four semesters (two years) in the case of full time candidates and six semesters (three years) in the case of part time candidates. MTECH 1st year fees 51450, 2nd year fees 50000"],
  ["The institute is surrounded within its lush green campus along with the administrative wing, academic wing, workshop, research laboratories, big sports ground, gymnasium, health centre, yoga centre, dispensary, hostel (boys and girls), bank etc."],
  ["Barkatullah University Institute of Technology also offers Master of Computer Application at the postgraduate level.  The MCA program takes three years (six semesters) to complete the dation period. The total intake capacity is maximum upto 30 seats. MCA 1st year fees 35330, 2nd year fees 29670, 3rd year fees 29670"],
  ["Barkatullah University Institute of Technology offers Bachelor’s degree in Engineering to the aspiring students. The B.E. program is offered with multiple specializations. Each of the specializations takes four years to complete the duration period. The intake capacity differs for different specializations. This is a great course because there are 5 departments in this course like computer science engineering, mechanical engineering, information technology engineering, civil engineering, electronics communication engineering. "],
  ["B.E. C.S.E. is a 4 Years undergraduate course that deeply talks about various important aspects of computers. This course includes computer programming, software, operating system, and computer hardware etc. This branch has very good faculty, current dirctor in BUIT DR. N.K. gaur, h.o.d. of computer science branch is DR. DIVAKAR SINGH, 15-16 teaching faculty in this branch, 1:15.6 faculty student ratio. "],
  ["Bachelor of Engineering or B.E. Mechanical Engineering is a 4-year professional undergraduate program that prepares the students to become mechanical engineers. The candidates who are willing to pursue this course should have completed 10+2 exams with a minimum of 60% aggregate in subjects like Physics, Chemistry, and Mathematics. This branch is very good faculty, current dirctor in BUIT DR. N.K. gaur, h.o.d. of mechanical branch is DR. prabhash jain, 15-16 teaching faculty in this branch, 1:15.6 faculty student ratio. "],
  ["B.E. Information Technology is a 4 year Under Graduate course in the domain of computer science with a specialization in the area of Information Technology and its related aspects. The minimum eligibility criterion which most of the institutes ask for is a score of at least 55% (relaxable for reserved category candidates) at 10+2 or equivalent level. This branch is very good faculty, current dirctor in BUIT DR. N.K. gaur, h.o.d. of information of technology branch is DR. SUNANDA MANKE, 15-16 teaching faculty in this branch, 1:15.6 faculty student ratio."],
  ["B.E. Civil Engineering is a 4 year undergraduate engineering degree course. This course deals with the construction, design and maintenance of structures such as bridges, canals, tunnels, buildings, waterworks, airports etc. This branch is very good faculty, current dirctor in BUIT DR. N.K. gaur, h.o.d. of civil branch is DR. p.k. singh, 15-16 teaching faculty in this branch, 1:15.6 faculty student ratio."],
  ["B.E. Electronics and Communication Engineering deals with the study of design, manufacture, installation and operation of electronic equipment, system, machineries and telecommunication systems. It is similarly curated as other BTech courses considering the duration of the course is 4 years. This branch is very good faculty, current dirctor in BUIT DR. N.K. gaur, h.o.d. of electronics and communication branch is DR. poonam sinha, 15-16 teaching faculty in this branch, 1:15.6 faculty student ratio. "],
  ["Around 60% of the students get placed from our college. The highest salary package offered by a company,including our course is 6 LPA, and the lowest salary package offered is 2.5 LPA. the average salary package offered is 3.5 LPA, \
  TCS and INFOSyS were the top recruitment companies. TCS, Infosys, Tech Mahindra and Wipro visited in BUIT and took technical based exam and the qualified students go through an interview TCS come for a job profile of technical engineer Sam was Infosys. The placement and training cell has given us many good companies with a package of 3.5 LPA to 4 LPA."],
  ["Great question"],
  ["Admission to the B.E. (btech) program is done through NTA-JEE conducted by NATIONAL TESTING AGENCY NEW DELHI. \
  After qualified examination to go DTE(directorate of technical education) state level Counseling. After confirm your seat in BUIT go college campus(IRTC)room and verify your allotment letter and your admission will be done. "],
  ["Barkatullah University Institute of Technology offers postgraduate course in the field of Engineering/ Technology leading to the Degree of Masters of Technology (MTech). \
  The MTech program is divided into four semesters (two years) in the case of full time candidates and six semesters (three years) in the case of part time candidates.For admission to the MTech. program, candidates need to hold a B.E.(BTECH). Degree or pass equivalent examination in appropriate branch with at least 55% marks in the aggregate."],
  ["In addition to the MTech program, Barkatullah University Institute of Technology also offers Master of Computer Application at the postgraduate level. The MCA program takes three years (six semesters) to complete the dation period. The total intake capacity is maximum upto 30 seats. A student who has passed 10+2 examination of secondary school education Board Bhopal with mathematics as one of the subject at 10+2 examinations or its equivalent and have passed BSC, BCOM, BCA with minimum required marks, are considered eligible for admission. The eligibility for admission and Division percentage of aggregate marks required for admission in the first academic semester of M.C.A. course will be as per the directions from Professional Examination Board."],
  ["Please say something :("],
  ["Haha!","Good one!"],
  ["The campus is located with the lush green garden and environment is so much fresh which make it more attractive. The institute was established in the year 1997 which is approved by the all india council for technical education(AICTE). Sound infrastructure is good, centeral library available, boys&girls hostel are available, temple, ground are available, overall BUIT campus is good."],
  ["How can help you, tell me"],
  ["“The central tenet of our vision is commitment to academic excellence, Innovation and creativity, Respect for cultural diversity, individual dignity & worth, social and professional growth of region and the nation.”"],
  ["To develop UIT as “A globally renowned institute for outstanding academic programs that foster active students participation through applied Learning, Research and Social Services.”"]
]

// Random for any other user input

const alternative = [
  "I don't understand :/",
  "please write correct spelling"
]
