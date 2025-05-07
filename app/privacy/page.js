import React from "react";
import Navbar from "../component/home/Navbar";
import FooterForPolicy from "../component/home/FooterForPolicy";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

export default function page() {
  return (
    <div className="heroimge  text-white">
      {/* <Navbar /> */}
      <Navbar />
      <div className="  p-22 ">
        <h1 className="text-4xl font-bold mb-6">Amey Privacy Policy</h1>
        <p className="text-lg font-bold mb-8">Effective Date: [Insert Date]</p>

        <p className="mb-4">
          At Amey, your privacy is important to us. This Privacy Policy explains
          how Amey Technologies Inc. (“Amey,” “we,” “us,” or “our”) collects,
          uses, shares, and protects your personal information when you use the
          Amey Rideshare App (the “App”) and related services.
        </p>

        <p className="mb-6">
          By accessing or using the App, you agree to this Privacy Policy. If
          you do not agree, please discontinue your use of the App and Services.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-2">
          1. Information We Collect
        </h2>
        <p className="mb-2 font-bold">Information You Provide to Us</p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <span className="font-semibold"> Account Information:</span> name,
            email, phone, payment details, profile picture.
          </li>
          <li>
            <span className="font-semibold"> Driver Information:</span> license,
            vehicle registration, insurance, background checks, drug and
            psychological evaluations. Armed drivers must provide carry permits.
          </li>
        </ul>

        <p className="mb-2 font-bold">Information We Collect Automatically</p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Location Data: real-time GPS for rides, navigation, and safety.
          </li>
          <li>
            Usage Data: app interaction data like pages viewed and time spent.
          </li>
          <li>Device Information: device IDs, OS info, analytics.</li>
        </ul>

        <p className="mb-2 font-bold">Information from Third Parties</p>
        <ul className="list-disc pl-6 mb-8">
          <li>Background Check Providers</li>
          <li>Payment Processors (e.g., payment confirmations, chargebacks)</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 mb-8">
          <li>To provide and manage the platform</li>
          <li>For safety and screening (background, drug, and psych checks)</li>
          <li>To personalize your experience</li>
          <li>To send updates and respond to support inquiries</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">
          3. How We Share Your Information
        </h2>
        <ul className="list-disc pl-6 mb-8">
          <li>
            <span className="font-semibold">Drivers & Riders: </span> for trip
            coordination
          </li>
          <li>
            <span className="font-bold">Service Providers: </span> background
            checks, support, payments
          </li>
          <li>
            <span className="font-bold">Legal Authorities: </span> to comply
            with laws or court orders
          </li>
          <li>
            <span className="font-bold">Business Transactions: </span> during
            mergers or acquisitions
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">
          4. Your Choices and Controls
        </h2>
        <ul className="list-disc pl-6 mb-8">
          <li>Update profile in the App</li>
          <li>Disable location in device settings</li>
          <li>Unsubscribe from marketing in emails/App settings</li>
          <li>Request account deletion via [Insert Contact Information]</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">5. Security Measures</h2>
        <ul className="list-disc pl-6 mb-8">
          <li>Encryption of payment data</li>
          <li>Secure storage systems</li>
          <li>Monitoring for unauthorized access</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">6. Data Retention</h2>
        <p className="mb-6">
          We retain data as long as necessary to fulfill services and legal
          requirements. When not needed, we delete or anonymize it.
        </p>

        <h2 className="text-2xl font-bold mb-2">7. Children’s Privacy</h2>
        <p className="mb-6">
          The App is not for users under 18. We do not knowingly collect data
          from minors. If we find out, we will delete it.
        </p>

        <h2 className="text-2xl font-bold mb-2">8. International Users</h2>
        <p className="mb-6">
          If you are outside the US, your data may be transferred to the US or
          other countries where we operate. By using the App, you consent to
          this.
        </p>

        <h2 className="text-2xl font-bold mb-2">
          9. Changes to This Privacy Policy
        </h2>
        <p className="mb-6">
          We may update this policy and will post changes in the App or website.
          Continued use after updates means you accept the changes.
        </p>

        <h2 className="text-2xl font-bold mb-2">10. Contact Us</h2>
        <p>If you have questions, contact us at:</p>
        <ul className="list-none pl-4 mt-2">
          <li>
            <strong>The Amey App</strong>
          </li>
          <li>[Insert Contact Address]</li>
          <li>[Insert Email Address]</li>
          <li>[Insert Phone Number]</li>
        </ul>
      </div>
      <FooterForPolicy />
    </div>
  );
}
