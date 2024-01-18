import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from './heading';
import Contentgrid from './contentGrid';
import people from '../images/characters.png'
import { HoverImg } from './hoverImg';


const HomePage = () => {
    return (
        <div className='w-full h-full'>
            <div className='relative w-full h-full mb-2'>
                <div className="z-0 relative uppercase font-mono bg-[url('./images/bannerImage.webp')] w-full h-[600px] contrast-50">

                </div>
                <div className='p-10 text-center w-full uppercase items-center font-semibold text-2xl md:text-3xl flex flex-col text-white top-24 md:top-24 absolute'>
                    <div>
                        <h1 className='h-20 sm:text-md md:text-4xl text-white italic'>Driving revenue</h1>
                    </div>
                    <div className='text-center'>
                        through cx transformation &
                        increased brand
                        Loyalty
                    </div>
                    <div className='p-1 font-normal md:text-2xl'>
                        1 - 2 NOVEMBER 2023
                    </div>
                    <div className='p-1 font-normal md:text-2xl'>
                        THE MEYDAN HOTEL, DUBAI
                    </div>

                    <div className='bg-red-400 w-40 h-2'>

                    </div>
                </div>
                <div className='drop-shadow-xl absolute bg-[#5F2BC2] w-[50%] text-center -bottom-14 h-[20%] text-white rounded-2xl p-4 left-[25%]'>
                    <div className='p-1 font-normal md:text-2xl'>
                        1 - 2 NOVEMBER 2023
                    </div>
                    <div className='p-1 font-normal md:text-2xl'>
                        THE MEYDAN HOTEL, DUBAI
                    </div>
                </div>
            </div>
            <Contentgrid>
                <div className='col-span-1'>
                    <img src="https://cxloyaltymena.com/wp-content/uploads/2022/11/ALI01906-768x512.jpg" className='rounded-lg w-30 h-72' />
                </div>
                <section className='md:md:col-span-2 md:md:pl-6'>
                    <div>
                        <Heading h2 heading={"Event Overview"} />
                        <div className='h-full'>
                            A strong customer experience, employee experience and customer loyalty program management are the hallmark of many of the world’s most successful brands – setting the bar for organizations across all industries to prioritize their CX, EX &amp; CL strategies and deliver superior experiences across all channels. It’s no secret that over the past two years, customer expectations have evolved – making CX as one of the biggest differentiators between one’s brand and the competition. Two thirds of organizations globally now compete on customer experience alone with 87% of business leaders having identified CX as their top growth engine.
                        </div>
                    </div>
                </section>
                <section className='md:col-span-3'>
                    <div>
                        <p>
                            The 2nd Annual CX & Loyalty Summit MENA 2023 shifts focus on innovative approaches that the world’s leading organizations are deploying to manage customer interactions and maximize customer value
                        </p>
                        <p>
                            A stellar line-up featuring leading brands and organizations who have established CX, EX &amp; Customer Loyalty at the top of their boardroom agenda will share insights into how digital experiences are transforming the way we work, deliver, transact, communicate, and live in an ever-changing world. With interactive keynote sessions, expert-led panels, and live case studies, we aim to pack value into every minute of the attendee experience, covering the topics that mean the most to the CX industry.
                        </p>
                    </div>
                </section>
            </Contentgrid>
            <Contentgrid classCss="bg-blue-200 pb-5">

                <div className='md:col-span-2 flex flex-col content-between h-full'>
                    <div className='h-full flex justify-evenly'>
                        <HoverImg src="https://cxloyaltymena.com/wp-content/uploads/cx-icons/cx-and-loyalty-industries-covered-banks-w.png" text={"BFSI"} />
                        <HoverImg src="https://cxloyaltymena.com/wp-content/uploads/cx-icons/cx-and-loyalty-industries-covered-banks-w.png" text={"BFSI"} />
                        <HoverImg src="https://cxloyaltymena.com/wp-content/uploads/cx-icons/cx-and-loyalty-industries-covered-banks-w.png" text={"BFSI"} />
                        <HoverImg src="https://cxloyaltymena.com/wp-content/uploads/cx-icons/cx-and-loyalty-industries-covered-banks-w.png" text={"BFSI"} />
                    </div>
                    <div className='h-full text-center'>
                        <Heading h2 heading={"industries covered"} classCss="md:text-center" />
                    </div>
                    <div className='h-full flex justify-evenly'>
                        <HoverImg src="https://cxloyaltymena.com/wp-content/uploads/cx-icons/cx-and-loyalty-industries-covered-banks-w.png" text={"BFSI"} />
                        <HoverImg src="https://cxloyaltymena.com/wp-content/uploads/cx-icons/cx-and-loyalty-industries-covered-banks-w.png" text={"BFSI"} />
                        <HoverImg src="https://cxloyaltymena.com/wp-content/uploads/cx-icons/cx-and-loyalty-industries-covered-banks-w.png" text={"BFSI"} />
                        <HoverImg src="https://cxloyaltymena.com/wp-content/uploads/cx-icons/cx-and-loyalty-industries-covered-banks-w.png" text={"BFSI"} />
                    </div>
                </div>
                <div className='col-span-1 h-full'>
                    <img src={people} className='rounded-lg w-30 h-72' />
                </div>
            </Contentgrid>
            <Contentgrid>
                <div className='col-span-1'>
                    <img src="https://cxloyaltymena.com/wp-content/uploads/2022/11/DSC08999.jpg" className='rounded-lg w-30 h-72' />
                </div>
                <section className='md:col-span-2 md:pl-6'>
                    <div>
                        <Heading h2 heading={"Who You Will Meet"} />
                        <div className='h-full'>
                            <ul className='list-disc px-4 '>
                                <li>	CXOs, VPs, Directors </li>
                                <li>	Chief Marketing Officers</li>
                                <li>	Heads of Customer Experience & UX</li>
                                <li>	Heads of Customer Insights & Analytics</li>
                                <li>	Heads of Digital Transformation</li>
                                <li>	Heads of Customer Loyalty & Brand Loyalty</li>
                                <li>	Heads of Customer Value & Loyalty Partnerships</li>
                                <li>	Heads of Rewards and Loyalty</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </Contentgrid>
            <Contentgrid classCss="bg-blue-200 pb-5">
                <section className='md:col-span-2 md:pr-6'>
                    <div>
                        <Heading h2 heading={"Why Attend"} />
                        <div className='h-full'>
                            The 2nd Annual CX & Loyalty Summit & Awards MENA 2023 will bring together senior industry professionals across all industries and verticals to talk all things CX, EX, Loyalty, Customer Service, Digital Trends and much more. The Summit will explore emerging CX strategies, the latest technologies – Digital, Automation and best practices that will keep your organization at the forefront of CX, EX & CL excellence. Delegates will experience a power-packed agenda consisting of presentations, panel discussions and keynotes from globally renowned speakers, panelists and moderators. At the event, you will have the opportunity to network with and gain knowledge from industry specialists from around the globe and form partnerships with these specialists.
                        </div>
                    </div>
                </section>
                <div className='md:col-span-1 w-full h-full'>
                    <img src="https://cxloyaltymena.com/wp-content/uploads/2022/11/ALI01858-768x512.jpg" className='rounded-lg w-full h-full' />
                </div>
                <section className='md:col-span-3'>
                    <p>At 2nd Annual CX & Loyalty Summit MENA 2023, you’ll hear the most innovative approaches that the world’s leading organizations are deploying to manage customer interactions and maximize customer value. If you are ready to innovate and join the ranks of the biggest innovators while resonating with the following reasons compelling enough to attend, then register today:
                    </p>
                    <ul className='list-disc p-4 '>
                        <li>    Gain Knowledge and Insights from Top Industry Leaders and Experts from across the globe</li>
                        <li>	Network with Industry Peers in a solution-oriented environment</li>
                        <li>	Discuss Significant Partnerships and Collaborations with Industry leaders</li>
                        <li>	Deep Dive into Insights derived from real-time case studies</li>
                        <li>	Build Industry Ecosystem Collaboration to address latest challenges</li>
                    </ul>
                </section>
            </Contentgrid >
            <Contentgrid classCss="pb-5">
                <Heading h2 heading={"Topic Highligts​"} />

                <section className='col-span-3'>

                    <ul className='list-disc p-4 '>
                        <li>	Corporate Culture Focus: Top tips to successfully spearhead CustomerExperience Transformation internally</li>
                        <li>	Brand communities driving Loyalty, Retention & Advocacy - How to transform your loyal customers to brand advocates</li>
                        <li>	Delivering the ‘Unattainable’ CX dream and transformation towards Hyper Personalization</li>
                        <li>	Unveiling how exceptional brands retain their customers and build loyalty</li>
                        <li>	How to simultaneously improve Customer Experience and Operational Excellence to make customers loyal</li>
                        <li>	Using Data, CRM, and Marketing Automation to drive friction-free experiences</li>
                        <li>	Multichannel Focus: Strategies to deliver a world-class customer experience across multiple channels</li>
                        <li>	Driving Customer Loyalty and Top-line revenue through Gamification</li>
                        <li>	Strategies to tailor the multi-channel experience while delivering a consistent Brand promise</li>
                        <li>	Linking Voice of the Employee and Voice of the Customer - A critical key to CX success</li>
                        <li>	Using social media to improve brand perception and shape the Customer Experience</li>
                        <li>	Exploring advances in Customer Analytics and Segmentation – Getting to really know your customer</li>
                        <li>	Ensuring effective complaint handling as the foundation of a Customer Retention Strategy</li>
                        <li>	How loyalty programs boost revenue and how to measure it</li>
                    </ul>
                </section>
            </Contentgrid >
        </div >
    );
};



export default HomePage;
