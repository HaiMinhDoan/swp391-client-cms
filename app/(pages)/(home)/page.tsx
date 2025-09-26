import HomeNews from '@/app/(pages)/(home)/_components/news';
import { generalCards, ourSuccess } from '@/app/(pages)/(home)/constants';
import Image from 'next/image';
import { BsArrowRight, BsChevronRight } from 'react-icons/bs';

import './style.css';
import ContactHelp from '@/app/(pages)/(home)/_components/contact-help';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen w-screen overflow-x-hidden">
      <div className="section-header bg-[#46B258] h-[1118px] relative curve-bottom">
        <section className="flex flex-col gap-8 font-bold text-white absolute w-[681px] h-[162px] left-[140px] top-[335px]">
          <div className="text-5xl">
            <span className="text-[#F48C06]">Studying</span>&nbsp;
            <span>Online is how much easier</span>
          </div>
          <div className="font-normal w-[523px] text-2xl leading-[160%]">
            TARA is an interesting platform that will teach you in more an interactive way
          </div>
          <div className="flex gap-[2rem] items-center">
            <button className="bg-[#ffffff30] p-5 rounded-4xl text-2xl cursor-pointer hover:bg-[#ffffff50]">
              Join for free
            </button>

            <div className="font-normal flex items-center gap-[2rem]">
              <Image className="cursor-pointer" src="/btn-play.svg" width={80} height={80} alt="Play"></Image>
              <span className="text-black text-2xl">Watch how it works</span>
            </div>
          </div>
        </section>

        <section className="absolute top-[224px] left-[1088px] w-[544px] h-[892px]">
          <Image src="/landing-img.png" alt="File icon" layout="fill" objectFit="cover" />
        </section>

        <section className="relative top-[354px] left-[883px]">
          <div className="absolute top-7 left-3 bg-white rounded-xl px-4 py-3 shadow-md flex items-center gap-2">
            <div className="bg-green-100 p-2 rounded-lg">icon</div>
            <div>
              <p className="text-gray-800 font-semibold">250k</p>
              <p className="text-gray-500 text-sm">Assisted Student</p>
            </div>
          </div>
          <div className="absolute top-0 size-[70px] left-[742px] bg-[#F25471] rounded-lg p-2 shadow-md">icon</div>
          <div className="absolute top-[254px] left-[514px] bg-white rounded-xl px-4 py-3 shadow-md flex items-center gap-2">
            <div className="bg-orange-100 p-2 rounded-lg">✉</div>
            <div>
              <p className="text-gray-800 font-semibold">Congratulations</p>
              <p className="text-gray-500 text-sm">Your admission completed</p>
            </div>
          </div>
          <div className="absolute top-[390px] left-0 bg-white rounded-xl px-4 py-3 shadow-md flex items-center gap-2">
            <div className="bg-green-100 p-2 rounded-lg">icon</div>
            <div>
              <p className="text-gray-800 font-semibold">User Experience Class</p>
              <p className="text-gray-500 text-sm">Today at 12.00 PM</p>
              <button className="bg-pink-500 text-white px-4 py-2 rounded-full font-medium">Join Now</button>
            </div>
          </div>
        </section>
      </div>
      <h2 className="text-center font-bold text-5xl">Về Tara</h2>
      <section className="flex justify-around gap-10 px-[4rem]">
        {ourSuccess.map((item, index) => (
          <div key={index}>
            <div className="text-center font-light text-8xl bg-gradient-to-r bg-clip-text text-transparent from-[#136CB5] to-[#49BBBD]">
              {item.value}
            </div>
            <div className="text-center font-normal text-3xl">{item.description}</div>
          </div>
        ))}
      </section>
      <section className="mt-[3rem] px-[8rem]">
        <div className="section-title font-bold text-4xl">Giới thiệu chung</div>
        <p className="font-normal text-center text-2xl leading-[180%]">
          Lorem ipsum is one powerful online software suite that combines all the tools needed to run a successful
          school or office.
        </p>
        <div className="flex gap-[2rem] mt-[4rem] items-center justify-between">
          {generalCards.map((item, index) => (
            <div key={index} className="card min-w-[450px] h-[430px]">
              <div className="card-icon text-center">
                <Image className="inline-block" src={item.icon} alt="icon" width={100} height={100} />
              </div>
              <div className="card-title font-medium text-3xl text-center">{item.title}</div>
              <div className="card-content text-center text-2xl">{item.description}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-[3rem] px-[8rem]">
        <div className="section-title font-bold text-4xl">Hồ sơ năng lực</div>
        <p className="font-normal text-center text-2xl leading-[180%]">
          TOTC is a platform that allows educators to create online classes whereby they can store the course materials
          online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with
          feedback all in one place.
        </p>
        <div className="flex gap-[4rem] mt-[4rem] items-center justify-between">
          <div className="relative h-[420px] w-full">
            <Image
              className="bg-image"
              src="/for-instructors.png"
              alt="for-instructors"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute-center text-white w-full flex items-center justify-center flex-col gap-4">
              <div className="text-3xl font-semibold text-center">FOR INSTRUCTORS</div>
              <button className="p-4 border-2 rounded-4xl">Start a class today</button>
            </div>
          </div>
          <div className="relative h-[420px] w-full">
            <Image className="bg-image" src="/for-student.png" alt="for-instructors" layout="fill" objectFit="cover" />
            <div className="absolute-center text-white w-full flex items-center justify-center flex-col gap-4">
              <div className="text-3xl font-semibold text-center">FOR STUDENTS</div>
              <button className="p-4 bg-[#23BDEEE5] rounded-4xl">Enter access code</button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[3rem] px-[8rem] flex gap-[2rem]">
        <div className="w-1/2 p-6 relative">
          <span className="bg-[#33EFA0] rounded-full absolute size-[73px] top-0 left-[-0.3rem]"></span>
          <span className="bg-[#33EFA0] rounded-full absolute size-[30px] bottom-[50%] right-[3rem]"></span>
          <div className="relative text-4xl font-medium leading-[160%]">
            <span className="text-[#2F327D]">Everything you can do in a physical classroom,</span>&nbsp;
            <span className="text-[#33EFA0]">you can do with TOTC</span>
          </div>
          <p className="font-normal leading-[180%] text-2xl mt-4">
            TOTC’s school management software helps traditional and online schools manage scheduling, attendance,
            payments and virtual classrooms all in one secure cloud-based system.
          </p>
          <a className="font-normal inline-block leading-[180%] underline text-2xl mt-8">Learn more</a>
        </div>
        <div className=" w-1/2">
          <div className="relative w-fit p-5">
            <span className="absolute size-[138px] bg-[#23BDEE] rounded-2xl top-[-0.5rem] left-[-0.5rem]"></span>
            <span className="absolute size-[231px] bg-[#33EFA0] rounded-2xl bottom-[-0.5rem] right-[-0.5rem]"></span>
            <Image className="rounded-2xl relative" src="/classroom.jpg" alt="classroom" width={700} height={470} />
            <Image
              className="cursor-pointer absolute-center"
              src="/btn-play.svg"
              width={80}
              height={80}
              alt="Play"
            ></Image>
          </div>
        </div>
      </section>
      <section className="mt-[3rem] px-[8rem]">
        <div className="section-title font-bold text-4xl">Đội ngũ giảng viên</div>
        <p className="font-normal text-center text-2xl leading-[180%]">
          This very extraordinary feature, can make learning activities more efficient
        </p>
        <div className="flex gap-[2rem] mt-[4rem] items-center">
          <div className=" w-1/2">
            <div className="relative w-fit p-5">
              <span className="absolute size-[30px] bg-[#23BDEE] rounded-full top-[-60px] left-[240px]"></span>
              <span className="absolute size-[140px] bg-[#33EFA0] rounded-full top-[-50px] left-[80px]"></span>
              <span className="absolute size-[264px] bg-[#5B61EB] rounded-full bottom-[70px] right-[80px]"></span>
              <span className="absolute size-[30px] bg-[#F56666] rounded-full bottom-[70px] right-[320px]"></span>
              <Image className="rounded-2xl relative" src="/teachers.png" alt="classroom" width={896} height={657} />
              <Image
                className="cursor-pointer absolute-center"
                src="/btn-play.svg"
                width={80}
                height={80}
                alt="Play"
              ></Image>
            </div>
          </div>
          <div className="w-1/2 p-6 relative">
            <div className="relative text-4xl font-medium leading-[160%]">
              <span className="text-[#2F327D]">A</span>&nbsp;
              <span className="text-[#33EFA0]">user interface</span>&nbsp;
              <span className="text-[#2F327D]">designed for the classroom</span>
            </div>
            <ul className="text-[#696984] mt-[4rem]">
              <li className="font-normal text-2xl leading-[160%] p-4">
                Teachers don’t get lost in the grid view and have a dedicated Podium space.
              </li>
              <li className="font-normal text-2xl leading-[160%] p-4">
                TA’s and presenters can be moved to the front of the class.
              </li>
              <li className="font-normal text-2xl leading-[160%] p-4">
                Teachers can easily see all students and class data at one time.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mt-[3rem] px-[8rem] flex gap-[2rem]">
        <div className="w-1/2 py-20 px-36 relative grid items-center">
          <div>
            <div className="relative text-4xl font-medium leading-[160%]">
              <span className="text-[#33EFA0]">Tools</span>&nbsp;
              <span className="text-[#2F327D]">For Teachers And Learners</span>
            </div>
            <p className="font-normal leading-[180%] text-2xl mt-4 text-[#696984]">
              Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout
              assignments in real-time for students to complete and submit.
            </p>
          </div>
        </div>
        <div className=" w-1/2">
          <div className="relative w-fit p-5">
            <Image
              className="rounded-2xl relative animation-right"
              src="/img-12.png"
              alt="tools"
              width={637}
              height={611}
            />
          </div>
        </div>
      </section>
      <section className="mt-[3rem] px-[8rem] flex gap-[2rem]">
        <div className=" w-1/2 flex justify-center items-center">
          <div className="relative w-fit p-5">
            <Image
              className="rounded-2xl relative animation-right"
              src="/quizzes.png"
              alt="quizzes"
              width={617}
              height={651}
            />
          </div>
        </div>
        <div className="w-1/2 py-20 px-36 relative grid items-center">
          <div>
            <div className="relative text-4xl font-medium leading-[160%]">
              <span className="text-[#2F327D]">Assessments,</span>&nbsp;
              <span className="text-[#33EFA0]">Quizzes,</span>&nbsp;
              <span className="text-[#2F327D]">Tests</span>
            </div>
            <p className="font-normal leading-[180%] text-2xl mt-4 text-[#696984]">
              Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the
              online gradebook.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-[3rem] px-[8rem] flex gap-[2rem]">
        <div className="w-1/2 py-20 px-36 relative grid items-center">
          <div>
            <div className="relative text-4xl font-medium leading-[160%]">
              <span className="text-[#33EFA0]">Class Management</span>&nbsp;
              <span className="text-[#2F327D]">Tools for Educators</span>
            </div>
            <p className="font-normal leading-[180%] text-2xl mt-4 text-[#696984]">
              Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the
              Gradebook, teachers can review and grade tests and quizzes in real-time.
            </p>
          </div>
        </div>
        <div className=" w-1/2">
          <div className="relative w-fit p-5">
            <Image
              className="rounded-2xl relative animation-right"
              src="/class-management.png"
              alt="tools"
              width={808}
              height={560}
            />
          </div>
        </div>
      </section>
      <section className="mt-[3rem] px-[8rem] flex gap-[2rem]">
        <div className=" w-1/2">
          <div className="relative w-fit p-5">
            <Image
              className="rounded-2xl relative animation-right"
              src="/discussion.png"
              alt="tools"
              width={755}
              height={500}
            />
          </div>
        </div>
        <div className="w-1/2 py-20 px-36 relative grid items-center">
          <div>
            <div className="relative text-4xl font-medium leading-[160%]">
              <span className="text-[#2F327D]">One-on-One </span>&nbsp;
              <span className="text-[#33EFA0]">Discussions</span>&nbsp;
            </div>
            <p className="font-normal leading-[180%] text-2xl mt-4 text-[#696984]">
              Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center mt-[3rem] px-[8rem] gap-8">
        <button className="font-normal text-2xl leading-[180%] text-[#49BBBD] border-1 p-2 px-6 rounded-3xl">
          See more features
        </button>
      </section>

      <section className="mt-[3rem] px-[8rem] flex gap-[2rem]">
        <div className="w-1/2  relative grid items-center">
          <div>TESTIMONIAL</div>
          <div>What They Say?</div>
          <div>TOTC has got more than 100k positive ratings from our users around the world. </div>
          <div>Some of the students and teachers were greatly helped by the Skilline.</div>
          <div>Are you too? Please give your assessment</div>
          <div>
            <button className=" relative flex items-center gap-4 font-normal text-[#49BBBD] border-[#49BBBD] border-1 p-2 px-6 h-[42px] rounded-[42px]">
              <span className="mr-[45px] leading-[180%]">Write your assessment</span>
              <span className="absolute size-[42px] border-1 border-[#49BBBD] border-r-0 rounded-full grid place-items-center right-0">
                <BsArrowRight className="text-2xl" />
              </span>
            </button>
          </div>
        </div>
        <div className=" w-1/2">
          <div className="relative w-fit p-5">
            <span className="absolute z-10 shadow-2xl size-[40px] grid place-items-center bg-white rounded-full top-1/2 -right-[5px]">
              <BsChevronRight className="text-[#1EA4CE]" />
            </span>
            <Image
              className="rounded-2xl relative animation-right"
              src="/rose.png"
              alt="tools"
              width={350}
              height={600}
            />
          </div>
        </div>
      </section>
      <HomeNews />
      <ContactHelp />
    </div>
  );
}
