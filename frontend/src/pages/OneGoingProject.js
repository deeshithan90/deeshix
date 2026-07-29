import React from "react";
import source1 from '../images/images/turw.png'
import source2 from '../images/e3logo.png'
import source3 from '../images/images/logo.png'

const OnGoingProject = () => {
    return <div className="On-Going">
        <center>
            <div className="on-1">
                <div>
                    <div className="on-1-1-1">
                        <img src={source1} className="on-1-1" />
                    </div>
                    <div>
                        <p className="spsps">
                            TRUE3 is a next-generation school management system developed to simplify educational operations using artificial intelligence, cloud computing, and intelligent automation. It connects students, parents, teachers, and administrators through a unified platform, improving collaboration, productivity, security, and overall institutional efficiency.
                        </p>
                    </div>
                </div>
            </div>
        </center>
        <center>
            <div className="on-1">
                <div>
                    <div className="on-1-1-1">
                        <img src={source2} className="on-1-1" />
                    </div>
                    <div>
                        <p className="spsps">
                            E3 HRMS is an advanced human resource management platform built to simplify workforce administration through artificial intelligence, intelligent automation, and modern cloud technologies. It streamlines attendance, leave management, payroll support, employee records, and performance tracking while improving productivity, accuracy, and organizational efficiency.
                        </p>
                    </div>
                </div>
            </div>
        </center>

        <center>
            <div className="on-1">
                <div>
                    <div className="on-1-1-1">
                        <img src={source3} className="on-1-1" />
                    </div>
                    <div>
                        <p className="spsps">
                            மழலை is a smart early learning platform designed to make childhood education fun, interactive, and engaging through colorful activities, educational games, storytelling, and modern learning technologies. It helps children develop creativity, language, mathematics, memory, and problem-solving skills in a safe and enjoyable environment.
                        </p>
                    </div>
                </div>
            </div>
        </center>
    </div>
}

export default OnGoingProject;