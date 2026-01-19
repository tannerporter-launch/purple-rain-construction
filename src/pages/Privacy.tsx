import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

const Privacy = () => (
  <Layout>
    <Helmet>
      <title>Privacy Policy | Purple Rain Construction</title>
      <meta name="description" content="Purple Rain Construction's privacy policy explains what information we collect, how we use it, and your rights under applicable privacy laws." />
    </Helmet>
    <section className="py-16 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold">Privacy Policy</h1>
        <p className="text-xl text-primary-foreground/90 mt-4">Purple Rain Construction LLC</p>
      </div>
    </section>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
        <p className="text-muted-foreground">Last updated: January 2026</p>
        
        <p className="text-muted-foreground mt-6">
          Purple Rain Construction LLC ("we," "us," or "our") respects your privacy and is committed to protecting the personal information you share with us through our website.
        </p>
        <p className="text-muted-foreground">
          This Privacy Policy explains what information we collect, how we use it, and your rights under applicable privacy laws.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Information We Collect</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Information You Provide Directly</h3>
        <p className="text-muted-foreground mb-4">When you contact us through our website, we may collect:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Project details or messages you submit</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Information Collected Automatically</h3>
        <p className="text-muted-foreground mb-4">When you visit our website, we may automatically collect certain information, including:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>IP address</li>
          <li>Browser type and device information</li>
          <li>Pages visited and time spent on the site</li>
          <li>Referring website or source</li>
        </ul>
        <p className="text-muted-foreground mt-4">
          This information is collected using cookies, pixels, and similar technologies.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Cookies, Analytics & Advertising Tools</h2>
        <p className="text-muted-foreground mb-4">We may use third-party tools such as:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Google Analytics</li>
          <li>Google Ads</li>
          <li>Meta (Facebook) Pixel</li>
          <li>Embedded forms, maps, or scheduling tools</li>
        </ul>
        <p className="text-muted-foreground mt-4 mb-4">These tools help us:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Understand how visitors use our website</li>
          <li>Improve website performance and user experience</li>
          <li>Measure marketing effectiveness</li>
          <li>Display relevant ads to users who have visited our site</li>
        </ul>
        <p className="text-muted-foreground mt-4">
          You can control or disable cookies through your browser settings. Disabling cookies may affect how some parts of the website function.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">How We Use Your Information</h2>
        <p className="text-muted-foreground mb-4">We use your information to:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Respond to inquiries and requests</li>
          <li>Provide estimates and communicate about potential or active projects</li>
          <li>Improve our website and services</li>
          <li>Conduct marketing and advertising efforts</li>
          <li>Comply with legal or regulatory requirements</li>
        </ul>
        <p className="text-muted-foreground mt-4">
          We do <strong>not</strong> use your information for automated decision-making or profiling that produces legal or significant effects.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Information Sharing</h2>
        <p className="text-muted-foreground mb-4">
          We do <strong>not sell</strong> your personal information.
        </p>
        <p className="text-muted-foreground mb-4">We may share information with trusted service providers who assist us with:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Website hosting and maintenance</li>
          <li>Email and communication services</li>
          <li>Analytics and advertising platforms</li>
        </ul>
        <p className="text-muted-foreground mt-4">
          These providers are authorized to use your information only as necessary to perform services on our behalf.
        </p>
        <p className="text-muted-foreground mt-4">
          We may also disclose information if required by law or to protect our legal rights.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Data Retention</h2>
        <p className="text-muted-foreground mb-4">We retain personal information only for as long as reasonably necessary to:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Respond to inquiries</li>
          <li>Manage business records</li>
          <li>Comply with legal, accounting, or regulatory obligations</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Your Privacy Rights (Oregon Residents)</h2>
        <p className="text-muted-foreground mb-4">Under the Oregon Consumer Privacy Act, you have the right to:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Request access to the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt out of certain data processing, where applicable</li>
        </ul>
        <p className="text-muted-foreground mt-4">
          To exercise your rights, contact us using the information below. We may need to verify your identity before fulfilling requests.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Data Security</h2>
        <p className="text-muted-foreground">
          We take reasonable administrative and technical measures to protect your personal information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Children's Privacy</h2>
        <p className="text-muted-foreground">
          Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Changes to This Privacy Policy</h2>
        <p className="text-muted-foreground">
          We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Contact Us</h2>
        <p className="text-muted-foreground mb-4">
          If you have questions about this Privacy Policy or your personal information, contact us:
        </p>
        <p className="text-muted-foreground">
          <strong>Purple Rain Construction LLC</strong><br />
          (541) 408-0925<br />
          admin@purpleraincs.com
        </p>
      </div>
    </section>
  </Layout>
);

export default Privacy;
