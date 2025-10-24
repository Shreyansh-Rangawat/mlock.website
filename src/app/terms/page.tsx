export const metadata = { title: "Terms & Conditions | Mlock" };

export default function TermsPage() {
  return (
    <main className="bg-white text-black">
      <section className="mx-auto max-w-4xl p-6">
        <h1 className="mb-6 text-center text-3xl font-bold">Terms & Conditions</h1>

        <div className="section mx-auto mb-8 max-w-3xl space-y-2 text-[16px]">
          <h2 className="text-xl font-semibold hover:text-[#18ee18]">Terms of Use</h2>
          <p>1. Acceptance of Terms: By accessing this website, you agree to comply with these terms and conditions.</p>
          <p>2. Use of Website: You agree not to use the website for any unlawful purpose.</p>
          <p>3. Privacy Policy: Please review our Privacy Policy to understand how we handle your information.</p>
          <p>4. Changes to Terms: We reserve the right to modify these terms at any time.</p>
          <p>5. Damage to Luggage: Mlock Station is not responsible for any damage to luggage stored in our facilities.</p>
          <p>6. Theft Disclaimer: As this is the first launch of Mlock Station, we are not responsible for any stolen luggage.</p>
          <p>7. Beta Phase Notice: Our system is not 100% reliable during the initial phase; use our services at your own risk.</p>
        </div>

        <div className="section mx-auto mb-8 max-w-3xl space-y-2 text-[16px]">
          <h2 className="text-xl font-semibold hover:text-[#18ee18]">Payment for Services</h2>
          <p>1. Payment must be made in advance for all services.</p>
          <p>2. Refunds are not applicable once a service has been used.</p>
          <p>3. Payment methods accepted include credit cards and online payment gateways.</p>
          <p>4. Payment must be completed before the door opens.</p>
          <p>5. Payment is calculated per minute.</p>
          <p>6. The system will show the amount per minute based on your selected time.</p>
          <p>7. If your selected time exceeds the limit, extra charges will apply per minute.</p>
          <p>8. Extra charges must be paid before the option to open the door is provided.</p>
          <p>9. If luggage is not received within 4 hours, it will be held by the company and can only be retrieved after paying extra charges.</p>
          <p>10. If you have selected a long storage time, payment in advance is required.</p>
        </div>

        <div className="section mx-auto mb-8 max-w-3xl text-[16px]">
          <h2 className="text-xl font-semibold hover:text-[#18ee18]">Contact Us</h2>
          <p>If you have any questions about these Terms and Conditions, please contact us at support@mlock.com.</p>
        </div>
      </section>
    </main>
  );
}
