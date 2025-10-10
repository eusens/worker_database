// app/privacy-policy/page.tsx
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 prose prose-lg">
      {/* Header Image */}
      <div className="w-full mb-8">
        <Image
          src="/images/oil-and-gas.webp"
          alt="Privacy Policy"
          width={1200}
          height={400}
          className="rounded-lg shadow-md object-cover"
        />
      </div>

      <h1>Privacy Policy for Our Site</h1>

      <p>
        If you require any more information or have any questions about our
        privacy policy, please feel free to contact us by email.
      </p>

      <p>
        At <strong>our site</strong> we consider the privacy of our visitors to
        be extremely important. This privacy policy document describes in detail
        the types of personal information collected and recorded by{" "}
        <strong>[our site]</strong> and how we use it.
      </p>

      <h2>Log Files</h2>
      <p>
        Like many other websites, <strong>[our site]</strong> makes use of log
        files. These files log visitors to the site – usually a standard
        procedure for hosting companies and a part of hosting services&apos;
        analytics. The information inside the log files includes internet
        protocol (IP) addresses, browser type, Internet Service Provider (ISP),
        date/time stamp, referring/exit pages, and possibly the number of
        clicks. This information is used to analyze trends, administer the site,
        track users&apos; movement around the site, and gather demographic
        information. IP addresses, and other such information are not linked to
        any information that is personally identifiable.
      </p>

      <h2>Cookies and Web Beacons</h2>
      <p>
        <strong>[our site]</strong> uses cookies to store information about
        visitors&apos; preferences, record user-specific information on which
        pages the site visitor accesses or visits, and to personalize or
        customize our web page content based upon visitors&apos; browser type or
        other information that the visitor sends via their browser.
      </p>

      <h2>DoubleClick DART Cookie</h2>
      <p>
        → Google, as a third party vendor, uses cookies to serve ads on{" "}
        <strong>[our site]</strong>.
      </p>
      <p>
        → Google&apos;s use of the DART cookie enables it to serve ads to our
        site&apos;s visitors based upon their visit to <strong>[our site]</strong> and
        other sites on the Internet.
      </p>
      <p>
        → Users may opt out of the use of the DART cookie by visiting the Google
        ad and content network privacy policy at the following URL –{" "}
        <a href="http://www.google.com/privacy_ads.html">
          http://www.google.com/privacy_ads.html
        </a>
      </p>

      <h2>Our Advertising Partners</h2>
      <p>
        Some of our advertising partners may use cookies and web beacons on our
        site. Our advertising partners include:
      </p>
      <ul>
        <li>Google</li>
        <li>Commission Junction</li>
        <li>Amazon</li>
        <li>Adbrite</li>
        <li>Clickbank</li>
        <li>Yahoo! Publisher Network</li>
        <li>Chitika</li>
        <li>Kontera</li>
      </ul>

      <p>
        <em>
          While each of these advertising partners has their own Privacy Policy
          for their site, an updated and hyperlinked resource is maintained here:{" "}
          <a href="https://www.privacypolicyonline.com/privacy-policy-links/">
            Privacy Policy Links
          </a>
          . You may consult this listing to find the privacy policy for each of
          the advertising partners of <strong>[our site]</strong>.
        </em>
      </p>

      <p>
        These third-party ad servers or ad networks use technology in their
        respective advertisements and links that appear on{" "}
        <strong>[our site]</strong> and which are sent directly to your browser.
        They automatically receive your IP address when this occurs. Other
        technologies (such as cookies, JavaScript, or Web Beacons) may also be
        used by our site&apos;s third-party ad networks to measure the
        effectiveness of their advertising campaigns and/or to personalize the
        advertising content that you see on the site.
      </p>

      <p>
        <strong>[our site]</strong> has no access to or control over these
        cookies that are used by third-party advertisers.
      </p>

      <h2>Third Party Privacy Policies</h2>
      <p>
        You should consult the respective privacy policies of these third-party
        ad servers for more detailed information on their practices as well as
        for instructions about how to opt-out of certain practices.{" "}
        <strong>[our site]</strong>’s privacy policy does not apply to, and
        we cannot control the activities of, such other advertisers or websites.
        You may find a comprehensive listing of these privacy policies and their
        links here:{" "}
        <a
          href="https://www.privacypolicyonline.com/privacy-policy-links/"
          title="Privacy Policy Links"
        >
          Privacy Policy Links
        </a>
        .
      </p>
      <p>
        If you wish to disable cookies, you may do so through your individual
        browser options. More detailed information about cookie management with
        specific web browsers can be found at the browsers’ respective websites.{" "}
        <a href="https://www.privacypolicyonline.com/what-are-cookies/">
          What Are Cookies?
        </a>
      </p>

      <h2>Children’s Information</h2>
      <p>
        We believe it is important to provide added protection for children
        online. We encourage parents and guardians to spend time online with
        their children to observe, participate in, and/or monitor and guide
        their online activity.
      </p>
      <p>
        <strong>[our site]</strong> does not knowingly collect any
        personally identifiable information from children under the age of 13.
        If a parent or guardian believes that <strong>[our site]</strong>{" "}
        has in its database the personally-identifiable information of a child
        under the age of 13, please contact us immediately (using the contact in
        the first paragraph) and we will use our best efforts to promptly remove
        such information from our records.
      </p>

      <h2>Online Privacy Policy Only</h2>
      <p>
        This privacy policy applies only to our online activities and is valid
        for visitors to our website regarding information shared and/or
        collected there. This policy does not apply to any information collected
        offline or via channels other than this website.
      </p>

      <h2>Consent</h2>
      <p>
        By using our website, you hereby consent to our privacy policy and agree
        to its terms.
      </p>

      <h2>Update</h2>
      <p>
        This Privacy Policy was last updated on: <strong>Nov 1st, 2019</strong>.
        Should we update, amend or make any changes to our privacy policy, those
        changes will be posted here.
      </p>
    </div>
  );
}