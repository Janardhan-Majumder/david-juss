"use client";
import Container from "@/components/Container";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="relative min-h-[45vh] md:min-h-[35vh] flex items-center justify-center">
        <Image
          src="/bgs/settings.png"
          alt="hero"
          className="absolute -z-10 object-cover object-center"
          fill
          // width={1000}
          // height={1000}
          sizes="100vw"
        />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-poppins text-heading drop-shadow-sm">
          Terms of Use
        </h1>
      </div>
      <Container>
        <div className="max-w-5xl mx-auto lg:p-6 lg:mt-5">
          <p className="mb-1">
            At Paired, your privacy is a top priority. This Privacy Policy
            describes how we collect, use, disclose, and safeguard your personal
            information when you use our website pairedup.com.
          </p>
          <p className="mb-4">
            At Paired, your privacy is a top priority. This Privacy Policy
            describes how we collect, use, disclose, and safeguard your personal
            information when you use our website pairedup.com.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            1. Information We Collect
          </h2>
          <h3 className="text-xl font-semibold mt-4">
            a. Personal Information
          </h3>
          <ul className="list-disc pl-6">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Payment details for secure transactions</li>
            <li>Service addresses or locations</li>
            <li>Identification for account verification</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">
            b. Non-Personal Information
          </h3>
          <ul className="list-disc pl-6">
            <li>IP address</li>
            <li>Browser type and operating system</li>
            <li>Device type and unique identifiers</li>
            <li>Activity logs, including pages visited and time spent</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">c. Communication Data</h3>
          <p>
            Any information shared between customers and contractors via our
            platform, including project details, messages, and dispute-related
            evidence.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6">
            <li>Account Management</li>
            <li>Service Fulfillment</li>
            <li>Payment Processing</li>
            <li>Communication</li>
            <li>Dispute Resolution</li>
            <li>Platform Improvement</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            3. Sharing Your Information
          </h2>
          <p>
            We only share your data when necessary with contractors, service
            providers, or legal obligations.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            4. Protecting Your Information
          </h2>
          <ul className="list-disc pl-6">
            <li>Encryption with SSL</li>
            <li>Access Restrictions</li>
            <li>Data Monitoring</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            5. Cookies and Tracking Technologies
          </h2>
          <p>
            We use cookies to enhance your browsing experience, remember
            preferences, and collect analytics.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            6. Third-Party Services
          </h2>
          <p>
            Our website may link to third-party websites. Please review their
            privacy policies.
          </p>

          <h2 className="text-2xl font-semibold mt-6">7. Your Rights</h2>
          <p>
            You have the right to access, correct, delete, and restrict
            processing of your data. Contact us at [Insert Email Address].
          </p>

          <h2 className="text-2xl font-semibold mt-6">8. Children&lsquo;s Privacy</h2>
          <p>
            Our services are intended for users aged 18 and above. We do not
            knowingly collect personal information from children under 18.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default page;
