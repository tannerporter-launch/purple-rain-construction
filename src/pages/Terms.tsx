import Layout from "@/components/layout/Layout";

const Terms = () => (
  <Layout>
    <section className="py-16 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold">Terms of Service</h1>
      </div>
    </section>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
        <p className="text-muted-foreground">Last updated: December 2024</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Services</h2>
        <p className="text-muted-foreground mb-4">Purple Rain Construction provides deck building, remodeling, and snow removal services in Central Oregon. All work is performed according to agreed-upon contracts.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Estimates & Pricing</h2>
        <p className="text-muted-foreground mb-4">Estimates are provided after consultation and site assessment. Final pricing is confirmed in written contracts before work begins.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Licensing</h2>
        <p className="text-muted-foreground mb-4">Purple Rain Construction is licensed (CCB #247140), bonded, and insured in the State of Oregon.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
        <p className="text-muted-foreground">Questions? Call us at 541-408-2712.</p>
      </div>
    </section>
  </Layout>
);

export default Terms;
