export default function PrivacyPolicy() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
        <p>
          Welcome to Developer Docs. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you visit
          our website.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Information We Collect
        </h2>
        <h3 className="text-xl font-medium mt-6 mb-3">
          Information You Provide
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Name and email address when subscribing to our newsletter</li>
          <li>Comments and feedback you choose to provide</li>
          <li>Account information if you create an account</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-3">
          Information Automatically Collected
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>IP address</li>
          <li>Pages visited and time spent</li>
          <li>Referral sources</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          How We Use Your Information
        </h2>
        <p>We use the collected information to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Improve our documentation and services</li>
          <li>Respond to your inquiries</li>
          <li>Send newsletters and updates (with your consent)</li>
          <li>Analyze website usage patterns</li>
          <li>Maintain website security</li>
        </ul>
      </section>
    </div>
  );
}
