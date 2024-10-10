import React from "react";
import { styles } from "../styles/style";
import { Content } from "next/font/google";

type Props = {};

const Policy = (props: Props) => {

    const termsAndConditions = [
        {
            head: 'Introduction',
            content: 'Welcome to Learnify. By using our platform, you agree to comply with the following terms and conditions. Please read them carefully. If you do not agree, please do not use Learnify.'
        },
        {
            head: ' Account Registration',
            pointContent: [
                `To access Learnify's features, you must create an account and provide accurate information.`,
                'You are responsible for securing your account and must notify us of any unauthorized use.'
            ]
        },
        {
            head: 'Course Creation and Sales',
            pointContent: [
                'Course Creators can upload and sell courses. By doing so, you grant Learnify the right to host and display your content.',
                'Creators retain ownership of their content but must ensure it does not violate any intellectual property or legal rights.',
                'Course Creators earn a percentage of sales, detailed in a separate agreement.'
            ]
        },
        {
            head: 'Payments and Refunds',
            pointContent: [
                'Payments for courses are processed through third-party providers.',
                `Refunds are subject to each Course Creator’s policy, in line with Learnify's refund guidelines.`
            ]
        },
        {
            head: 'User Conduct',
            content: 'By using Learnify, you agree not to :',
            pointContent: [
                'Engage in illegal activities.',
                'Upload harmful, defamatory, or infringing content.',
                'Disrupt or compromise the platform.'
            ]
        },
        {
            head: 'Intellectual Property',
            pointContent: [
                'Course Creators retain ownership of their content. Users may not copy, share, or resell any courses without permission.'
            ]
        },
        {
            head: 'Limitation of Liability',
            pointContent: [
                'Learnify provides the platform "as is" and is not responsible for the accuracy of content or any disputes between users.',
                'We are not liable for any indirect or incidental damages resulting from platform use.'
            ]
        },
        {
            head: 'Termination',
            content: 'We may suspend or terminate accounts for violations of these terms.'
        },
        {
            head: 'Changes to Terms',
            content: 'Learnify may update these terms. Continued use of the platform after changes means you accept the revised terms.'
        },
        {
            head: 'Contact Us',
            content: 'For any questions, please contact us at gayalsunil@gmail.com .'
        }
    ]

    return (
        <div>
            <div className={"w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3"}>
                <h1 className={`${styles.title} !text-start pt-2 text-[35px]`}>
                    Terms and Conditions
                </h1>
                <ul className="w-[95%] px-10" style={{ listStyle: "unset", marginLeft: "15px" }}>
                    {termsAndConditions.map((item, index:number) => (
                        <div key={index} className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
                            <p className="font-semibold text-[25px] my-3">{item.head}</p>
                            <div className="mx-5">
                                {item.content && (
                                    <p>{item.content}</p>
                                )}
                                {item.pointContent && (
                                    <div className="mx-10">
                                        {item.pointContent.map((point, index: number) => (
                                            <li key={index}>{point}</li>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                    ))}
                    <br />
                </ul>
            </div>
        </div>
    );
};

export default Policy;