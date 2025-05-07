// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

import FooterForPolicy from "../component/home/FooterForPolicy";
import Navbar from "../component/home/Navbar";

export default function page() {
  return (
    <div className="heroimge">
      <Navbar />

      <div className="text-white leading-relaxed p-22">
        <h1 className="text-3xl font-bold mb-4">Amey Terms and Conditions</h1>
        <p className="text-lg font-bold mb-8">Last Updated: [Insert Date]</p>

        <p className="mb-6 ">
          Welcome to Amey! These Terms and Conditions ("Terms") govern your use
          of the Amey Rideshare App and the services provided by Amey
          Technologies Inc. ("Amey," "we," "us," or "our"). By accessing or
          using the Amey App, you agree to be bound by these Terms and our
          Privacy Policy. If you do not agree to these Terms, do not access or
          use the App.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-2">
          1. Acceptance of Terms
        </h2>
        <p className=" mb-6">
          By downloading, installing, or using the App, you agree to these
          Terms, which form a legally binding agreement. We may modify these
          Terms at any time. Changes will be notified via the App or our
          website. Continued use means you accept the changes.
        </p>

        <h2 className="text-2xl font-bold mb-2">2. Description of Services</h2>
        <p className=" mb-2 font-medium">For Riders:</p>
        <ul className="list-disc pl-6 mb-4 ">
          <li>
            Request rides, track trips, and make payments through the App.
          </li>
        </ul>
        <p className=" mb-2 font-medium">For Drivers:</p>
        <ul className="list-disc pl-6 mb-4 ">
          <li>
            Receive ride requests, navigate to locations, and earn payments.
          </li>
        </ul>
        <p className=" mb-6">
          Amey is a platform, not a transportation service. We don’t guarantee
          ride availability or uninterrupted service.
        </p>

        <h2 className="text-2xl font-bold mb-2">3. Eligibility Requirements</h2>
        <p className=" mb-2 font-medium">For All Users:</p>
        <ul className="list-disc pl-6  mb-4">
          <li>Must be 18+ or meet legal age in your location.</li>
          <li>Must not be restricted by law or previously banned from Amey.</li>
        </ul>
        <p className=" mb-2 font-medium">For Drivers:</p>
        <ul className="list-disc pl-6  mb-8">
          <li>Valid driver's license and vehicle registration.</li>
          <li>Vehicle under 6 years old, meets all criteria.</li>
          <li>Active insurance coverage.</li>
          <li>Pass background check, drug test, and psych evaluation.</li>
          <li>Provide carry permit if armed.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">
          4. Account Registration and Security
        </h2>
        <p className=" mb-6">
          Provide accurate info when creating an account. You are responsible
          for your account activity. Notify us if you suspect unauthorized
          access.
        </p>

        <h2 className="text-2xl font-bold mb-2">
          5. Driver Screening and Vetting Process
        </h2>
        <ul className="list-disc pl-6  mb-6">
          <li>Criminal and driving background checks</li>
          <li>Drug testing and psychological evaluations</li>
          <li>Document verification (e.g., carry permits)</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">6. User Conduct and Safety</h2>
        <p className=" mb-2 font-medium">Riders agree to:</p>
        <ul className="list-disc pl-6  mb-4">
          <li>Enter correct locations</li>
          <li>Respect Drivers and vehicles</li>
          <li>Not engage in illegal or abusive behavior</li>
        </ul>
        <p className=" mb-2 font-medium">Drivers agree to:</p>
        <ul className="list-disc pl-6  mb-8">
          <li>Drive safely and follow all laws</li>
          <li>Avoid driving under any impairing substance</li>
          <li>Maintain a clean and professional experience</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">
          7. Payment, Fees, and Refunds
        </h2>
        <p className=" font-medium">For Riders:</p>
        <ul className="list-disc pl-6  mb-2">
          <li>Fares based on time, distance, demand, and vehicle class</li>
          <li>Extra fees may apply (e.g., tolls)</li>
        </ul>
        <p className=" font-medium">For Drivers:</p>
        <ul className="list-disc pl-6  mb-2">
          <li>Earn a portion of fares; Amey takes a service fee</li>
          <li>Tips go 100% to Drivers</li>
        </ul>
        <p className=" mb-6">
          Refunds are not guaranteed and depend on Amey’s discretion. Issues
          must be reported promptly.
        </p>

        <h2 className="text-2xl font-bold mb-2">8. Safety and Liability</h2>
        <p className=" mb-6">
          Amey promotes safety but is not liable for ride incidents. Drivers are
          independent contractors. Riders should verify driver info and can
          share trip details with trusted contacts. Any claims must go to the
          Driver’s insurance provider.
        </p>

        <h2 className="text-2xl font-bold mb-2">
          9. Suspension and Termination of Accounts
        </h2>
        <p className=" mb-6">
          We may suspend or terminate accounts for policy violations, false
          info, or unsafe activity. Drivers may face removal for not passing
          ongoing checks.
        </p>

        <h2 className="text-2xl font-bold mb-2">
          10. Modifications to Services
        </h2>
        <p className=" mb-6">
          Amey may change or suspend services at any time. We will notify you in
          advance where possible.
        </p>

        <h2 className="text-2xl font-bold mb-2">
          11. Dispute Resolution and Arbitration
        </h2>
        <p className=" mb-6">
          Disputes will be resolved through binding arbitration under [Insert
          Governing Arbitration Organization]. You waive jury trials and class
          actions.
        </p>

        <h2 className="text-2xl font-bold mb-2">12. Governing Law</h2>
        <p className=" mb-6">
          These Terms are governed by the laws of [Insert State/Country]. Legal
          matters must be handled in courts of [Insert City, State].
        </p>
      </div>
      <FooterForPolicy/>
    </div>
  );
}
