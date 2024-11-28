export default function Disclaimer() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Disclaimer</h1>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">General Disclaimer</h2>
        <p>
          The information provided on Developer Docs is for general
          informational purposes only. While we strive for accuracy, we make no
          representations or warranties about the completeness, reliability, or
          suitability of the information.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Code Examples</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Code examples are provided &quot;as is&quot; without warranty of any
            kind
          </li>
          <li>You use code examples at your own risk</li>
          <li>
            We are not responsible for any damages resulting from using provided
            code
          </li>
          <li>Always test code thoroughly before using in production</li>
        </ul>
      </section>
    </div>
  );
}
