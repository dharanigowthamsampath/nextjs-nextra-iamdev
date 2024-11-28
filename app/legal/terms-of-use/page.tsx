export default function TermsOfUse() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Terms of Use</h1>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Acceptance of Terms
        </h2>
        <p>
          By accessing Developer Docs, you agree to these Terms of Use and all
          applicable laws and regulations.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Intellectual Property
        </h2>
        <p>
          All content on this website, including text, graphics, code examples,
          and documentation, is protected by copyright and other intellectual
          property laws.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Permitted Use</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access and view content for personal, non-commercial use</li>
          <li>Share and link to our content with proper attribution</li>
          <li>Use code examples in your projects (subject to license terms)</li>
        </ul>
      </section>
    </div>
  );
}
