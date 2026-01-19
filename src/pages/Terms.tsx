import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

const Terms = () => (
  <Layout>
    <Helmet>
      <title>Terms of Service | Purple Rain Construction</title>
      <meta name="description" content="Terms of Service for Purple Rain Construction LLC website. By accessing or using this website, you agree to these terms." />
    </Helmet>
    <section className="py-16 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold">Terms of Service</h1>
        <p className="text-xl text-primary-foreground/90 mt-4">Purple Rain Construction LLC</p>
      </div>
    </section>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
        <p className="text-muted-foreground">Last updated: January 2026</p>
        
        <p className="text-muted-foreground mt-6">
          By accessing or using this website, you agree to the following Terms of Service. If you do not agree, please do not use this website.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Website Use</h2>
        <p className="text-muted-foreground mb-4">
          This website is provided for informational purposes only. You agree to use it in a lawful manner and not to:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Attempt to gain unauthorized access</li>
          <li>Submit false or misleading information</li>
          <li>Interfere with site functionality</li>
          <li>Copy or misuse website content</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">No Construction Contract Formed</h2>
        <p className="text-muted-foreground mb-4">
          Use of this website does <strong>not</strong> create a construction contract or professional relationship.
        </p>
        <p className="text-muted-foreground">
          All construction services are governed solely by <strong>separate written agreements</strong> signed by Purple Rain Construction LLC and the client.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Estimates & Pricing Information</h2>
        <p className="text-muted-foreground mb-4">Any pricing ranges, timelines, or project descriptions on this website are:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>General information only</li>
          <li>Not binding estimates</li>
          <li>Subject to change based on site conditions, scope, permits, materials, and other factors</li>
        </ul>
        <p className="text-muted-foreground mt-4">
          Final pricing and scope are confirmed only through a written contract.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Licensing & Compliance</h2>
        <p className="text-muted-foreground">
          Purple Rain Construction LLC is licensed, bonded, and insured in the State of Oregon.<br />
          <strong>Oregon CCB License #: 247140</strong>
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Intellectual Property</h2>
        <p className="text-muted-foreground">
          All content on this website—including text, images, project photos, logos, and design elements—is the property of Purple Rain Construction LLC and may not be copied, reused, or distributed without written permission.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Third-Party Links & Tools</h2>
        <p className="text-muted-foreground">
          This website may include links to third-party websites or embedded tools. We are not responsible for the content, policies, or practices of those third parties.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Disclaimer of Warranties</h2>
        <p className="text-muted-foreground">
          This website is provided "as is" and "as available." We make no warranties regarding accuracy, completeness, or availability of website content.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Limitation of Liability</h2>
        <p className="text-muted-foreground">
          To the fullest extent permitted by law, Purple Rain Construction LLC shall not be liable for any damages arising from your use of this website.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Governing Law</h2>
        <p className="text-muted-foreground">
          These Terms are governed by the laws of the State of Oregon. Any disputes shall be resolved in Oregon courts with proper jurisdiction, including Deschutes County where applicable.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Changes to These Terms</h2>
        <p className="text-muted-foreground">
          We may update these Terms of Service at any time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Contact Information</h2>
        <p className="text-muted-foreground mb-4">Questions about these Terms?</p>
        <p className="text-muted-foreground">
          <strong>Purple Rain Construction LLC</strong><br />
          (541) 408-0925<br />
          admin@purpleraincs.com
        </p>
      </div>
    </section>
  </Layout>
);

export default Terms;
