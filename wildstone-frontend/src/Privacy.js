import React from "react";

const CONTACT_EMAIL = "bnewhard@wildstonesolutions.com";
const LAST_UPDATED = "June 12, 2026";

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-xl md:text-2xl font-semibold text-zinc-100 mb-3">{title}</h2>
    <div className="text-zinc-300 leading-relaxed space-y-3">{children}</div>
  </section>
);

const Privacy = () => (
  <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex flex-col items-center pt-24 px-4 pb-16">
    <div className="w-full max-w-3xl bg-zinc-800 rounded-xl p-6 md:p-10 shadow-md border border-zinc-700">
      <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-2">Privacy Policy</h1>
      <p className="text-zinc-400 mb-8">Last updated: {LAST_UPDATED}</p>

      <Section title="Overview">
        <p>
          This Privacy Policy describes how WildStone Solutions (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) collects, uses, and protects information when you use the CompactIQ mobile
          application (the &quot;App&quot;). By using the App, you agree to the practices described in
          this policy.
        </p>
      </Section>

      <Section title="Information We Collect">
        <p>We collect the following categories of information to provide and improve the App:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="text-zinc-100 font-medium">Account Information.</span> When you create an
            account, we collect your name, email address, and password. Your password is stored in a
            secured, encrypted form.
          </li>
          <li>
            <span className="text-zinc-100 font-medium">Photos and Files.</span> The App allows you to
            capture or upload photos, documents, and other files as part of your reports. These files
            are stored so they can be associated with your projects and accessed by you and authorized
            members of your organization.
          </li>
          <li>
            <span className="text-zinc-100 font-medium">Location Information.</span> With your
            permission, the App collects location data to tag reports, photos, and field activity with
            where they occurred. You can disable location access at any time in your device settings.
          </li>
        </ul>
      </Section>

      <Section title="How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Create and manage your account and authenticate you.</li>
          <li>Provide core App features such as reporting, file storage, and project tracking.</li>
          <li>Associate photos, files, and reports with the correct project and location.</li>
          <li>Maintain the security, reliability, and performance of the App.</li>
          <li>Respond to your requests and provide customer support.</li>
        </ul>
      </Section>

      <Section title="How We Share Your Information">
        <p>
          We do not sell your personal information. We may share information only in the following
          limited circumstances:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            With other authorized users within your organization who need access to shared projects,
            reports, and files.
          </li>
          <li>
            With service providers (such as cloud hosting and storage providers) who process data on
            our behalf under confidentiality obligations.
          </li>
          <li>
            When required by law, regulation, legal process, or to protect the rights, property, or
            safety of WildStone Solutions, our users, or others.
          </li>
        </ul>
        <p>
          Any third party with whom we share user data is required to provide the same or equal
          protection of that data as stated in this Privacy Policy.
        </p>
      </Section>

      <Section title="Data Retention, Deletion, and Revoking Consent">
        <p>
          We retain your information for as long as your account is active or as needed to provide the
          App and comply with our legal obligations. You may:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="text-zinc-100 font-medium">Revoke consent</span> for location or photo
            access at any time through your device&apos;s settings.
          </li>
          <li>
            <span className="text-zinc-100 font-medium">Request deletion</span> of your account and all
            associated data by emailing us at the address below. We will delete your data within a
            reasonable period, except where retention is required by law.
          </li>
        </ul>
      </Section>

      <Section title="Data Security">
        <p>
          We use reasonable administrative, technical, and physical safeguards designed to protect your
          information. However, no method of transmission or storage is completely secure, and we cannot
          guarantee absolute security.
        </p>
      </Section>

      <Section title="Your Choices and Rights">
        <ul className="list-disc list-inside space-y-2">
          <li>You can review and update your account information within the App.</li>
          <li>You can enable or disable location and photo access through your device settings.</li>
          <li>
            You can request access to, correction of, or deletion of your personal information by
            contacting us.
          </li>
        </ul>
      </Section>

      <Section title="Disclaimer — Results & Field Verification">
        <div className="bg-zinc-900 border border-amber-500/40 rounded-lg p-4">
          <p>
            CompactIQ is a tool intended to assist with structural and compaction testing workflows.
            The data, readings, calculations, and results presented in the App are provided for
            informational and reference purposes only and{" "}
            <span className="text-zinc-100 font-medium">
              do not replace independent field verification of results
            </span>
            . Users are solely responsible for confirming all results through proper field testing,
            inspection, and engineering judgment before relying on them for any decision.
          </p>
          <p className="mt-3">
            The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any
            kind, express or implied. To the fullest extent permitted by law, WildStone Solutions shall
            not be liable for any loss, damage, injury, structural failure, or other consequence arising
            from reliance on data produced by or entered into the App, or from inaccurate, incomplete, or
            unverified results.
          </p>
        </div>
      </Section>

      <Section title="Children's Privacy">
        <p>
          The App is not intended for children under the age of 13, and we do not knowingly collect
          personal information from children under 13.
        </p>
      </Section>

      <Section title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. When we do, we will revise the &quot;Last
          updated&quot; date at the top of this page. Continued use of the App after changes become
          effective constitutes acceptance of the revised policy.
        </p>
      </Section>

      <Section title="Contact Us">
        <p>
          If you have any questions about this Privacy Policy or our data practices, please contact us
          at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-400 hover:text-blue-300 underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </Section>
    </div>
  </div>
);

export default Privacy;
