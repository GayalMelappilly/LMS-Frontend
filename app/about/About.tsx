import React from 'react'
import { styles } from '../styles/style'

type Props = {}

const About = (props: Props) => {

  const features = [
    {
      head: 'Comprehensive Course Marketplace',
      content: 'Learnify offers a diverse and growing library of courses across a wide range of subjects and industries. Users can browse and enroll in courses that fit their learning goals, from professional development to personal enrichment. Our platform is designed to cater to different learning preferences, with interactive content, multimedia resources, and assessments that ensure a well-rounded learning experience.'
    },
    {
      head: 'Create and Sell Your Own Courses',
      content: 'Learnify provides a powerful yet user-friendly course creation suite that enables educators, industry experts, and professionals to design and launch their own courses. With our platform, you can monetize your expertise by offering courses for sale, whether to a global audience or specific niches. Our tools support a wide range of content types, including videos, quizzes, downloadable resources, and more, ensuring that your course stands out and engages learners effectively.'
    },
    {
      head: 'Interactive Learning and Engagement',
      content: 'We believe that learning is not a one-way street. At Learnify, we provide a collaborative environment where learners can engage with instructors and peers. Our integrated Q&A feature allows students to ask questions directly within the course environment, fostering discussions, clarifying doubts, and encouraging a deeper understanding of the material. Whether it’s one-on-one interaction or community-driven dialogue, Learnify ensures that the learning experience is interactive and engaging.'
    },
    {
      head: 'Analytics and Insights',
      content: 'Our platform comes equipped with comprehensive analytics and reporting tools, allowing instructors to track student progress, course completion rates, and performance metrics. These insights help educators refine their content, while learners can track their own progress, ensuring continuous improvement and development.'
    },
    {
      head: 'Secure and Scalable Infrastructure',
      content: `Security and scalability are at the core of Learnify’s design. Whether you're managing a small course for a handful of students or scaling up to offer multiple courses to thousands of learners, our platform is built to grow with you. We employ industry-leading security protocols to ensure that your data and transactions are protected at all times.`
    }
  ]

  return (
    <div>
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>About <span className='text-gradient dark:from-yellow-400 dark:to-orange-500 bg-gradient-to-r from-emerald-400 to-cyan-400'>Learnify</span></h1>
      <br />
      <div className='text-[18px] text-black dark:text-white font-Poppins w-[95%] 800px:w-[85%] m-auto'>
        <p className=''>
          At Learnify, we are transforming the landscape of online education by providing a robust and versatile Learning Management System (LMS) designed to cater to the needs of both learners and educators. Our platform is built on the foundation of accessibility, innovation, and collaboration, offering a dynamic learning environment where users can not only consume knowledge but also create and share it.
          <br />
          <br />
          With the increasing demand for flexible and personalized education, Learnify is at the forefront, delivering solutions that empower individuals, educational institutions, and businesses to scale their learning offerings with ease. Whether you are a student seeking to expand your skill set, an educator looking to deliver impactful courses, or a professional aiming to share your expertise, Learnify has the tools to help you succeed.
        </p>
        <br />
        <br />
        <h2>Features : </h2>
        <ul>
          {features.map((item) => (
            <li key={item.head} className='flex flex-col gap-2 my-5 mx-5'>
              <h3 className='font-bold'>• {item.head}</h3>
              <p className='mx-5'>{item.content}</p>
            </li>
          ))}
        </ul>
        <br />
        <h1 className={`${styles.title} 800px:!text-[45px]`}>Why Choose <span className='text-gradient dark:from-yellow-400 dark:to-orange-500 bg-gradient-to-r from-emerald-400 to-cyan-400'>Learnify</span></h1>
        <br />
        <p className='mx-10'>In a world where continuous learning is essential for growth and success, Learnify offers an all-in-one solution for delivering, consuming, and monetizing educational content. Our commitment to innovation and user experience ensures that both learners and educators have the tools they need to thrive. From individual professionals looking to share their knowledge to institutions managing large-scale training programs, Learnify is the platform of choice for modern education.</p>
          <br />
          <br />
        <p className={`${styles.title}text-center 800px:!text-[45px] font-semibold text-green-501`}>Join <span className='text-gradient dark:from-yellow-400 dark:to-orange-500 bg-gradient-to-r from-emerald-400 to-cyan-400'>Learnify</span> and start your journey!</p>
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}

export default About