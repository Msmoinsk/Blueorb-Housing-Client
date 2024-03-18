import React from 'react'
import SectionHeading from './SectionHeading';
import Projects from './Projects';
import Button from './Button';


const FeaturedProjects: React.FC = () => {
    return (
        <div>
            <div className="flex justify-center font-[600] text-[30px] dark:text-textWhite mb-5">
                <SectionHeading text='Featured Projects' />
            </div>

            <div className="grid sm:grid-cols-3 gap-2">
                <div className="">
                    <Projects projectImageOne="./projects/micl.png" developerLogo="./projects/micl-logo.png" projectName='Woodland Residencies' developerName='MICL' projectAddress="Miraroad" projectCity="Thane" flatTypes='2, 3Bhk' price="1.6 Cr" />
                </div>
                <div>
                    <Projects projectImageOne="./projects/durga.png" developerLogo="./projects/durga-logo.png" projectName='Durga Enclave' developerName='Anmol Developers' projectAddress="Miraroad" projectCity="Thane" flatTypes='1, 2 Bhk' price="60 Lakh" />
                </div>
                <div>
                    <Projects projectImageOne="./projects/durga.png" developerLogo="./projects/durga-logo.png" projectName='Durga Enclave' developerName='Anmol Developers' projectAddress="Miraroad" projectCity="Thane" flatTypes='1, 2 Bhk' price="60 Lakh" />
                </div>
            </div>
            <div className="flex justify-center mt-[40px]">
                <Button text='View all projects' style='w-[200px]' />
            </div>
        </div>
    )
}

export default FeaturedProjects;