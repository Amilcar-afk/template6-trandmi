export interface Testimonial {
  id: string;
  name: string;
  role: string;
  institute: string;
  country: string;
  quote: string;
  avatarSeq: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t-001",
    name: "Dr. Sophie Laurent",
    role: "Medical Director",
    institute: "Clinique Dermatologique Montaigne",
    country: "France",
    quote: "Trandmi formulations have become an integral part of our post-procedure protocols. The concentration levels and ingredient quality are simply unmatched in the European market.",
    avatarSeq: "testimonial-01",
  },
  {
    id: "t-002",
    name: "Dr. Marco Bellini",
    role: "Head Dermatologist",
    institute: "Istituto Dermoclinico Milano",
    country: "Italy",
    quote: "We have been searching for a professional Korean skincare partner that meets European regulatory standards without compromising on formulation integrity. Trandmi delivered exactly that.",
    avatarSeq: "testimonial-02",
  },
  {
    id: "t-003",
    name: "Dr. Anna Weber",
    role: "Clinic Owner",
    institute: "Hautmedizin Berlin",
    country: "Germany",
    quote: "The Skincare Pro line has transformed how we approach in-clinic treatments. Our patients see visible results within weeks, and the professional packaging reinforces our institute's premium positioning.",
    avatarSeq: "testimonial-03",
  },
];