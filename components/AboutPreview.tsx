export default function AboutPreview() {
  return (
    <section className="section">
      <div className="container grid items-center gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl">About Pandit Shubham Sharma</h2>
          <p className="mt-3 text-[color:var(--ink-muted)]">
            With decades of experience in Vedic astrology, palmistry, and spiritual healing, Pandit Shubham Sharma has helped thousands resolve challenges, remove obstacles, and invite prosperity. His remedies are authentic, safe, and aligned with ancient scriptures.
          </p>
          <p className="mt-3 text-[color:var(--ink-muted)]">
            Consult for business blockages, negative energy removal, career guidance, and family harmony. Sessions include horoscope analysis, gemstone advice, and personalized rituals.
          </p>
          <div className="mt-6">
            <a href="/about" className="btn btn-outline">Learn More</a>
          </div>
        </div>
        <div className="card">
          <ul className="space-y-3 text-sm">
            <li>✔ 100% Confidential Consultation</li>
            <li>✔ Trusted by Families & Business Owners</li>
            <li>✔ Vedic and Spiritual Remedies</li>
            <li>✔ Available In-Person and Online</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
