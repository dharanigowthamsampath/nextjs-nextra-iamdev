export default function CookiePolicy() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Cookie Policy</h1>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">What Are Cookies</h2>
        <p>
          Cookies are small text files stored on your device when you visit our
          website. They help us provide and improve our services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Types of Cookies We Use
        </h2>

        <h3 className="text-xl font-medium mt-6 mb-3">Essential Cookies</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Required for website functionality</li>
          <li>Cannot be disabled</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-3">Analytics Cookies</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Help us understand how visitors use our site</li>
          <li>Can be disabled in your browser settings</li>
        </ul>
      </section>
    </div>
  );
}
