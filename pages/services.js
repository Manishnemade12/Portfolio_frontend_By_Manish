import Head from "next/head";
import Link from "next/link";
import { HiXMark } from "react-icons/hi2";
import { IoMdCheckmark } from "react-icons/io";

export default function services() {
    return <>
        <Head>
            <title>Services</title>
        </Head>

        <div className="servicespage">
            <div className="topservices">
                <div className="container">
                    <h2>My Work / Experience</h2>
                    <p>Home <span>&gt;</span>Services</p>
                </div>
            </div>
            <div className="centerservices">
                <div className="container">
                    <div className="cservicesbox">
                        <div className="csservice exper-card-1">
                            <span>01</span>
                            <div className="exper-header">
                                <img src="/img/website_icon.svg" alt="" />
                                <h2>Open Source Contributor at GSSOC</h2>
                            </div>

                            <ul>
                                <li>Worked on MERN stack projects</li>
                                <li>Contributing to open source initiatives</li>
                                <li>Collaborating with developers worldwide to build scalable web applications</li>
                            </ul>
                        </div>

                        <div className="csservice exper-card-2">
                            <span>02</span>
                            <div className="exper-header">
                                <img src="/img/website_icon.svg" alt="" />
                                <h2>Open Source Connect India</h2>
                            </div>

                            <ul>
                                <li>Developed robust backend solutions</li>
                                <li>Focusing on performance optimization</li>
                                <li>API design and database management for high-traffic applications</li>
                            </ul>
                        </div>

                        <div className="csservice exper-card-3">
                            <span>03</span>
                            <div className="exper-header">
                                <img src="/img/website_icon.svg" alt="" />
                                <h2>Melsa Internship - Software Developer Intern</h2>
                            </div>

                            <ul>
                                <li>Currently working as Software Developer Intern</li>
                                <li>Developing and maintaining admin portal features</li>
                                <li>Designed dynamic forms with advanced validation and user-friendly interfaces</li>
                            </ul>
                        </div>
                    </div>
                    <div className="pricingplansec">
                        <div className="container">
                            <div className="pricingtitles text-center">
                                <h3><img src="/img/chevron_right.png" />
                                    PRICING PLAN
                                </h3>
                                <h2>Pricing My Work</h2>

                            </div>
                            <div className="pricingcards">
                                <div className="pricingcard">
                                    <h4>Lite Plan</h4>
                                    <p>Perfect Price for Individual</p>
                                    <h2>$00.00 <span>Monthly</span></h2>
                                    <Link href='/contact'><button>Get Start Now</button></Link>

                                <h5>Lite Includes:</h5>
                                <ul>
                                    <li><IoMdCheckmark />Powerfull Admin Panel</li>
                                    <li><HiXMark/> Multi-language Support</li>
                                </ul>
                                </div>

                                <div className="pricingcard">
                                    <h4>Premium Plan</h4>
                                    <p>Perfect Price for Individual</p>
                                    <h2>$00.00 <span>Monthly</span></h2>
                                    <Link href='/contact'><button>Get Start Now</button></Link>

                                <h5>Lite Includes:</h5>
                                <ul>
                                    <li><IoMdCheckmark />Powerfull Admin Panel</li>
                                    <li><HiXMark/> Multi-language Support</li>
                                </ul>
                                </div>
                                <div className="pricingcard">
                                    <h4>Life Plan</h4>
                                    <p>Perfect Price for Individual</p>
                                    <h2>$00.00 <span>Monthly</span></h2>
                                    <Link href='/contact'><button>Get Start Now</button></Link>

                                <h5>Lite Includes:</h5>
                                <ul>
                                    <li><IoMdCheckmark />Powerfull Admin Panel</li>
                                    <li><HiXMark/> Multi-language Support</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}