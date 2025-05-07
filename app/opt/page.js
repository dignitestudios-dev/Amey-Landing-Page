import React from "react";
import Navbar from "../component/home/Navbar";
import Image from "next/image";
import {
  screenshot1,
  screenshot2,
  screenshot3,
  screenshot4,
} from "../asset/export";
import FooterForPolicy from "../component/home/FooterForPolicy";

const Opt = () => {
  return (
    <div className="heroimge">
      <Navbar />
      <div className="flex flex-col p-24 text-white">
        <h2 className="text-[26px] font-bold">Amey Opt-in Process</h2>
        <p>
          Our app's opt-in process ensures secure user authentication by
          incorporating Two-Factor Authentication (2FA). During sign-up, users
          explicitly give consent to receive messages for 2FA purposes on their
          phone number. This is achieved through a clear and transparent flow
          with a combination of consent collection, verification steps, and
          confirmation screens. If users require more information, they can
          access our detailed Privacy Policy to understand how their data is
          handled. Below is an overview of the workflow and individual screens:
        </p>
        <div className="p-10 space-y-7">
          <div>
            <h2 className="text-xl font-bold mb-2">1. Splash Screen</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>
                The first screen introduces users to the app with branding and a
                welcoming interface, signaling the start of the sign-up process.
              </li>
            </ul>
          </div>
          <div className="w-64">
            <Image
              src={screenshot1}
              alt="Splash screen"
              className="rounded-lg shadow"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">2. Sign-Up Screen</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Users enter their full name, email address, phone number, and
                gender.
              </li>
              <li>
                A checkbox with the text:
                <p className="font-bold">
                  "I agree to the Terms of Service and Privacy Policy and
                  authorize the collection and use of my phone number for
                  Two-Factor Authentication."
                </p>
              </li>
              <li>
                Users must check this box to proceed, ensuring clear opt-in
                consent for 2FA.
              </li>
            </ul>
          </div>
          <div className="w-64">
            <Image
              src={screenshot2}
              alt="Splash screen"
              className="rounded-lg shadow"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">
              3. Verify Phone Number Screen
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>
                This screen shows phone number awaiting verification. Users are
                prompted to verify their phone number necessarily
              </li>
            </ul>
          </div>
          <div className="w-64">
            <Image
              src={screenshot3}
              alt="Splash screen"
              className="rounded-lg shadow"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">
              4. Verification Successful Screen
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>
                On successful verification, the screen shows the Number
                Verification screen, ensuring users that their phone number has
                been verified successfully.
              </li>
            </ul>
          </div>
          <div className="w-64">
            <Image
              src={screenshot4}
              alt="Splash screen"
              className="rounded-lg shadow"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-[26px] font-bold">Amey Opt-in Process</h2>
            <p>
              During the sign-up process, the user is explicitly informed about
              the collection and use of their phone number for 2FA. Consent is
              obtained via a mandatory checkbox with clear language.
            </p>
            <p>
              Verification ensures that the provided contact details are
              accurate and accessible.
            </p>
            <p>
              2FA works by sending unique codes to the verified phone number,
              which the user must enter to complete the verification process,
              adding an essential layer of security.
            </p>
            <p>
              For further details, users can review our Privacy Policy, which
              provides comprehensive information on data collection and usage
              practices.
            </p>
          </div>
        </div>
      </div>
      <FooterForPolicy/>
    </div>
  );
};

export default Opt;
