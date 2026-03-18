import './Testimonial.css'; 

interface TestimonialProps {
  quote: string;
  emphasis?: string;
  author: string;
}

export default function Testimonial({ 
  quote, 
  emphasis = "", 
  author 
}: TestimonialProps) {
  // Split the quote to apply emphasis styling
  const parts = quote.split(emphasis);
  
  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="testimonial-content">
          <blockquote className="testimonial-quote">
            <p>
              "{parts[0]}
              {emphasis && (
                <>
                  <em>{emphasis}</em>
                  {parts[1]}
                </>
              )}
              "
            </p>
          </blockquote>
          <footer className="testimonial-footer">
            <cite>— {author}</cite>
          </footer>
        </div>
      </div>
    </section>
  );
}