import Layout from "@/components/layout/Layout";

const Privacy = () => (
  <Layout>
    <section className="py-16 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold">Privacy Policy</h1>
      </div>
    </section>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
        <p className="text-muted-foreground">Last updated: December 2024</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
        <p className="text-muted-foreground mb-4">When you contact us through our website, we collect your name, email, phone number, and project details to respond to your inquiry.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
        <p className="text-muted-foreground mb-4">We use your information solely to respond to your inquiries, provide estimates, and communicate about your projects.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Information Sharing</h2>
        <p className="text-muted-foreground mb-4">We do not sell or share your personal information with third parties except as necessary to provide our services.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
        <p className="text-muted-foreground">Questions? Call us at (541) 408-0925 or email admin@purpleraincs.com.</p>
      </div>
    </section>
  </Layout>
);

export default Privacy;
